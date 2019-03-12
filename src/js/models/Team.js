import axios from 'axios';

// https://api.fantasydata.net/v3/nba/stats/JSON/TeamStatsAllowedByPosition/2019?key=86a8a62f6d7c4969858b4744aec1763c

export const newTeam = class {
    constructor(selectedTeam) {
        this.selectedTeam = selectedTeam;
        console.log(selectedTeam);
    }

    async getTeamInfo(key) {
        try {
            const res = await axios(`https://api.fantasydata.net/v3/nba/stats/JSON/TeamSeasonStats/2019?key=86a8a62f6d7c4969858b4744aec1763c`);
            console.log(res);
        }catch(err) {
            alert("Something has gone wrong!!");
            console.log(err);
        }
    }
}