const apiKey = 'UxfSEhDor1r1v1sLqoxWvXTZJ7VwuhQUX1VyBCUjg_g';
const urlDef = `https://api.unsplash.com/search/photos?per_page=30&orientation=landscape&client_id=${apiKey}&query=js`;
const urlSearch = `https://api.unsplash.com/search/photos?per_page=30&orientation=landscape&client_id=${apiKey}&query=`;


async function getData(url) {
  const res = await fetch(url);
  const resData = await res.json();

  showDate(resData)
}

getData(urlDef);

/*------------SHOW IMAGES---------------------------------------*/

function showDate(data) {
  document.querySelector('.main__grid').innerHTML = '';
  data.results.map(item => createImages(item));
}

/*------------CREATE IMAGES-------------------------------------*/

function createImages(elem) {
  const mainGrid = document.querySelector('.main__grid');
  const div = document.createElement('div');
  const text = document.createElement('p')

  div.classList.add('main-img')
  div.style.backgroundImage = `url(${elem.urls.regular})`;

  text.classList.add('main-text')
  text.innerHTML = `Photo author: ${elem.user.name}`;

  div.appendChild(text);
  mainGrid.appendChild(div);
}

/*------------EVENT LISTENER------------------------------------*/

const form = document.querySelector('form');
const searchInp = document.querySelector('.search__inp');
const searchBtn = document.querySelector('.search__btn');

form.addEventListener('submit', item => {
  const UrlApiSearch = `${urlSearch}${searchInp.value}`;

  if (searchInp.value) {
    getData(UrlApiSearch);
  }
})

searchBtn.addEventListener('clic', item => {
  const UrlApiSearch = `${urlSearch}${searchInp.value}`;

  if (searchInp.value) {
    getData(UrlApiSearch);
  }
})

/// кнопка крестик для очистки содержимого нужно интегрироваь себе в программу
cls.addEventListener('click', () => {
  input.value = '';
  input.focus();
  cls.classList.remove('active');
});

console.log('Score 60/60\n\n - Вёрстка +10\n\n - При загрузке приложения на странице отображаются полученные от API изображения +10\n\n - На странице отобразятся изображения соответствующей тематики +10\n\n - Поиск +30\n\n - Очень высокое качество оформления приложения +5')