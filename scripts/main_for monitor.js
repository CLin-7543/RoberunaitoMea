const RoberunaitoMeaImage = document.querySelector("img");
    RoberunaitoMeaImage.onclick = () => {
    const mySrc = RoberunaitoMeaImage.getAttribute("src");
    if (mySrc === "images/RoberunaitoMea_002_400x282.png") {
        RoberunaitoMeaImage.setAttribute("src", "images/RoberunaitoMea_001_400x400.jpg");
    } else {
        RoberunaitoMeaImage.setAttribute("src", "images/RoberunaitoMea_002_400x282.png");
    }
};

let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

function setUserName() {
    const myName = prompt("Please enter your name.");
    localStorage.setItem("name", myName);
    myHeading.textContent = `Welocome to view RoberunaitoMea, ${myName}`;
  }

myButton.onclick = function () {
    setUserName();
};

function setUserName() {
    const myName = prompt("Please enter your name.");
    if (!myName) {
      setUserName();
    } else {
      localStorage.setItem("name", myName);
      myHeading.textContent = `ロベルないとめあはおもろいね！, ${myName}`;
    }
}
  


if (!localStorage.getItem("name")) {
    setUserName();
  } else {
    const storedName = localStorage.getItem("name");
    myHeading.textContent = `Welocome to view RoberunaitoMea, ${storedName}`;
}
