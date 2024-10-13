import LinkedList from "./LinkedList.js";

const list = new LinkedList();

list.prepend("pigeon");
list.append("dog");
list.append("cat");
list.append("parrot");
list.append("hamster");
list.append("snake");
list.append("turtle");
list.prepend("goat");
console.log(list.toString());
console.log(list.pop().value);
console.log(list.toString());
console.log(list.at(5).value);
console.log(list.contains("snake"));
console.log(list.find("hamster"));

list.insertAt("pig", 4);
console.log(list.toString());
list.removeAt(3);
console.log(list.toString());
