/*- Link the HTML file to the JS SCRIPT
	- Select all the LI items and PRINT ONE BY ONE IN THE CONSOLE
	* This is an extra, read about HOW TO GET THE CLASS OF AN HTML ELEMENT and print next to the element too*/

    const li = document.querySelectorAll("li")
    console.log(li)
    const ul = document.querySelectorAll("ul")
    console.log(ul)

    

    for (let i = 0; i < li.length; i++){
        console.log (li[i].classList.value)
    
    }
    
