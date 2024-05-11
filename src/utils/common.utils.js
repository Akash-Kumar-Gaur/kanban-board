export function getRandomColor() {
  return '#' + Math.round(Math.random() * 0xffffff).toString(16);
}


export function getInitials(name) {
  return name?.match(/\b(\w)/g).join('');
}