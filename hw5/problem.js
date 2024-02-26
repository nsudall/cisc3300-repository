//question 1
output = 5 > 1 ? 'true' : 'false';
console.log(output);

//question 2
var id = {
    name: 'John Doe',
    birthday: '01/01/2000',
    height: '5ft 8in',
    eyeColor: 'green',
    hairColor: 'black'
}

for (const property in id)
{
    console.log(property)
    console.log(id[property])
}

//question 3
numbers = [1, 2, 3, 4, 5];
const numbersSquared = numbers.map(squareFunc)

function squareFunc(num)
{
    return num * num;
}

//question 4
//The DOM tells browsers how to develop a model of the HTML page, which is then kept
//in memory. This model stored in memory is the DOM tree, consisting of document, element
//attribute, and text nodes which represent different aspects of the web page.
//The DOM also is responsible for JS dynamically viewing and changing the webpage, 
//updating what the user sees in the browser. 

//question 5
//XSS attacks are Cross-Site Scripting Attacks, where an attacker is able to upload malware
//and gain acess to private data such as the DOM, user accounts, and user information. This
//can be protected against using multiple methods. One can validate the input by only 
//allowing certain characters to be inputed and double checking the validation before 
//accessing sensitive data. One can also limit the accessiblity of the user so that they 
//can only upload content in certain sections of the template.

//question 6
//see display.html