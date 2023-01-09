
let homeScore = document.getElementById("homescore");
let guestScore = document.getElementById("guestscore");
let initiateHome = 0;
let initiateGuest = 0;

function incrementHome(a){
    initiateHome = initiateHome + parseInt(a);
    homeScore.textContent = initiateHome;
}

function incrementGuest(a){
    initiateGuest = initiateGuest + parseInt(a);
    guestScore.textContent = initiateGuest;
}

function reset(){
    initiateHome = 0;
    initiateGuest = 0;
    homeScore.textContent = 0;
    guestScore.textContent = 0;
}