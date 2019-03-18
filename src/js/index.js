import {nbaTeams} from './models/Sidebar';
import {teamPlayers} from './models/Players';
import {newTeam} from './models/Team';
import {news} from './models/News';
import {elements, cleanResults} from './views/base';
import {renderResults, highlightSelectedTeam, highlightSelectedConference} from './views/sideView';
import {renderPlayers} from './views/playersView';
import {renderTeam} from './views/teamView';

const state = {};

// Display all teams on side on page load

const displaySideTeams = () => {
    state.conferenceTeam = new nbaTeams('all');
    state.conferenceTeam.getTeams();
    renderResults(state.conferenceTeam);
}

window.addEventListener('load', () => {
    displaySideTeams();
});
    
// Display teams from selected conference
    const displayTeamByConference = (conference) => {
        state.conferenceTeam = new nbaTeams(conference);
        state.conferenceTeam.getTeams();
        renderResults(state.conferenceTeam);
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
        state.teamPlayers = new teamPlayers(selectedTeam);
        try {
            await state.teamPlayers.getPlayers();
        }catch(err){
            console.log(er)
        }
        cleanResults(elements.teamPlayers);
        renderPlayers(state.teamPlayers);
    }





    // Display info about Selected Team

    const displayTeamTest = async selectedTeam => {
        // Highlight selected team on sidebar
        highlightSelectedTeam(selectedTeam);
        // Fetch data of the selected Team
        state.team = new newTeam(selectedTeam);
        try {
            await state.team.getTeamStats();
            await state.team.getTeamInfo();
        }catch(err){
            alert("Something has gone wrong");
            console.log(err);
        }
        cleanResults(elements.teamPlayers);
        renderTeam(state.team);


        // Testing getting news
        state.news = new news(selectedTeam);
        try {
            await state.news.getNews();
        }catch(err) {
            alert("Something went wrong");
            console.log(err);
        }

    }



    elements.teamList.addEventListener('click', e => {
        if (e.target.matches('.display__team__players')) displayPlayers(e.target.parentElement.parentElement.dataset.teamname);
        if (e.target.matches('.display__team__stats')) displayTeamTest(e.target.parentElement.parentElement.dataset.teamname);      
    });


    elements.closeBtn.addEventListener('click', function() {
        document.querySelector('.favorite__players').classList.toggle("closed");
    });
