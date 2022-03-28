import prompt_sync from 'prompt-sync';
import { defaultBuyButtonXPath, defaultEventURL, defaultNumberOfQueues } from './constants';
import { multipleQueueing } from './services/ticketQueue';
import { stringIsAValidUrl } from './services/validation';

(() => {
  const prompt = prompt_sync();

  let eventURL = prompt('Enter the Event Url ');

  if (!stringIsAValidUrl(eventURL)) {
    console.log(`Entered eventUrl invalid, setting it to ${defaultEventURL}`);
    eventURL = defaultEventURL;
  }

  const buyButtonXPath = prompt('Enter the Buy Button XPATH: ') || defaultBuyButtonXPath;

  let numberOfQueues = parseInt(prompt('Enter the Number of Queues: '));

  if (!Number.isFinite(numberOfQueues)) {
    console.log(`Number of Queues entered invalid, setting it to ${defaultNumberOfQueues}`);
    numberOfQueues = defaultNumberOfQueues;
  }

  multipleQueueing({
    buyButtonXPath,
    eventURL,
    numberOfQueues,
  });
})();
