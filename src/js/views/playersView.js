import {elements} from './base';


const renderRes = (el) => {
    let markup;
    if (el.Experience === 0) {
        markup = `
        <div class="team__players--profile">
            <div class="player__img">
                <img src="/images/images.jpg" alt="${el.FanDuelName}">
            </div>
            <div class="player__info">
                <h1>${el.FanDuelName}</h1>
                <h4>Number: ${el.Jersey}</h4>
                <h4>Position: ${el.FanDuelName}</h4>
                <h4>Experience: ${(el.Experience === 0) ? 'Rookie' : el.Experience + 'nd year'}</h4>
            </div>   
        </div> 
    `
    } else {
        markup = `
        <div class="team__players--profile">
            <div class="player__img">
                <img src="https://nba-players.herokuapp.com/players/${el.LastName}/${el.FirstName}" alt="${el.FanDuelName}">
            </div>
            <div class="player__info">
                <h1>${el.FanDuelName}</h1>
                <h4>Number: ${el.Jersey}</h4>
                <h4>Position: ${el.FanDuelName}</h4>
                <h4>Experience: ${(el.Experience === 0) ? 'Rookie' : el.Experience + 'nd year'}</h4>
            </div>   
        </div> 
    `
    }
    
    elements.teamPlayers.insertAdjacentHTML('afterbegin', markup);
}


export const renderPlayers = (data) => {
    // console.log(data.playersData)   
    data.playersData.forEach(renderRes);

}
