// 1. Дан код:
// var a = 1, b = 1, c, d;
// c = ++a; alert(c);           // 2 Ответ: префиксный инкремент, сначала увеличивает на единицу перед вычислением
// d = b++; alert(d);           // 1 Ответ: постфиксный инкремент, увеличивает на единицу после вычисления
// c = (2+ ++a); alert(c);      // 5 Ответ: выше переменная а уже перезаписала своё значение, далее 2+ префиксный инкремент а (было 2 и увеличилась до вычисления на 1) = 5
// d = (2+ b++); alert(d);      // 4 Ответ: b увилечивается в последовательности решения
// alert(a);                    // 3 Ответ: а 2 раза была увеличина, сначала в присвоении, далее в решении
// alert(b);                    // 3 Ответ: при вычислении значения переменной d, b присвоила себе значение 2 и при вызове её ещё раз, мы опять увеличиваем значение на 1
// Почему код даёт именно такие результаты?
// 2. Чему будет равен x в примере ниже?
// var a = 2;
// var x = 1 + (a *= 2);
// Ответ: x=5
// 3. Объявить две целочисленные переменные a и b и задать им произвольные начальные значения. Затем написать скрипт, который работает по следующему принципу:
// если a и b положительные, вывести их разность;
// если а и b отрицательные, вывести их произведение;
// если а и b разных знаков, вывести их сумму; ноль можно считать положительным числом.
function comparison(a, b) {
  if (a >= 0 && b >= 0) return a - b
  if (a < 0 && b < 0) return a * b
  return a + b
}
console.log(comparison(2, 5))
console.log(comparison(-2, -2))
console.log(comparison(3, -2))
// 4. Присвоить переменной а значение в промежутке [0..15]. С помощью оператора switch организовать вывод чисел от a до 15.
// var a = +(Math.random() * 15).toFixed(0)
// console.log(a)
// switch (a) {
//   case 0:
//     document.write(0)
//   case 1:
//     document.write('1 ')
//   case 2:
//     document.write('2 ')
//   case 3:
//     document.write('3 ')
//   case 4:
//     document.write('4 ')
//   case 5:
//     document.write('5 ')
//   case 6:
//     document.write('6 ')
//   case 7:
//     document.write('7 ')
//   case 8:
//     document.write('8 ')
//   case 9:
//     document.write('9 ')
//   case 10:
//     document.write('10 ')
//   case 11:
//     document.write('11 ')
//   case 12:
//     document.write('12 ')
//   case 13:
//     document.write('13 ')
//   case 14:
//     document.write('14 ')
//   case 15:
//     document.write('15 ')
//     break
//   default:
//     document.write('Неверно выполнен ввод чила')
//     break
// }
// 5. Реализовать основные 4 арифметические операции в виде функций с двумя параметрами. Обязательно использовать оператор return.
// var x, y

// function sum(x, y) {
//   return x + y
// }
// function diff(x, y) {
//   return x - y
// }
// function multi(x, y) {
//   return x * y
// }
// function div(x, y) {
//   if (y != 0) return x / y
//   return 0
// }
// // console.log(sum(1, 5))
// // console.log(diff(5, -2))
// // console.log(multi(5, 7))
// // console.log(div(-2, 4))
// // 6. Реализовать функцию с тремя параметрами: function mathOperation(arg1, arg2, operation), где arg1, arg2 – значения аргументов, operation – строка с названием операции. В зависимости от переданного значения операции выполнить одну из арифметических операций (использовать функции из пункта 3) и вернуть полученное значение (использовать switch).
// x = +prompt('Введите первое значение ')
// y = +prompt('Введите второе значение ')
// operation = prompt('Введите знак + , - , *, /')
// function mathOperation(x, y, operation) {
//   switch (operation) {
//     case '+':
//       alert(sum(x, y))
//       break
//     case '-':
//       alert(diff(x, y))
//       break
//     case '*':
//       alert(multi(x, y))
//       break
//     case '/':
//       alert(div(x, y))
//       break
//     default:
//       alert('Введён неверный знак ')
//       break
//   }
// }
// mathOperation(x, y, operation)
// 7) *Сравнить null и 0. Попробуйте объяснить результат.
// var a = null
// var b = 0
// console.log(a == b) //false
// console.log(null != 0) //true
// console.log(null > 0) //false
// console.log(null < 0) //false
// console.log(null >= 0) //true
// console.log(null <= 0) //true
// 8) *С помощью рекурсии организовать функцию возведения числа в степень. Формат: function power(val, pow), где val – заданное число, pow – степень.
// function power(val, pow) {
//   if (pow == 1) return console.log(val)
//   power(val * val, --pow, val)
// }
// power(5, 2)
