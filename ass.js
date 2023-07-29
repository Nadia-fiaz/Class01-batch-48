//Q1,	Personal Message: Store a person’s name in a variable, 
//and print a message to that person. Your message should be simple,
// such as, “Hello Eric, would you like to learn some Python today?”
var person = ("Hello Eric,would you like to learn some python today");
console.log(person);
//Q2 Name Cases: Store a person’s name in a variable, and then print 
//that person’s name in lowercase, uppercase, and titlecase.
var person_name = "nadia";
console.log("Lowercase:", person_name.toLowerCase());
console.log("Uppercase:", person_name.toUpperCase());
//Q3Famous Quote: Find a quote from a famous person you admire. 
//Print the quote and the name of its author. 
//Your output should look something like the following, including the quotation marks:
//Albert Einstein once said, “A person who never made a mistake never tried anything new.”
var naMe = "Albert Einstein";
console.log(naMe + " once said,  " + "A person who never made a mistake never tried anything new.");
//Q4 	Famous Quote 2: Repeat Exercise 4, 
//but this time store the famous person’s name in a variable called famous_person. 
//Then compose your message and store it in a new variable called message. 
//Print your message.
var famous_person = "Mahatma Gandhi";
var message = famous_person + " once said, \"Be the change that you wish to see in the world.\"";
console.log(message);
/* Q5 Stripping Names: Store a person’s name,
and include some whitespace characters at
the beginning and end of the name.
Make sure you use each character combination,
"\t" and "\n", at least once. Print the name once,
so the whitespace around the name is displayed.
Then print the name after striping the white spaces.*/
var name_with_whitespace = "\t\n   nadia sheikh  \t\n";
console.log("name with white space", name_with_whitespace);
var name_stripped = name_with_whitespace.trim();
console.log("name after stripping whitespace", name_stripped);
/*Q6 Number Eight: Write addition, subtraction, multiplication, and division operations that each
 result in the number 8.
Be sure to enclose your operations in print statements to see the results.*/
var x = 5;
var y = 3;
console.log("Addition of x and y = ", x + y);
var x1 = 15;
var y1 = 7;
console.log("subtraction of x1 and y1=", x1 - y1);
var x2 = 2;
var y2 = 4;
console.log("multiplication of x2 and y2=", x2 * y2);
var x3 = 64;
var y3 = 8;
console.log("division of x3 and y3 =", x3 / y3);
/* Q7 Favorite Number: Store your favorite number in a variable. Then, using that variable,
create a message that reveals your favorite number. Print that message.*/
var favoriteNumber = 6;
var Message = "my favorite number is: " + (favoriteNumber);
console.log(Message);
/*Q8:.Adding Comments: Choose two of the programs you’ve written,
and add at least one comment to each. If you don’t have anything
specific to write because your programs are too simple at this point,
just add your name and the current date at the top of each program file.
Then write one sentence describing what the program does.*/
var myName = "NADIA FAYYAZ";
//string single and double codes back slash and  concatinate with + nadia Fayyaz 29 july 23
var pera = "my new project is web development ," + myName + " i am working on it .\n wish me a best of luck.";
console.log(pera);
// template literals. nadia fayyaz 29 july 2023
var data = "my new project is web development,".concat(myName, ".i am working on it .wish me best of luck");
console.log(data);
console.log(typeof data);
/* Q9 11.	Names: Store the names of a few of your friends in a array called names.
 Print each person’s name by accessing each element in the list, one at a time.*/
var Name = ['ayesha', 'sana', 'zeenat', 'hajra'];
console.log(Name);
/* Q10 12.	Greetings: Start with the array you used in Exercise 11,
 but instead of just printing each person’s name, print a message to them.
 The text of each message should be the same,
but each message should be personalized with the person’s name.*/
function Greet(name) {
    console.log("Good Morning," + name.toUpperCase() + "!!");
}
Greet("ayesha");
Greet("sana");
// function with return 
function Greet1(name1) {
    return name1.toUpperCase();
}
Greet("Najma");
/*Think of your favorite mode of transportation,
such as a motorcycle or a car, and make a list that stores several examples.
Use your list to print a series of statements about these items,
such as “I would like to own a Honda motorcycle.”*/
function transportation_list() {
    ["honda city,", "honda motorcycle"];
    return transportation_list.toString();
    console.log(" i would like to own a ," + transportation_list.toString());
}
