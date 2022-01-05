import throttle from 'lodash.throttle';
import { jsonParceWhereStorage } from './module/jsonParceWhereStorage ' // модуль парса JSON ил localStorage
import { objData } from './module/objData' // Объект хранения данных из формы

const form = document.querySelector('.feedback-form')
const emailInput = document.querySelector('.feedback-form input')
const textAreaInput = document.querySelector('.feedback-form textarea')

form.addEventListener('submit', onsubForm)
emailInput.addEventListener('input', throttle(onGetObj, 500))
textAreaInput.addEventListener('input', throttle(onGetObj, 500))

const statusStorage = jsonParceWhereStorage("feedback-form-state") // Записывает результат парса JSON в переменную

if(statusStorage){                                                 // Если true, то показываем в полях данные из localStorage
    emailInput.value = statusStorage.email;
    textAreaInput.value = statusStorage.message;
}

function onsubForm(event){                                         // метод при submit`e 
    event.preventDefault()
    event.target.reset()
    localStorage.removeItem("feedback-form-state")
    console.log(objData)
}

function onGetObj(event){                                          // Добавляется в объект ключ и новое значение 
    objData[event.target.name] = event.target.value
    objData[event.target.name] = event.target.value
    localStorage.setItem("feedback-form-state", JSON.stringify(objData))
 
}



