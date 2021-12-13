/** @format */

//1
const name = 'Генератор защитного поля'
const price1 = 1000
const price2 = 2000
console.log(`Выбран ${name}, цена за штуку ${price1} кредитов'`)
console.log(`Выбран ${name}, цена за штуку ${price2} кредитов'`)

//2
const total = 100
const ordered = 120
if (ordered > total) console.log('На складе недостаточно твоваров!')
else console.log('Заказ оформлен, с вами свяжется менеджер')

//3

const ADMIN_PASSWORD = 'admin'
let message = prompt('enter your password')
if (message === null) alert('canceled')
else if (message === ADMIN_PASSWORD) alert('welcome!')
else alert('wrong password')

//4

const credits = 23480
const pricePerDroid = 3000
let message4 = prompt('How many droids do you want to buy?')
const totalPrice = message4 * pricePerDroid
if (message4 === null) alert('canceled')
else if (totalPrice > credits) alert('not enough credits')
else alert(`You bought ${message4} droids, remaining ${credits - totalPrice}`)

//5
let message5 = prompt('Type your country')
let cost
switch (message5.toLowerCase()) {
  case 'china':
    cost = 100
    break

  case 'chile':
    cost = 250
    break

  case 'australia':
    cost = 170
    break

  case 'india':
    cost = 80
    break

  case 'jamaica':
    cost = 120
    break

  default:
    alert('Delivery not available in your country')
}
alert(cost)

//6

let input = prompt('введите число')
let total6 = 0

for (let i = 0; i < Infinity; i++) {
  if (input === null) {
    break
  }

  input = prompt('введите число')

  if (input !== null && input.length) {
    let inputNumber = Number(input)

    if (Number.isNaN(inputNumber)) {
      alert('Было введено не число, попробуйте еще раз')
    } else {
      total6 += Number(input)
    }
  }
}
alert(`Общая сумма чисел равна ${total6}`)
