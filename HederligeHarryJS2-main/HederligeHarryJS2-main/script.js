// code to make the email input go into the console
const contactButton = document.getElementById("button-contact");
let emailInput = document.getElementById('input-email');

contactButton.addEventListener("click", function(event) {
    event.preventDefault();
    let emailValue = emailInput.value;
    console.log("E-post: " + emailValue);
});

/* // code for the p function
let createParagraph = function(text) {
    const paragraph = document.createElement("p");
    const node = document.createTextNode("This is new.");
    paragraph.appendChild(node);
    
    const element = document.getElementById("contact__form__box");
    element.appendChild(paragraph);
} */

// Funktion för att skapa en <p>-tag med given text
function createParagraph(text) {
    var paragraph = document.createElement("p");  // Skapa en <p>-tag
    paragraph.textContent = text;  // Ange texten för <p>-taggen
    return paragraph;  // Returnera den skapade <p>-taggen
}

// Funktion för att anropa createParagraph och skriva resultatet till console.log vid varje ändring på "phone"
function handlePhoneChange() {
    var phoneValue = document.getElementById("contact__form__box__input").value;  // Hämta värdet från "phone"
    var paragraphTag = createParagraph(phoneValue);  // Anropa createParagraph med värdet från "phone"
    console.log(paragraphTag.outerHTML);  // Skriv den skapade <p>-taggen till console.log
}

// Lyssna på ändringar på "phone" och anropa handlePhoneChange vid varje ändring
document.getElementById("contact__form__box__input").addEventListener("input", handlePhoneChange);
