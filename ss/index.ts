// Variables
const myForm: HTMLFormElement = document.querySelector('#my-form') as HTMLFormElement;
const myContainer: HTMLDivElement = document.querySelector('.container') as HTMLDivElement;
const inputEl: HTMLInputElement = document.querySelector('#my-form input') as HTMLInputElement;

// Get todos
const getPosts = async (): Promise<any[]> => {
  const response: Response = await fetch("https://jsonplaceholder.typicode.com/posts");
  return await response.json();
};

// Make cards
const makeCards = async (): Promise<void> => {
  try {
    // Clear the container
    myContainer.innerHTML = "";

    // Get input value
    const inputText: string = inputEl.value.trim().toLowerCase();

    // Get post array
    const result: any[] = await getPosts();

    // Filter given array
    const filtered: (string | number)[] = result.filter((data: any) =>
      (data.title.toLowerCase().includes(inputText) || data.body.toLowerCase().includes(inputText))
    );

    // Create and append cards
    const fragment = document.createDocumentFragment();
    filtered.forEach((user: any) => {
      const listDiv: HTMLDivElement = document.createElement('div');
      listDiv.classList.add('container-element');

      const listDivId: HTMLParagraphElement = document.createElement('p');
      listDivId.classList.add('user-id');
      listDivId.innerText = String(user.userId);
      listDiv.appendChild(listDivId);

      const listDivTitle: HTMLParagraphElement = document.createElement('p');
      listDivTitle.classList.add('title');
      const titleText: string = user.title.replace(new RegExp(inputText, 'gi'), '<span class="highlighted">$&</span>');
      listDivTitle.innerHTML = titleText;
      listDiv.appendChild(listDivTitle);

      const listDivBody: HTMLParagraphElement = document.createElement('p');
      listDivBody.classList.add('el-body');
      const bodyText: string = user.body.replace(new RegExp(inputText, 'gi'), '<span class="highlighted">$&</span>');
      listDivBody.innerHTML = bodyText;
      listDiv.appendChild(listDivBody);

      fragment.appendChild(listDiv);
    });

    myContainer.appendChild(fragment);
  } catch (error) {
    console.log("ERROR! ", error);
  }
};

// Debounce function to execute makeCards functions with a delay
const debounce = (fn: Function, delay: number): EventListener => {
    let timeoutId: number = 0;
    return function (this: any, ...args: any[]) {
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