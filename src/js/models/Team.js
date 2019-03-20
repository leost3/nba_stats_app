import axios from 'axios';

// https://api.fantasydata.net/v3/nba/stats/JSON/TeamStatsAllowedByPosition/2019?key=86a8a62f6d7c4969858b4744aec1763c

export const newTeam = class {
    constructor(selectedTeam) {
        this.selectedTeam = selectedTeam;
    }

    async getTeamStats(key) {
        try {
            const res = await axios(`https://api.fantasydata.net/v3/nba/stats/JSON/TeamSeasonStats/2019?key=86a8a62f6d7c4969858b4744aec1763c`); 
            const data = res.data;
            const found = data.find(element => element.Team === this.selectedTeam);
            // console.log(found);
            this.Oponnent = found.OpponentStat;
            // console.log(this.Oponnent);
            this.record = `${found.Wins}-${found.Losses}`;
            this.FieldGoalsPercentage = `${found.FieldGoalsPercentage}%`;
            this.ppg = found.Points/found.Games;
            this.rpg = found.Rebounds/found.Games;
            this.spg = found.Steals/found.Games;
            this.ThreePointersPercentage = found.ThreePointersPercentage;
            this.topg = found.Turnovers/found.Games;
            this.TwoPointersPercentage = found.TwoPointersPercentage;
            this.TrueShootingPercentage = found.TrueShootingPercentage;
            this.ThreePointersAttemptedPerGame = found.ThreePointersAttempted/found.Games;
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
            // console.log(found);
            this.PrimaryColor = found.PrimaryColor;
            this.SecondaryColor = found.SecondaryColor;
            this.TertiaryColor = found.TertiaryColor;
            this.WikipediaLogoUrl = found.WikipediaLogoUrl

        }catch(err) {
            alert("Something has gone wrong!!");
            console.log(err);
        }
    }
    // Get stats from opponents
    getOponnentsStats(Opponent) {
        this.OpponentStats = Opponent.OpponentStat;
        this.Opoonentrecord = `${Opponent.Wins}-${Opponent.Losses}`;
        this.OpoonentFieldGoalsPercentage = `${Opponent.FieldGoalsPercentage}%`;
        this.Opoonentppg = Opponent.Points/Opponent.Games;
        this.Opoonentrpg = Opponent.Rebounds/Opponent.Games;
        this.Opoonentspg = Opponent.Steals/Opponent.Games;
        this.OpoonentThreePointersPercentage = Opponent.ThreePointersPercentage;
        this.Opoonenttopg = Opponent.Turnovers/Opponent.Games;
        this.OpoonentTwoPointersPercentage = Opponent.TwoPointersPercentage;
        this.OpoonentTrueShootingPercentage = Opponent.TrueShootingPercentage;
        this.OpoonentThreePointersAttemptedPerGame = Opponent.ThreePointersAttempted/Opponent.Games;
    }
}

