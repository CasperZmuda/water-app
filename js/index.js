'use strict';

import { drinks } from './data.js';

const progressCircle = document.querySelector('.progress');
const percentage = document.querySelector('.progress__percentage');
const consumedAmount = document.querySelector('.progress__consumed-amount');
const dailyRequirement = document.querySelector('.daily-requirement__stat');
const remaining = document.querySelector('.remaining__stat');
const addButtons = document.querySelectorAll('.drinks__item');

const DAILY = 2000;
let amount = 0;
let PERCENTAGE_OF_CIRCLE = 0;
let remainingValue;

remaining.textContent = `${remainingValue} ml`;
percentage.textContent = `${PERCENTAGE_OF_CIRCLE} %`;
dailyRequirement.textContent = `${DAILY} ml`;
consumedAmount.textContent = `${amount} ml`;

const addToProgress = buttonValue => {
	const countPercentages = (currentAmount, dailyRequirement) => {
		PERCENTAGE_OF_CIRCLE = Math.floor((100 * currentAmount) / dailyRequirement);
	};

	const remainingAmount = () => {
		remainingValue = DAILY - amount;
		if (remainingValue >= 0) {
			remaining.textContent = `${remainingValue} ml`;
		} else {
			remaining.textContent = `0 ml`;
		}
	};

	amount += buttonValue;
	countPercentages(amount, DAILY);
	remainingAmount();
	progressCircle.style.backgroundImage = `conic-gradient(rgb(78, 123, 169) ${PERCENTAGE_OF_CIRCLE}%, rgb(200, 208, 215) 0%)`;
	percentage.textContent = `${PERCENTAGE_OF_CIRCLE} %`;
	dailyRequirement.textContent = `${DAILY} ml`;
	consumedAmount.textContent = `${amount} ml`;
};

// const styleDrinkItem = button => {
// 	const bigFirstLetter = string => {
// 		return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
// 	};

// 	button.style.backgroundColor = button.dataset.color;
// 	button.innerHTML = `
// 	<p>${bigFirstLetter(button.dataset.name)}</p>
// 	<p>${button.dataset.value} ml</p>`;
// };

addButtons.forEach(button =>
	button.addEventListener('click', () => addToProgress(button))
);
