
(function start() {

    const teams = document.querySelectorAll('.nav__side img');
    console.log(teams)
    teams.forEach(team => {
        team.addEventListener('click', (e) => {
            displayPlayers(e);
            displayTeamStatus(e);
        });
    });
    
    
    function displayPlayers(e) {
        const clickedTeam = e.target.dataset.teamname;
        const playerImg = document.querySelector('.players');
        fetchPlayerData(clickedTeam)
        .then(response => response.forEach(resp => {
            const html = `
            <div class="player__profile" dataset="thisPlayer">
                 <img src="https://nba-players.herokuapp.com/players/${resp.LastNameFirstName}" alt="${resp.fanDuelName}">
                 <p>Name: ${resp.fanDuelName}</p>
                 <p>Position: ${resp.PositionCategory}</p>
                 <p>Salary: $${resp.Salary}</p>
            </div>
            `;
            playerImg.insertAdjacentHTML('beforeend', html);
        }));
    }

    function displayTeamStatus(e) {
        const clickedTeam = e.target.dataset.teamname;
        console.log(clickedTeam)
        const stats = document.querySelector('.team__stats');
        fetchTeamData(clickedTeam)
        .then(resp => {
            console.log(resp);
            const html = `
            <div class="team__stats-team">
                <img src="/images/Logos/teams_logos/${clickedTeam}_logo.svg" alt="${resp.name}">
                 <p>${resp.name}</p>
                 <p>W-L: ${resp.wins}-${resp.losses}</p>
                 <p>PPG: ${resp.poinsPerGame}</p>
                 <p>%FT: ${resp.FreeThrowsPercentage}</p>
                 <p>APG: ${resp.assistsPerGame}</p>
                 <p>BPG: ${resp.blocksPerGame}</p>
                 <p>RPG: ${resp.reboundsPerGame}</p>
                 <p>3PTAPG: ${resp.threePointersAttemptedPerGame}</p>
                 <p>%3PT: ${resp.threePointsPercentage}</p>
                 <p>TOPG: ${resp.turnoverPerGames}</p>
            </div>
            `
            stats.insertAdjacentHTML('beforeend', html);
        });
    }


})();



