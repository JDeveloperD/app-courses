import dayjs from 'dayjs';
import 'dayjs/locale/es-mx';
import { Time } from '@features/course/domain/Course';

dayjs.locale('es-mx');

export function formatTime(time: Time): string {
  let format: string = '';

  if (time.hour > 0) {
    format += `${time.hour}h `;
  }

  format += `${time.minute}m ${time.second}s`;

  return format;
}

export function formatTimeDefault (time: Time): string {
  let format: string = '';

  if (time.hour > 0) {
    format += `${time.hour}:`;
  }

  format += `${time.minute}:${time.second}`;
  return format;
}

export function formatTimeO (date: Date) {
  return dayjs(date).format('MMM DD, YYYY');
}
