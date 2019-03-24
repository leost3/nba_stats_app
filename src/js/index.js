import {nbaTeams} from './models/Sidebar';
import {teamPlayers} from './models/Players';
import {SelectedPlayer, searchedPlayer} from './models/Players';
import {newTeam} from './models/Team';
import {news} from './models/News';
import {elements, cleanResults, refinePlayersNames} from './views/base';
import {renderResults, highlightSelectedTeam, highlightSelectedConference} from './views/sideView';
import {renderPlayers, renderSelectedPlayerProfile, applyFilter, disableButtons,removeFilter, enableButtons, showOffSet} from './views/playersView';
import {renderTeam, changeBackgroundColor, chart} from './views/teamView';

const state = {};

// Display all teams on side on page load

const displaySideTeams = () => {
    state.conferenceTeam = new nbaTeams('all');
    state.conferenceTeam.getTeams();
    renderResults(state.conferenceTeam);
}

window.addEventListener('load', () => {
    displaySideTeams();
    // TESTE - onload
    // displayTeamTest('SAC');
    displayPlayers('SAC');

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
        refinePlayersNames(state.teamPlayers.playersData);
        cleanResults(elements.teamPlayers);
        // console.log(state.teamPlayers.playersData);
        renderPlayers(state.teamPlayers);
    }

    // Display advanced stats of selected player
    const diplayPlayerProfile = async (selectedPlayer, target) => {
        state.SelectedPlayer = new SelectedPlayer(selectedPlayer);
        try {
            await state.SelectedPlayer.getPlayerData();
        }catch(err) {
            console.log(err)
        }
        // cleanResults(elements.teamPlayers);

        // turn last name into a string
        state.SelectedPlayer.refineName();
        // console.log(state.teamPlayers.playersData)
        // console.log(state.SelectedPlayer.getPlayerXp(state.teamPlayers.playersData).FanDuelName);
        // console.log(state.SelectedPlayer.name);
        // Remove unecessary characteres from name
        let playerExperience = state.SelectedPlayer.getPlayerXp(state.teamPlayers.playersData);
        refinePlayersNames([state.SelectedPlayer]);
        renderSelectedPlayerProfile(state.SelectedPlayer, playerExperience);
        let selectedEl = target.parentElement.parentElement.children[0];
        console.log(selectedEl);
        showOffSet(selectedEl);
    }

    elements.teamPlayers.addEventListener('click', function(e) {
        if (e.target.matches('.player__btn')) {
            const playerId = e.target.parentElement.parentElement.dataset.playerid;
            diplayPlayerProfile(playerId, e.target);
            // Add blur filter for each of previous players profile
            applyFilter();
            // // Disable buttons of players profiles
            disableButtons();
            

            // console.log(e.target.parentElement.parentElement.children[0])
            // console.log(e.target.parentElement.parentElement.children[0].offsetTop)
        } 
        if (e.target.matches('.close__player__profile')) {
            e.target.parentElement.parentElement.removeChild(e.target.parentElement);
            // Remove filter 
            removeFilter();
            // Enable buttons
            enableButtons();
        }
    })


// Teste
    const getEl = () => {

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
            // await state.team.getSchedule();
            await state.team.getStanding();
        }catch(err){
            alert("Something has gone wrong");
            console.log(err);
        }
        // console.log(state.team);
        cleanResults(elements.teamPlayers);
        renderTeam(state.team);
        changeBackgroundColor(state.team);
        chart(state.team);


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


    // Create searcedPlayer Class

    const searchPlayer = async (playerName) => {
        state.searchPlayer = new searchedPlayer(playerName);
        try {
            state.searchPlayer.getSearchedPlayer();
        }catch(err) {
            console.log(err);
        }
    }



    // Search player
    document.querySelector('.search__player').addEventListener('click', (e) => {
        e.preventDefault();
        let playerName = document.querySelector('.player__name--input').value;
        if (playerName.length > 0) {
            searchPlayer(playerName);
        }
        playerName = ""; 
        // searchPlayer(playerName);
    });

    // elements.closeBtn.addEventListener('click', function() {
    //     document.querySelector('.favorite__players').classList.toggle("closed");
    // });
