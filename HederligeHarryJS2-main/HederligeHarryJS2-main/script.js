const contactButton = document.getElementById("button-contact");
let emailInput = document.getElementById('input-email')
const phoneInput = document.getElementById("input-phone");
let swePostalCode = document.getElementById('postal-code')
let addingCars = document.getElementById('products')
contactButton.addEventListener("click", function(event) {
    event.preventDefault();
    let emailValue = emailInput.value;
    console.log("E-post: " + emailValue);
});

let createParagraph = function(text){
    const createP = document.createElement("p");
    createP.textContent = text;
    console.log(createP)
    return createP
}
createParagraph(phoneInput.value)
phoneInput.addEventListener("keyup", () => {createParagraph(phoneInput.value)})

emailInput.addEventListener('input', function() {
    if (emailInput.value.includes('.se')){
        let newDiv = document.createElement('div');
        newDiv.className = 'contact__form__box';
        let newInput = document.createElement('input');
        newInput.placeholder = "Swedish postal code";
        newInput.className = 'bx-code';
        newDiv.appendChild(newInput);
        swePostalCode.parentNode.insertBefore(newDiv, swePostalCode.nextSibling);
        newDiv.style.display = 'block';
    } else {
        swePostalCode.nextSibling.style.display = 'none';
    } 
});

const addCars = function(){
    let car1 = {picUrl: 'https://wordpress.mymoney.se/wp-content/uploads/2019/12/coolaste-bilen-mclaren-senna--1200x900.jpg', picId: '12345', carType: 'Volvo', carYear: '2021', price: '220 000 kr'}
    let car2 = {picUrl: 'https://productimages.biltema.com/v1/image/imagebyfilename/45-8000_xl_1.jpg', picId: '93829', carType: 'Lekisar', carYear: '2023', price: '100 kr'}
    let car3 = {picUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/54/Folkevogn-2001.jpg/250px-Folkevogn-2001.jpg', picId: '8291', carType: 'Bubbla', carYear: '1985', price: '1 000 000 kr'}
    let car4 = {picUrl: 'https://shop14505.sfstatic.io/upload_dir/shop/1/61070.jpg', picId: '92847', carType: 'Barbie Bil', carYear: '2022', price: '400 kr'}
    let car5 = {picUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b4/Audi80-1992.JPG/1200px-Audi80-1992.JPG', picId: '82618', carType: 'Audi 80', carYear: '1986', price: '35 000 kr'}
    let car6 = {picUrl: 'https://rwsadmin.se/wp-content/uploads/2023/03/skoda-fabia-spring-2023.jpg', picId: '73627', carType: 'Citroen', carYear: '2019', price: '120 000 kr'}
    let car7 = {picUrl: 'https://cd.bilsport.se/api/images/0-0-1-1/1980x1320/90b59ce8-00b3-5488-8962-85a3ed8ae054.jpg', picId: '726218', carType: 'Pegaut', carYear: '2000', price: '20 000 kr'}
    let car8 = {picUrl: 'https://d189539ycils2q.cloudfront.net/media/catalog/product/8/1/81474-silverlit-my-first-spinner-car-fra-3-aar.jpg', picId: '827382', carType: 'Plastis', carYear: '1999', price: '55 kr'}
    let car9 = {picUrl: 'https://hitta.bmw.se/_next/image?url=https%3A%2F%2Fprod.cosy.bmw.cloud%2Fministorene%2FcosySec%3FCOSY-EU-100-7331c9Nv2Z7d5yKtHS9P3AKWL2JeiXlPKgpn23HGfvQFV%25255eqKSYpRl6swTHuLQ53RoIBeayVoGN6lVQjvqLFe0R23Ey2od0zuzH6CpLv6FL%25255eqKCGZIDu8jmBd9cvY0lkkIVlyQkc5DnTNK9mlDWLfV91KVZ0pEuTQLy4kT63D%2525ux2YIqdRMA8oEX0GshFWPkIVK9RP%2525AusWpfmJFe0Fwvm8U7Gq7d%2525V6CrmpIUrOrJrUeGw6ZuLwWptYRSJOM67m5VuTJYCygNWC9mlTv0YSeyX324mplTQdjcyH73azDxTi5dnkq83FYzOALU0bnkIFJG4hJABKupcoNFeWS6xHlKMPVY8%2525QWhbNmUFYPo90y7dBbHi4TCEF9%2525wc3lsDiftxdXrLw178zQuvtECUkaQp7slGAlWjCrXpFXMllZQ6KQPxXRaYWanKQ5nmPnR0agOybO5vnvIT9jNSO2B3iDvvIjAD%2525KSQG19mo6&w=3840&q=90', picId: '72637', carType: 'Tesla', carYear: '2021', price: '500 000 kr'}
    let car10 = {picUrl: 'https://image.nyteknik.se/842246.jpg?imageId=842246&panox=0&panoy=0&panow=0&panoh=0&width=1200&height=683', picId: '87822', carType: 'Limo', carYear: '2005', price: '1 450 000 kr'}

    let cars = [car1, car2, car3, car4, car5, car6, car7, car8, car9, car10]
    

    for (let i = 0; i < cars.length; i++) {

        let newCarInfoBox = document.createElement('div');
        newCarInfoBox.className = 'productcard';
        
        let newProductCards = document.createElement('div')
        newProductCards.className = 'productcards';

        let newImage = document.createElement('img');
        newImage.src = cars[i].picUrl;
        newImage.id = cars[i].picId;
        newImage.alt = cars[i].carType;
        newImage.title = cars[i].carYear;
        newImage.classList.add('carImages')
        newCarInfoBox.appendChild(newImage);

        let infoDiv = document.createElement('div')
        infoDiv.classList.add('information') 
        newCarInfoBox.innerHTML += `<p></p>`;
        infoDiv.appendChild(newImage)

        let infoName = document.createElement('div')
        infoName.classList.add('name') 
        newCarInfoBox.innerHTML += `<h3>${cars[i].carType}</h3>`;
        infoName.appendChild(infoDiv)

        let infoDescription = document.createElement('div')
        infoDescription.classList.add('description')
        newCarInfoBox.innerHTML += `<p>${cars[i].carYear}</p>`;
        infoDescription.appendChild(infoName)

        let carLink = document.createElement('a');
        carLink.href = cars[i].price;
        carLink.innerText = cars[i].price
        carLink.classList.add('ctabutton') 
        infoDescription.appendChild(carLink);
        newCarInfoBox.appendChild(carLink);
        addingCars.lastElementChild.appendChild(newCarInfoBox);

}}
document.addEventListener('load', addCars());
