// Task 1
let coffeeTypes = [ "espresso" , "latte" , "cappuccino"]
let lastCoffee = coffeeTypes[coffeeTypes.length - 1];
console.log(lastCoffee);
// Task 2
let countries = ["India", "Canada", "Brazi", "Germany"]
let  selectedCountry = countries.indexOf("Canada")
console.log(selectedCountry);
// Task 3
let desserts = ["cake", "ice cream", "brownie"]
let main = desserts.push("cheesecake")
console.log(desserts);
// Task 4
let programmingLanguages = ["JavaScript" , "python"]
let typeValue = programmingLanguages.push("Go")
console.log(programmingLanguages);
// Task 5
let shoppingCart = ["milk", "bread", "eggs","butter"]
let  removedItem = shoppingCart.pop("butter")
console.log(shoppingCart);
console.log(removedItem);
// Task 6 
let movieGenres = ["Action","Comedy","Drama"]
let genresCopy = movieGenres
movieGenres.pop();
console.log("Original:" , movieGenres);
console.log("Copy:", genresCopy);
// Task 7
let favoriteBooks = ["1984", "Atomic Habits",  "The Alchemist"];
let booksCopy = [...favoriteBooks];
console.log("Copy:",booksCopy);
favoriteBooks.pop();
console.log(favoriteBooks);

// Task 8
let indianCities = ["Delhi ","Mumbai"]
let usCities = [" Chicago", " Seattle"]
let allCities = [...indianCities , ...usCities]
console.log(allCities);

// Task 9
let musicPlaylist = ["song a ", "song b", "song c", "song d","song e"]
let playlistLength = musicPlaylist.length;
console.log(playlistLength);

// Task 10
let sports = ["cricket", "football", "tennis","hockey","basketball"]
let hasBasketball = sports.indexOf("basketball");
console.log(hasBasketball);
