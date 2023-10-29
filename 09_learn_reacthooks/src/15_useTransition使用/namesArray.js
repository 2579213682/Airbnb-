import { faker } from "@faker-js/faker";

// const namesArray = Array.from(
//   Array(10).map((item) => {
//     return faker.name.firstName();
//   })
// );
const namesArray = [];
for (let i = 0; i < 1000; i++) {
    namesArray.push(faker.name.firstName());
}
console.log(namesArray);

export default namesArray;