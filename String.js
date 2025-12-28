const RealValue = "The Free Encyclopedia ";

console.log(RealValue.length);         // to find the length of the String
console.log(RealValue.toUpperCase());  // use to converting in uppercase
console.log(RealValue.toLowerCase());  // use to converting in lowercase

const stringValue = "The battle of Bronkhorstspruit was the first major engagement of the First Boer War. "

// The slice() method of String values extracts a section of this string and returns it as a new string, without modifying the original string.

console.log(stringValue.slice(12));
console.log(stringValue.slice(5,12));

const learnValue = "The IronMan"

// The substring() method of String values returns the part of this string from the start index up to and excluding the end index, or to the end of the string if no end index is supplied.

console.log(learnValue.substring(1,3));
console.log(learnValue.substring(4,6));
