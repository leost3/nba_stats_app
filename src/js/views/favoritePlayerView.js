import {elements} from './base';


export const renderFavorite = ({id , position, number , lastName, firstName}) => {
    const markup = `
        <div class="team__players--profile" data-playerID=${id}>
            <div class="player__image">
                <img src="https://nba-players.herokuapp.com/players/${lastName}/${firstName}" alt="${lastName} ${firstName}">
            </div>
            <div class="player__info">
                <div class="player__name__position">
                    <h2>${firstName} ${lastName} </h2>
                    <h2>${position}</h2>
                </div>
                <button class="player__btn">STATS</button>
                <h1>${number} </h1>
            </div>   
        </div> `

        elements.favoritePlayers.insertAdjacentHTML('afterbegin', markup);
    }