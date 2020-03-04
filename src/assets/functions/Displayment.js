export default function Displayment(lessOrEqual, more, width) {
  return window.innerWidth <= (width ? width : 768) ? lessOrEqual : more;
}
