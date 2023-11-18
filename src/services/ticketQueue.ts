import { By } from 'selenium-webdriver';
import { getDriver } from '../adapters/webScrapper';
import {
  BUY_BUTTON_XPATH,
  EVENT_URL,
  NUMBER_OF_QUEUES,
  QUEUE_URL,
  QUEUEING_OPTIONS,
  USE_QUEUE_URL,
} from '../constants';

interface JoinQueueOptions {
  eventURL: string;
  buyButtonXPath: string;
  queueURL?: string | null;
  useQueueURL?: boolean;
}

const joinQueue = async ({ eventURL, buyButtonXPath, queueURL, useQueueURL }: JoinQueueOptions) => {
  const driver = getDriver();
  if (queueURL && useQueueURL) {
    await driver.get(queueURL);
    return driver.navigate().refresh();
  }
  await driver.get(eventURL);
  const button = await driver.findElement(By.xpath(buyButtonXPath));
  return button.click();
};

interface MultipleQueueingOptions extends Partial<JoinQueueOptions> {
  numberOfQueues?: number;
}

export const multipleQueueing = (options: MultipleQueueingOptions = QUEUEING_OPTIONS) => {
  const {
    numberOfQueues = NUMBER_OF_QUEUES,
    eventURL = EVENT_URL,
    buyButtonXPath = BUY_BUTTON_XPATH,
    queueURL = QUEUE_URL,
    useQueueURL = USE_QUEUE_URL,
  } = options;

  const range = [...Array(numberOfQueues).keys()];

  range.forEach((n) => {
    console.log(`Opening browser ${n + 1}`);
    joinQueue({ eventURL, buyButtonXPath, queueURL, useQueueURL });
  });
};
