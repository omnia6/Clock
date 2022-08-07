// what we want to review and search about :-
// trasform and translate and make a project with it 
// setInterval 

setInterval(setclock, 1000);

const hourHand = document.querySelector('[data-hour-hand]');
const MinutesHand = document.querySelector('[data-minutes-hand]');
const secondsHand = document.querySelector('[data-second-hand]');

function setclock (){
    const currentDate = new Date();
    const secondratio = currentDate.getSeconds() / 60;
    const mindratio = (secondratio+currentDate.getMinutes()) / 60;
    const hourratio = (mindratio+currentDate.getHours()) / 12;

    setRotation(secondsHand,secondratio);
    setRotation(MinutesHand,mindratio);
    setRotation(hourHand,hourratio);

}

function setRotation (element, rotationRatio){
    element.style.setProperty('--rotation',  rotationRatio *360);
}

setclock();