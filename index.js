let div = document.createElement("div");
document.body.prepend(div);
console.log(div.parentNode);
div.textContent = "Мое первое приложение";
//div.innerHTML = "Это текст с <b>innerHTML</b>";
div.id = "app";
div.classList.add("title");
div.style.backgroundColor = "grey";

document.addEventListener("DOMContentLoaded", () => {
    const button = document.createElement("button")
    button.style.display = "block"
    button.classList.add("increment-button");
    let count = 0
    function increment() {
        button.textContent = count++
    }
    increment()
    button.addEventListener("click", increment)
    document.body.append(button)
 });

//сделать всем дивам на странице рамку заданного цвета

 const allDiv = document.querySelectorAll("div")
 for (const div of allDiv) {
    div.style.border = "1px solid blue"
 }

  //Анонимные функции
(function() {
    window.hi = function() {
    console.log("Привет");
    }
 })()
 hi();

 
 //TODO-LIST

(function(){
    function createTodoApp() {
        console.log('Todo-App');
    }
    window.createTodoApp = createTodoApp; 
})()

document.addEventListener("DOMContentLoaded", function() {
createTodoApp();
});

 // клиент-серверное взаимодействие
 //const response = await fetch("https://gorest.co.in/public/v2/posts")
 //const data = await response.json()
 //console.log(data);



