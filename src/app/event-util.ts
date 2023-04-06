import { EventInput } from '@fullcalendar/core';

let eventGuid = 0;
const TODAY_STR = new Date().toISOString().replace(/T.*$/, ''); // YYYY-MM-DD of today

export const INITIAL_EVENTS: EventInput[] = [
  {
    id: createEventId(),
    title: '죽음을 지배하는 자.. 진호성',
    start: '2023-04-05',
    end: TODAY_STR
  },
  {
    id: createEventId(),
    title: '캐리비안의 ☆미스포차☆ 오영진',
    start: '2023-04-04',

  },
  {
    id: createEventId(),
    title: '"전영후"',
    start: TODAY_STR,

  }

];

export function createEventId() {
    console.log(TODAY_STR);
  return String(eventGuid++);
}