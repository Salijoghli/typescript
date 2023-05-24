"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
// Variables
const myForm = document.querySelector('#my-form');
const myContainer = document.querySelector('.container');
const inputEl = document.querySelector('#my-form input');
// Get todos
const getPosts = () => __awaiter(void 0, void 0, void 0, function* () {
    const response = yield fetch("https://jsonplaceholder.typicode.com/posts");
    return yield response.json();
});
// Make cards
const makeCards = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        // Clear the container
        myContainer.innerHTML = "";
        // Get input value
        const inputText = inputEl.value.trim().toLowerCase();
        // Get post array
        const result = yield getPosts();
        // Filter given array
        const filtered = result.filter((data) => (data.title.toLowerCase().includes(inputText) || data.body.toLowerCase().includes(inputText)));
        // Create and append cards
        const fragment = document.createDocumentFragment();
        filtered.forEach((user) => {
            const listDiv = document.createElement('div');
            listDiv.classList.add('container-element');
            const listDivId = document.createElement('p');
            listDivId.classList.add('user-id');
            listDivId.innerText = String(user.userId);
            listDiv.appendChild(listDivId);
            const listDivTitle = document.createElement('p');
            listDivTitle.classList.add('title');
            const titleText = user.title.replace(new RegExp(inputText, 'gi'), '<span class="highlighted">$&</span>');
            listDivTitle.innerHTML = titleText;
            listDiv.appendChild(listDivTitle);
            const listDivBody = document.createElement('p');
            listDivBody.classList.add('el-body');
            const bodyText = user.body.replace(new RegExp(inputText, 'gi'), '<span class="highlighted">$&</span>');
            listDivBody.innerHTML = bodyText;
            listDiv.appendChild(listDivBody);
            fragment.appendChild(listDiv);
        });
        myContainer.appendChild(fragment);
    }
    catch (error) {
        console.log("ERROR! ", error);
    }
});
// Debounce function to execute makeCards functions with a delay
const debounce = (fn, delay) => {
    let timeoutId = 0;
    return function (...args) {
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => fn.apply(this, args), delay);
    };
};
// Event listener for input changes with debounce
inputEl.addEventListener('input', debounce(makeCards, 300));
// Prevent form submission
myForm.addEventListener('submit', e => {
    e.preventDefault();
});
// function myFunc(person:string){
//     console.log(`hello ${person}`)
// }
// const myPerson = {name: 'BABU'}
// myFunc(myPerson.name)
// myFunc.apply(myPerson, ['Guga'])
