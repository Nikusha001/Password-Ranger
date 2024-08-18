let parameters = {
    count: false,
    letters: false,
    number: false,
    special: false,
};

let strengthBar = document.getElementById("strength-bar");
let msg = document.getElementById("msg");

function strengthChecker() {
    let password = document.getElementById("password").value;

    parameters.letters = /[A-Za-z]/.test(password);
    parameters.number = /[0-9]/.test(password);
    parameters.special = /[!@#$%^&*()_+{}\[\]:;"'<>,.?~`]/.test(password);
    parameters.count = password.length > 7;

    let barLength = Object.values(parameters).filter(value => value).length;

    strengthBar.innerHTML = "";
    for (let i = 0; i < barLength; i++) {
        let span = document.createElement("span");
        span.classList.add("strength");
        strengthBar.appendChild(span);
    }

    let spanRef = document.getElementsByClassName("strength");
    for (let i = 0; i < spanRef.length; i++) {
        switch (spanRef.length) {
            case 1:
                spanRef[i].style.backgroundColor = "#ff3e36";
                msg.textContent = "Your password is very weak";
                break;
            case 2:
                spanRef[i].style.backgroundColor = "#ff691f";
                msg.textContent = "Your password is weak";
                break;
            case 3:
                spanRef[i].style.backgroundColor = "#ffda36";
                msg.textContent = "Your password is good";
                break;
            case 4:
                spanRef[i].style.backgroundColor = "#0b3881";
                msg.textContent = "Your password is excellent";
                break;
        }
    }
}

function toggle() {
    let password = document.getElementById("password");
    let eye = document.getElementById("toggle");

    if (password.getAttribute("type") === "password") {
        password.setAttribute("type", "text");
        eye.innerHTML = '<i class="fa-solid fa-eye"></i>';
    } else {
        password.setAttribute("type", "password");
        eye.innerHTML = '<i class="fa-solid fa-lock"></i>';
    }
}
