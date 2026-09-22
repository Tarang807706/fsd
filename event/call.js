// const student1 = {
//     name: "tarang",
// };

// const student2 = {
//     name: "mittal",
// };

// function introduce(city) {
//     console.log(`my name is ${this.name} and i live in ${city}`);
// }

// introduce.call(student1, "bulandshahr");

const student1 = {
    name: "tarang",
};

function introduce(city, age) {
    console.log(`my name is ${this.name}`);
    console.log(`i live in ${city}`);
    console.log(`my age is ${age}`);
}

introduce.apply(student1, ["bulandshahr", 19]);