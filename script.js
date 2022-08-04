const hamburguer = document.querySelector('.menu');
const navMenu = document.querySelector('.list');
const icons = document.querySelectorAll('.menu-icon');
const hamburguerIcon = document.querySelector('#hamburguer');
const demoContainer = document.querySelector('.about-me');
const startBody = document.querySelector('.about-me');
const backdrop = document.createElement('section');
const modal = document.createElement('div');
const form = document.querySelector('#form');
const email = document.querySelector('.email');
const error = document.querySelector('.error');
const worksImages = ['images/projects.png', 'images/project3.jpg', 'images/project4.png', 'images/project5.png', 'images/project6.png', 'images/project7.jpg'];
const workTitle = ['Conference Page', 'Pokemon App', 'Book Store', 'Metrics WebApp', 'Recipe App', 'Budget App'];
const firstwork = {
  title: 'Conference Page',
  technologies: ['CSS', 'html', 'JavaScript', 'Ruby'],
  description: 'In this project, I build a web page with desktop and mobile versions for a conference using HTML, CSS, and JavaScript.',
  image: 'images/projects.svg',
  liveButton: 'https://alexr16.github.io/Conference-page/',
  sourceButton: 'https://github.com/Alexr16/Conference-page',
};

const worksPopup = {
  title: 'Keeping track of hundreds of components website',
  technologies: [['CSS', 'html', 'JavaScript'], ['html', 'SASS', 'JavaScript'], ['React', 'SASS', 'Redux'], ['React', 'SASS', 'Redux'], ['Ruby', 'SASS', 'Ruby on Rails'], ['Ruby', 'SASS', 'Ruby on Rails']],
  description: ['In this project, I build a web page with desktop and mobile versions for a conference using HTML, CSS, and JavaScript.', 'In this project, I built a mobile and desktop version APP showing information about pokemon monsters fetched from PokeAPI.', 'In this project I build a "Awesome Books" App that allows users to add a book, remove selected book, and display a list of books.', 'In this project I built a mobile web application to check a list of countries COVID status making use of React and Redux.', 'The Recipe app keeps track of all your recipes, ingredients, and inventory. It will allow you to save ingredients, keep track of what you have, create recipes, and generate a shopping list based on what you have and what you are missing from a recipe. Also, since sharing recipes is an important part of cooking the app should allow you to make them public so anyone can access them.', 'Mobile web application where you can manage your budget: you have a list of transactions associated with a category, so that you can see how much money you spent and on what.'],
  short_des: ['kjhghjk', 'Mobile and desktop version APP showing information about pokemon.', 'In this project I build a "Awesome Books" App ', 'Mobile web application to check countries COVID status.', 'The Recipe app keeps track of all your recipes, ingredients, and inventory.', 'Mobile web application where you can manage your budget.'],
  liveButton: ['https://alexr16.github.io/Conference-page/', 'https://alexr16.github.io/Pokemon-App/', 'https://isnt-alexr16-awesome.netlify.app/', 'https://deploy-preview-3--super-cool-site-by-alexr16.netlify.app/', 'https://calm-mountain-98535.herokuapp.com/', 'https://glacial-waters-55756.herokuapp.com'],
  sourceButton: ['https://github.com/Alexr16/Conference-page', 'https://github.com/Alexr16/Pokemon-App', 'https://github.com/Alexr16/BookStore', 'https://github.com/Alexr16/Metrics-webapp', 'https://github.com/Retky/RecipeApp', 'https://github.com/Alexr16/Budget-app'],
  cards: ['first-card', 'card2', 'card3', 'card4', 'card5', 'card6'],
  imageCard: ['card1', 'card2', 'card3', 'card4', 'card5', 'card6'],
  image: 'images/project1.svg',
};

hamburguer.addEventListener('click', () => {
  navMenu.classList.toggle('active');
  icons.forEach((icon) => {
    icon.classList.toggle('close-menu');
  });
  document.querySelector('body').classList.toggle('overflow-hidden');
});

document.querySelectorAll('.item').forEach((n) => n.addEventListener('click', () => {
  icons.forEach((icon) => {
    icon.classList.add('close-menu');
  });
  hamburguerIcon.classList.remove('close-menu');
  navMenu.classList.toggle('active');
  document.querySelector('body').classList.toggle('overflow-hidden');
}));

form.addEventListener('submit', (event) => {
  if (email.value.length === 0 || email.value !== email.value.toLowerCase()) {
    event.preventDefault();
    error.classList.remove('hidde-span');
    error.textContent = 'The email field should be in lower case';
  } else {
    error.textContent = '';
    error.classList.add('hidde-span');
    localStorage.clear();
  }
});

