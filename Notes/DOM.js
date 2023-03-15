// Function to add new p to document
function addParagraph() {
  const randomNum = Math.floor(Math.random() * 100);
  const pContent = "The random number is: " + randomNum;
  const newElement = document.createElement('p');
  newElement.textContent = pContent; // textContent is an easier way to add text to an element
  document.body.appendChild(newElement);
}

// selecting specific element
const btn = document.querySelector('button'); // selects element
const btn2 = document.getElementById('btn-1'); // selects by id
const ex = document.getElementsByClassName('example-class'); // selects by class
const ex2 = document.querySelectorAll('p'); // selects all instances of element

// creating elements
const elementNode = document.createElement('p'); // creating element
const textNode = document.createTextNode('Content'); // creating text 
const attributeNode = document.createAttribute('class'); // creating a class
attributeNode.value = 'a-class';
elementNode.appendChild(textNode); // puts text in created paragraph
elementNode.setAttributeNode(attributeNode); // adds class to created paragraph

// inserting elements
document.body.appendChild(elementNode);
document.insertBefore(btn, elementNode); // insert elementNode before btn node

// alerts
// window.alert("This is an alert"); // makes an alert when page is opened
// window.open('www.google.com'); // goes to another webpage when page is opened
// window.scrollBy({ top: window.innerHeight, left: 0, behavior: 'smooth' }); // changes scroll bar settings

// events
btn.onclick = addParagraph(); // if element is clicked..do something

// lists
const items = document.querySelector('ul');
const item1 = items.children.item[1]; // children gets all children of items and makes a collection array of them; item gets a specific index
