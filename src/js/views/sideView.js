// import {nbaTeams} from './models/Sidebar';
import {elements} from './base'




const renderViews = element => {
    console.log(element)
    const markup =
    `
    <li data-conference="${element.Conference}">
        <img data-teamName="${element.Key}" src="/images/Logos/teams_logos/${element.Key}_logo.svg"  alt="${element.City} ${element.Name}">
        
    </li>
`
    elements.teamList.insertAdjacentHTML('afterbegin',markup);
}


export const renderResults = (teams) => {
    teams.teams.forEach(renderViews);
    // console.log(teams)
}