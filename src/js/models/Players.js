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
            this.playersData = res.data;    
            // const playersData = res.data;// Returns an array
            // return playersData;
            // console.log(playersData);
         


//             LastName
// FirstName
// FanDuelName
// FanDuelName
// Position
// Jersey


        }catch(err) {
            alert("Something went wrong");
            console.log(err);
        }
    }


    refinePlayersNames() {
        console.log(this.playersData);
        const data = this.playersData.map(element => {
            while (element.FirstName.includes('.')) {
                element.FirstName = element.FirstName.replace('.','');
                // console.log(element.FirstName);
            }
            if (element.LastName.includes('.')) {
                element.LastName = element.LastName.replace('.','');
            }
            if (element.LastName.includes(' ')) {
                console.log(element.LastName)
                element.LastName = element.LastName.replace(' ','_');
                console.log(element.LastName)
            }
            // console.log(element.LastName)
        });
        // console.log(this.playersData);
    }

}