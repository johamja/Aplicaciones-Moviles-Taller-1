window.onload = init;

function init(){
    // Array de valores numericos para asignarle a cada tecla
    const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    numbers.sort(() => Math.random() - 0.5);

    const Password_Element = document.getElementById("password");
    const Delete_Element = document.getElementById("delete");
    const Number_Box = document.getElementById("number_box");


    // Asignacion de numeros aleatorios por tecla
    for (let i = 0; i < 10; i++) {
        document.getElementById(i+"").value = numbers[i];
    }

    // Ingresar valores al input del box
    Number_Box.addEventListener("click", (e) => {
        if (e.target.type === "button" && e.target.id !== "delete"){
            console.log(e.target.value);
            Password_Element.value += e.target.value;
        }
    })

    // Funcion de borrado
    Delete_Element.addEventListener("click", function(){
        Password_Element.value = ""
    })
}

