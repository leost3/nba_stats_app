import {elements} from './base';

// Render players profiles on UI
const renderPlayer = ({Experience, PlayerID, DraftKingsName, Position, Jersey, LastName, FirstName}) => {
    // Make this object reusable
    const playerPhotoSrc = {
        rookie: '/images/images.jpg',
        veteran: `https://nba-players.herokuapp.com/players/${LastName}/${FirstName}`,
    }

    const markup = 
        `<div class="team__players--profile" data-playerID="${PlayerID}">
            <div class="player__image">
                <img src="${Experience === 0 ? playerPhotoSrc.rookie : playerPhotoSrc.veteran}" alt="${DraftKingsName}">
            </div>
            <div class="player__info">
                <div class="player__name__position">
                    <h2>${DraftKingsName}</h2>
                    <h2>${Position}</h2>
                </div>
                <button class="player__btn">STATS</button>
                <h1>${Jersey}</h1>
            </div>   
        </div> 
    `;
    elements.teamPlayers.insertAdjacentHTML('afterbegin', markup);

    // If rookie add a default image
    // if (Experience === 0) {
    //     markup = `
    //     <div class="team__players--profile" data-playerID="${PlayerID}">
    //         <div class="player__image">
    //             <img src="/images/images.jpg" alt="${DraftKingsName}">
    //         </div>
    //         <div class="player__info">
    //             <div class="player__name__position">
    //                 <h2>${DraftKingsName}</h2>
    //                 <h2>${Position}</h2>
    //             </div>
    //             <button class="player__btn">STATS</button>
    //             <h1>${Jersey}</h1>
    //         </div>   
    //     </div> 
    // `
    // // For not rookie display photo from API
    // } else {
    //     markup = `
    //     <div class="team__players--profile" data-playerID="${PlayerID}"">
    //         <div class="player__image">
    //             <img src="https://nba-players.herokuapp.com/players/${LastName}/${FirstName}" alt="${DraftKingsName}">
    //         </div>
    //         <div class="player__info">
    //             <div class="player__name__position">
    //                 <h2>${DraftKingsName}</h2>
    //                 <h2>${Position}</h2>
    //             </div>
    //             <button class="player__btn">STATS</button>
    //             <h1>${Jersey}</h1>
    //         </div>     
    //     </div> 
    // `
    // }
}

// Display each player on UI from a selected team data
export const renderPlayers = (data) => {
    data.playersData.forEach(renderPlayer);  
}

const displayPlayerNotFound = () => {
    const markup = `
    <div class="playerNotFound">
    <h2> Player not found</h2> 
    </div>`
    elements.teamPlayers.insertAdjacentHTML('afterbegin', markup);
}

// Display searched players
export const displaySearchedPlayer = (data) => {
    if (data.length > 0) {
        data.forEach(renderRes);  
    } else {
        displayPlayerNotFound();
    }
}

// Clear input Form
export const clearInput = () =>  elements.inputPlayer.value = '';

// get value of the input form;
export const getInputPlayer = () => elements.inputPlayer.value.trim();

// Display selected player profile on the middle of UI at the same height of selected player
export const offSetPlayerProfile = (element) => {
    // Get distance from top of the page
    let distY = element.parentElement.offsetTop;
    // Set distance from top of the page 
    let elem2 = document.querySelector('.selectedPlayer__profile');
    elem2.style.top = `${distY}px`;
  
}

// Get Player 'status' experience based on years in the league
function playerExp(el) {
    console.log(el)
    switch (el) {
        case 0: return "Rookie";
        case 1: return "Sophomore";;
        default: return `${el} years veteran`
    }
}

// Render profile of selected player

