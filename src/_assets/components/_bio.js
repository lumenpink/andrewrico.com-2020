// let dataText = [
//   "www.andrewrico.com",
//   "2020",
//   "Hello, my name is Andrew Rico.",
//   "I'am a Web Develper",
//   "and a UI/UX Engenieer.",
//   "Wij zijn Occhio!",
// ];

// function typeWriter(text, i, fnCallback) {
//   if (i < (text.length)) {
//     document.querySelector("#typying").innerHTML = text.substring(0, i + 1) + '<span id="typying" aria-hidden="true"></span>';
//     setTimeout(function () {
//       typeWriter(text, i + 1, fnCallback)
//     }, 100);
//   } else if (typeof fnCallback == 'function') {
//     setTimeout(fnCallback, 0);
//   }
// }

// function StartTextAnimation(i) {
//   if (typeof dataText[i] == 'undefined') {
//     setTimeout(function () {
//       StartTextAnimation(0);
//     }, 0);
//   }
//   if (i < dataText[i].length) {
//     typeWriter(dataText[i], 0, function () {
//       StartTextAnimation(i + 1);
//     });
//   }
// }
// StartTextAnimation(0);