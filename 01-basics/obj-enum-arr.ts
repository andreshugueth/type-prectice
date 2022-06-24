// const person: {
//     name: string;
//     age: number;
//     hobbies: string[];
//     role: [number, string] (Tupple)
// } = {
//     name: "Andres",
//     age: 26,
//     hobbies: ["sports", 'cooking'],
//     role: [2, 'admin']
// }

enum Role {
    ADMIN = 5,
    READ_ONLY = 100,
    AUTHOR = 200
};

const person = {
    name: "Andres",
    age: 26,
    hobbies: ["sports", 'cooking'],
    role: Role.ADMIN
}

let favoriteActivities: string[];
favoriteActivities = ['Sports'];


console.log(person.name);

console.log(person);

for (const hobby of person.hobbies) {
    console.log(hobby.toUpperCase());
}

if (person.role === Role.ADMIN) {
    console.log("is admin");
}
