let username = document.getElementById("username")
let nameError = document.getElementById("nameError")

let email = document.getElementById("email")
let emailError = document.getElementById("emailError")

let address = document.getElementById("address")
let addressError = document.getElementById("addressError")

let message = document.getElementById("message")
let messageError = document.getElementById("messageError")

let contactForm = document.getElementById("contactForm")

console.log(username)

username.addEventListener("blur", () => {
    if (username.value === "") {
        nameError.textContent = "Name is required"
    } else {
        nameError.textContent = ""
    }
})

email.addEventListener("blur", () => {
    if (email.value === "") {
        emailError.textContent = "Email is required"
    } else {
        emailError.textContent = ""
    }
})


address.addEventListener("blur", () => {
    if (address.value === "") {
        addressError.textContent = "Address is required"
    } else {
        addressError.textContent = ""
    }
})

message.addEventListener("blur", () => {
    if (message.value === "") {
        messageError.textContent = "Message is required"
    } else {
        messageError.textContent = ""
    }
})


username.addEventListener("input", () => {
    if (username.value === "") {
        nameError.textContent = "Name is required"
    } else {
        nameError.textContent = ""
    }
})

email.addEventListener("input", () => {
    if (email.value === "") {
        emailError.textContent = "Email is required"
    } else {
        emailError.textContent = ""
    }
})


address.addEventListener("input", () => {
    if (address.value === "") {
        addressError.textContent = "Address is required"
    } else {
        addressError.textContent = ""
    }
})

message.addEventListener("input", () => {
    if (message.value === "") {
        messageError.textContent = "Message is required"
    } else {
        messageError.textContent = ""
    }
})


contactForm.addEventListener("submit", (e) => {
    e.preventDefault()
    let check = true;

    if (username.value === "") {
        nameError.textContent = "Name is required"
        check = false
    } else {
        nameError.textContent = ""
    }


    if (email.value === "") {
        emailError.textContent = "Email is required"
        check = false
    } else {
        emailError.textContent = ""
    }

    if (address.value === "") {
        addressError.textContent = "Address is required"
        check = false
    } else {
        addressError.textContent = ""
    }

    if (message.value === "") {
        messageError.textContent = "Message is required"
        check = false
    } else {
        messageError.textContent = ""
    }


    if (check) {
        alert("Your form is successfully submited")
    }

    contactForm.reset()
})