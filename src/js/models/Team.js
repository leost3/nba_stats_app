import axios from 'axios';

// https://api.fantasydata.net/v3/nba/stats/JSON/TeamStatsAllowedByPosition/2019?key=86a8a62f6d7c4969858b4744aec1763c

export const newTeam = class {
    constructor(selectedTeam) {
        this.selectedTeam = selectedTeam;
        console.log(selectedTeam);
    }

    async getTeamStats(key) {
        try {
            const res = await axios(`https://api.fantasydata.net/v3/nba/stats/JSON/TeamSeasonStats/2019?key=86a8a62f6d7c4969858b4744aec1763c`); 
            const data = res.data;
            const found = data.find(element => element.Team === this.selectedTeam);
            console.log(found);


            this.record = `${found.Wins}-${found.Losses}`;
            this.FieldGoalsPercentage = `${found.FieldGoalsPercentage}%`;
            this.ppg = found.Points/found.Games;
            this.rpg = found.Rebounds/found.Games;
            this.spg = found.Steals/found.Games;
            this.ThreePointersPercentage = found.ThreePointersPercentage;
            this.topg = found.Turnovers/found.Games;
            this.TwoPointersPercentage = found.TwoPointersPercentage;
        }catch(err) {
            alert("Something has gone wrong!!");
            console.log(err);
        }
    }


    async getTeamInfo(key) {
        try {
            const res = await axios(`https://api.fantasydata.net/v3/nba/stats/json/AllTeams?key=86a8a62f6d7c4969858b4744aec1763c`); 
            const data = res.data;
            const found = data.find(element => element.Key === this.selectedTeam);
            console.log(found);
            this.PrimaryColor = found.PrimaryColor;
            this.SecondaryColor = found.SecondaryColor;
            this.SecondaryColor = found.SecondaryColor;
            this.TertiaryColor = found.TertiaryColor;
            this.WikipediaLogoUrl = found.WikipediaLogoUrl

        }catch(err) {
            alert("Something has gone wrong!!");
            console.log(err);
        }
    }
}

