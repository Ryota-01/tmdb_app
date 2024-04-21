export default function FormattedDate(date) {
  const d = new Date(date);
  const getYear = d.getFullYear();
  const getMonth = d.getMonth() + 1;
  const getDate = d.getDate();
  const formattedDate = `${getYear}/${getMonth}/${getDate}`;
  return formattedDate;
}
