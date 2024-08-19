// affairs['2019-12-29'].push('data24')
// console.log(affairs)
/* Добавьте еще два дела в дату '2019-12-31'. */
// affairs['2019-12-30'].push('data34', 'data35')
/* Скопируйте себе следующую структуру для хранения списка студентов:

let students = {
		'group1': {
				'subgroup11': ['student111', 'student112', 'student113'],
				'subgroup12': ['student121', 'student122', 'student123'],
		},
		'group2': {
				'subgroup21': ['student211', 'student212', 'student213'],
				'subgroup22': ['student221', 'student222', 'student223'],
		},
		'group3': {
				'subgroup31': ['student311', 'student312', 'student313'],
				'subgroup32': ['student321', 'student322', 'student323'],
		},
}; */
/* Добавьте нового студента в подгруппу 'subgroup11'. */
// let students = {
// 	group1: {
// 		subgroup11: ['student111', 'student112', 'student113'],
// 		subgroup12: ['student121', 'student122', 'student123'],
// 	},
// 	group2: {
// 		subgroup21: ['student211', 'student212', 'student213'],
// 		subgroup22: ['student221', 'student222', 'student223'],
// 	},
// 	group3: {
// 		subgroup31: ['student311', 'student312', 'student313'],
// 		subgroup32: ['student321', 'student322', 'student323'],
// 	},
// }
// students.group1.subgroup11.push('student114')
// console.log(students)
/* Добавьте в первую группу еще одну подгруппу. */
// students.group1.subgroup13 = [2]
// console.log(students)
/* Сделайте четвертую группу, в ней сделайте подгруппу и добавьте в нее двух новых студентов. */
// students.group4 = {}
// students.group4.subgroup33 = []
// students.group4.subgroup33.push('student324', 'student325')
/* Возведите 2 в 10 степень. */
// console.log(2**10);
/* Найдите квадратный корень из 245. */
// console.log(Math.sqrt(245));
/* Дан следующий массив:

[4, 2, 5, 19, 13, 0, 10]
Найдите квадратный корень из суммы кубов его элементов. Для решения воспользуйтесь циклом for. */
// let arr = [4, 2, 5, 19, 13, 0, 10],
// 	sum = 0
// for (let el of arr) {
// 	sum += el ** 3
// 	console.log(Math.sqrt(sum))
// }
/* Найдите квадратный корень из 379. Результат округлите до целых, до десятых, до сотых. */
// let num = Math.sqrt(379)
// console.log(num.toFixed(2), num.toFixed(3))
/* Найдите квадратный корень из 587. Округлите результат в большую и меньшую стороны, запишите результаты округления в объект с ключами 'floor' и 'ceil'. */
// let obj = {}
// let num = Math.sqrt(587)
// obj.floor = Math.floor(num)
// obj.ceil = Math.ceil(num)
// console.log(obj)
/* Даны числа 4, -2, 5, 19, -130, 0, 10. Найдите минимальное и максимальное число. */
// console.log(Math.max(4, -2, 5, 19, -130, 0, 10), Math.min(4, -2, 5, 19, -130, 0, 10));
/* Выведите на экран случайное целое число от 1 до 100. */
// function randomNumber(max, min) {
// 	return Math.floor(Math.random() * (max - min + 1) + min)
// }
// console.log(randomNumber(100, 1))
/* С помощью цикла заполните массив 10-ю случайными целыми числами. */
// let arr = []
// for (let i = 0; i < 10; i++) {
// 	function randomNumber(max, min) {
// 		return Math.floor(Math.random() * (max - min + 1) + min)
// 	}
// 	arr.push(randomNumber(100, 1))
// }
// console.log(arr)
/* Даны переменные a и b. Найдите модуль разности a и b. Проверьте работу скрипта самостоятельно для различных a и b. */
// let a = -250
// let b = 5
// console.log(Math.abs(a), Math.abs(b))
/* Дана строка 'js'. Сделайте из нее строку 'JS'. */
// let str = 'js'
// console.log(str.toUpperCase())
/* Дана строка 'JS'. Сделайте из нее строку 'js'. */
// let str = 'JS'
// console.log(str.toLowerCase())
/* Дана строка 'я учу javascript!'. Вырежьте из нее слово 'учу' и слово 'javascript' тремя разными способами (через substr, substring, slice). */
// let str = 'я учу javascript!'
// console.log(str.substr(1, 5) + ' ' + str.substr(6))
// console.log(str.substring(1, 5) + ' ' + str.substring(5))
/* Дана строка. Проверьте, начинается ли эта строка на 'http://'. */
// let str = 'http://'
// let res = str.startsWith('http')
// console.log(res)
/* Дана строка. Проверьте, заканчивается ли эта строка на '.html'. */
// let str = 'dfsgbdfgjbdghtml'
// let res = str.endsWith('html')
// console.log(res)
/* Дана строка '1-2-3-4-5'. Поменяйте все дефисы на точки. */
// let str = '1-2-3-4-5'
// let elem = '-'
// while (str.includes(elem)) {
// 	str = str.replace(elem, '.')
// }
// console.log(str)
/* Дана строка '1-2-3-4-5'. С помощью метода split запишите каждое число этой строки в отдельный элемент массива. */
// let str = '1-2-3-4-5'
// let res = str.split('-')
// console.log(res)
/* Дана строка '12345'. С помощью метода split запишите каждый символ этой строки в отдельный элемент массива. */
// let str = '12345'
// let res = str.split('')
// console.log(res)
/* Дан следующий массив:

let arr = [1, 2, 3, 4, 5];
С помощью метода join слейте его в строку '1-2-3-4-5'. */
// let arr = [1, 2, 3, 4, 5]
// let res = arr.join('-')
// console.log(res)
/* Дан следующий массив:

[1, 2, 3]
Выведите на экран первый элемент этого массива. */
let arr = [1, 2, 3]
let el = arr.shift()
console.log(el)
