import {nbaTeams} from './models/Sidebar';
import {elements} from './views/base';
import {renderResults, cleanSide, highlightSelectedTeam} from './views/sideView';
import {renderPlayers} from './views/playersView';
import {teamPlayers} from './models/Players';

const state = {};


(function sideBar() {
    window.addEventListener('load', () => {
        state.teams = new nbaTeams('all');
        state.teams.getTeams();
        // console.log(state)
        renderResults(state.teams);
    })
    
    
    // Display team from selected conference
    elements.confereceBtn.forEach(btn => {
        btn.addEventListener('click', e => {
            cleanSide();
            const conference = e.target.dataset.conference; // east/west/all
            state.teams = new nbaTeams(conference);
            state.teams.getTeams();  
            renderResults(state.teams);
        })
    });
    
    // Hilight selected team
    elements.teamList.addEventListener('click', e => {
        const selectedTeam = e.target.closest(".team__logo").dataset.teamname;
        highlightSelectedTeam(selectedTeam);
        state.teamPlayers = new teamPlayers(selectedTeam);
        state.teamPlayers.getPlayers();
        // renderPlayers(state.teamPlayers)
        renderPlayers(state.teamPlayers);
        console.log(state.teamPlayers); // SHOW ARRAY OF PLAYERS
    
    });
})();

// Render teams on the sider when page loads

// Render team players from selected team
