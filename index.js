// Ex 5 /////////////////////
//1-
// document.getElementById('btn').addEventListener("click", function () {
//     document.title = 'New Title'
// }, false)
//
// todos = document.getElementsByTagName('p')
// todosText = []
// for (let i = 0; i < todos.length; i++) {
//     const element = todos[i].innerHTML;
//     todosText.push(element)
// }
//2-
// for (let i = 0; i < todos.length; i++) {
//     todos[i].innerHTML = todosText[todos.length - i - 1];
// }
//--------------------------------------------------------
// EX7 ////////////////////////
//1-
// words = ['word1', 'word2', 'word3', 'word4']
// function toUpper(arg) {
//     arg.forEach(element => {
//         console.log(element.toUpperCase());
//     });
// }
// toUpper(words)
//2-
// words = ['word1', 'word2', 'word3']
// function arrayDouble(array) {
//     array.forEach(element => {
//         array.push(element)
//     });
// }
// arrayDouble(words)
// console.log(words);