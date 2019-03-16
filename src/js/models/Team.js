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
            const data = res.data;
            const found = data.find(element => element.Team === this.selectedTeam)
            this.record = `${found.Wins}-${found.Losses}`;
            this.FieldGoalsPercentage = `${found.FieldGoalsPercentage}%`;
            this.ppg = found.Points/found.Games;
            this.rpg = found.Rebounds/found.Games;
            this.spg = found.Steals/found.Games;
            this.ThreePointersPercentage = found.ThreePointersPercentage;
            this.topg = found.Turnovers/found.Games;
            this.TwoPointersPercentage = found.TwoPointersPercentage;
            console.log(found);
        }catch(err) {
            alert("Something has gone wrong!!");
            console.log(err);
        }
    }
}

EffectiveFieldGoalsPercentage: 60.3

FieldGoalsPercentage: 53
FreeThrowsPercentage: 86.3
Games: 69
Losses: 40
Name: "Washington Wizards"
Points: 8890.9
Possessions: 7964.7
Rebounds: 3251.4
Steals: 664.9
ThreePointersPercentage: 38.9
TrueShootingPercentage: 64.2
Turnovers: 1080.8
TwoPointersAttempted: 4376.1
TwoPointersMade: 2387
TwoPointersPercentage: 61.4
Wins: 29