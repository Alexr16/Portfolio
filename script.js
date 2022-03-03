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
const worksImages = ['images/project2.svg', 'images/project3.svg', 'images/project4.svg', 'images/project5.svg', 'images/project3.svg', 'images/project4.svg'];
const workTitle = ['Portfolio', 'Data Dashboard Healthcare', 'Website Protfolio', 'Profesional Art Printing Data More', 'Data Dashboard Healthcare', 'Website Protfolio'];
const firstwork = {
  technologies: ['css', 'html', 'Bootstrap', 'Ruby'],
  description: 'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry`s standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.',
  image: 'images/projects.svg',
};

const worksPopup = {
  title: 'Keeping track of hundreds of components website',
  technologies: ['html', 'Bootstrap', 'Ruby'],
  description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry´s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry´s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releax map lapora verita.',
  liveButton: 'https://',
  sourceButton: 'https://',
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

let userData = {};
function saveData(userData) {
  const fullNameForm = document.getElementById('full-name').value;
  const emailForm = document.getElementById('email').value;
  const messageForm = document.getElementById('message').value;
  userData = {
    'full-name': fullNameForm,
    email: emailForm,
    message: messageForm,
  }
  localStorage.setItem('user', JSON.stringify(userData));
  let dataRecord = new Array();
  dataRecord = JSON.parse(localStorage.getItem('dataUser'))?JSON.parse(localStorage.getItem('dataUser')):[];
  dataRecord.push({
    'fullName': fullNameForm,
    'email': emailForm,
    'message': messageForm,
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

function popupWindow(image, workTitle) {
  modal.classList.add('modal');
  modal.innerHTML = `
          <button class="close-icon close-popup" type="button"><img class="close-popup" src="images/X.svg" alt="Close Popup"></button>
          <div class="popup-title">
              <h2 class="title-pop">${workTitle}</h2>
          </div>
          <div class="tag-container popup-container">
              <ul class="tags-container">
                  <li class="tag">${worksPopup.technologies[0]}</li>
                  <li class="tag">${worksPopup.technologies[1]}</li>
                  <li class="tag">${worksPopup.technologies[2]}</li>
              </ul>
          </div>
          <div class="popup-work">
              <img class="popup-images" src="${image}" alt="Project Image">
              <div class="cont">
                  <div class="popup-paragraph">
                      <p class="pop-paragraph">${worksPopup.description}</p>
                  </div>
                  <div class="popup-buttons">
                      <button class="button button-projects" type="button"><a class="link-popup-button" href="${worksPopup.liveButton}" aria-label="Live view project">See live <img class="icon-popup-button" src="images/Icon-see-live.svg" alt="live icon"></a></button>
                      <button class="button button-projects" type="button"><a class="link-popup-button" href="${worksPopup.sourceButton}" aria-label="Jorge's github account">See Source<img class="icon-popup-button" src="images/icon-source.svg" alt="sourceicon"></a></button>
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
    cardParagraph.textContent = 'A  daily selection of privately personalized reads; no accounts or sign-ups required. has been the industrys standard';
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
      tagList.textContent = worksPopup.technologies[j];
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
      popupWindow(worksImages[i], workTitle[i]);
    });

    cardContent.addEventListener('click', () => {
      backdrop.classList.add('backdrop');
      document.body.insertBefore(backdrop, demoContainer);
      popupWindow(worksImages[i], workTitle[i]);
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
      popupWindow(worksImages[i], workTitle[i]);
    });
  }
}

buttonFirstProject.addEventListener('click', () => {
  backdrop.classList.add('backdrop');
  document.body.insertBefore(backdrop, demoContainer);
  popupWindow(firstwork.image, worksPopup.title);
});
