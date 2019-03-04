// import {nbaTeams} from './models/Sidebar';
import {elements} from './base'




const renderViews = element => {
    const markup =
    `
    <li data-conference="${element.Conference}" data-teamName="${element.Key}" class="team__logo team__logo-${element.Name}">
        <img  src="/images/Logos/teams_logos/${element.Key}_logo.svg"  alt="${element.City} ${element.Name}">
        ${element.City} ${element.Name}
    </li>
`
    elements.teamList.insertAdjacentHTML('afterbegin',markup);
}


export const renderResults = (teams) => {
    teams.teams.forEach(renderViews);
}

export const cleanSide = () => {
    elements.teamList.innerHTML = "";
}


export const highlightSelectedTeam = (team) => {
    const teamArray = Array.from(document.querySelectorAll('.team__logo'));
    teamArray.forEach(el => {
        el.classList.remove('team__logo--active');
        if (el.dataset.teamname === team) {
            el.classList.add('team__logo--active')
        }
    })
}