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
            console.log(found);

            this.opponentStats =  {
                games: found.OpponentStat.Games,
                apg: found.OpponentStat.Assists/this.game,
                ppg: found.OpponentStat.Points/this.games,
                rpg: found.OpponentStat.Rebounds/this.games,
                spg: found.OpponentStat.Steals/this.games,
                TOpg: found.OpponentStat.Turnovers/this.games,
                threePointersAttemptedPerGame: found.OpponentStat.ThreePointersAttempted/this.games,
                fieldGoalsPercentage: found.OpponentStat.FieldGoalsPercentage,
                threePointersPercentage: found.OpponentStat.ThreePointersPercentage,
                twoPointersPercentage: found.OpponentStat.TwoPointersPercentage,
                trueShootingPercentage: found.OpponentStat.TrueShootingPercentage,

            }
            this.record = `${found.Wins}-${found.Losses}`;
            this.apg = found.Assists/found.Games;
            this.ppg = found.Points/found.Games;
            this.rpg = found.Rebounds/found.Games;
            this.spg = found.Steals/found.Games;
            this.TOpg = found.Turnovers/found.Games;
            this.threePointersAttemptedPerGame = found.ThreePointersAttempted/found.Games;
            this.fieldGoalsPercentage = found.FieldGoalsPercentage;
            this.threePointersPercentage = found.ThreePointersPercentage;
            this.twoPointersPercentage = found.TwoPointersPercentage;
            this.trueShootingPercentage = found.TrueShootingPercentage;
            console.log(this.fieldGoalsPercentage)
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
            this.teamInfo = {
                primaryColor : found.PrimaryColor,
                secondaryColor : found.SecondaryColor,
                tertiaryColor : found.TertiaryColor,
                wikipediaLogoUrl : found.WikipediaLogoUrl
            }

        }catch(err) {
            alert("Something has gone wrong!!");
            console.log(err);
        }
    }

    async getSchedule() {
        try {
            const res = await axios(`https://api.fantasydata.net/v3/nba/stats/json/Games/2019?key=86a8a62f6d7c4969858b4744aec1763c`);
            const data = res.data;
            let arr = [];   
            for (let i=0; arr.length < 4; i++) {
                if (data[i].Status === 'Scheduled') {
                    if (data[i].AwayTeam === this.selectedTeam || data[i].HomeTeam === this.selectedTeam) {
                        arr.push([data[i].AwayTeam , data[i].HomeTeam, data[i].Day])
                    } 
                }
                        
            }
            console.log(arr);
            return arr;
        }
        catch(err) {
            console.log(err);
        }
    }

}

