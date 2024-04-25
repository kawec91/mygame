export function extractTime(dateString) {
  const date = new Date(dateString);
  const day = date.getDate();
  const month = date.getMonth();
  const year = date.getFullYear();
  const hours = padZero(date.getHours());
  const minutes = padZero(date.getMinutes());

  return `${day}/${month}/${year} ${hours}:${minutes}`;
}

function padZero(number) {
  return number.toString().padStart(2, "0");
}
