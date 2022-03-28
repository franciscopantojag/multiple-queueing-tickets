import css2xpath from 'css2xpath';

export const defaultNumberOfQueues = 100;
export const defaultEventURL = 'https://teleticket.com.pe/daddy-yankee-enlima2022';
const defaultBuyButtonCssSelector = "[id='choose-tickets-section text-center'] > a:nth-child(2)";
export const defaultBuyButtonXPath = css2xpath(defaultBuyButtonCssSelector);
export const defaultQueueURL = 'https://queue.teleticket.com.pe/?c=puntoticket&e=ics014&t_cal=1&t_ct=2';
export const defaultUseQueueURL = false;

export const defaultMultipleQueueingOptions = {
  numberOfQueues: defaultNumberOfQueues,
  eventURL: defaultEventURL,
  buyButtonXPath: defaultBuyButtonXPath,
  queueURL: defaultQueueURL,
  useQueueURL: defaultUseQueueURL,
};
