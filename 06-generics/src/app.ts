// Generics

const names: Array<string> = ["Andres", "Mauricio"]; // string[]
// names[0].split(' ');

// const promise: Promise<string> = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("This is done");
//   }, 2000);
// });

// promise.then((data) => {
//   data.split(" ");
// });

// Generic Functions
function merge<TItem, UItem>(objA: TItem, objB: UItem) {
  return Object.assign(objA, objB);
}

const mergedObj = merge({ name: "Andres", hobbies: ["sports"] }, { age: 26 });
console.log(mergedObj.age);

// Type constrains
function mergeConstrain<TObj extends object, UObj extends object>(
  obj1: TObj,
  obj2: UObj
) {
  return Object.assign(obj1, obj2);
}

const mergeObj1 = mergeConstrain(
  { name: "Andres", hobbies: ["sports"] },
  { age: 26, languages: ["python", "ts"] }
);

interface Lenghty {
  length: number;
}

function countAndDescribe<TElement extends Lenghty>(
  element: TElement
): [TElement, string] {
  let descriptionText = "No value";
  if (element.length === 1) {
    descriptionText = `Got 1 element`;
  } else if (element.length > 1) {
    descriptionText = `Got ${element.length} elements`;
  }
  return [element, descriptionText];
}

console.log(countAndDescribe("Hi there!"));

// KeyOf
function extractAndConvert<TObj extends object, UKey extends keyof TObj>(
  obj: TObj,
  key: UKey
) {
  return obj[key];
}

extractAndConvert({ name: "Andres" }, "name");

// Generics Classes
class DataStorage<TItem extends string | number | boolean> {
  private data: TItem[] = [];

  addItem(item: TItem) {
    this.data.push(item);
  }

  removeItem(item: TItem) {
    if (this.data.indexOf(item) === -1) {
      return;
    }
    this.data.splice(this.data.indexOf(item), 1);
  }

  getItems() {
    return [...this.data];
  }
}

const textStorage = new DataStorage<string>();
textStorage.addItem("Andres");
textStorage.addItem("Max");
textStorage.removeItem("Max");
console.log(textStorage.getItems());

const numberStorage = new DataStorage<number>();

// Generics Utility Types
interface CourseGoal {
  title: string;
  description: string;
  completeUntil: Date;
}

function createCourseGoal(
  title: string,
  description: string,
  date: Date
): CourseGoal {
  let courseGoal: Partial<CourseGoal> = {};
  courseGoal.completeUntil = date;
  courseGoal.description = description;
  courseGoal.title = title;
  return courseGoal as CourseGoal;
}

const namesArr: Readonly<string[]> = ["Andres", "Mauricio"];
// namesArr.push('Max'); - not allowed
