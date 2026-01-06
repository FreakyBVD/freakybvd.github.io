const pfp = document.querySelector(".card .title .pfp img");
const statusIndicator = document.querySelector(".card .title .pfp .status");
const letters = document.querySelectorAll(".card .title h1 span");
const subCountPfp = document.getElementById("subCountPfp");
const subCounter = document.getElementById("subCounter");

// animation stuffs

pfp.addEventListener("mouseenter", () => {
  pfp.classList.add("animate");
});
pfp.addEventListener("animationend", () => {
  pfp.classList.remove("animate");
});

letters.forEach((letter) => {
  letter.addEventListener("mouseenter", () => {
    letter.classList.add("animate");
  });
  letter.addEventListener("animationend", () => {
    letter.classList.remove("animate");
  });
});

// lanyard

fetch("https://api.lanyard.rest/v1/users/902294338283929611", {
  method: "GET",
})
  .then(function (response) {
    return response.json();
  })
  .then(function (json) {
    discordStatus = json.data.discord_status;
    statusIndicator.classList.add(discordStatus);
    statusIndicator.title = discordStatus;
  });

// sub count

function getSubCount() {
  fetch(
    "https://backend.mixerno.space/api/youtube/estv3/UCPW_cNzrDSf0xejLOKvV7Cg",
    {
      method: "GET",
    }
  )
    .then(function (response) {
      return response.json();
    })
    .then(function (json) {
      profilePicture = json.items[0].snippet.thumbnails.default.url;
      subCount = json.items[0].statistics.subscriberCount;
      subCountPfp.src = profilePicture;
      subCounter.innerHTML = subCount;
    });
}

getSubCount();

setInterval(() => {
  getSubCount();
}, 3000);
