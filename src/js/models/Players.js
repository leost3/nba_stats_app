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

            if (element.FantasyDraftName.split(' ').length > 2) {
                // console.log(element);
            }



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

Assists: 107.1
AssistsPercentage: 6.9
BlockedShots: 13.5
BlocksPercentage: 0.5
DefensiveRebounds: 294.1
DefensiveReboundsPercentage: 14.3
DoubleDoubles: 4.5
EffectiveFieldGoalsPercentage: 56.2
FantasyPoints: 1858.1
FantasyPointsDraftKings: 2015.4
FantasyPointsFanDuel: 1925.7
FantasyPointsFantasyDraft: 2015.4
FantasyPointsYahoo: 1925.7
FieldGoalsAttempted: 1010.9
FieldGoalsMade: 420.4
FieldGoalsPercentage: 46.9
FreeThrowsAttempted: 272.7
FreeThrowsMade: 226.5
FreeThrowsPercentage: 93.7
Games: 65
GlobalTeamID: 20000030
IsClosed: false
Minutes: 2426
Name: "Harrison Barnes"
OffensiveRebounds: 56.4
OffensiveReboundsPercentage: 2.6
PersonalFouls: 118.3
PlayerEfficiencyRating: 17.6
PlayerID: 20000483
PlusMinus: -84.5
Points: 1237.4
Position: "SF"
Rebounds: 350.5
Season: 2019
SeasonType: 1
Seconds: 21
Started: 65
StatID: 576304
Steals: 54.1
StealsPercentage: 1.2
Team: "SAC"
TeamID: 30
ThreePointersAttempted: 439.5
ThreePointersMade: 170.2
ThreePointersPercentage: 43.6
TotalReboundsPercentage: 8.4
TripleDoubles: 0
TrueShootingAttempts: 1130.9
TrueShootingPercentage: 61.6
TurnOversPercentage: 8.8
Turnovers: 95.8
TwoPointersAttempted: 571.4
TwoPointersMade: 250.2
TwoPointersPercentage: 49.4
Updated: "2019-03-21T18:19:40"
UsageRatePercentage: 23.6





















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