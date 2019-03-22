import {nbaTeams} from './models/Sidebar';
import {teamPlayers} from './models/Players';
import {player} from './models/Players';
import {newTeam} from './models/Team';
import {news} from './models/News';
import {elements, cleanResults} from './views/base';
import {renderResults, highlightSelectedTeam, highlightSelectedConference} from './views/sideView';
import {renderPlayers, renderSelectedPlayerProfile} from './views/playersView';
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
    // TESTE
    displayPlayers('PHO');
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
        state.teamPlayers.refinePlayersNames();
        cleanResults(elements.teamPlayers);
        console.log(state.teamPlayers);
        renderPlayers(state.teamPlayers);
    }

    // Display advances stats of selected player
    const diplayPlayerProfile = async selectedPlayer => {
        state.player = new player(selectedPlayer);
        try {
            await state.player.getPlayerData();
        }catch(err) {
            console.log(err)
        }
        // cleanResults(elements.teamPlayers);

        // Render player profile on screen



        renderSelectedPlayerProfile(state.player)
        // console.log(state.player)
    }

    elements.teamPlayers.addEventListener('click', function(e) {
        if (e.target.matches('.player__btn')) {
            const playerId = e.target.parentElement.parentElement.dataset.playerid;
            diplayPlayerProfile(playerId);
            // Apply filter

            // Disable buttons
        } 
        if (e.target.matches('.close__player__profile')) {
            e.target.parentElement.parentElement.removeChild(e.target.parentElement);
            // Remove filter 

            // Enable buttons
        }
         console.log(e.target.parentElement)
    })

    // Display info about Selected Team

    const displayTeamTest = async selectedTeam => {
        // Highlight selected team on sidebar
        highlightSelectedTeam(selectedTeam);
        // Fetch data of the selected Team
        state.team = new newTeam(selectedTeam);
        try {
            await state.team.getTeamStats();
            await state.team.getTeamInfo();
            // await state.team.getSchedule();
            await state.team.getStanding();
        }catch(err){
            alert("Something has gone wrong");
            console.log(err);
        }
        // console.log(state.team);
        cleanResults(elements.teamPlayers);
        renderTeam(state.team);


        // Testing getting news
        // state.news = new news(selectedTeam);
        // try {
        //     await state.news.getNews();
        // }catch(err) {
        //     alert("Something went wrong");
        //     console.log(err);
        // }

    }



    elements.teamList.addEventListener('click', e => {
        if (e.target.matches('.display__team__players')) displayPlayers(e.target.parentElement.parentElement.dataset.teamname);
        if (e.target.matches('.display__team__stats')) displayTeamTest(e.target.parentElement.parentElement.dataset.teamname);      
    });


    // elements.closeBtn.addEventListener('click', function() {
    //     document.querySelector('.favorite__players').classList.toggle("closed");
    // });
