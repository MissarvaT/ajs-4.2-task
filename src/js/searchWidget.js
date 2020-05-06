export default function findBy(key, property) {
  return function (obj) {
    return obj[key] === property;
  };
}
