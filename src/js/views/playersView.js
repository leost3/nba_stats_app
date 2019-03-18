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
                    <h4>${el.FanDuelName}</h4>
                    <h4>${el.Position}</h4>
                </div>
                <h1>${el.Jersey}</h1>
            </div>   
        </div> 
    `
    } else {
        markup = `
        <div class="team__players--profile">
            <div class="player__image">
                <img src="https://nba-players.herokuapp.com/players/${el.LastName}/${el.FirstName}" alt="${el.FanDuelName}">
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
    }
    elements.teamPlayers.insertAdjacentHTML('afterbegin', markup);
}


export const renderPlayers = (data) => {
    data.playersData.forEach(renderRes);
    
}







//MAXI KLEBER - ONLY FOUND BY KLEBER
// JUANCHO HERNAGOMEZ - ONLY FOUND BY JUANCHO OR JUANCHO
// KALIN LUCAS
// DAMION LEE - ONLY FOUND BY LEE
//nene -> onlyg first Name

//Not ALL PLAUERS SHOWING UP - SUNS/KINGS/spurs = 



// - NAMES WITH DOT (EX J.J BAREA) -- REGEX
// - NBADEBUT 2018 -- FILTER nbaDebut < 2018
// - NOME COMPOSTO -- DERRICK 'JONES JR' , OTTO PORTER JR., TIM HARDAWAY JR, GLEN ROBINSON III, Danuel House jr, JAREN JACKSON JR., D.J. WILSON, CJ WIlliams, E`TWAAN MOORE, TJ MCCONNELL,TJ WARREN, KELLY OUBRE JR , FRANK MASON III, 
// - NOME COM APOSTROFE - D'ANGELO RUSSELL, KYLE O'QUINN, D'AROON FOX, ROYNCE O'NEALE
// - NBA DEBUT YEAR = ""
//Mbah a Moute"




//2017 NBA debut
//Jaylen Morris - Bucks
//Wes Iwundu - magic

