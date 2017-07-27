// Since the `data.js` file is loaded in your `index.html` before this one,
// you have access to the `data` variable that contains the Etsy Store data.
// Open your `index.html` page in your browser and you can verify that the following
// is properly working. The `data` variable is an array with 25 items in it
console.log(data);



// 1: Show me how to calculate the average price of all items.
function question1 () {
  // Answer:
  let sum = 0;
  let avg = 0;
  for (let i = 0; i < data.length; i++) {
    sum += data[i].price;
  }
  avg = sum / data.length;
  console.log("The average price is $" + avg);
}



// 2: Show me how to get an array of items that cost between $14.00 and $18.00 USD
function question2 () {
  // Answer:
  let rightPrice = [];
  for (let i = 0; i < data.length; i++) {
    if (data[i].price >= 14 && data[i].price <= 18) {
      rightPrice.push(data[i].title);
    }
  }
  console.log(rightPrice);
}



// 3: Which item has a "GBP" currency code? Display it's name and price.
function question3 () {
  // Answer:
  let brit;
  for (let i = 0; i < data.length; i++) {
    if (data[i].currency_code === "GBP") {
      brit = data[i];
    }
  }
  console.log(brit.title + " costs " + brit.price + " pounds.");
}


// 4: Display a list of all items who are made of wood.
function question4 () {
  // Answer:
  let woodItems = [];
  for (let i = 0; i < data.length; i++) {
    for (let j = 0; j < data[i].materials.length; j++) {
      if (data[i].materials[j] === "wood") {
        woodItems.push(data[i]);
      }
    }
  }
  for (let i = 0; i < woodItems.length; i++) {
    console.log(woodItems[i].title + " is made of wood.");
  }
}


// 5: Which items are made of eight or more materials?
//    Display the name, number of items and the items it is made of.
function question5 () {
  // Answer:
  let manyMaterials = [];
  for (let i = 0; i < data.length; i++) {
    if (data[i].materials.length >= 8) {
      manyMaterials.push(data[i]);
    }
  }
  for (let i = 0; i < manyMaterials.length; i++) {
    console.log(manyMaterials[i].title + " has " + manyMaterials[i].materials.length + " materials:");
    for (let j = 0; j < manyMaterials[i].materials.length; j++) {
      console.log("- " + manyMaterials[i].materials[j]);
    }
  }
}


// 6: How many items were made by their sellers?
// Answer:
function question6 () {
  // Answer:
}
