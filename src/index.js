import "./styles/style.css";
const container = document.getElementById("container");
const modal = document.querySelector(".modal");
import closeIcon from "./images/close-circle.png";
const closeBtn = document.createElement("button");
const closeImg = document.createElement("img");

closeImg.src = closeIcon;

closeBtn.innerHTML = closeBtn;
closeBtn.classList = "closeBtn";

modal.innerHTML = closeBtn;

modal.classList.add("hide");
import images from "./js/images";

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
    modal.classList.remove("hide");
    modal.classList.add("show");
    console.log("Image clicked", index);
  });
});

console.log("Welcome to the Webpack 4 Starter!");