export const renderSelectedPlayerProfile = ({games,LastName, DraftKingsName, Experience, FirstName , name, position, ppg,rpg, apg, spg, tsp, fgPercentage, topg, plusMinus, playerEfficiency, usageRate}, exp) => {

    // Make this object reusable
    const playerPhotoSrc = {
        rookie: '/images/images.jpg',
        veteran: `https://nba-players.herokuapp.com/players/${LastName}/${FirstName}`,
    }

    const playerStats = {
        playedSeason: `<ul class="player__stats">
        <li><span class="player_stats--li">${games}</span> played games</li>
        <li><span class="player_stats--li">${ppg.toFixed(2)}</span> Points Per Game</li>
        <li><span class="player_stats--li">${rpg.toFixed(2)}</span> Rebounds Per Game</li>
        <li><span class="player_stats--li">${apg.toFixed(2)}</span> Assists Per Game</li>
        <li><span class="player_stats--li">${spg.toFixed(2)}</span> Steals Per Game</li>
        <li><span class="player_stats--li">${tsp.toFixed(2)}%</span> True Shooting</li>
        <li><span class="player_stats--li">${fgPercentage.toFixed(2)}%</span> Field Goal</li>
        <li><span class="player_stats--li">${topg.toFixed(2)}</span> Turnovers Per Game</li>
        <li><span class="player_stats--li">${plusMinus}</span> Plus Minus</li>
        <li><span class="player_stats--li">${playerEfficiency}</span> Efficiency</li>
        <li><span class="player_stats--li">${usageRate}%</span> Usage Rate</li>
     </ul>`,
        didNotPlaySeason: `<h2>DID NOT PLAY 2018/2019 SEASON</h2>`
    }
   
    let markup = `
    <div class="selectedPlayer__profile">
        <button class=close__player__profile>X</button>
        <div class="selectedPlayer__image">
        <img src="${Experience === 0 ? playerPhotoSrc.rookie : playerPhotoSrc.veteran}" alt="${DraftKingsName}">    
        </div>
        <div class="player__info--profile">
            <h2>${name}</h2>
            <h2>${playerExp(exp + 1)}</h2>
            <h2>${position}</h2>
        </div>
        ${games > 0 ? playerStats.playedSeason : playerStats.didNotPlaySeason}
   </div> `

   elements.teamPlayers.insertAdjacentHTML('afterbegin', markup);



    // if (games > 0 && exp > 0) {
    //      markup = `
    //      <div class="selectedPlayer__profile">
    //          <button class=close__player__profile>X</button>
    //          <div class="selectedPlayer__image">
    //              <img src="https://nba-players.herokuapp.com/players/${(LastName === "House") ? '' : LastName + "/"}${FirstName}" alt="${name}">    
    //          </div>
    //          <div class="player__info--profile">
    //              <h2>${name}</h2>
    //              <h2>${playerExp(exp + 1)}</h2>
    //              <h2>${position}</h2>
    //          </div>
    //          <ul class="player__stats">
    //             <li><span class="player_stats--li">${games}</span> played games</li>
    //             <li><span class="player_stats--li">${ppg.toFixed(2)}</span> Points Per Game</li>
    //             <li><span class="player_stats--li">${rpg.toFixed(2)}</span> Rebounds Per Game</li>
    //             <li><span class="player_stats--li">${apg.toFixed(2)}</span> Assists Per Game</li>
    //             <li><span class="player_stats--li">${spg.toFixed(2)}</span> Steals Per Game</li>
    //             <li><span class="player_stats--li">${tsp.toFixed(2)}%</span> True Shooting</li>
    //             <li><span class="player_stats--li">${fgPercentage.toFixed(2)}%</span> Field Goal</li>
    //             <li><span class="player_stats--li">${topg.toFixed(2)}</span> Turnovers Per Game</li>
    //             <li><span class="player_stats--li">${plusMinus}</span> Plus Minus</li>
    //             <li><span class="player_stats--li">${playerEfficiency}</span> Efficiency</li>
    //             <li><span class="player_stats--li">${usageRate}%</span> Usage Rate</li>
    //          </ul>
    //     </div> `

    //     } else if (games > 0 && exp === 0){
    //         markup = `
    //         <div class="selectedPlayer__profile">
    //             <button class=close__player__profile>X</button>
    //             <div class="selectedPlayer__image">
    //             <img src="/images/images.jpg" alt="${name}">    
    //             </div>
    //             <div class="player__info--profile">
    //                 <h2>${name}</h2>
    //                 <h2>${playerExp(exp)}</h2>
    //                 <h2>${position}</h2>
    //             </div>
    //             <ul class="player__stats">
    //                 <li><span class="player_stats--li">${games}</span> played games</li>
    //                 <li><span class="player_stats--li">${ppg.toFixed(2)}</span> ppg</li>
    //                 <li><span class="player_stats--li">${rpg.toFixed(2)}</span> rpg</li>
    //                 <li><span class="player_stats--li">${apg.toFixed(2)}</span> apg</li>
    //                 <li><span class="player_stats--li">${spg.toFixed(2)}</span> spg</li>
    //                 <li><span class="player_stats--li">${tsp.toFixed(2)}%</span> tsp</li>
    //                 <li><span class="player_stats--li">${fgPercentage.toFixed(2)}</span> %fg</li>
    //                 <li><span class="player_stats--li">${topg.toFixed(2)}</span> TOpg</li>
    //                 <li><span class="player_stats--li">${plusMinus}</span> Plus Minus</li>
    //                 <li><span class="player_stats--li">${playerEfficiency}</span> Efficiency</li>
    //                 <li><span class="player_stats--li">${usageRate}%</span> Usage Rate</li>
    //             </ul>
    //         </div>`
            
    //     } else 
        // if(games === 0 && exp > 0) {
        //     markup =
        //     `   <div class="selectedPlayer__profile">
        //             <button class=close__player__profile>X</button>
        //             <div class="selectedPlayer__image">
        //                 <img src="https://nba-players.herokuapp.com/players/${(LastName === "House") ? '' : LastName + "/"}${FirstName}" alt="${name}">    
        //             </div>
        //             <div class="player__info--profile">
        //                 <h2>${name}</h2>
        //                 <h2>${playerExp(exp + 1)}</h2>
        //                 <h2>${position}</h2>
        //             </div>
        //             <h2>DID NOT PLAY 2018/2019 SEASON</h2>
        //         </div>  
        //     `
        // }else {
        //     markup =
        //     `   <div class="selectedPlayer__profile">
        //             <button class=close__player__profile>X</button>
        //             <div class="selectedPlayer__image">
        //             <img src="/images/images.jpg" alt="${name}">     
        //             </div>
        //             <div class="player__info--profile">
        //                 <h2>${name}</h2>
        //                 <h2>${playerExp(exp)}</h2>
        //                 <h2>${position}</h2>
        //             </div>
        //             <h2>DID NOT PLAY 2018/2019 SEASON</h2>
        //         </div>  
        //     `
        // }
    
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


