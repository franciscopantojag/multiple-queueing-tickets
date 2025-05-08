export const NUMBER_OF_QUEUES = 50;
export const EVENT_URL = 'https://www.ticketmaster.pe/event/bad-bunny-debi-tirar-mas-fotos-world-tour-2026';
export const BUY_BUTTON_XPATH =
  '//*[@id="component-4319d70d-5e30-42c1-bcb2-7ff602f44d76"]/div/div/div/div/div/div/div/div/div[3]/a';
export const QUEUE_URL =
  'https://www.ticketmaster.pe/event/bad-bunny-debi-tirar-mas-fotos-world-tour-2026-venta-bbva-563902';
export const USE_QUEUE_URL = true;

export const QUEUEING_OPTIONS = {
  numberOfQueues: NUMBER_OF_QUEUES,
  eventURL: EVENT_URL,
  buyButtonXPath: BUY_BUTTON_XPATH,
  queueURL: QUEUE_URL,
  useQueueURL: USE_QUEUE_URL,
};
