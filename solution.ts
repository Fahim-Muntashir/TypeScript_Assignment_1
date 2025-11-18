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

type InputType = string | any[];

const getLength = (value: InputType): number => {
  if (typeof value === "string" || Array.isArray(value)) {
    return value.length;
  }
  throw new Error("Invalid Type for getLength");
};

class Person {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  getDetails(): string {
    return `'Name: ${this.name}, Age: ${this.age}'`;
  }
}

interface RatingItem {
  title: string;
  rating: number;
}
const filterByRating = (items: RatingItem[]): RatingItem[] => {
  return items.filter((item) => item.rating >= 4);
};

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

const getUniqueValues = (arr1: number[], arr2: number[]): number[] => {
  const combinedArray = [...arr1, ...arr2];

  const uniqeArray = new Set(combinedArray);
  return [...uniqeArray];
};

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

const books = [
  { title: "Book A", rating: 4.5 },
  { title: "Book B", rating: 3.2 },
  { title: "Book C", rating: 5.0 },
];

console.log(filterByRating(books));
