// Taki bałagan, że nawet tu nie patrz!

'use strict';

const progressCircle = document.querySelector('.progress');
const percentage = document.querySelector('.progress__percentage');
const consumedAmount = document.querySelector('.progress__consumed-amount');

const dailyRequirement = document.querySelector('.daily-requirement__stat');
const remaining = document.querySelector('.remaining__stat');

const addButtons = document.querySelectorAll('.drink');

const DAILY = 2000;
let amount = 0;
let PERCENTAGE = 0;
let remainingValue = DAILY;

remaining.textContent = `${remainingValue} ml`;
percentage.textContent = `${PERCENTAGE} %`;
dailyRequirement.textContent = `${DAILY} ml`;
consumedAmount.textContent = `${amount} ml`;

const addToProgress = buttonValue => {
	amount += buttonValue;
	countPercentages(amount, DAILY);
	remainingAmount();
	progressCircle.style.backgroundImage = `conic-gradient(rgb(78, 123, 169) ${PERCENTAGE}%, rgb(200, 208, 215) 0%)`;
	percentage.textContent = `${PERCENTAGE} %`;
	dailyRequirement.textContent = `${DAILY} ml`;
	consumedAmount.textContent = `${amount} ml`;
};

const countPercentages = (currentAmount, dailyRequirement) => {
	PERCENTAGE = Math.floor((100 * currentAmount) / dailyRequirement);
};

const remainingAmount = () => {
	remainingValue = DAILY - amount;
	if (remainingValue >= 0) {
		remaining.textContent = `${remainingValue} ml`;
	} else {
		remaining.textContent = `0 ml`;
	}
};

addButtons.forEach(button =>
	button.addEventListener(
		'click',
		() => addToProgress(Number(button.dataset.value)),
		(button.innerHTML = `
    <p>${button.dataset.name}</p>
    <p>${button.dataset.value} ml</p>
    `)
	)
);
