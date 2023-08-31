const myLi = document.querySelector("li.start-here");

// updates the text content to "main title"
myLi.textContent = "main title";

// Gets the next sibling element
const myLiNextSibling = myLi.nextElementSibling;

// Selects the first child element (the <ul> in this case) of myLiNextSibling
const myUl = myLiNextSibling.firstElementChild;

// Creates a new <li> element
const newSubTitle = document.createElement("li");

const subTitleText = document.createTextNode("sub title 4");

newSubTitle.appendChild(subTitleText);

// Finally, append this new list item to the myUl  element using myUl.appendChild(newSubTitle) , thereby adding a new subtitle to the list.
myUl.appendChild(newSubTitle);

// Navigate to the parent <ul> of the myLi element
// const myLi = document.querySelector("li.start-here");
const myLiParent = myLi.parentElement;

// remove the child of myLiParent
myLiParent.lastElementChild.remove();

const head = document.querySelector("head");

const title = document.head.querySelector("title");

//modifying the text content of an existing element by assigning a new string to its textContent property.
title.textContent = "DOM Master";

// creating a new text node with the content "Dom Master" but doesn't attach it to anything or modify any existing elements.
// const newTitle = document.createTextNode("Dom Master");

const div = myLiParent.nextElementSibling;

const p = div.firstElementChild;

p.textContent = "Now I know how to traverse the DOM :D";
