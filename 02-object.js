//No.01
const person = {
    name: "person A",
    age: 100,
    favDrinks: [
      "coffee",
      "jamu temulawak",
      "tea"
    ],
    greeting: function() {
      console.log("hello world")
    }
  }
  
  ///EDIT HERE
  person.name = "Salfa Ayu A"
  person.favDrinks[1] = "tap water"
  person.greeting = function (name) {
    $NAME = name
    return "Hello, " + $NAME;
  }
  /// STOP
  
  console.log(person.name);
  console.log(person.age);
  console.log(person.favDrinks);
  console.log(person.greeting("John Watson"));
  

// No.02
function getObjectValue(obj, path) {
    let result = obj
    const keys = path.split('.')
    for (let i = 0; i < keys.length; i++) {
        let key = keys[i]
        if (result[key]) {
            result = result[key]
        } else {
            result = null
            break
        }
    }
    return result
}

const milkBasedCoffee = {
  name: "latte",
  ingredients: {
    espresso: {
      origin: "lampung",
      roastProfile: "medium to dark",
      ratio: 1
    },
    milk: {
      brand: "susu murni",
      isVegan: "false",
      ratio: 5
    }
  },
}

const espresso = getObjectValue(milkBasedCoffee, "ingredients.espresso.origin");
const coffeeBrand = getObjectValue(milkBasedCoffee, "ingredients.espresso.brand");
const isMilkVegan = getObjectValue(milkBasedCoffee, "ingredients.milk.isVegan");

console.log(espresso);
console.log(coffeeBrand);
console.log(isMilkVegan);

//No.03
// dibawah ini merupakan history transasksi yang telah kalian lakukan
const items = [
    {
      btc: { buy: 10, sell: 9 },
      eth: { buy: 8, sell: 7.5 },
      doge: { buy: 7, sell: 6.5 },
      day: 1,
    },
    {
      btc: { buy: 9, sell: 5 },
      eth: { buy: 7, sell: 4 },
      doge: { buy: 6, sell: 3 },
      day: 2,
    },
    {
      btc: { buy: 5, sell: 10 },
      eth: { buy: 4, sell: 6 },
      doge: { buy: 3, sell: 4 },
      day: 3,
    },
  ];
  
  const duplicateItems = []
  for (let i=0; i < items.length; i++) {
      const item = items[i]

      let tempObjItem = {
          btc: 0,
          eth: 0,
          doge: 0
      }

      const btc = Object.values(item.btc).reduce((prev, curr) => curr - prev)
      const eth = Object.values(item.eth).reduce((prev, curr) => curr - prev)
      const doge = Object.values(item.doge).reduce((prev, curr) => curr - prev)
      tempObjItem['btc'] = btc
      tempObjItem['eth'] = eth
      tempObjItem['doge'] = doge
      duplicateItems.push(tempObjItem)
  }


  const calculateIncome = (items) => {
    const result = duplicateItems.reduce((prevValue, currValue) => {
        currValue.btc += prevValue.btc
        currValue.eth += prevValue.eth
        currValue.doge += prevValue.doge
        return currValue
    }, {btc: 0,
        eth: 0,
        doge: 0})
    console.log(result);
  }
  
  console.log(calculateIncome(items))
  
 