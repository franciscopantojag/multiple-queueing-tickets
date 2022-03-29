import { By } from 'selenium-webdriver';
import { startDriver } from '../adapters/webScrapper';
import {
  defaultBuyButtonCSS,
  defaultEventURL,
  defaultNumberOfQueues,
  defaultQueueURL,
  defaultMultipleQueueingOptions,
  defaultUseQueueURL,
} from '../constants';

interface EnterQueueOptions {
  eventURL: string;
  buyButtonCSS: string;
  queueURL?: string;
  useQueueURL?: boolean;
}

const enterQueue = async ({ eventURL, buyButtonCSS, queueURL, useQueueURL }: EnterQueueOptions) => {
  const driver = await startDriver();
  if (queueURL && useQueueURL) {
    await driver.get(queueURL);
    return driver.navigate().refresh();
  }
  await driver.get(eventURL);
  const button = await driver.findElement(By.css(buyButtonCSS));
  return button.click();
};

interface MultipleQueueingOptions extends Partial<EnterQueueOptions> {
  numberOfQueues?: number;
}

export const multipleQueueing = (options: MultipleQueueingOptions = defaultMultipleQueueingOptions) => {
  const {
    numberOfQueues = defaultNumberOfQueues,
    eventURL = defaultEventURL,
    buyButtonCSS = defaultBuyButtonCSS,
    queueURL = defaultQueueURL,
    useQueueURL = defaultUseQueueURL,
  } = options;

  const range = [...Array(numberOfQueues).keys()];

  range.forEach((n) => {
    console.log(`Opening browser ${n + 1}`);
    enterQueue({ eventURL, buyButtonCSS, queueURL, useQueueURL });
  });
};
