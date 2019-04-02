export const elements = {
    allTeams: document.querySelectorAll('.teamList li'),
    eastTeams: document.querySelectorAll('.teamList [data-conference~="east"]'),
    westTeams: document.querySelectorAll('.teamList [data-conference~="west"]'),
    confereceBtn: document.querySelectorAll('.btn__conference *'),
    teamList: document.querySelector('.team__list'),
    teamPlayers: document.querySelector('.team__players'),
    closeBtn: document.querySelector('.close'),
    teamPhoto : document.querySelector('.team__photo'),
    teamBasicStats: document.querySelector('.team__stats--basics .stats li'),
    teamInfoSlidersStats: document.querySelector('.team__stats--info--slider'),
    scheduleBox: document.querySelector('.team__players schedule__box'),
    getNews: document.querySelector('.get__news'),
    
}



export const cleanResults = (parent) => {
    // console.log(parent.innerHTML);
    parent.innerHTML = "";
}


export const refinePlayersNames = (name) => {
    // console.log(this.playersData);
    name.forEach(element => {
        // console.log(element)

        while (element.FirstName.includes('.')) {
            element.FirstName = element.FirstName.replace('.','');
            // console.log(element.FirstName);
        }
        if (element.LastName.includes('.')) {
            element.LastName = element.LastName.replace('.','');
        }

        // Replace space for _ in last name
        if (element.LastName.includes(' ')) {
            // console.log(element.LastName)
            element.LastName = element.LastName.replace(' ','_');
            // console.log(element.LastName)
        }
        while (element.FirstName.includes("'")) {
            element.FirstName = element.FirstName.replace("'",'');
            // console.log(element.FirstName);
        }
        while (element.FirstName.includes("'")) {
            element.FirstName = element.FirstName.replace("'",'');
            // console.log(element.FirstName);
        }
        while (element.LastName.includes("'")) {
            element.LastName = element.LastName.replace("'",'');
            // console.log(element.FirstName);
        }

        // if (element.FantasyDraftName.split(' ').length > 2) {
        //     // console.log(element);
        // }



        // if (element.FirstName === 'Derrick') {
        //     console.log(element)
        //     console.log(element.FirstName);
        //     console.log(element.LastName);
        // }
    });
}