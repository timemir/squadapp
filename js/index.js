const motd = document.getElementById("motd");
const today = {
  day: new Date().getDate(),
  month: new Date().getMonth() + 1,
};

fetch(`http://numbersapi.com/${today.month}/${today.day}/date`, {
  method: "GET",
})
  .then((response) => response.text())
  .then((data) => {
    motd.innerText = data;
  })
  .catch((error) => {
    console.log(error);
    motd.innerText = "One Place to rule them all";
  });
