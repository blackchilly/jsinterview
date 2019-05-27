// //1
//
// function palindromm (str) {
//
//     //перевести строку в нижний регистр
//     str = str.toLowerCase();
//
//     //строку перевести в массив
//     let str2 = str.split('');
//
//     str2 = str2.reverse();
//
//     //обьеденить массив
//     str2 = str2.join('');
//
//     if (str == str2) return true;
//     else return false;
//
//
//     return str2;
// }
// console.log(palindromm('abba'));

// 2
// function palindromm (str) {
//     //перевести строку в нижний регистр
//     str = str.toLowerCase();
//     return str == str.split('').reverse().join('');
//
// }
// console.log(palindromm('abba'));

3
const palindrom = str => {
    //перевести строку в нижний регистр
    str = str.toLowerCase();
    return str == str.split('').reverse().join('');

}
console.log(palindrom('abba'));