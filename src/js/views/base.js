export const elements = {
    allTeams:             document.querySelectorAll('.teamList li'),
    eastTeams:            document.querySelectorAll('.teamList [data-conference~="east"]'),
    westTeams:            document.querySelectorAll('.teamList [data-conference~="west"]'),
    confereceBtn:         document.querySelectorAll('.btn__conference *'),
    teamList:             document.querySelector('.team__list'),
    teamPage:             document.querySelector('.team__page'),
    teamPlayers:          document.querySelector('.team__players'),
    closeBtn:             document.querySelector('.close'),
    teamPhoto :           document.querySelector('.team__photo'),
    teamBasicStats:       document.querySelector('.team__stats--basics .stats li'),
    teamInfoSlidersStats: document.querySelector('.team__stats--info--slider'),
    scheduleBox:          document.querySelector('.team__players schedule__box'),
    getNews:              document.querySelector('.get__news'),
    inputPlayer:          document.querySelector('.player__name--input'),
    searchPlayerForm:     document.querySelector('.search__player'),
    favoritePlayers:      document.querySelector('.favorite__players'),
};

export const cleanResults = (parent) => {
    // console.log(parent.innerHTML);
    parent.innerHTML = "";
};

// USE REGEX
export const refinePlayersNames = (name) => {
    name.forEach(element => {

        while (element.FirstName.includes('.')) {
            element.FirstName = element.FirstName.replace('.','');
        }
        if (element.LastName.includes('.')) {
            element.LastName = element.LastName.replace('.','');
        }

        // Replace space for _ in last name
        if (element.LastName.includes(' ')) {
            element.LastName = element.LastName.replace(' ','_');
        }
        while (element.FirstName.includes("'")) {
            element.FirstName = element.FirstName.replace(" " ,' ');
        }
        while (element.FirstName.includes("'")) {
            element.FirstName = element.FirstName.replace(" ' ",' ');
        }
        while (element.LastName.includes("'")) {
            element.LastName = element.LastName.replace(" ' ",' ');
        }
    });
};


export const renderLoader = parent => {
    const loader = `
        <div class="loader">
            <svg>
                <use xlink:href="/icons/sprite.svg#icon-spinner11"></use>  
            </svg>
        </div>
    `;
    parent.insertAdjacentHTML('afterbegin', loader);
};