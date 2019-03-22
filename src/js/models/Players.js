import axios from 'axios';
import * as keys from '../config';

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
        try {
            const res = await axios(`https://api.fantasydata.net/v3/nba/stats/json/Players/${this.team}?key=${keys.key1}`);
            this.playersData = res.data;    
        }catch(err) {
            alert("Something went wrong");
            console.log(err);
        }
    }


    refinePlayersNames() {
        // console.log(this.playersData);
        this.playersData.forEach(element => {
            // console.log(element)

            while (element.FirstName.includes('.')) {
                element.FirstName = element.FirstName.replace('.','');
                // console.log(element.FirstName);
            }
            if (element.LastName.includes('.')) {
                element.LastName = element.LastName.replace('.','');
            }

            // Replace space for _ in last name
            if (element.LastName.includes(' ')) {
                // console.log(element.LastName)
                element.LastName = element.LastName.replace(' ','_');
                // console.log(element.LastName)
            }
            while (element.FirstName.includes("'")) {
                element.FirstName = element.FirstName.replace("'",'');
                // console.log(element.FirstName);
            }
            while (element.FirstName.includes("'")) {
                element.FirstName = element.FirstName.replace("'",'');
                // console.log(element.FirstName);
            }
            while (element.LastName.includes("'")) {
                element.LastName = element.LastName.replace("'",'');
                // console.log(element.FirstName);
            }

            // if (element.FantasyDraftName.split(' ').length > 2) {
            //     // console.log(element);
            // }



            // if (element.FirstName === 'Derrick') {
            //     console.log(element)
            //     console.log(element.FirstName);
            //     console.log(element.LastName);
            // }
        });
    }

}


export const player = class Player {
    constructor(playerID) {
        this.playerID = playerID;
    }


    async getPlayerData() {
        try {
            const res = await axios(`https://api.fantasydata.net/v3/nba/stats/json/PlayerSeasonStatsByPlayer/2019/${this.playerID}?key=${keys.key1}`);
            const data = res.data;
            // console.log(data);
            this.games = data.Games;
            this.apg = data.Assists/this.games.toFixed(2);
            this.fgPercentage = data.FieldGoalsPercentage;
            this.teamId = data.TeamID;
            this.name = data.Name;
            this.orpg = data.OffensiveRebounds/this.games;
            this.playerEfficiency = data.PlayerEfficiencyRating;
            this.plusMinus = data.PlusMinus;
            this.ppg = data.Points/this.games;
            this.position = data.Position;
            this.rpg = data.Rebounds/this.games;
            this.spg = data.Steals/this.games;
            this.threePointersPercentage = data.ThreePointersPercentage;
            this.tds = data.TripleDoubles;
            this.tsp = data.TrueShootingPercentage;
            this.topg = data.Turnovers/this.games;
            this.UsageRate = data.UsageRatePercentage;
        }catch(err) {
            console.log(err);
        }
    }
}












/* 
Luc Mbah Moute

Damioin Lee - GSW -- Not in the roster of HEasSHot API

Scotty Hopson - OKC
Naz Long - Jazz
Jaylen Morris - Bucks
Kalin Lucas - DEtrout

// BULLS
Cristiano Felicio
Otto Porter
Shaquille Harrison
Timothe Luwawu

Brad Wanamaker - cELTICS

James Ennis - phi

John Jenkins - NYK

Derrick Jones Jr. - MIA

Guillermo Hernangomez - CHA

Jordan McRae - WAS
Chasson Randle - WAS

Terrence Jones


*/