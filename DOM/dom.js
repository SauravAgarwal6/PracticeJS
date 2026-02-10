//! Dom Selector are of 5 types

//! 1) document.getElementById() :- Returns the first element within node's descendants whose ID is elementId.
// let head2 = document.getElementById("head2");
// console.log(head2)

// console.log(head2.textContent)
// console.log(head2.innerHTML)
// //! 2) document.getElementsByClassName() :- The getElementsByClassName method of of all child elements which have all of the given class name(s).
// let h3tag = document.getElementsByClassName("head3");
// console.log(h3tag)
// console.log(h3tag[1].textContent)

// if we want to check array is pure or not -> Array.isArray() return boolean
// console.log(Array.isArray(h3tag))

// convert impure array to pure array  -> Array.from() return pure array
// let pureArray = Array.from(h3tag)
// console.log(pureArray)

// //! 3) document.getElementsByTagName() :- The getElementsByTagName method of The complete document is searched, including the root node.
// let tagCollection  = document.getElementsByTagName("h3");
// console.log(tagCollection)

// //! 4) document.querySelector() :- Returns the first element that is a descendant of node that matches selectors.
// let ele1 = document.querySelector("#head2")
// console.log(ele1)

// let ele2 = document.querySelector(".head3")
// console.log(ele2)

// let ele3 = document.querySelector("h3")
// console.log(ele3)

// id > class > tagname  Priority

// let ele4 = document.querySelector("h3,.head3,#head2") 
// console.log(ele4)
// //! 5)document.querySelectorAll()

// let ele5 = document.querySelectorAll(".head3");
// console.log(ele5)
//! Similarity 
// Both are impure array 
//! Difference Between HtMlCollection and NodeList

// cannot use any of the array method in html collection 
// can use forEach() method in nodelist 

// html collection is called Live Collection 
// NodeList is called static collection 

// const collection = document.getElementsByTagName('div')
// const list = document.querySelectorAll('div')
// console.log("Html collection -->",collection.length)
// console.log("Node list -->",list.length)
// for(let  i  = 0 ; i  < 5 ; i++){
//     const divTag = document.createElement("div")
//     divTag.textContent = "div 4"
//     console.log(divTag)
//     document.body.appendChild(divTag)
// }
// console.log("Html collection -->",collection.length)// this is (Live so 8 div element)
// console.log("Node list -->",list.length) // this is static (so 3 div )

//! Dom Manipulation 
const tableTag = document.createElement("table") 

const trTag1  = document.createElement("tr")
const trTag2  = document.createElement("tr")
const trTag3  = document.createElement("tr")

const thTag1  = document.createElement("th")
const thTag2  = document.createElement("th")
const thTag3  = document.createElement("th")

const tdTag1  = document.createElement("td")
const tdTag2  = document.createElement("td")
const tdTag3  = document.createElement("td")
const tdTag4  = document.createElement("td")
const tdTag5  = document.createElement("td")
const tdTag6  = document.createElement("td")
//! these are deprecated 
tableTag.border = 1
tableTag.cellPadding = 5
tableTag.cellSpacing = 0

thTag1.textContent = "id";
thTag2.textContent = "fname";
thTag3.textContent = "lname";

tdTag1.textContent = 1
tdTag2.textContent = "john"
tdTag3.textContent = "doe"

tdTag4.textContent = 2
tdTag5.textContent = "jane"
tdTag6.textContent = "doe"
trTag1.append(thTag1,thTag2,thTag3)
trTag2.append(tdTag1,tdTag2,tdTag3)
trTag3.append(tdTag4,tdTag5,tdTag6)
tableTag.append(trTag1,trTag2,trTag3)
let tableContainer = document.querySelector("#tableContainer")
tableContainer.appendChild(tableTag)

console.log(tableTag)

  const mul = (a, b) => a*b;
console.log(mul(2,5));