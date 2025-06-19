const items = [
  { id: 1, name: "one" },
  { id: 2, name: "two" },
];
const names = items.map((item) => item.name);
console.log(names); //[ 'one', 'two' ]

const details = items.map((item, index))

console.log(details);