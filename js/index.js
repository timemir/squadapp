function fetchMOTD() {
  const motd = document.getElementById("motd");
  const today = {
    day: new Date().getDate(),
    month: new Date().getMonth() + 1,
  };
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "99eced56f8msh3205130cf90635dp1180edjsnb8046a39cf1c",
      "X-RapidAPI-Host": "numbersapi.p.rapidapi.com",
    },
  };

  fetch(
    `https://numbersapi.p.rapidapi.com/${today.month}/${today.day}/date?fragment=false&json=false`,
    options
  )
    .then((response) => response.json())
    .then((data) => {
      motd.innerText = data.text;
    })
    .catch((error) => {
      console.log(error);
      motd.innerText = "One Place to rule them all";
    });
}

fetchMOTD();
