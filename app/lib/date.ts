export type DateInput = string | number | Date;

const DEFAULT_LOCALE = "en-US";
const DEFAULT_TIMEZONE = "UTC";

export function formatShortDate(date: DateInput) {
  const d = date instanceof Date ? date : new Date(date);
  return new Intl.DateTimeFormat(DEFAULT_LOCALE, {
    month: "short",
    day: "numeric",
    year: "numeric",
    timeZone: DEFAULT_TIMEZONE,
  }).format(d);
}

