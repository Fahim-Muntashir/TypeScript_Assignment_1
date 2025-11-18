# 1 What are some differences between interfaces and types in TypeScript?

Typescript এ interface ও type একরকম মনে হলেও এদের মধ্যে বেশ কিছু পার্থক্য আছে। সেগুলো হলো :

## Declaration Merging

এটি Interface ও type এর মধ্যে সবথেকে বড় পার্থক্য l

### Interface

আপনি একই নাম একাধিক ইন্টারফেস ডিক্লেয়ার করতে পারবেন এবং typeScript সেগুলোকে নিজে নিজেই একত্রিত করে একটি একক Interface তৈরী করবে

### Type

Type এলিয়াস এটি support করে না। আপনি একই নাম একাধিক টাইপ দিলে TypeScript একটি Duplicate Identifier Error দিবে।

## Extend and Intersection

Interface & Type দুটিই অন্য টাইপ এর বৈশিষ্ট নিতে পার। কিন্তু ভিন্ন উপায়ে |

### Interface

একটি interface অন্য InterFace কে Extends কীওয়ার্ড ব্যবহার করে তার বৈশিষ্ট গুলো INHERIT সূত্রে পেয়ে
থাকে।

### Type

Type সাধারণত & (Intersection) অপারেটর ব্যবহার করে একাধিক টাইপে একসাথে করে।

## Flexibility

Type Alias Interface এর চেয়ে Flexible

### Type

টাইপ শুধু অবজেক্ট গঠন ছাড়াও অন্যান্য অনেক কিছু সংজ্ঞায়িত করতে পারে। যেমন:

Union = type Status="pending" | "completed" | "failed";
Tuple = type Coordinates = [ number,number ]
Primitive = type UserId = string
Mapped Types = type ReadOnly< T >={ readonly [k in keyof T]: T[ K ] }

### Interface

interface মূলত object ShapE সংজ্ঞায়িত করার জন্যেই ব্যাবহারিত হয়। এটি সরাসরি ইউনিয়ন বা প্রিমিটিভ টাইপ সংজ্ঞায়িত করতে পারে না।

পরিশেষে বলা যায়, অবজেক্ট এর শেপ লেখার জন্য Interface perfect & Complex বা Flexible টাইপ দরকার হলে টাইপ একটু বেশি flexible

# 2 What is the use of the keyof keyword in TypeScript? Provide an example.

keyof কীওয়ার্ড ট্যাপেস্ক্রিপ্ট এর একটি খুবই দরকারি টুল।

## Keyof key ওয়ার্ড এর কাজ

keyof একটি অবজেক্ট টাইপ গ্রহণ করে এবং সেই টাইপের সমস্ত property এর নামগুলিকে(keys ) একটি UNION টাইপ হিসাবে Return করে

## Main USECASE

এর প্রধান ব্যবহার হলো TYPE সেফটি নিচ্চিত করা। keyOf ব্যবহার করে আপনি এমন একটি FUNCTION create করতে পারেন যা গ্যারান্টি দেয় যে আপনি কোনো অবজেক্ট থেকে data নিতে গেলে বা সেট করতে গেলে, শুধুমাত্র অবজেক্ট এর বৈধ প্রপার্টি এর নাম ব্যবহার করতেছে।

## Example

```
type Product ={
name:string;
price:number;
inStock:boolean;
}

type ProductKeys=keyof Product;

//Product key value shoud be: 'name' | 'price' | 'inStock'

//In FUnction

function fetProperty<Obj , Key extends keyof Obj >(obj: Obj,key: Key){
return obj[key];
}

const laptop:Product={
name:"Macbook Pro",
price:1500,
inStock:true,
};

const productName=getProperty(laptop,"name");
console.log(ProductName);
//Answer Shouble be "Macbook Pro"

```

# 3 Explain the difference between any, unknown, and never types in TypeScript.

### Any

Actually any don't care about type safety and you can assign anything to it.The Typescript compailer won't complain about this.

```
let x:any=20;

console.log(x.toFixed(2))

```

---
