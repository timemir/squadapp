const MOTDBox = {
  domLocation: document.getElementById("motd"),
  todaysDate: {
    day: new Date().getDate(),
    month: new Date().getMonth() + 1,
  },
  fetchMOTD: function () {
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "99eced56f8msh3205130cf90635dp1180edjsnb8046a39cf1c",
        "X-RapidAPI-Host": "numbersapi.p.rapidapi.com",
      },
    };

    fetch(
      `https://numbersapi.p.rapidapi.com/${this.todaysDate.month}/${this.todaysDate.day}/date`,
      options
    )
      .then((response) => response.text())
      .then((data) => {
        this.domLocation.innerText = data;
      })
      .catch((error) => {
        console.log(error);
        this.domLocation.innerText = "One Place to rule them all";
      });
  },
};

MOTDBox.fetchMOTD();
