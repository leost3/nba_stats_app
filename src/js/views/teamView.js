import {elements} from './base';


export const renderTeam = (team) => {
console.log(elements.teamPhoto);
elements.teamPhoto.style.backgroundImage = `url('/images/teams_images/${team.selectedTeam.toLowerCase()}.jpg')`
elements.teamPhoto.classList.add('.team__photo--active');
// `url("/images/teams_images/${team.selectedTeam}.jpg" alt="" srcset="")`;
//    let markup = `<img src="/images/teams_images/${team.selectedTeam}.jpg" alt="" srcset="">`;

//     elements.teamPhoto.insertAdjacentHTML('afterbegin', markup);

//     console.log(team.selectedTeam)
}

