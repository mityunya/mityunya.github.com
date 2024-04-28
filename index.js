// .page = class
// # = id
// div = div

//САЙТ НАПИСАН ЧЕРЕЗ ЖОПУ, надо переделать полностью

let page = document.querySelector(".content")
let serviceButton = document.querySelector("#service")
let mainPageButton = document.querySelector("#mainpage")
let ShopPageButton = document.querySelector("#shoppage")
let AboutUsPageButton = document.querySelector("#aboutuspage")
let SchemePageButton = document.querySelector("#schemepage")

function Render(div) {  //чистит код автоматически 
	page.innerHTML = ""
	page.appendChild(div)
}

function ServicePage() {

	let html = '<table class="service">'

	html += `<tr class="service info">
	 <th><b>Услуга</b></th>
	 <th><b>Цена</b></th>
	 <th><b>Услуга</b></th>
	 <th><b>Цена</b></th>
	</tr>`

	let servicesArray = [
		"Разборка / сборка ноутбука", "500-800 сом", "Разборка / сборка игрового ноутбука", "от 1000 сом", // 1
		"Обслуживание системы охлаждения", "от 1500 сом", "Чистка после попадания влаги", "от 5200 сом",   // 2
		"Замена дисплея (матрицы)", "от 4900 сом", "Замена клавиатуры", "от 2300 сом",      				// 3
		"Ремонт корпуса", "от 2000 сом", "Замена аккумулятора", "от 4500 сом", 							// 4
		"Ремонт системной платы. Цепи питания", "от 10500 сом", "Замена жесткого диска", "от 2000 сом",	//5
		"Замена шлейфа", "от 1500 сом", "Замена тачпада", "от 2000 сом",   								//6
		"Установка ОС Windows", "3500 сом", "Установка OSx/macOS", "5000 сом", 							//7
		"Клонирование ОС", "5900 сом", "Настройка / Прошивка BIOS", "от 3000 сом",							//8
		"Установка BGA микросхемы на материнскую плату", "от 3900 сом", "Замена видеочипа со стоимостью видеочипа", "от 10800 сом", //9
		"Замена ХАБа", "от 8900 сом", "Ремонт системной платы. Разъемы", "от 4900 сом",					//10
	]

	html += "<tr>"

	servicesArray.forEach((item, index) => {
		if (index % 4 == 0) html += `</tr><tr>`
		html += `<td>${item}</td>`
	})

	html += "</tr>"
	html += "</table>"
	page.innerHTML = html

}

function ShopPage() {
	let div = document.createElement("div")
	div.innerHTML += "<img src='working.png'>"
	Render(div)
}

function AboutUsPage() {
	let div = document.createElement("div")
	// div.classList = "aboutuspagecontent"
	div.innerHTML += `<h1 class="contactsh1">Контакты</h1>`
	div.innerHTML += `<div class="contacts"><p1>г. Бишкек ул.xxxxxxx xдом
	<br/>Организация: ООО "Vol'ga"<br/>
	ИНН: xxxxxxxxxx<br/>
	К/С: xxxxxxxxxxxxxxxxxxxx<br/>
	Банк: ФИЛИАЛ "XXXXXXXX" БАНКА XXXX (XXX)<br/>
	Юр адрес: xxxxxx, МО, Бишкек г, XXXXXXXXXXXXXXXXXXXXXXXX <br/>
	КПП: xxxxxxxxx<br/>
	Расчетный счет: xxxxxxxxxxxxxxxxxxxx<br/>
	БИК: xxxxxxxxx<br/>
	ОГРНИП: <br/>
	E-mail: info@volga.kg</p1></div>`
	div.innerHTML += '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d93561.7425706109!2d74.50946060960827!3d42.87697130584411!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x389eb7dc91b3c881%3A0x492ebaf57cdee27d!2z0JHQuNGI0LrQtdC6!5e0!3m2!1sru!2skg!4v1713620675427!5m2!1sru!2skg" width="800" height="500" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>'
	Render(div)
}


mainPage()

mainPageButton.addEventListener("click", mainPage)
serviceButton.addEventListener("click", ServicePage)
ShopPageButton.addEventListener("click", ShopPage)
AboutUsPageButton.addEventListener("click", AboutUsPage)
SchemePageButton.addEventListener("click", SchemePage)