const userData = {};
function saveData(userData) {
  const fullNameForm = document.getElementById('full-name').value;
  const emailForm = document.getElementById('email').value;
  const messageForm = document.getElementById('message').value;
  userData = {
    'full-name': fullNameForm,
    email: emailForm,
    message: messageForm,
  };
  localStorage.setItem('user', JSON.stringify(userData));
  let dataRecord = [];
  dataRecord = JSON.parse(localStorage.getItem('dataUser'));
  dataRecord.push({
    fullName: fullNameForm,
    email: emailForm,
    message: messageForm,
  });
  localStorage.setItem('dataUser', JSON.stringify(dataRecord));
}

form.addEventListener('change', () => {
  saveData(userData);
});

window.addEventListener('load', () => {
  const storage = JSON.parse(localStorage.getItem('user'));
  if (storage) {
    Object.entries(storage).forEach((inputForm) => {
      const [key, value] = inputForm;
      document.getElementById(key).value = value;
    });
  }
});

function closeModal() {
  document.querySelector('body').classList.toggle('overflow-hidden-popup');
  if (backdrop) {
    backdrop.remove();
  }
  if (modal) {
    modal.remove();
  }
}

function popupWindow(image, workTitle, technologies, description, liveButton, sourceButton) {
  modal.classList.add('modal');
  modal.innerHTML = `
          <button class="close-icon close-popup" type="button"><img class="close-popup" src="images/X.svg" alt="Close Popup"></button>
          <div class="popup-title">
              <h2 class="title-pop">${workTitle}</h2>
          </div>
          <div class="tag-container popup-container">
              <ul class="tags-container">
                  <li class="tag">${technologies[0]}</li>
                  <li class="tag">${technologies[1]}</li>
                  <li class="tag">${technologies[2]}</li>
              </ul>
          </div>
          <div class="popup-work">
              <img class="popup-images" src="${image}" alt="Project Image">
              <div class="cont">
                  <div class="popup-paragraph">
                      <p class="pop-paragraph">${description}</p>
                  </div>
                  <div class="popup-buttons">
                      <button class="button button-projects" type="button"><a class="link-popup-button" href="${liveButton}" aria-label="Live view project">See live <img class="icon-popup-button" src="images/Icon-see-live.svg" alt="live icon"></a></button>
                      <button class="button button-projects" type="button"><a class="link-popup-button" href="${sourceButton}" aria-label="Jorge's github account">See Source<img class="icon-popup-button" src="images/icon-source.svg" alt="sourceicon"></a></button>
                  </div>
              </div>
          </div>
  `;
  backdrop.appendChild(modal);
  const closePopup = document.querySelector('.close-popup');
  closePopup.addEventListener('click', closeModal);
  document.querySelector('body').classList.toggle('overflow-hidden-popup');
}

const sectionWorks = document.createElement('section');
sectionWorks.classList.add('works');
sectionWorks.id = 'works-link';
document.body.insertBefore(sectionWorks, startBody);

const worksGeneralTitle = document.createElement('div');
worksGeneralTitle.classList.add('works-title');
sectionWorks.appendChild(worksGeneralTitle);

const generalTitle = document.createElement('h3');
generalTitle.classList.add('work-title');
generalTitle.textContent = 'My Recent Works';
worksGeneralTitle.appendChild(generalTitle);

const lineTitle = document.createElement('hr');
lineTitle.classList.add('work-line-title');
worksGeneralTitle.appendChild(lineTitle);

const cardWorks = document.createElement('div');
cardWorks.classList.add('card-works');
sectionWorks.append(cardWorks);

const initialSection = document.createElement('div');
initialSection.classList.add('initial-section');
cardWorks.appendChild(initialSection);

const principalImage = document.createElement('div');
principalImage.classList.add('principal-image');
initialSection.appendChild(principalImage);

const content = document.createElement('div');
content.classList.add('content');
initialSection.appendChild(content);

const headerContent = document.createElement('h3');
headerContent.classList.add('header-content');
headerContent.textContent = 'Multi-Post Stories';
content.appendChild(headerContent);

const contentParagraph = document.createElement('p');
contentParagraph.classList.add('content-paragraph');
contentParagraph.textContent = firstwork.description;
content.appendChild(contentParagraph);

const tagcontainer = document.createElement('div');
tagcontainer.classList.add('tag-container');
content.appendChild(tagcontainer);

