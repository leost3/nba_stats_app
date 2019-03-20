import {elements} from './base';


const renderRes = (el) => {
    let markup;
    if (el.Experience === 0) {
        markup = `
        <div class="team__players--profile">
            <div class="player__image">
                <img src="/images/images.jpg" alt="${el.FanDuelName}">
            </div>
            <div class="player__info">
                <div class="player__name__position">
                    <h2>${el.FanDuelName}</h2>
                    <h2>${el.Position}</h2>
                </div>
                <h1>${el.Jersey}</h1>
            </div>   
        </div> 
    `
    } else {
        markup = `
        <div class="team__players--profile">
            <div class="player__image">
                <img src="https://nba-players.herokuapp.com/players/${(el.LastName === "House") ? '' : el.LastName + "/"}${el.FirstName}" alt="${el.FanDuelName}">
            </div>
            <div class="player__info">
                <div class="player__name__position">
                    <h2>${el.FanDuelName}</h2>
                    <h2>${el.Position}</h2>
                </div>
                <h1>${el.Jersey}</h1>
            </div>   
        </div> 
    `
    }
    if (el.FanDuelName === 'Andre Ingram')
    markup = `
    <div class="team__players--profile">
        <div class="player__image">
            <img src="http://ak-static.cms.nba.com/wp-content/uploads/headshots/nba/latest/260x190/201281.png" alt="${el.FanDuelName}">
        </div>
        <div class="player__info">
            <div class="player__name__position">
                <h4>${el.FanDuelName}</h4>
                <h4>${el.Position}</h4>
            </div>
            <h1>${el.Jersey}</h1>
        </div>   
    </div> 
`

    elements.teamPlayers.insertAdjacentHTML('afterbegin', markup);
}


export const renderPlayers = (data) => {
    data.playersData.forEach(renderRes);
    
}



