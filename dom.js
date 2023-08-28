// console.log(document.baseURI);
// console.log(document.links);

// document.getElementById("firstHeading").innerHTML="<h1>Anup Maurya<h1/>";

// document.getElementById('title').getAttribute('id');
// document.getElementById('title').getAttribute('class');
// document.getElementById('title').setAttribute('class','test');  //override the exiting attribute
// document.getElementById('title').setAttribute('class','test heading');



// const title=document.getElementById('title');
// title.style.backgroundColor='green';
// title.style.padding='13px';
// title.style.borderRadius='13px';




// title.textContent - shows all the text whether it is set to display:none
// title.innerHTML - gives all the values present inside given html tag, it may contains further HTML tag iniside, will shown.
// title.innerText - shows the text will is visible on display




// HTMLCollection
// HTMLNodeList

// querySelector - gives only one

// document.querySelector('h2')  - gives only first h2 element present on document
// document.querySelectorAll('h2')  - gives all h2 element present on document
// document.querySelector('input[type="password"0]');
// document.querySelector('#title');
// document.querySelector('.title');
// document.querySelector('p:first-child');


// const myul=document.querySelector('ul');
// const turngreen=myul.querySelector('li');
// turngreen.style.backgroundColor="green";



// querySelectorAll- gives you NodeList

// const tempLiList=document.querySelectorAll('li'); -gives NodeList 

// tempLiList[0].style.color="green";

//to go through all element of the list
// tempLiList.forEach(function(l) {
//     l.style.backgroundColor='green';
// });


// HTML NodeList is different from HTML HTML Collection
// const tempClassList= document.getElementsByClassName('list-item'); -gives HTML Collection

// HTML collection convert to HTML NodeList

// const myConvertedArray=Array.from(tempClassList);
// myConvertedArray.forEach(function (li){
//     li.style.color="orange";
// })
