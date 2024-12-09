export function qs(selector, parent = document) {
    return parent.querySelector(selector);
}

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