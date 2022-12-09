const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let generatePassword = document.querySelector("#generate")

generatePassword.addEventListener('click', function() {
    let firstGeneratedPassword = '', secondGeneratedPassword = ''
    for (let i = 0; i < 15; i++) {
        firstGeneratedPassword += characters[Math.floor(Math.random() * characters.length)]
        secondGeneratedPassword += characters[Math.floor(Math.random() * characters.length)]
    }
    document.querySelector("#generated1").textContent = firstGeneratedPassword
    document.querySelector("#generated2").textContent = secondGeneratedPassword
})

let passwordContainer = document.querySelector(".password-container")
let nightToggle = document.querySelector(".light-toggle")
let toggleMode = document.querySelector(".toggle-mode")
let passwordContent = document.querySelector(".password-content-description")
let passwordCustomizer = document.querySelector(".password-customizer")
let generatedPassword = document.querySelector(".generated-passwords")
let clipboard = document.querySelector('.clipboard')

nightToggle.addEventListener('click', function() {  
    passwordContainer.classList.toggle("password-container-light-mode")
    toggleMode.classList.toggle("toggle-light-mode")
    nightToggle.classList.toggle("dark-toggle")
    passwordContent.classList.toggle("password-content-description-light-mode")
    // passwordCustomizer.classList.toggle("password-customizer-light-mode")
    generatedPassword.classList.toggle("generated-passwords-light-mode")
    clipboard.classList.toggle('clipboard-light-mode')
})


let randomPassword = document.querySelectorAll(".random-password")
let popUp = document.querySelector(".clipboard")

randomPassword.forEach(function (passwordClipboard) {
    passwordClipboard.addEventListener('click', function (e) {
        navigator.clipboard.writeText(passwordClipboard.innerHTML).then(() => {
           popUp.classList.add('popUp') 
        });
        popUp.classList.remove('popUp')
    })
})
console.log(randomPassword)

