import throttle from 'lodash.throttle';
const refs = {
  formElem: document.querySelector('.feedback-form'),
};

refs.formElem.addEventListener('input', throttle(onFormElemInput, 500));
refs.formElem.addEventListener('submit', onFormElemSubmit);

loadPage();

function onFormElemSubmit(e) {
  e.preventDefault();

  const data = loadToLS('feedback-form-state');
  localStorage.removeItem('feedback-form-state');
  e.target.reset();
  console.log(data);
}

function onFormElemInput(e) {
  const userData = {};
  const formData = new FormData(refs.formElem);
  formData.forEach((value, key) => {
    userData[key] = value;
  });
  saveToLS('feedback-form-state', userData);
}

function loadPage() {
  const data = loadToLS('feedback-form-state');
  console.log(data);
  for (const key of Object.keys(data)) {
    refs.formElem.elements[key].value = data[key];
  }
}

function saveToLS(key, value) {
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch (error) {
    console.log(error.message);
  }
}
function loadToLS(key) {
  try {
    return JSON.parse(localStorage.getItem(key)) || {};
  } catch (error) {
    console.log(error.message);
    return localStorage.getItem(key);
  }
}
