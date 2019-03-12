import axios from 'axios';

// PlayersSeasonStats by team
// https://api.fantasydata.net/v3/nba/stats/json/PlayerSeasonStatsByTeam/2018/hou?key=86a8a62f6d7c4969858b4744aec1763c

// PlayerInfo by team
// https://api.fantasydata.net/v3/nba/stats/json/Players/hou?key=86a8a62f6d7c4969858b4744aec1763c

// PlayersSeasonStats by playerId
// https://api.fantasydata.net/v3/nba/stats/json/PlayerSeasonStatsByPlayer/2018/20000439?key=86a8a62f6d7c4969858b4744aec1763c




export const teamPlayers = class Team {
    constructor(team) {
        this.team = team;
    }


    async getPlayers(teamKey) {
        const key = 'key=86a8a62f6d7c4969858b4744aec1763c';
        try {
            const res = await axios(`https://api.fantasydata.net/v3/nba/stats/json/Players/${this.team}?${key}`);
            this.playersData = await res.data;    
            // console.log(res.data);
          

        }catch(err) {
            alert("Something went wrong");
            console.log(err);
        }
    }
}