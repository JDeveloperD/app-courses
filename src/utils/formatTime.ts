import { Time } from '@features/course/domain/Course';

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
