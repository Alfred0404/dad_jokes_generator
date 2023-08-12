import request from 'axios';

console.log("hey")

let h1 = document.querySelector('h1');
let h2 = document.querySelector('h2');
const body = document.querySelector('body');

const options = {
  method: 'GET',
  url: 'https://dad-jokes.p.rapidapi.com/random/joke',
  headers: {
    'X-RapidAPI-Key': 'c57faf654emsh71188340a759deap169abcjsnc4477eab7500',
    'X-RapidAPI-Host': 'dad-jokes.p.rapidapi.com'
  }
};

try {

  window.addEventListener('click', async () => {

    const response = await request(options);
    const { setup, punchline } = response.data.body[0];

    body.style.backgroundColor = `rgb(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255})`;

    h1.textContent = setup;
    h2.textContent = punchline;

    console.log(`${setup}\n${punchline}`);
  });
}
catch (error) {
	console.error(error);
}