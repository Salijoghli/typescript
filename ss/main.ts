interface Person {
    name: string;
    age: number;
    email: string;
}
  
const updatePerson = <T extends Person, K extends keyof Person>(
    person: T,
    key: K,
    value: T[K]
): T => ({ ...person, [key]: value });
  

  
const person: Person = { name: "John Doe", age: 30, email: "john@example.com" };
  
const updatedPerson = updatePerson(person, "age", 35);
console.log(updatedPerson);

  