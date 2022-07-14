function getActivityIdea() {
  fetch("https://apis.scrimba.com/bored/api/activity")
    .then((res) => res.json())
    .then((data) => {
      document.getElementById("idea").textContent = data.activity;
      document.body.classList.add("fun");
      document.getElementById("title").textContent = " 🌻 Happy Elene 🌻";
    });
}

document
  .getElementById("bored-button")
  .addEventListener("click", getActivityIdea);
