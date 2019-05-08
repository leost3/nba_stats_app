import {nbaTeams} from './models/Sidebar';
import {teamPlayers} from './models/Players';
import {SelectedPlayer, searchedPlayer} from './models/Players';
import {newTeam} from './models/Team';
import {news} from './models/News';
import {elements, cleanResults, refinePlayersNames, renderLoader} from './views/base';
import {renderResults, highlightSelectedTeam, highlightSelectedConference} from './views/sideView';
import {renderPlayers, renderSelectedPlayerProfile, applyFilter, disableButtons,removeFilter, enableButtons, offSetPlayerProfile, displaySearchedPlayer, clearInput, getInputPlayer} from './views/playersView';
import {renderTeam, changeBackgroundColor, chart, renderSchedule} from './views/teamView';
import {renderNews} from './views/newsView';
import {favoritePlayers} from './models/FavoritePlayers';
import {renderFavorite, deleteFavorite, fillFavoriteBtn} from './views/favoritePlayerView';

const state = {};

// DISPLAY NEWS AS SOON AS PAGE LOADS
    window.addEventListener('load', () => {
        // localStorage.clear();
        displaySideTeams();
        state.favoritePlayers = new favoritePlayers();
        state.favoritePlayers.readStorage();
        state.favoritePlayers.favorites.forEach(favorite => renderFavorite(favorite));
        displayNews();

        // TEST- onload
        // displayTeamTest('SAC');
        // displayPlayers('SAC');
    });

    // Render all teams on side on page load
    const displaySideTeams = () => {
        state.conferenceTeam = new nbaTeams('all');
        state.conferenceTeam.getTeams();
        renderResults(state.conferenceTeam); 
    }
    
    // Display teams from selected conference on the sidebar
    const displayTeamByConference = (conference) => {
        state.conferenceTeam = new nbaTeams(conference);
        state.conferenceTeam.getTeams();
        renderResults(state.conferenceTeam);
    }

    // Display teams depending on clicked button (EAST / WEST/ ALL)
    elements.confereceBtn.forEach(btn => {
        btn.addEventListener('click', e => {
            const conference = e.target.dataset.conference; // east/west/all
            // prepare UI
            cleanResults(elements.teamList);
            // Highlight selected TEAM
            highlightSelectedConference(e.target);
            // Display team on UI
            displayTeamByConference(conference);
        })
    });
    


    // Display advanced stats of selected player
    const diplayPlayerProfile = async (selectedPlayer, target) => {
        state.SelectedPlayer = new SelectedPlayer(selectedPlayer);
        try {
            await state.SelectedPlayer.getPlayerData();
            // turn last name into a string
            state.SelectedPlayer.refineName();
    
            let playerExperience = state.SelectedPlayer.getPlayerXp();
    
            // Remove unecessary characteres from name
            refinePlayersNames([state.SelectedPlayer]);
    
            // render player profile on UI
            renderSelectedPlayerProfile(state.SelectedPlayer, playerExperience);
    
            let selectedElement = target.parentElement.parentElement.children[0];
            offSetPlayerProfile(selectedElement);
        }catch(err) {
            console.log(err)
        }
    }

    const displayPlayerInFavoriteSection = (playerInfo) => {
        const {PlayerID, Position, Jersey, LastName, FirstName, Experience} = playerInfo[0];
        state.favoritePlayers.addFavorite(PlayerID, Position, Jersey, LastName, FirstName, Experience );
        renderFavorite(state.favoritePlayers.favorites[state.favoritePlayers.favorites.length - 1]);
    }

    const controlFavorite = (playerID, icon) => {
       
        if (!state.favoritePlayers) state.favoritePlayers = new favoritePlayers();

        if ( !state.favoritePlayers.isFavorite(playerID) ) {
            const playerData = state.teamPlayers.playersData.filter(el => el.PlayerID === parseInt(playerID));

            if (playerData.length > 0) {
                displayPlayerInFavoriteSection(playerData);
            } else {
                console.log(state)
                const searchedPlayer = state.searchPlayer.foundPlayers.filter(player => player.PlayerID === parseInt(playerID));
                displayPlayerInFavoriteSection(searchedPlayer);
            }
            fillFavoriteBtn(true, icon);
            // toggle button 
            openFavoriteSection();


        } else {
            // remove like from the state
            state.favoritePlayers.deleteFavorite(playerID);

            if (state.favoritePlayers.favorites.length === 0) closeFavoriteSection();
            // toggle the like btn
            fillFavoriteBtn(false, icon);
            // remove item from UI list
            deleteFavorite(playerID);
        }
    }

    // Display selected player profile or close on CLICK
    elements.teamPlayers.addEventListener('click', function(e) {
        // console.log(e.target)
        if (e.target.matches('.player__btn')) {
            const playerId = e.target.parentElement.parentElement.dataset.playerid;
            diplayPlayerProfile(playerId, e.target);
            // Add blur filter for each of previous players profile
            applyFilter();
            // Disable buttons of players profiles
            disableButtons();
        } else if (e.target.matches('.close__player__profile')) {

            e.target.parentElement.parentElement.removeChild(e.target.parentElement);
            removeFilter();
            enableButtons();

        } else if (e.target.matches('.favorite__btn__star, .favorite__btn__star *')) {
            let playerID, icon;
            if (e.target.matches('.favorite__btn__star .favorite__btn__star--icon')) {
                playerID = e.target.parentElement.parentElement.parentElement.dataset.playerid;
                icon = e.target;
            } else if (e.target.matches('.favorite__btn__star .favorite__btn__star--icon *')) {

                playerID = e.target.parentElement.parentElement.parentElement.parentElement.dataset.playerid;
                icon = e.target.parentElement;
                
            } else if (e.target.matches('.favorite__btn__star')) {

                playerID = e.target.parentElement.parentElement.dataset.playerid;
                icon = e.target.parentElement.children[2].children[0];
            } 

            controlFavorite(playerID, icon);
        }
    });
    


    // Highlight selected team on sidebar and display players

    const displayPlayers = async selectedTeam => {
        highlightSelectedTeam(selectedTeam);
        state.teamPlayers = new teamPlayers(selectedTeam);
        try {
            cleanResults(elements.teamPlayers);
            renderLoader(elements.teamPlayers);
            await state.teamPlayers.getPlayers();
            state.teamPlayers.refinePlayersNames();
            // Fix player name according to players image API
            refinePlayersNames(state.teamPlayers.playersData);
            cleanResults(elements.teamPlayers);
          
            renderPlayers(state.favoritePlayers.favorites, state.teamPlayers);
            
        }catch(err){
            console.log(err)
        }
    }

    // Display info about Selected Team
    const displayTeamTest = async selectedTeam => {
        highlightSelectedTeam(selectedTeam);
        state.team = new newTeam(selectedTeam);
        try {
            cleanResults(elements.teamPlayers);
            renderLoader(elements.teamPlayers);
            await state.team.getTeamStats();
            await state.team.getTeamInfo();
            // await state.team.getSchedule();
            await state.team.getStanding();
            // prepare UI
    
            // Render team information
            renderTeam(state.team);
    
            // Render team schedule
            // renderSchedule(state.team.schedule);
            changeBackgroundColor(state.team);
            chart(state.team);
        }catch(err){
            alert("Something went wrong");
            console.log(err);
        }
    }

    // Display either team or player stats

    elements.teamList.addEventListener('click', e => {

        if (e.target.matches('.display__team__players')) displayPlayers(e.target.parentElement.parentElement.dataset.teamname);

        if (e.target.matches('.display__team__stats')) displayTeamTest(e.target.parentElement.parentElement.dataset.teamname);      
    });


    // RENDER NEWS ON HTML
    const displayNews = async e => {
        state.news = new news();
        try {
            await state.news.getNews();
            renderNews(state.news.newsData);  
        }catch(err) {
            alert("Something went wrong");
            console.log(err);
        }    
    }

    elements.getNews.addEventListener('click', e => {
        cleanResults(elements.teamPlayers);
        displayNews(e);
    });



    // Create searchedPlayer Class

    const searchPlayer = async () => {
        let query = getInputPlayer();

        if (query) {
            state.searchPlayer = new searchedPlayer(query);
            try {
                await state.searchPlayer.getSearchedPlayer();
                clearInput();
                state.searchPlayer.refineName();
                cleanResults(elements.teamPlayers);
                displaySearchedPlayer(state.favoritePlayers.favorites, state.searchPlayer.foundPlayers);
            }catch(err) {
                console.log(err);
            }
        }
    }

    // Search player
    elements.searchPlayerForm.addEventListener('click', e => {
        e.preventDefault();
        searchPlayer();
    });


    const openFavoriteSection = () => {
        document.querySelector(".favorite__players").classList.add('favorite__players--open')
        document.querySelector(".favorite__players").classList.remove('favorite__players--closed')
    }

    const closeFavoriteSection = () => {
        document.querySelector(".favorite__players").classList.remove('favorite__players--open')
        document.querySelector(".favorite__players").classList.add('favorite__players--closed')
    };

    document.querySelector('.open__favorite').addEventListener('click', function() {
        openFavoriteSection();
    });
    document.querySelector('.btn__close').addEventListener('click', function() {
        closeFavoriteSection();
    });
    // elements.closeBtn.addEventListener('click', function() {
    //     document.querySelector('.favorite__players').classList.toggle("closed");
    // });

/*  Favorite Players */
// show up stats
// desfavorite button
// Collapse btn
// add icon and toggle icon if favorite
// add to localStorage



/*  players view */
// fix image of rookies in Stats
