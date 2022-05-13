// const myHeading = document.getElementById("heading");

// const myInput = document.getElementById("input");

// const myButton = document.getElementById("button");

// const drinks = document.getElementsByTagName("li")[0];


// myHeading.addEventListener("click", () => {
//     myHeading.style.color = "red"
// })

// myButton.addEventListener("click", () => {
//     myHeading.style.color = input.value
//     drinks.style.color = "red"
// })

// myButton.addEventListener("click", () => {
//     myHeading.style.color = input.value
// })

// const list = document.getElementsByTagName("li")

// const notOrange = document.getElementsByClassName("not-orange")

// for(i=0; i < list.length; i++) {
//     list[i].style.color = "orange"
// }

// for(i=0; i < notOrange.length; i++) {
//     list[i].style.color = "red"
// }

// console.log(list);
// console.log(list.length);


// const listItems = document.querySelectorAll("li.nth-child(even)")

// console.log(listItems)
// console.log(listItems.length)

// for(i=0; i < listItems.length; i++) {
//    listItems[i].style.color = "lightgreen"
//}

//const placeholder = document.getElementById("placeholder");
//const input = document.getElementById("input");
//const submit = document.getElementById("submit");
//const list = document.getElementById("list")

//submit.addEventListener("click", () => {
//    placeholder.style.color = "goldenrod"
//    placeholder.textContent  `I like ${input.value}`

//    list.innerHTML = li
//})

//const image = document.getElementById("image")
// const input = document.getElementById("input")
//const submit = document.getElementById("submit")

//submit.addEventListener("click", () => {
//    image.src = input.value
//})

// submit.addEventListener("click", () => {
//     if(image.style.display == "none") {
//         image.style.display = "block"
//         submit.textContent = "hide"
//     } else {
//         image.style.display = "none"
//         submit.textContent = "show"
//     }
// })

// const input = document.getElementById("input")
// const button = document.getElementById("submit")
// const list = document.getElementById("list")
// const showHide = document.getElementById("showHide")
// const remove = document.getElementById("remove")
// const listItems = document.getElementsByTagName("li")

// button.addEventListener("click", () => {
//     let listItem = document.createElement("li")
//     listItem.textContent = input.value 
//     list.appendChild(listItem)
//     //console.log(listItem)
//     input.value = " "
// })

// showHide.addEventListener("click", () => {
//    if(list.style.display == "none") {
//         list.style.display= "block"
//         showHide.textContent = "hide"
//     } else {
//         list.style.display = "none"
//         showHide.textContent = "show"
//     }
// })

// remove.addEventListener("click", () => {
//     let lastItem = document.querySelector("li:last-child")
//     list.removeChild(lastItem) 
// })

// window.setTimeout((somethingOrOther) => {
//     console.log(somethingOrOther)
// }, 5000, "Hello")

// for (let li of Array(list) ) {
//     li.addEventListener("mouseover", () => {
//         li.textContent = li.textContent.toUpperCase();
//     });
//     li.addEventListener("mouseout", () => {
//         li.textContent = li.textContent.toLowerCase();
//     });
// }
    
// list.addEventListener("mouseover", (event) => {
//     event.target.textContent = event.target.textContent.toUpperCase();
// })
// list.addEventListener("mouseout", (event) => {
//     event.target.textContent = event.target.textContent.toUpperCase();
// })

// document.addEventListener("click", (event) => {
//     console.log(event)
//     console.log(event.target)
// })

// let paragraph = document.getElementById("exampleOfParagraph")
// let parent = paragraph.parentNode

// parent.removeChild(paragraph)

// list.addEventListener("click", (event) => {
//     const li = event.target
//     const ul = li.parentNode
//     ul.removeChild(li) 
// })
// 

document.addEventListener("keydown", (event) => {
    let numDisplay = document.getElementById("numDisplay")
    let numCode = document.getElementById("codeDisplay")
    let numKey = document.getElementById("keyDisplay")
    let numWhich = document.getElementById("whichDisplay")
    
    let keyDown = event.key //assigning the .key event to variable that can be updated

    let keyCode = event.code

    let keyWhich = event.which //.which depreciated - used here just for purposes of an example 

    // numDisplay.innerHTML = `<p class ="pressedBtn"> ${keyDown} was pressed</p>`

    // numCode.innerHTML = `<p class ="pressedBtn"> ${keyDown} was pressed</p>`

    // numKey.innerHTML = `<p class ="pressedBtn"> ${keyDown} was pressed</p>`

    // numWhich.innerHTML = `<p class ="pressedBtn"> ${keyDown} was pressed</p>`

    numDisplay.textContent = keyDown
    numCode.textContent = keyCode
    numKey.textContent = keyDown
    numWhich.textContent = keyWhich
})
