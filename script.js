const container = document.querySelector('#container');

function generateGrid(side = 50) {

	let area = side**2;
	for (let i = 1; i <= area; i++) {
		const square = document.createElement('div');
		square.classList.add('square');
		square.style.flex = "1 1 " + 100/side +"%";
		container.appendChild(square);
	} 
	
	const squares = document.querySelectorAll('.square');
	squares.forEach(square => square.addEventListener("mouseover", () => {
	square.classList.add('filled');
	}));
}

function clearContainer() {
	const squares = document.querySelectorAll('.square');
	squares.forEach(square => container.removeChild(square));
}

generateGrid();

const reset_button = document.querySelector('button');

reset_button.addEventListener("click", () => {
	const side_length = parseInt(prompt("How many squares per side would you like in the new grid?", "Enter a number from 2 to 100")); 
	if (side_length > 100 || side_length < 2) {
		alert("Your input must be a number between 2-100.");
		return;
	};
	clearContainer();
	generateGrid(side_length);

})



