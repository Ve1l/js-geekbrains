// 1. С помощью цикла while вывести все простые числа в промежутке от 0 до 100
var x = 2
function simpleNumber(num) {
  var i = 2
  while (i < num / 2) {
    if (num % i == 0) {
      return false
    }
    i++
  }
  return true
}

while (x <= 100) {
  if (simpleNumber(x)) {
    console.log(x)
  }
  x++
}
// 2. С этого урока начинаем работать с функционалом интернет-магазина. Предположим, есть сущность корзины. Нужно реализовать функционал подсчета стоимости корзины в зависимости от находящихся в ней товаров.
// var basket = [
//   {
//     title: 'Товар 1',
//     price: 200,
//     quantity: 3,
//   },
//   {
//     title: 'Товар 2',
//     price: 400,
//     quantity: 7,
//   },
//   {
//     title: 'Товар 3',
//     price: 800,
//     quantity: 2,
//   },
// ]
// function countBasketPrice(mas) {
//   var s = 0
//   for (var item of mas) {
//     s += item.price * item.quantity
//   }
//   return s
// }
// console.log(countBasketPrice(basket))
// 3. Товары в корзине хранятся в массиве. Задачи:
// a) Организовать такой массив для хранения товаров в корзине;
// b) Организовать функцию countBasketPrice, которая будет считать стоимость корзины.
// 4.*Вывести с помощью цикла for числа от 0 до 9, не используя тело цикла. Выглядеть это должно так:
// for(…){// здесь пусто}
// for (var i = 0; i <= 9; console.log(i++));
// 5) *Нарисовать пирамиду с помощью console.log, как показано на рисунке, только у вашей пирамиды должно быть 20 рядов, а не 5:
// x
// xx
// xxx
// xxxx
// xxxxx
// for (
//   var i = 1, val1 = 'x', val2 = 's';
//   i <= 20;
//   console.log(val1, val2), i++, val1 += 'x', val2 += 's'
// );
