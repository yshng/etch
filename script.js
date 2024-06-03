const container = document.querySelector('#container');

function generateGrid() {

	for (let i = 1; i <= 16; i++) {
		const square = document.createElement('div');
		square.classList.add('square');
		container.appendChild(square);
	} 
	
	const squares = document.querySelectorAll('.square');
	squares.forEach(square => square.addEventListener("mouseover", () => {
	square.classList.add('filled');
	}));
}

generateGrid();


const reset_button = document.querySelector('button');


reset_button.addEventListener("click", () => {
	/*const side_length = prompt("How many squares per side would you like in the new grid?", "Enter a number from 2 to 100");*/
	clearContainer();
	generateGrid();

})


function clearContainer() {
	const squares = document.querySelectorAll('.square');
	squares.forEach(square => container.removeChild(square));
}

