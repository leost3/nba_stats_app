import {nbaTeams} from './models/Sidebar';
import {elements, cleanResults} from './views/base';
import {renderResults, highlightSelectedTeam, highlightSelectedConference} from './views/sideView';
import {renderPlayers} from './views/playersView';
import {teamPlayers} from './models/Players';

const state = {};

// Display all teams on side on page load

const displaySideTeams = () => {
    state.teams = new nbaTeams('all');
    state.teams.getTeams();
    renderResults(state.teams);
}

    window.addEventListener('load', () => {
        displaySideTeams();
    });
    
// Display team from selected conference
    const displayTeamByConference = (conference) => {
        state.teams = new nbaTeams(conference);
        state.teams.getTeams();  
        renderResults(state.teams);
    }

    elements.confereceBtn.forEach(btn => {
        btn.addEventListener('click', e => {
            const conference = e.target.dataset.conference; // east/west/all
            cleanResults(elements.teamList);
            displayTeamByConference(conference);
            highlightSelectedConference(e.target);
        })
    });
    
    // Hilight selected team and display players

    const displayPlayers = async selectedTeam => {
        highlightSelectedTeam(selectedTeam);
        // console.log(selectedTeam);
        state.teamPlayers = new teamPlayers(selectedTeam);
        try {
            await state.teamPlayers.getPlayers();
        }catch(err){
            console.log(er)
        }
        cleanResults(elements.teamPlayers);
        renderPlayers(state.teamPlayers);
    }

    // Click on team to display players
    elements.teamList.addEventListener('click', e => {
        const selectedTeam = e.target.closest(".display__team__players").parentElement.parentElement.dataset.teamname;
        displayPlayers(selectedTeam);
    });


    // Click on team to display team informations
    // elements.teamList.addEventListener('click', e => {
    //     const selectedTeam = e.target.closest(".display__team__stats").parentElement.parentElement.dataset.teamname;
    //     console.log(selectedTeam)
    // });


