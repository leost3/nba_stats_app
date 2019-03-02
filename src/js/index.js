import {nbaTeams} from './models/Sidebar';
import {elements} from './views/base';
import {renderResults, cleanSide} from './views/sideView';
// import { stat } from 'fs';

// console.log(elements.eastTeams)
// console.log(elements.westTeams)
// console.log(elements.allTeams)


const state = {};
// renderResults(state.teams);

window.addEventListener('load', () => {
    console.log('loaded')
    state.teams = new nbaTeams('all');
    state.teams.getTeams();
    renderResults(state.teams);
})

elements.costBtn.forEach(btn => {
    btn.addEventListener('click', e => {
        cleanSide();
        const conference = e.target.dataset.conference; // east/west/all
        state.teams = new nbaTeams(conference);
        state.teams.getTeams();  
        renderResults(state.teams);
    })
});

// figure out how display all teams as page laods