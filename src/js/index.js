import {nbaTeams} from './models/Sidebar';
import {teamPlayers} from './models/Players';
import {SelectedPlayer, searchedPlayer} from './models/Players';
import {newTeam} from './models/Team';
import {news} from './models/News';
import {elements, cleanResults, refinePlayersNames} from './views/base';
import {renderResults, highlightSelectedTeam, highlightSelectedConference} from './views/sideView';
import {renderPlayers, renderSelectedPlayerProfile, applyFilter, disableButtons,removeFilter, enableButtons, showOffSet, displaySearchedPlayer, clearInput, getInputPlayer} from './views/playersView';
import {renderTeam, changeBackgroundColor, chart, renderSchedule} from './views/teamView';
import {renderNews} from './views/newsView';
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
    // displayPlayers('SAC');

});
    
// Display teams from selected conference on the sidebar
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
        refinePlayersNames(state.teamPlayers.playersData);
        cleanResults(elements.teamPlayers);
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
        // turn last name into a string
        state.SelectedPlayer.refineName();

        let playerExperience = state.SelectedPlayer.getPlayerXp();
        // Remove unecessary characteres from name
        refinePlayersNames([state.SelectedPlayer]);
        renderSelectedPlayerProfile(state.SelectedPlayer, playerExperience);
        let selectedEl = target.parentElement.parentElement.children[0];
        console.log(selectedEl);
        showOffSet(selectedEl);
    }


    // Display selected player profile or close on CLICK
    elements.teamPlayers.addEventListener('click', function(e) {
        if (e.target.matches('.player__btn')) {
            const playerId = e.target.parentElement.parentElement.dataset.playerid;
            diplayPlayerProfile(playerId, e.target);
            // Add blur filter for each of previous players profile
            applyFilter();
            // Disable buttons of players profiles
            disableButtons();
            // console.log(e.target.parentElement.parentElement.children[0])
            // console.log(e.target.parentElement.parentElement.children[0].offsetTop)
        } else if (e.target.matches('.close__player__profile')) {
            e.target.parentElement.parentElement.removeChild(e.target.parentElement);
            // Remove filter 
            removeFilter();
            // Enable buttons
            enableButtons();
        }
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
            await state.team.getSchedule();
            await state.team.getStanding();
        }catch(err){
            alert("Something went wrong");
            console.log(err);
        }
        // prepare UI
        cleanResults(elements.teamPlayers);

        // Render team information
        renderTeam(state.team);

        // Render team schedule
        renderSchedule(state.team.schedule);

        // Change background color of team colors
        changeBackgroundColor(state.team);

        // Insert graphics
        chart(state.team);
    }

    // Display either team or player stats

    elements.teamList.addEventListener('click', e => {
        // Click on button Player
        if (e.target.matches('.display__team__players')) displayPlayers(e.target.parentElement.parentElement.dataset.teamname);
        // Click on button Team
        if (e.target.matches('.display__team__stats')) displayTeamTest(e.target.parentElement.parentElement.dataset.teamname);      
    });

    // Get news

    elements.getNews.addEventListener('click',async e => {
        state.news = new news();
        try {
            await state.news.getNews();
        }catch(err) {
            alert("Something went wrong");
            console.log(err);
        }    
        cleanResults(elements.teamPlayers);
        renderNews(state.news.newsData);    
    })



    // Create searchedPlayer Class

    const searchPlayer = async () => {

        let query = getInputPlayer();

        if (query) {
            state.searchPlayer = new searchedPlayer(query);
            try {
                await state.searchPlayer.getSearchedPlayer();
            }catch(err) {
                console.log(err);
            }
            clearInput();
            state.searchPlayer.refineName();
            cleanResults(elements.teamPlayers);
            displaySearchedPlayer(state.searchPlayer.foundPlayers);
        }
    }

    // Search player
    elements.searchPlayerForm.addEventListener('click', e => {
        e.preventDefault();
        searchPlayer();
    });


    // elements.closeBtn.addEventListener('click', function() {
    //     document.querySelector('.favorite__players').classList.toggle("closed");
    // });



    // SCHEDULE
    // LAYOUT SEARCH FORM
    // DESING SELECTED PLAYER