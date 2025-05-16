interface Mango {
  name: string;
  age: number;
  email: string;
  address?: {
    city: string;
    country: string;
  };
}

const mango: Mango = {
  name: "Mango",
  age: 30,
  email: "john@example.com",
  address: {
    city: "New York",
    country: "USA",
  },
};

const poly: Mango = {
  name: "Mango",
  age: 30,
  email: "john@example.com",
};

// check
console.log(mango);
console.log(poly);
