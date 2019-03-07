// import {nbaTeams} from './models/Sidebar';
import {elements} from './base'




const renderViews = element => {
    const markup =
    `
    <li data-conference="${element.Conference}" data-teamName="${element.Key}" class="team__logo team__logo-${element.Name}">
        <img  src="/images/Logos/teams_logos/${element.Key}_logo.svg"  alt="${element.City} ${element.Name}">
        ${element.City} ${element.Name}
        <div class="team__btns">
            <p1 class="display__team__stats">check team</p1>
            <p1 class="display__team__players">check player</p1>
        </div>         
    </li>
`
    elements.teamList.insertAdjacentHTML('afterbegin',markup);
}


export const renderResults = (teams) => {
    teams.teams.forEach(renderViews);
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
export const highlightSelectedConference = (conference) => {
    // console.log(conference)
    const btnArray = Array.from(document.querySelectorAll('.btn__conf'));
    btnArray.forEach(btn => {
        console.log(btn)
        btn.classList.remove('btn__conference--active');
    });
    conference.classList.add('btn__conference--active');

    // btnArray.forEach(el => {
    //     el.classList.remove('btn__conference');
    //     if (el.dataset.teamname === team) {
    //         el.classList.add('btn__conference')
    //     }
    // })
}