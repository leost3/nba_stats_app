import {elements} from './base';

// Render team players profiles on screen

const renderRes = (el) => {
    let markup;
    // If rookie add an default image

    if (el.Experience === 0) {
        markup = `
        <div class="team__players--profile" data-playerID="${el.PlayerID}">
            <div class="player__image">
                <img src="/images/images.jpg" alt="${el.FantasyDraftName}">
            </div>
            <div class="player__info">
                <div class="player__name__position">
                    <h2>${el.FantasyDraftName}</h2>
                    <h2>${el.Position}</h2>
                </div>
                <button class="player__btn" type="button">BTN</button>
                <h1>${el.Jersey}</h1>
            </div>   
        </div> 
    `

    // For not rookies
    } else {
        markup = `
        <div class="team__players--profile" data-playerID="${el.PlayerID}"">
            <div class="player__image">
                <img src="https://nba-players.herokuapp.com/players/${(el.LastName === "House") ? '' : el.LastName + "/"}${el.FirstName}" alt="${el.FantasyDraftName}">
            </div>
            <div class="player__info">
                <div class="player__name__position">
                    <h2>${el.FantasyDraftName}</h2>
                    <h2>${el.Position}</h2>
                </div>
                <button class="player__btn" type="button">BTN</button>
                <h1>${el.Jersey}</h1>
            </div>     
        </div> 
    `
    }

    // If players if Andre Ingram

    if (el.FantasyDraftName === 'Andre Ingram')
    markup = `
    <div class="team__players--profile">
        <div class="player__image">
            <img src="http://ak-static.cms.nba.com/wp-content/uploads/headshots/nba/latest/260x190/201281.png" alt="${el.FantasyDraftName}">
        </div>
        <div class="player__info">
            <div class="player__name__position">
                <h4>${el.FantasyDraftName}</h4>
                <h4>${el.Position}</h4>
            </div>
            <button class="player__btn type="button">BTN</button>
            <h1>${el.Jersey}</h1>
        </div>   
    </div> 
`
    elements.teamPlayers.insertAdjacentHTML('afterbegin', markup);
}


export const renderPlayers = (data) => {
    data.playersData.forEach(renderRes);  
}


export const showOffSet = (element) => {
    const sideBar = document.querySelector('.team__page');
    let sideBarX = sideBar.offsetLeft;
    let sideBarW = sideBar.style.width;
    let distY = element.parentElement.offsetTop;
    let distX = element.parentElement.offsetLeft;
    let elem2 = document.querySelector('.selectedPlayer__profile');
    elem2.style.top = `${distY}px`;
    // elem2.style.left = `${distX + sideBarX}px`;
    console.log({sideBarX})
    console.log({sideBarW})
  
}








// Render profile of selected player

export const renderSelectedPlayerProfile = (el, exp) => {
    console.log({exp})
    let markup; 
        if (el.games > 0 && exp > 0) {
            markup = `
            <div class="selectedPlayer__profile">
                <button class=close__player__profile>X</button>
                <div class="selectedPlayer__image">
                <img src="https://nba-players.herokuapp.com/players/${(el.LastName === "House") ? '' : el.LastName + "/"}${el.FirstName}" alt="${el.name}">    
                </div>
                <div class="player__info--profile">
                    <h2>${el.name}</h2>
                    <h2>${el.position}</h2>
                </div>
                <ul class="player__stats">
                    <li>${el.games} played games</li>
                    <li>${el.ppg.toFixed(2)} ppg</li>
                    <li>${el.rpg.toFixed(2)} rpg</li>
                    <li>${el.apg.toFixed(2)} apg</li>
                    <li>${el.spg.toFixed(2)} spg</li>
                    <li>${el.tsp.toFixed(2)}% tsp</li>
                    <li>${el.fgPercentage.toFixed(2)}%fg</li>
                    <li>${el.topg.toFixed(2)} TOpg</li>
                    <li>${el.plusMinus} Plus Minus</li>
                    <li>${el.playerEfficiency} Efficiency</li>
                    <li>${el.usageRate}% Usage Rate</li>
                </ul>
            </div>    
            `
        } else if (el.games > 0 && exp === 0){
            markup = `
            <div class="selectedPlayer__profile">
                <button class=close__player__profile>X</button>
                <div class="selectedPlayer__image">
                <img src="/images/images.jpg" alt="${el.name}">    
                </div>
                <div class="player__info--profile">
                    <h2>${el.name}</h2>
                    <h2>${el.position}</h2>
                </div>
                <ul class="player__stats">
                    <li>${el.games} played games</li>
                    <li>${el.ppg.toFixed(2)} ppg</li>
                    <li>${el.rpg.toFixed(2)} rpg</li>
                    <li>${el.apg.toFixed(2)} apg</li>
                    <li>${el.spg.toFixed(2)} spg</li>
                    <li>${el.tsp.toFixed(2)}% tsp</li>
                    <li>${el.fgPercentage.toFixed(2)}%fg</li>
                    <li>${el.topg.toFixed(2)} TOpg</li>
                    <li>${el.plusMinus} Plus Minus</li>
                    <li>${el.playerEfficiency} Efficiency</li>
                    <li>${el.usageRate}% Usage Rate</li>
                </ul>
            </div>    
            `
        } else if(el.games === 0 && exp > 0) {
            markup =
            `   <div class="selectedPlayer__profile">
                    <button class=close__player__profile>X</button>
                    <div class="selectedPlayer__image">
                        <img src="https://nba-players.herokuapp.com/players/${(el.LastName === "House") ? '' : el.LastName + "/"}${el.FirstName}" alt="${el.name}">    
                    </div>
                    <div class="player__info--profile">
                        <h2>${el.name}</h2>
                        <h2>${el.position}</h2>
                    </div>
                    <h2>HAS NOT PLAYED IN THIS SEASON SO FAR</h2>
                </div>   `
        }else {
            markup =
            `   <div class="selectedPlayer__profile">
                    <button class=close__player__profile>X</button>
                    <div class="selectedPlayer__image">
                    <img src="/images/images.jpg" alt="${el.name}">     
                    </div>
                    <div class="player__info--profile">
                        <h2>${el.name}</h2>
                        <h2>${el.position}</h2>
                    </div>
                    <h2>HAS NOT PLAYED IN THIS SEASON SO FAR</h2>
                </div>   `
        }
    
    elements.teamPlayers.insertAdjacentHTML('afterbegin', markup);
}




export const applyFilter = () => {
    const allPlayersProfile = document.querySelectorAll('.team__players--profile');
    allPlayersProfile.forEach(el => el.style.filter = "blur(5px)");
}

export const removeFilter = () => {
    const allPlayersProfile = document.querySelectorAll('.team__players--profile');
    allPlayersProfile.forEach(el => el.style.filter = "none");
}

export const disableButtons = () => {
    const btns = document.querySelectorAll('.player__btn');
    btns.forEach(btn => btn.disabled = true);
}
export const enableButtons = () => {
    const btns = document.querySelectorAll('.player__btn');
    btns.forEach(btn => btn.disabled = false);
}



// Render Searched Player

export const displaySearchedPlayer = (element) => {

    element.forEach(renderRes);  
 
}