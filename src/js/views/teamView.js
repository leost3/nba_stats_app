import {elements} from './base';


export const renderTeam = (team) => {
console.log(team);

elements.teamPhoto.style.backgroundImage = `url('/images/teams_images/${team.selectedTeam.toLowerCase()}.jpg')`
elements.teamPhoto.classList.add('.team__photo--active');
elements.teamPlayers.style.backgroundImage = `linear-gradient(to right bottom, #${team.PrimaryColor},#${team.SecondaryColor})`;
// `url("/images/teams_images/${team.selectedTeam}.jpg" alt="" srcset="")`;
//    let markup = `<img src="/images/teams_images/${team.selectedTeam}.jpg" alt="" srcset="">`;

//     elements.teamPhoto.insertAdjacentHTML('afterbegin', markup);

//     console.log(team.selectedTeam)
}












// Change background pictures
// suns
// CLippers 
// NOP
// POR
// INd
// bulls
// check Cs
// Orlando magic
// Heat
// CHA
// WAS
// Crop GSW