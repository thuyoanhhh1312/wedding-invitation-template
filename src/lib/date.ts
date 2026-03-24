export interface InvitationDateParts {
  day: string;
  month: string;
  year: string;
}

export interface InvitationEventDate {
  isoDate: string;
  displayShort: string;
  displayLong: string;
  weekdayLabel: string;
  lunarNote?: string;
  digits: InvitationDateParts;
}

function pad(value: number) {
  return String(value).padStart(2, '0');
}

function getVietnameseWeekday(date: Date) {
  const weekdays = [
    'Chủ Nhật',
    'Thứ Hai',
    'Thứ Ba',
    'Thứ Tư',
    'Thứ Năm',
    'Thứ Sáu',
    'Thứ Bảy',
  ];

  return weekdays[date.getDay()];
}

export function createInvitationEventDate(isoDate: string, lunarNote?: string): InvitationEventDate {
  const date = new Date(`${isoDate}T12:00:00`);
  const day = pad(date.getDate());
  const month = pad(date.getMonth() + 1);
  const year = String(date.getFullYear());
  const weekdayLabel = getVietnameseWeekday(date);

  return {
    isoDate,
    displayShort: `${day}.${month}.${year}`,
    displayLong: `${weekdayLabel}, ${day}/${month}/${year}`,
    weekdayLabel,
    lunarNote,
    digits: {
      day,
      month,
      year: year.slice(-2),
    },
  };
}