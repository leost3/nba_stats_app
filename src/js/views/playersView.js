import {elements} from './base';

// Render players profiles on UI

const renderRes = (el) => {
    let markup;
    // If rookie add an default image

    if (el.Experience === 0) {
        markup = `
        <div class="team__players--profile" data-playerID="${el.PlayerID}">
            <div class="player__image">
                <img src="/images/images.jpg" alt="${el.DraftKingsName}">
            </div>
            <div class="player__info">
                <div class="player__name__position">
                    <h2>${el.DraftKingsName}</h2>
                    <h2>${el.Position}</h2>
                </div>
                <button class="player__btn">STATS</button>
                <h1>${el.Jersey}</h1>
            </div>   
        </div> 
    `
    // For not rookie display photo from API
    } else {

        markup = `
        <div class="team__players--profile" data-playerID="${el.PlayerID}"">
            <div class="player__image">
                <img src="https://nba-players.herokuapp.com/players/${(el.LastName === "House") ? '' : el.LastName + "/"}${el.FirstName}" alt="${el.DraftKingsName}">
            </div>
            <div class="player__info">
                <div class="player__name__position">
                    <h2>${el.DraftKingsName}</h2>
                    <h2>${el.Position}</h2>
                </div>
                <button class="player__btn">STATS</button>
                <h1>${el.Jersey}</h1>
            </div>     
        </div> 
    `
    }

    // If players is Andre Ingram displays his photo

    elements.teamPlayers.insertAdjacentHTML('afterbegin', markup);
}

// Display each player on UI from a selected team data

export const renderPlayers = (data) => {
    data.playersData.forEach(renderRes);  
}

// Clear input Form
export const clearInput = () =>  elements.inputPlayer.value = '';

// get value of the input form;
export const getInputPlayer = () => elements.inputPlayer.value.trim();


// Display searched players
export const displaySearchedPlayer = (data) => {
    data.forEach(renderRes);  
}


// Display selected player profile on the middle of UI at the same height of selected player
export const showOffSet = (element) => {
    let distY = element.parentElement.offsetTop;
    let elem2 = document.querySelector('.selectedPlayer__profile');
    elem2.style.top = `${distY}px`;
  
}


// Get Player 'status' experience based on years in the league
function playerExp(el) {
    switch (el) {
        case 0: return "Rookie";
        case 1: return "Sophomore";;
        default: return `${el} years veteran`
    }
}

// Render profile of selected player

export const renderSelectedPlayerProfile = (el, exp) => {

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
                 <h2>${playerExp(exp + 1)}</h2>
                 <h2>${el.position}</h2>
             </div>
             <ul class="player__stats">
                <li><span class="player_stats--li">${el.games}</span> played games</li>
                <li><span class="player_stats--li">${el.ppg.toFixed(2)}</span> Points Per Game</li>
                <li><span class="player_stats--li">${el.rpg.toFixed(2)}</span> Rebounds Per Game</li>
                <li><span class="player_stats--li">${el.apg.toFixed(2)}</span> Assists Per Game</li>
                <li><span class="player_stats--li">${el.spg.toFixed(2)}</span> Steals Per Game</li>
                <li><span class="player_stats--li">${el.tsp.toFixed(2)}%</span> True Shooting</li>
                <li><span class="player_stats--li">${el.fgPercentage.toFixed(2)}%</span> Field Goal</li>
                <li><span class="player_stats--li">${el.topg.toFixed(2)}</span> Turnovers Per Game</li>
                <li><span class="player_stats--li">${el.plusMinus}</span> Plus Minus</li>
                <li><span class="player_stats--li">${el.playerEfficiency}</span> Efficiency</li>
                <li><span class="player_stats--li">${el.usageRate}%</span> Usage Rate</li>
             </ul>
        </div> `

        } else if (el.games > 0 && exp === 0){
            markup = `
            <div class="selectedPlayer__profile">
                <button class=close__player__profile>X</button>
                <div class="selectedPlayer__image">
                <img src="/images/images.jpg" alt="${el.name}">    
                </div>
                <div class="player__info--profile">
                    <h2>${el.name}</h2>
                    <h2>${playerExp(exp)}</h2>
                    <h2>${el.position}</h2>
                </div>
                <ul class="player__stats">
                    <li><span class="player_stats--li">${el.games}</span> played games</li>
                    <li><span class="player_stats--li">${el.ppg.toFixed(2)}</span> ppg</li>
                    <li><span class="player_stats--li">${el.rpg.toFixed(2)}</span> rpg</li>
                    <li><span class="player_stats--li">${el.apg.toFixed(2)}</span> apg</li>
                    <li><span class="player_stats--li">${el.spg.toFixed(2)}</span> spg</li>
                    <li><span class="player_stats--li">${el.tsp.toFixed(2)}%</span> tsp</li>
                    <li><span class="player_stats--li">${el.fgPercentage.toFixed(2)}</span> %fg</li>
                    <li><span class="player_stats--li">${el.topg.toFixed(2)}</span> TOpg</li>
                    <li><span class="player_stats--li">${el.plusMinus}</span> Plus Minus</li>
                    <li><span class="player_stats--li">${el.playerEfficiency}</span> Efficiency</li>
                    <li><span class="player_stats--li">${el.usageRate}%</span> Usage Rate</li>
                </ul>
            </div>`
            
        } else if(el.games === 0 && exp > 0) {
            markup =
            `   <div class="selectedPlayer__profile">
                    <button class=close__player__profile>X</button>
                    <div class="selectedPlayer__image">
                        <img src="https://nba-players.herokuapp.com/players/${(el.LastName === "House") ? '' : el.LastName + "/"}${el.FirstName}" alt="${el.name}">    
                    </div>
                    <div class="player__info--profile">
                        <h2>${el.name}</h2>
                        <h2>${playerExp(exp + 1)}</h2>
                        <h2>${el.position}</h2>
                    </div>
                    <h2>HAS NOT PLAYED IN THIS SEASON SO FAR</h2>
                </div>  
            `
        }else {
            markup =
            `   <div class="selectedPlayer__profile">
                    <button class=close__player__profile>X</button>
                    <div class="selectedPlayer__image">
                    <img src="/images/images.jpg" alt="${el.name}">     
                    </div>
                    <div class="player__info--profile">
                        <h2>${el.name}</h2>
                        <h2>${playerExp(exp)}</h2>
                        <h2>${el.position}</h2>
                    </div>
                    <h2>HAS NOT PLAYED IN THIS SEASON SO FAR</h2>
                </div>  
            `
        }
    elements.teamPlayers.insertAdjacentHTML('afterbegin', markup);
}

// Apply filter effect when player is elected
export const applyFilter = () => {
    const allPlayersProfile = document.querySelectorAll('.team__players--profile');
    allPlayersProfile.forEach(el => el.style.filter = "blur(5px)");
}

// Remove filter effected when player profile is closed
export const removeFilter = () => {
    const allPlayersProfile = document.querySelectorAll('.team__players--profile');
    allPlayersProfile.forEach(el => el.style.filter = "none");
}

// Disable buttons when player is elected

export const disableButtons = () => {
    const btns = document.querySelectorAll('.player__btn');
    btns.forEach(btn => btn.disabled = true);
}

// Enable back buttons when player profile is closed
export const enableButtons = () => {
    const btns = document.querySelectorAll('.player__btn');
    btns.forEach(btn => btn.disabled = false);
}


