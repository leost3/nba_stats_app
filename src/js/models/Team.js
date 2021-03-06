import axios from 'axios';
import * as keys from '../config';

export const newTeam = class {
    constructor(selectedTeam) {
        this.selectedTeam = selectedTeam;
    }

    async getTeamStats() {
        try {
            const res = await axios(`https://api.fantasydata.net/v3/nba/stats/JSON/TeamSeasonStats/2019?key=${keys.key2}`); 
            const data = res.data;
            const found = data.find(element => element.Team === this.selectedTeam);

            this.opponentStats =  {
                games: found.OpponentStat.Games,
                apg: found.OpponentStat.Assists/found.OpponentStat.Games,
                ppg: found.OpponentStat.Points/found.OpponentStat.Games,
                rpg: found.OpponentStat.Rebounds/found.OpponentStat.Games,
                spg: found.OpponentStat.Steals/found.OpponentStat.Games,
                TOpg: found.OpponentStat.Turnovers/found.OpponentStat.Games,
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
        }catch(err) {
            alert("Something has gone wrong!!");
            console.log(err);
        }
    }
    async getTeamInfo() {
        try {
            const res = await axios(`https://api.fantasydata.net/v3/nba/stats/json/AllTeams?key=${keys.key2}`); 
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
    };

    async getSchedule() {
        try {
            // Fetch Sechdule API
            const res = await axios(`https://api.fantasydata.net/v3/nba/stats/json/Games/2019?key=${keys.key2}`);
            const data = res.data;
            let arr = [];   
          
            // Push next 4 matches(homeTeam, awayTeam and game date) to array arr
            data.forEach(el => {
                if (el.Status === 'Scheduled') {
                    if (el.AwayTeam === this.selectedTeam || el.HomeTeam === this.selectedTeam){
                        if (arr.length < 4) arr.push([el.AwayTeam, el.HomeTeam, el.DateTime]);
                    } 
                }
            });
            this.schedule = {};

            // SPlit date into actual date and time
            arr = arr.map(insideArr => {
                insideArr[2] = insideArr[2].split("T");
                insideArr = insideArr.flat();
                insideArr[3] = insideArr[3].split('');
                insideArr[3].splice(5)
                insideArr[3] = insideArr[3].join("");
                return insideArr;
            });

            for (let i=0; i<arr.length; i++) {
                this.schedule[`matchDate${i + 1}`] = arr[i];
            }
        }
        catch(err) {
            console.log(err);
        }
    }

    async getStanding() {

        try {
            const res = await axios(`https://api.fantasydata.net/v3/nba/stats/json/Standings/2019?key=${keys.key2}`);
            const data = res.data;
            const found = data.find(element => element.Key === this.selectedTeam);
            this.conference = found.Conference;
            this.teamStanding = {
                streak: found.Streak,
                conferenceRecord: `${found.ConferenceWins}-${found.ConferenceLosses}`,
                homeRecord: `${found.HomeWins}-${found.HomeLosses}`,
                awayRecord: `${found.AwayWins}-${found.AwayLosses}`,
            }
        }catch(err) {
            console.log(err);
        }
    }
};

