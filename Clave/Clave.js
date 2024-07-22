window.onload = init;

function init(){
    const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    numbers.sort(() => Math.random() - 0.5);

    const Password_Element = document.getElementById("password");
    const Number_Box = document.getElementById("number_box");

    Number_Box.addEventListener("mouseover", (e) => {
        assignNumbers(numbers);
    })

    Number_Box.addEventListener("mouseout", (e) => {
        assignCharacters()
    })

    Number_Box.addEventListener("click", (e) => {
        if (e.target.className === "key") {
            Password_Element.value += e.target.value;
        } else if (e.target.id === "delete") {
            Password_Element.value = "";
        }
    })

    function assignNumbers(numbers) {
        for (let i = 0; i < 10; i++) {
            document.getElementById(i+"").value = numbers[i];
        }
    }

    function assignCharacters() {
        for (let i = 0; i < 10; i++) {
            document.getElementById(i+"").value = "*";
        }
    }

}

