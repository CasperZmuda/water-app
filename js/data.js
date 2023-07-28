export const drinks = [
	{
		type: 'woda',
		value: 250,
		color: '#5c98ff',
	},
	{
		type: 'sok',
		value: 500,
		color: '#f59042',
	},
	{
		type: 'piwo',
		value: 500,
		color: '#ffbe5c',
	},
	{
		type: 'herbata',
		value: 250,
		color: '#ffbe5c',
	},
	{
		type: 'zupa',
		value: 500,
		color: '#ffbe5c',
	},
	{
		type: 'mleko',
		value: 500,
		color: '#ffbe5c',
	},
];

for (const drink of drinks) {
	const drinksContainer = document.querySelector('.drinks');
	const drinksItem = `
	<div class="drinks__item">
		<p>${drink.type}</p>
		<p>${drink.value} ml</p>
	</div>
	`;

	drinksContainer.innerHTML += drinksItem;
}
