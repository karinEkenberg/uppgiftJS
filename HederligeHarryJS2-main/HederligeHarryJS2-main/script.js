// code to make the email input go into the console
const contactButton = document.getElementById("button-contact");
let emailInput = document.getElementById('input-email')
contactButton.addEventListener("click", function(event) {
    event.preventDefault();
    let emailValue = emailInput.value;
    console.log("E-post: " + emailValue);
});

// code for the p function
let createParagraph = function(text){
    const phoneInput = document.getElementById("input-phone");
    const inputText = text || phoneInput.value;
    const createP = document.createElement("p");
    createP.innerText = inputText;
    phoneInput.appendChild(createP);
    console.log('mobil: ' + inputText)
}
createParagraph()
