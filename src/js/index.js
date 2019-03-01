import {nbaTeams} from './models/Sidebar';
import {elements} from './views/base';
import {renderResults} from './views/sideView';

// console.log(elements.eastTeams)
// console.log(elements.westTeams)
// console.log(elements.allTeams)


const state = {};
// renderResults(state.teams);

elements.costBtn.forEach(btn => {
    btn.addEventListener('click', e => {
        const conference = e.target.dataset.conference; // east/west/all
        state.teams = new nbaTeams(conference);
        state.teams.getTeams();  
        renderResults(state.teams);
        // console.log(state.teams) 
        // console.log(state.teams) 
        // renderTeams();
    })
});

// figure out how display all teams as page laods