const ulTagsContainer = document.createElement('ul');
ulTagsContainer.classList.add('tags-container');
tagcontainer.appendChild(ulTagsContainer);

for (let j = 0; j < 4; j += 1) {
  const tagListFirst = document.createElement('li');
  tagListFirst.classList.add('tag');
  tagListFirst.textContent = firstwork.technologies[j];
  ulTagsContainer.appendChild(tagListFirst);
}

const buttonFirstProject = document.createElement('button');
buttonFirstProject.classList.add('button');
buttonFirstProject.classList.add('button-projects');
buttonFirstProject.setAttribute('type', 'button');
buttonFirstProject.textContent = 'See Project';
content.appendChild(buttonFirstProject);

const projectCards = document.createElement('div');
projectCards.classList.add('project-cards');
cardWorks.appendChild(projectCards);

for (let i = 0; i < 6; i += 1) {
  const cardsWork = document.createElement('div');
  cardsWork.className = worksPopup.cards[i];
  projectCards.appendChild(cardsWork);

  const cardImage = document.createElement('img');
  cardImage.className = worksPopup.imageCard[i];
  cardImage.src = worksImages[i];

  if (i !== 0) {
    const cardContent = document.createElement('div');
    cardContent.classList.add('card-content');
    cardsWork.appendChild(cardContent);

    const cardTitle = document.createElement('h5');
    cardTitle.textContent = workTitle[i];
    cardContent.appendChild(cardTitle);

    const cardParagraph = document.createElement('p');
    cardParagraph.classList.add('content-paragrap');
    cardParagraph.textContent = worksPopup.short_des[i];
    cardContent.appendChild(cardParagraph);

    const cardInfo = document.createElement('div');
    cardInfo.classList.add('card-info');
    cardsWork.appendChild(cardInfo);

    const tagsCard = document.createElement('ul');
    tagsCard.classList.add('tags-container2');
    cardInfo.appendChild(tagsCard);

    for (let j = 0; j < 3; j += 1) {
      const tagList = document.createElement('li');
      tagList.classList.add('tag');
      tagList.textContent = worksPopup.technologies[i][j];
      tagsCard.appendChild(tagList);
    }

    const seeProject = document.createElement('div');
    seeProject.classList.add('card-button');
    cardsWork.appendChild(seeProject);

    const seeProjectButton = document.createElement('button');
    seeProjectButton.classList.add('button');
    seeProjectButton.classList.add('button-display');
    seeProjectButton.classList.add('button-projects');
    seeProjectButton.setAttribute('type', 'button');
    seeProjectButton.textContent = 'See Project';
    seeProject.appendChild(seeProjectButton);

    seeProjectButton.addEventListener('click', () => {
      backdrop.classList.add('backdrop');
      document.body.insertBefore(backdrop, demoContainer);
      popupWindow(worksImages[i], workTitle[i], worksPopup.technologies[i], worksPopup.description[i],
        worksPopup.liveButton[i], worksPopup.sourceButton[i]);
    });

    cardContent.addEventListener('click', () => {
      backdrop.classList.add('backdrop');
      document.body.insertBefore(backdrop, demoContainer);
      popupWindow(worksImages[i], workTitle[i], worksPopup.technologies[i], worksPopup.description[i],
        worksPopup.liveButton[i], worksPopup.sourceButton[i]);
    });
  }

  if (i === 0) {
    const seeProjectFirst = document.createElement('div');
    seeProjectFirst.classList.add('card-content-first');
    cardsWork.appendChild(seeProjectFirst);

    const buttonFirstCard = document.createElement('button');
    buttonFirstCard.classList.add('button');
    buttonFirstCard.classList.add('button-first-card');
    buttonFirstCard.setAttribute('type', 'button');
    buttonFirstCard.textContent = 'See Project';
    seeProjectFirst.appendChild(buttonFirstCard);
    buttonFirstCard.addEventListener('click', () => {
      backdrop.classList.add('backdrop');
      document.body.insertBefore(backdrop, demoContainer);
      popupWindow(worksImages[i], workTitle[i], worksPopup.technologies[i], worksPopup.description[i],
        worksPopup.liveButton[i], worksPopup.sourceButton[i]);
    });
  }
}

buttonFirstProject.addEventListener('click', () => {
  backdrop.classList.add('backdrop');
  document.body.insertBefore(backdrop, demoContainer);
  popupWindow(firstwork.image, firstwork.title, firstwork.technologies, firstwork.description,
    firstwork.liveButton, worksPopup.sourceButton);
});
