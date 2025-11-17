type InputValue = string | number | boolean;

const formatValue = (value: InputValue): string | number | boolean => {
  if (typeof value === "string") {
    return value.toUpperCase();
  } else if (typeof value === "number") {
    return value * 10;
  } else if (typeof value === "boolean") {
    return !value;
  } else {
    throw new Error("Invalid Type for FormatValue");
  }
};

// console.log(formatValue('hello'));
// console.log(formatValue(5));
// console.log(formatValue(true));

type InputType = string | any[];

const getLength = (value: InputType): number => {
  if (typeof value === "string" || Array.isArray(value)) {
    return value.length;
  }
  throw new Error("Invalid Type for getLength");
};

// console.log(getLength("typescript"));
// console.log(getLength([10, 20, 30, 40]));

class Person {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  getDetails(): string {
    return `Name: ${this.name}, Age: ${this.age}`;
  }
}
// const person1 = new Person("John Doe", 30);
// console.log(person1.getDetails());

// const person2 = new Person("Alice", 25);
// console.log(person2.getDetails());

interface RatingItem {
  title: string;
  rating: number;
}
const filterByRating = (items: RatingItem[]): RatingItem[] => {
  return items.filter((item) => item.rating >= 4);
};
// const books = [
//   { title: "Book A", rating: 4.5 },
//   { title: "Book B", rating: 3.2 },
//   { title: "Book C", rating: 5.0 },
// ];

// console.log(filterByRating(books));

interface UserTypes {
  id: number;
  name: string;
  email: string;
  isActive: boolean;
}

const filterActiveUsers = (users: UserTypes[]): UserTypes[] => {
  return users.filter((user) => {
    return user.isActive === true;
  });
};

// const users = [
//   { id: 1, name: "Rakib", email: "rakib@example.com", isActive: true },
//   { id: 2, name: "Asha", email: "asha@example.com", isActive: false },
//   { id: 3, name: "Rumi", email: "rumi@example.com", isActive: true },
// ];

// console.log(filterActiveUsers(users));

interface Book {
  title: string;
  author: string;
  publishedYear: number;
  isAvailable: boolean;
}

const printBookDetails = (Book: Book) => {
  console.log(
    `Title: ${Book.title}, Author: ${Book.author}, Published: ${
      Book.publishedYear
    }, Available: ${Book.isAvailable ? "Yes" : "NO"}`
  );
};
// const myBook: Book = {
//   title: "The Great Gatsby",
//   author: "F. Scott Fitzgerald",
//   publishedYear: 1925,
//   isAvailable: true,
// };
// printBookDetails(myBook);

const getUniqueValues = (arr1: number[], arr2: number[]): number[] => {
  const combinedArray = [...arr1, ...arr2];

  const uniqeArray = new Set(combinedArray);
  return [...uniqeArray];
};

// const array1 = [1, 2, 3, 4, 5];
// const array2 = [3, 4, 5, 6, 7];

// console.log(getUniqueValues(array1, array2));

interface ProductType {
  name: string;
  price: number;
  quantity: number;
  discount?: number;
}

const calculateTotalPrice = (products: ProductType[]): number => {
  if (products.length === 0) {
    return 0;
  }
  const totalPrice = products.reduce((total, product) => {
    const basePrice = product.price * product.quantity;
    const discountPrice =
      product.discount !== undefined ? product.discount / 100 : 0;
    const finalPrice = basePrice * (1 - discountPrice);
    return total + finalPrice;
  }, 0);
  return totalPrice;
};

// const products = [
//   { name: "Pen", price: 10, quantity: 2 },
//   { name: "Notebook", price: 25, quantity: 3, discount: 10 },
//   { name: "Bag", price: 50, quantity: 1, discount: 20 },
// ];

// console.log(calculateTotalPrice(products));
