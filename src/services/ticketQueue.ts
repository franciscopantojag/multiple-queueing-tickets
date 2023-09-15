import { By } from 'selenium-webdriver';
import { getDriver } from '../adapters/webScrapper';
import { BUY_BUTTON_CSS, EVENT_URL, NUMBER_OF_QUEUES, QUEUE_URL, QUEUEING_OPTIONS, USE_QUEUE_URL } from '../constants';

interface EnterQueueOptions {
  eventURL: string;
  buyButtonCSS: string;
  queueURL?: string | null;
  useQueueURL?: boolean;
}

const enterQueue = async ({ eventURL, buyButtonCSS, queueURL, useQueueURL }: EnterQueueOptions) => {
  const driver = getDriver();
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

export const multipleQueueing = (options: MultipleQueueingOptions = QUEUEING_OPTIONS) => {
  const {
    numberOfQueues = NUMBER_OF_QUEUES,
    eventURL = EVENT_URL,
    buyButtonCSS = BUY_BUTTON_CSS,
    queueURL = QUEUE_URL,
    useQueueURL = USE_QUEUE_URL,
  } = options;

  const range = [...Array(numberOfQueues).keys()];

  range.forEach((n) => {
    console.log(`Opening browser ${n + 1}`);
    enterQueue({ eventURL, buyButtonCSS, queueURL, useQueueURL });
  });
};
