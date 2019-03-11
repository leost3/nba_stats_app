export const elements = {
    allTeams: document.querySelectorAll('.teamList li'),
    eastTeams: document.querySelectorAll('.teamList [data-conference~="east"]'),
    westTeams: document.querySelectorAll('.teamList [data-conference~="west"]'),
    confereceBtn: document.querySelectorAll('.btn__conference *'),
    teamList: document.querySelector('.team__list'),
    teamPlayers: document.querySelector('.team__players'),
    closeBtn: document.querySelector('.close'),
}



export const cleanResults = (parent) => {
    // console.log(parent.innerHTML);
    parent.innerHTML = "";
}



function primceFactor(num) {
    let primes =[];
    for (let i = 2; i <= num.length; i++) {
        if (num % i === 0) {
            primes.push(i);
            num /= 1;
        }
        if (num === 1) {
            primes.forEach(prime => console.log(prime));
            return primes.length;
        }
        
    }
}