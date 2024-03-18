import "./styles/style.css";
import images from "./js/images";
const container = document.getElementById("container");
const modal = document.querySelector(".modal");
import closeIcon from "./images/close-circle.png";
const closeBtn = document.createElement("button");
const closeImg = document.createElement("img");
const lightBox = document.createElement("div");
const lightBoxImg = document.createElement("img");

closeImg.src = closeIcon;
closeBtn.classList = "closeBtn";
closeBtn.appendChild(closeImg);
lightBox.classList = "lightBox";
lightBoxImg.classList = "lightBoxImg";
lightBox.appendChild(lightBoxImg);

modal.append(closeBtn, lightBox);

modal.classList.add("hide");

const toggleModal = () => {
  if (modal.classList.contains("hide")) {
    modal.classList.remove("hide");
    modal.classList.add("show");
  } else {
    modal.classList.remove("show");
    modal.classList.add("hide");
  }
};

closeBtn.addEventListener("click", () => {
  toggleModal();
});

for (let i = 0; i < images.length; i++) {
  const img = document.createElement("img");
  img.src = images[i];
  img.className = "image";
  const div = document.createElement("div");
  div.appendChild(img);
  container.appendChild(div);
}

const renderedImages = document.querySelectorAll(".image");
renderedImages.forEach((image, index) => {
  image.addEventListener("click", () => {
    toggleModal();
    lightBoxImg.src = images[index];
    console.log("Image clicked", index);
  });
});

console.log("Welcome to the Webpack I hope you enjoy your stay");
