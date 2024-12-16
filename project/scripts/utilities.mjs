// import * as fs from 'node:fs/promises';
// import path from 'node:path';

export function qs(selector, parent = document) {
    return parent.querySelector(selector);
}

// set an event listener for click and touchend events
export function setClick(selector, callback) {
    qs(selector).addEventListener("touchend", (event) => {
        event.preventDefault();
        callback();
    });
    qs(selector).addEventListener("click", callback);
}

export function renderListWithTemplate(templateFn, parentElement, list, position = "afterbegin", clear = false) {
    const htmlList = list.map(templateFn)
    if (clear == true) {
        parentElement.innerHTML = ""
    }
    parentElement.insertAdjacentHTML(position, htmlList.join(""))
}

// display an alert message at the top of the page
export function alertMessage(message, scroll=true) {
  const alert = document.createElement('div');
  alert.classList.add("alert")

  alert.innerHTML = `<p>${message}</p> <button>X</button>`

  alert.addEventListener("click", (e) => {
    if (e.target.innerText === "X") {
      main.removeChild(alert)
    }
  })
  const main = document.querySelector('main');
  main.prepend(alert);

  if (scroll) {
    window.scrollTo(0,0)
  }
}

export function convertToJson(res) {
  const jsonResponse = res.json();
  if (res.ok) {
    return jsonResponse
  } else {
    throw {
      name: "servicesError",
      message: jsonResponse
    }
  }
}

export function getLocalStorage(key) {
  return JSON.parse(localStorage.getItem(key));
}

export function setLocalStorage(key, data) {
  localStorage.setItem(key, JSON.stringify(data));
}