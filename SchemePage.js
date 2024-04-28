function SchemePage() {
	let div = document.createElement("div")
	div.className = "schemecontent";

	let table = document.createElement('table');
	let row = table.insertRow(); // строка
	let cell1 = row.insertCell(); // ячейки	
	let cell2 = row.insertCell();
	let cell3 = row.insertCell();
	let cell4 = row.insertCell();

	cell1.innerHTML = `<a href="ussr.html"><img src='ussrlogo.jpg' title="Усилители эпохи ссср" class='schemecontentimg' alt="Усилители эпохи CCCР"></a>`; // текст
	cell2.innerHTML = `<a href="laptop.html"><img src='laptoplogo.jpg' title="Ноутбуки" class='schemecontentimg' alt="Ноутбуки"></a>`;
	cell3.innerHTML = `<a href="motherboard.html"><img src='motherboardlogo.jpg' title="Материнские платы" class='schemecontentimg'></a>`;
	cell4.innerHTML = `<a href="phone.html"><img src="phonelogo.jpg" title="Телефоны" class='schemecontentimg'></a>`;

	let row2 = table.insertRow();
	let cell5 = row2.insertCell();
	let cell6 = row2.insertCell();
	let cell7 = row2.insertCell();
	let cell8 = row2.insertCell();

	cell5.innerHTML = `<a href="videocard.html"><img src="videocardlogo.jpg" title="Видеокарты" class="schemecontentimg"></a>`;
	cell6.innerHTML = `<img src="working.png" title="Хазе что тут должно быть" class="schemecontentimg">`;
	cell7.innerHTML = `<img src="working.png" title="Хазе что тут должно быть" class="schemecontentimg">`;
	cell8.innerHTML = `<img src="working.png" title="Хазе что тут должно быть" class="schemecontentimg">`;
	div.appendChild(table);

	Render(div)
}