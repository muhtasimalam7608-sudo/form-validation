# form-validation

let clock = document.getElementById("clock");

setInterval(() => {
    let d = new Date()
    clock.innerHTML = d.toLocaleString()
}, 1000)
