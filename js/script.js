const button = document.querySelector("button");

const API = "https://api.adviceslip.com/advice";

//  fetchData = fetch(API)
//   .then((respone) => {
//     return respone.json();
//   })
//   .then((result) => {
//     const Display = result.slip;
//     const { id, advice } = Display;
//     console.log({ id, advice });
//     document.getElementById("NoId").innerHTML = `#${Display.id}`;
//     document.querySelector("h1").innerHTML = `"${Display.advice}"`;
//   });

async function fecthAdvice() {
  const dataApi = await fetch(API);
  const respone = await dataApi.json();
  const { id, advice } = respone.slip;
  document.getElementById("NoId").innerHTML = `#${id}`;
  document.querySelector("h1").innerHTML = `"${advice}"`;
  console.log({ id, advice });
}
fecthAdvice();

button.addEventListener("click", () => {
  fecthAdvice();
  button.style.backgroundColor.hover = "red";
});
