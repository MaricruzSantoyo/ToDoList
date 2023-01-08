function addToList(event) {
    let input = document.getElementById("todo").value;
    let ul = document.getElementById("tdlist");

    let newLi = document.createElement("li");
    newLi.textContent = input;
    ul.append(newLi);

    todo.value = "";
    
    newLi.addEventListener('click', function () {
        newLi.style.textDecoration = "line-through";
    })

    newLi.addEventListener('dblclick', function () {
        newLi.remove();
    })
};

let button = document.getElementById("tdbutton");

button.addEventListener("click", addToList);

