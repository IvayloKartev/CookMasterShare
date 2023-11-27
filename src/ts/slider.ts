function slideRight(slideCounter : number){
    const rCard : HTMLElement | null = document.getElementById('card1');
    const mCard = document.getElementById('card2');
    const lCard = document.getElementById('card3');
    if(slideCounter % 3 === 0) {
        mCard!.setAttribute('class', 'card unactive-card');
        lCard!.setAttribute('class', 'card active-card');
        rCard!.setAttribute('class', 'card unactive-card');
        mCard!.style.transform = 'translate(-115%, 0)';       
        lCard!.style.transform = 'translate(-100%, 0)';
        rCard!.style.transform = 'translate(250%, 0)';
    }
    else if(slideCounter % 3 === 1) {
        lCard!.setAttribute('class', 'card unactive-card');
        rCard!.setAttribute('class', 'card active-card');
        mCard!.setAttribute('class', 'card unactive-card');
        mCard!.style.transform = 'translate(125%, 0)';       
        lCard!.style.transform = 'translate(-240%, 0)';
        rCard!.style.transform = 'translate(110%, 0)';         
    }
    else if(slideCounter % 3 === 2) {
        lCard!.setAttribute('class', 'card unactive-card');
        mCard!.setAttribute('class', 'card active-card');
        rCard!.setAttribute('class', 'card unactive-card');
        mCard!.style.transform = 'translate(0, 0)';       
        lCard!.style.transform = 'translate(0, 0)';
        rCard!.style.transform = 'translate(0, 0)';         
    }
    slideCounter ++;
}
function slideLeft(slideCounter : number){

    const rCard = document.getElementById('card1');
    const mCard = document.getElementById('card2');
    const lCard = document.getElementById('card3');

    if(slideCounter % 3 === 1) {
        mCard!.setAttribute('class', 'card unactive-card');
        lCard!.setAttribute('class', 'card active-card');
        rCard!.setAttribute('class', 'card unactive-card');
        mCard!.style.transform = 'translate(-110%, 0)';       
        lCard!.style.transform = 'translate(-105%, 0)';
        rCard!.style.transform = 'translate(250%, 0)';
    }
    else if(slideCounter % 3 === 0) {
        lCard!.setAttribute('class', 'card unactive-card');
        rCard!.setAttribute('class', 'card active-card');
        mCard!.setAttribute('class', 'card unactive-card');
        mCard!.style.transform = 'translate(125%, 0)';       
        lCard!.style.transform = 'translate(-250%, 0)';
        rCard!.style.transform = 'translate(110%, 0)';         
    }
    else if(slideCounter % 3 === 2) {
        lCard!.setAttribute('class', 'card unactive-card');
        mCard!.setAttribute('class', 'card active-card');
        rCard!.setAttribute('class', 'card unactive-card');
        mCard!.style.transform = 'translate(0, 0)';       
        lCard!.style.transform = 'translate(0, 0)';
        rCard!.style.transform = 'translate(0, 0)';         
    }
    slideCounter ++;
}