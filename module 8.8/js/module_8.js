const button = document.querySelector('.btn');
const list = document.querySelector('.pics');
const url = "https://jsonplaceholder.typicode.com/photos?_start=0&_limit=10";
let mask = document.querySelector(".mask");

button.addEventListener("click", () => {
  getImages();
});

function getImages() {
  // Показать маску перед загрузкой
  mask.classList.remove("hide");

  fetch(url)
    .then((res) => res.json())
    .then((res) => {
      for (let i = 0; i < res.length; i++) {
        list.innerHTML += `
        <li>
          <img src="${res[i].url}" alt="images" class="img" width="100"> 
        </li>
        `;
      }
    })
    .finally(() => {
      // Скрываем маску после того, как изображения загружены
      hideMask();
    });
}

window.addEventListener("load", () => {
  hideMask();  // Скроем маску при полной загрузке страницы
});

function hideMask() {
  // Добавляем класс для скрытия маски
  mask.classList.add("hide");
}
