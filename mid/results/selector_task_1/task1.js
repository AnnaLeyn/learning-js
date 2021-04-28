/*##### Task definition (1) ###############
	- Link the HTML file to the JS SCRIPT
	- Search all elements with the box class and print in console
	- Print how many elements exists in that file with that class
	- Search all elements with the class box inside the .container element and print in console
	- Print how many elements exists in that file with that class inside the .container element
	- Select the email input and print in console
	- Select the password input and print in console
	- Select the button element and print in console*/

const box = document.querySelectorAll(".box")
console.log(box)
console.log (box.length)

const boxContainer = document.querySelectorAll(".container .box")
console.log(boxContainer)
console.log(boxContainer.length)

const email = document.getElementById("email")
console.log(email)

const password = document.getElementById("password")
console.log(password)

const button = document.getElementsByTagName("button")
console.log(button)