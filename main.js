// Since the `data.js` file is loaded in your `index.html` before this one,
// you have access to the `data` variable that contains the Etsy Store data.
// Open your `index.html` page in your browser and you can verify that the following
// is properly working. The `data` variable is an array with 25 items in it
console.log(data);



// 1: Show me how to calculate the average price of all items.
function question1 () {
  // Answer:
  let total=0;
  data.forEach(function(price){
    total+=price.price;
  })
  let Average= total/data.length;
  console.log(Average);
  console.log(total);
}



// 2: Show me how to get an array of items that cost between $14.00 and $18.00 USD
function question2 () {
  newArray=[];
  data.forEach(function(amount){
    if (amount.price>=14 && amount.price<=18){
      newArray.push(amount.title);
    }

  })
  // Answer:
  console.log(newArray);
}



// 3: Which item has a "GBP" currency code? Display it's name and price.
function question3 () {
  let currency1=0;
  let price=0
  data.forEach(function(currency){
    if(currency.currency_code === "GBP"){
      currency1=currency.title;
      price=currency.price;

    }
  })
  // Answer:
  console.log(currency1,price);
}


// 4: Display a list of all items who are made of wood.
function question4 () {
  let list=[];
  data.forEach(function(madeOf){
    madeOf.materials.forEach(function(wood){
      if(wood==="wood"){
      list.push(madeOf.title);
    }
  })
  })
  // Answer:
  console.log(list);
}


// 5: Which items are made of eight or more materials?
//    Display the name, number of items and the items it is made of.
function question5 () {
  data.forEach(function(madeOf){
    if (madeOf.materials.length>= 8){
      console.log(madeOf.title);
      console.log(madeOf.materials.length);
      console.log(madeOf.materials);
    }
  })
  // Answer:
}


// 6: How many items were made by their sellers?
// Answer:
function question6 () {
  // Answer:
  let handMade = 0;
  data.forEach(function(madeBy){
    if(madeBy.who_made === "i_did"){
      handMade++;
    }
  })
 console.log(handMade);

}
