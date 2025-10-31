
        // question 1
let studentname = ["lisa", "ali", "ahmed"];
studentname.push("ahsan")
console.log(studentname);

        // question 2
let fruites = ["apple", "banana", "orange", "mango","watermelon"];
  fruites.pop( "" );
  console.log(fruites);      

        // question 3
let days = [ "tuesday", "wednesday", "thursday", "friday", "saturday", "sunday"];
days.unshift("monday");
console.log(days);     

        // question 4
let colors = ["red", "green", "blue", "yellow" , "purple", "pink", "black"];
colors.shift("");
console.log(colors);

        // question 5
let subjects = ["urdu", "english", "biology", "islamyat", "pakstudy"];
subjects.splice(2, 1, "math", "science");
console.log(subjects);


        // question 6
let cities = ["karachi", "lahore", "islamabad", "quetta", "peshawar"];
cities.splice(0, 2, );
console.log(cities);


        // question 7
 let countries = ["pakistan", "korea", "china", "japan", "sri lanka"];   
 let maincountries = countries.slice(2,4);
 console.log(maincountries);
 

        // question 8
let fruites1 = "apple banana orange mango";
let fruite = fruites1.split(",");
console.log(fruite);


        // question 9
let alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
alphabet.join("j' s ");
console.log(alphabet);

        // question 10
let stationary1 = ["pen", "pencil"];
let stationary2 = [ "sharpener", "eraser"];       
let stationary=stationary1.concat(stationary2);
console.log(stationary);

            
         // question 11
let numbers = [1, 2, 3, 99, 5, 6, 8, 7, 4, 3, 2, 1];
numbers.sort();
console.log(numbers);


        // question 12
let object1 = ["keyboard", "mouse", "printer", "monitor"];
object1.sort();
console.log(object1);


        // question 13
let numbers1 = [1, 2, 3, 4, 5];
numbers1.reverse();
console.log(numbers1);


        // question 14
let colors1 = ["red", "green", "blue", "yellow" , "purple", "pink", "black"];

console.log(colors1.indexOf("blue"));


        // question 15
let evennumbers = [0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20];
evennumbers.push(21,22,23);
console.log(evennumbers);


        // question 16
let oddnumbers = [1, 3, 5, 7, 9, 11, 13, 15, 17, 19];
oddnumbers.splice(2,5); 
console.log(oddnumbers);


        // question 17
let programminglanguages = "html css javascript python php";
programminglanguages.split(",");
console.log(programminglanguages);


        // question 18
let abc = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k"];     
abc.reverse(" ") , abc.join("");
console.log(abc);

        // question 19
let citynames = ["karachi", "lahore", "islamabad", "quetta", "peshawar"];
console.log(citynames.indexOf("karachi"));

        // question 20
let evennum = [0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20];
let oddnum = [1, 3, 5, 7, 9, 11, 13, 15, 17, 19];
let allnum = evennum.concat(oddnum);
allnum.reverse();
console.log(allnum);