export const BookingCreateValidation = (date, time, location) => {
  if (date != null && time != null && location != null) {
    return true;
  }
  return false;
};
