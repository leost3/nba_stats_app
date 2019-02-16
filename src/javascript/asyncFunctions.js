

async function fetchPlayerData(teamName) {
    const players = [];
    const url = await fetch(`https://api.fantasydata.net/v3/nba/stats/json/Players/${teamName}?key=86a8a62f6d7c4969858b4744aec1763c`);
    const data = await url.json();//array
    data.forEach(result => {
        players.push(new Player(result.FanDuelName,result.FirstName,result.LastName,result.PlayerID,result.PositionCategory,result.Salary,result.UsaTodayHeadshotUrl))
    })
    // console.log({data})
    // console.log({players})
    return players;
}


async function fetchTeamData(teamName) {
    // const url = await fetch(`https://api.fantasydata.net/v3/nba/stats/json/TeamSeasonStats/2019%7D?key=86a8a62f6d7c4969858b4744aec1763c`);
    // const data = await url.json();//array

    const team = teamStats.filter((franchise) => {
        // if (franchise.Team === teamName.toUpperCase()) {
        //     return franchise;
        // }
        return franchise.Team === teamName.toUpperCase();
    });
    const teamData = new Team(team[0].Games,team[0].Name, team[0].Losses, team[0].Wins, team[0].Points, team[0].Rebounds, team[0].Assists, team[0].BlockedShots, team[0].ThreePointersAttempted,team[0].ThreePointersPercentage,team[0].TwoPointersAttempted,team[0].TwoPointersPercentage,team[0].FreeThrowsAttempted, team[0].FreeThrowsPercentage,team[0].Turnovers, team[0].turnoverPerGames);
    // console.log({team})
    return teamData;
}

// constructor(games,name, losses, wins,points,rebounds,assists,blocks,ThreePointersAttempted,threePointsPercentage,TwoPointersAttempted,twoPointsPercentage, FreeThrowsAttempted, FreeThrowsPercentage) {
//     this.games = games;
//     this.name = name;
//     this.losses = losses;
//     this.wins = wins;
//     this.points = points;
//     this.poinsPerGame = this.points/this.games;
//     this.rebounds = rebounds;
//     this.reboundsPerGame = this.rebounds/this.games
//     this.assists = assists;
//     this.assistsPerGame = this.assists/this.games;
//     this.blocks = blocks;
//     this.blocksPerGame = this.blocks/this.games;
//     this.ThreePointersAttempted = ThreePointersAttempted;
//     this.threePointersAttemptedPerGame = this.ThreePointersAttempted/this.Games; 
//     this.threePointsPercentage = threePointsPercentage;
//     this.TwoPointersAttempted = TwoPointersAttempted;
//     this.twoPointsPercentage = twoPointsPercentage;
//     this.turnoverPerGames = turnoverPerGames/this.games;
//     this.FreeThrowsAttempted = FreeThrowsAttempted;
//     this.FreeThrowsAttemptedPerGame = this.FreeThrowsAttempted/this.games;
//     this.FreeThrowsPercentage = FreeThrowsPercentage;

