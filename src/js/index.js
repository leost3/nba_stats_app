import {nbaTeams} from './models/Sidebar';
import {elements} from './views/base';
import {renderResults, cleanSide, highlightSelectedTeam} from './views/sideView';
// import { stat } from 'fs';

// console.log(elements.eastTeams)
// console.log(elements.westTeams)
// console.log(elements.allTeams)


const state = {};
// renderResults(state.teams);

window.addEventListener('load', () => {
    state.teams = new nbaTeams('all');
    state.teams.getTeams();
    renderResults(state.teams);
})

elements.confereceBtn.forEach(btn => {
    btn.addEventListener('click', e => {
        cleanSide();
        const conference = e.target.dataset.conference; // east/west/all
        state.teams = new nbaTeams(conference);
        state.teams.getTeams();  
        renderResults(state.teams);
    })
});


elements.teamList.addEventListener('click', e => {
    const selectedTeam = e.target.closest(".team__logo");
    // console.log(selectedTeam.dataset.teamname)
    highlightSelectedTeam(selectedTeam.dataset.teamname);
});

// figure out how display all teams as page laods