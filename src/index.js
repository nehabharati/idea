import "./styles.css";

document.getElementById("app").innerHTML = `
<h1>Hello Javascript!</h1>
`;

const sleep = (delay) => {
  //Write Code
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(1);
    }, delay);
  });
};

const main = async () => {
  console.log("A");
  let b = await sleep(3000);
  console.log(b);
  console.log("B");
};

main();
