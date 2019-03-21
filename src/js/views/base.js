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
    teamInfoSlidersStats: document.querySelector('.team__stats--info--slider')
    
}



export const cleanResults = (parent) => {
    // console.log(parent.innerHTML);
    parent.innerHTML = "";
}

