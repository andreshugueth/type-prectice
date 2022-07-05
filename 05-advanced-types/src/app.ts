// Intersection Types

type Admin = {
  name: string;
  privileges: string[];
};

type Employee = {
  name: string;
  startDate: Date;
};

type elevatedEmployee = Admin & Employee;

const emp1: elevatedEmployee = {
  name: "Andres",
  privileges: ["create-server"],
  startDate: new Date(),
};

type Combinable = string | number;
type Numeric = number | boolean;

type Universal = Combinable & Numeric; // number (Intersect)

// type guards
function add(a: number, b: number): number;
function add(a: string, b: string): string;
function add(a: Combinable, b: Combinable) {
  if (typeof a === "string" || typeof b === "string") {
    return a.toString() + b.toString();
  }
  return a + b;
}

type UnknownEmployee = Employee | Admin;

function printEmployeeInformation(emp: UnknownEmployee) {
  console.log(emp.name);
  if ("privileges" in emp) {
    console.log(emp.privileges);
  }
  if ("startDate" in emp) {
    console.log(emp.startDate);
  }
}

printEmployeeInformation(emp1);

class Car {
  drive() {
    console.log("Driving a Car...");
  }
}

class Truck {
  drive() {
    console.log("Driving a truck...");
  }

  loadCargo(amount: number) {
    console.log("Loading Cargo..." + amount);
  }
}

type Vehicle = Car | Truck;

const v1 = new Car();
const v2 = new Truck();

function useVehicle(vehicle: Vehicle) {
  vehicle.drive();
  if (vehicle instanceof Truck) {
    vehicle.loadCargo(1000);
  }
}

useVehicle(v1);
useVehicle(v2);

// Discriminated Unions

interface Bird {
  type: "Bird"; // Here ^
  flyingSpeed: number;
}

interface Horse {
  type: "Horse"; // Here ^
  runningSpeed: number;
}

type Animal = Bird | Horse;

function moveAnimal(animal: Animal) {
  let speed;
  switch (animal.type) {
    case "Bird":
      speed = animal.flyingSpeed;
      break;
    case "Horse":
      speed = animal.runningSpeed;
  }
  console.log("Moving with speed: " + speed);
}

moveAnimal({ type: "Bird", flyingSpeed: 10 });

// Type Casting

// const userInputElement = <HTMLInputElement>document.getElementById('user-input')!;
// Used without ! (Tells ts that this variable will never be null)
const userInputElement = document.getElementById("user-input");
// Another type casting is 'as'
if (userInputElement) {
  (userInputElement as HTMLInputElement).value = "Hi There!";
}

// Index properties

interface ErrorContainer {
  // {email: 'Not a valid Email', username: 'Must start with a character'}
  [prop: string]: string;
}

const errorBag: ErrorContainer = {
  email: "Not a valid email!",
  username: "Must start with a capital Character!",
};

// Function overloads - Return to add function declaration
// result 1 infers correctly the return type (Overload)
const result1 = add(1, 5);
const resultStr = add("Andres", "H");

// Optional Chaining
const fetchedUserData = {
  id: "u1",
  name: "Andres",
  job: { title: "CEO", description: "My own company" },
};
// TS 3.7+
console.log(fetchedUserData?.job?.title);

// Nullish Coalescing - TS hight version
const userInput = null;
const storedData = userInput ?? "DEFAULT";
