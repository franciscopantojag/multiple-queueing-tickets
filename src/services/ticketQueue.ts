import { By } from 'selenium-webdriver';
import { startDriver } from '../adapters/webScrapper';
import {
  defaultBuyButtonXPath,
  defaultEventURL,
  defaultNumberOfQueues,
  defaultQueueURL,
  defaultMultipleQueueingOptions,
  defaultUseQueueURL,
} from '../constants';

interface EnterQueueOptions {
  eventURL: string;
  buyButtonXPath: string;
  queueURL?: string;
  useQueueURL?: boolean;
}

const enterQueue = async ({ eventURL, buyButtonXPath, queueURL, useQueueURL }: EnterQueueOptions) => {
  const driver = await startDriver();
  if (queueURL && useQueueURL) {
    await driver.get(queueURL);
    return driver.navigate().refresh();
  }
  await driver.get(eventURL);
  const button = await driver.findElement(By.xpath(buyButtonXPath));
  return button.click();
};

interface MultipleQueueingOptions {
  eventURL?: string;
  buyButtonXPath?: string;
  numberOfQueues?: number;
  queueURL?: string;
  useQueueURL?: boolean;
}

export const multipleQueueing = (options: MultipleQueueingOptions = defaultMultipleQueueingOptions) => {
  const {
    numberOfQueues = defaultNumberOfQueues,
    eventURL = defaultEventURL,
    buyButtonXPath = defaultBuyButtonXPath,
    queueURL = defaultQueueURL,
    useQueueURL = defaultUseQueueURL,
  } = options;

  const range = [...Array(numberOfQueues).keys()];

  range.forEach((n) => {
    console.log(`Opening browser ${n + 1}`);
    enterQueue({ eventURL, buyButtonXPath, queueURL, useQueueURL });
  });
};
