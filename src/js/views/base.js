export const elements = {
    allTeams: document.querySelectorAll('.teamList li'),
    eastTeams: document.querySelectorAll('.teamList [data-conference~="east"]'),
    westTeams: document.querySelectorAll('.teamList [data-conference~="west"]'),
    confereceBtn: document.querySelectorAll('.btn__conference *'),
    teamList: document.querySelector('.team__list'),
    teamPlayers: document.querySelector('.team__players'),
}



export const cleanResults = (parent) => {
    // console.log(parent.innerHTML);
    parent.innerHTML = "";
}