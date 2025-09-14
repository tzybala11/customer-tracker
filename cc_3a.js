// Coding Challenge 3a

// Create Customer Records
let customers = [
    {name:"Michael", email:"michael@email.com", purchases:["Bread","Cheese","Ham"]},
    {name:"William", email:"william@email.com", purchases:["Butter","Toilet Paper","Ground Beef"]},
    {name:"David", email:"david@email.com", purchases:["Pasta","Cookies","Apple"]},
];

    console.log(customers);

// Add & Remove Data
customers.push({name:"Lisa", email:"lisa@email.com", purchases:["Shirt","Shoes","Doritos"]});

    console.log(customers);

customers.shift();

    console.log(customers);

// Update Customer Info
customers.forEach(customer => {
    if (customer.name === "William")
        customer.email = "william1@email"
});

customers[0].purchases.push("Rice");

    console.log(customers);

// Display Customer Information
customers.forEach(customer => console.log(`${customer.name}\t|\t${customer.email}|\t${customer.purchases.length}`));