
// New content to show when the email has been sent it
const newParagraph = document.getElementById('newParagraph');
// propriety to hide the element with that class called contentHide in the html code
const contentHide = document.querySelector('.contentHide');
// hide image
const imgHide = document.querySelectorAll('.image')
// Button to listen event 
const switchButton = document.querySelector('[data-form-btn]')
const widthContainer = document.querySelector('.container')
// button success
const buttonSuccess = document.querySelector('[data-form-success]');
// console.log(switchButton);
const emailClient = document.getElementById('newParagraphJs')

const widthWindow = window.innerWidth;
console.log(widthWindow)
switchButton.addEventListener('click', function (e) {
    // const btn = switchButton;
    e.preventDefault();
    const input = document.querySelector('[data-form-input]')
    const valueInput = input.value;
    contentHide.style.display = 'none';
    newParagraph.style.display = 'flex';
    // imgHide.style.display = 'none'
    if(widthWindow > 376){
        widthContainer.style.margin = "5rem 26rem";
    }else{
        widthContainer.style.margin = "0rem";
    }
    
    console.log(valueInput)
    emailClient.textContent = valueInput;
});

buttonSuccess.addEventListener('click', function (e,) {
    e.preventDefault();
    contentHide.style.display = 'flex';
    newParagraph.style.display = 'none';
    if(widthWindow > 376){
        widthContainer.style.margin = "0rem 10rem"
    }else{
        widthContainer.style.margin = "0rem";
        widthContainer.style.marginTop = "-1rem";
    }
    
})