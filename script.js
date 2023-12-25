// Declare variables outside of functions
let randCountry, randAct, randBud;

//Gets the HTML dropdown elements
let contDropdown = document.getElementById('continent');
let actDropdown = document.getElementById('activity');
let budDropdown = document.getElementById('budget');
let generateButton = document.getElementById('generateButton');
let randomizeButton = document.getElementById('randomizeButton');
let results = document.getElementById('result-box');

//url for the companion json api
const apiUrl = `https://ie1999.github.io/wander-whim-api/api.json`;

// Fetches data from API
const getData = async () => {
	try{
		const response = await fetch(apiUrl);
		if (!response.ok) {
			throw new Error(`Failed to fetch data. Status: ${response.status}`)
		}
		const data = await response.json();
		return data;
	} catch (error) {
		console.error('Error fetching data:', error.message);
		throw error;
	}

};

//Add event listener to country dropdown menu
contDropdown.addEventListener('change', function () {
	//Gets selected continent
	var selCont = this.value;
	//Fetch countries from selected continent
	getCountry(selCont);
});

//Function to get a random country from api
const getCountry = async (continent) => {
	const data = await getData();
	const countries = data.countries[continent];

	//Selects random country
	randCountry = countries[Math.floor(Math.random() * countries.length)];
};

//Add event listener to activity dropdown menu
actDropdown.addEventListener('change', function () {
	//Gets selected activity
	var selAct = this.value;
	//Fetch activities from selected activity
	getActivity(selAct);
});


//Variable to get a random activity from api
const getActivity = async (activity) => {
	const data = await getData();
	const activities = data.activities[activity];

	//Selects random activity
	randAct = activities[Math.floor(Math.random() * activities.length)];
};

//Add event listener to budget dropdown menu
budDropdown.addEventListener('change', function () {
	//Gets selected budget
	var selBud = this.value;
	//Fetch activities based on selected budget
	getBudget(selBud);
});

//Function to get a random budget from api
const getBudget = async (budget) => {
	const data = await getData();
	const budgets = data.budgets[budget];
	
	//Selects random budget
	randBud = budgets[Math.floor(Math.random() * budgets.length)];
};

//Function to print the result
function printResult() {
	console.log('Printing result:', randCountry, randAct, randBud);
	results.innerHTML = `<h4>Here's your vacation idea!</h4> <p>Enjoy visiting ${randCountry}, doing this activity: ${randAct}, on a budget of ${randBud}!</p>`;
};

//Makes sure DOM is fully loaded before attaching event listener
document.addEventListener("DOMContentLoaded", function(){
	// Add event listener to generate button
	generateButton.addEventListener('click', async function () {
		// Gets selected values from dropdowns
		var selCont = contDropdown.value;
		var selAct = actDropdown.value;
		var selBud = budDropdown.value;

		// Fetch data based on selected values
		await Promise.all([getCountry(selCont), getActivity(selAct), getBudget(selBud)]);

		// Prints the results
		printResult();
	});
});

//Randomizer button event listener
randomizeButton.addEventListener('click', async function() {
	//Generate random idea if user makes no selections
	await Promise.all([getCountry(), getActivity(), getBudget()]);

	//Print results
	printResult();
});

