import axios from 'axios';
import * as keys from '../config';


export const teamPlayers = class Team {
    constructor(team) {
        this.team = team;
    }
    async getPlayers() {
        try {
            const res = await axios(`https://api.fantasydata.net/v3/nba/stats/json/Players/${this.team}?key=${keys.key2}`);
            this.playersData = res.data; 
        }catch(err) {
            alert("Something went wrong");
            console.log(err);
        }
    }

    refinePlayersNames() {
        // Use REGEX
        this.playersData.forEach(element => {
            while (element.FirstName.includes('.')) {
                element.FirstName = element.FirstName.replace('.','');
            }
            while (element.LastName.includes('.')) {
                element.LastName = element.LastName.replace('.','');
            }
            // Replace space for _ in last name
            while (element.LastName.includes(' ')) {
                element.LastName = element.LastName.replace(' ','_');
            }
            while (element.FirstName.includes("'")) {
                element.FirstName = element.FirstName.replace("'",'');
            }
            while (element.FirstName.includes("'")) {
                element.FirstName = element.FirstName.replace("'",'');
            }
            while (element.LastName.includes("'")) {
                element.LastName = element.LastName.replace("'",'');
            }
        });
    }
}

export const SelectedPlayer = class Player {
    constructor(playerID) {
        this.playerID = playerID;
    }
    async getPlayerData() {
        try {
            // Player stats
            const res = await axios(`https://api.fantasydata.net/v3/nba/stats/json/PlayerSeasonStatsByPlayer/2019/${this.playerID}?key=${keys.key2}`);
            const data = res.data;
            this.team = data.Team;
            console.log(data);
            // Players info
            const resInfo = await axios(`https://api.fantasydata.net/v3/nba/stats/json/Players/${this.team}?key=${keys.key2}`);
            this.playersInfo = resInfo.data;
            this.data = data;
            if (data.Name.split(" ").length === 2) [this.FirstName, this.LastName] = data.Name.split(" ");
            if (data.Name.split(" ").length > 2) [this.FirstName, ...this.LastName] = data.Name.split(" ");
            this.games = data.Games;
            this.apg = data.Assists/this.games;
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
            this.usageRate = data.UsageRatePercentage;
        }catch(err) {
            console.log(err);
        }
    }
    refineName() {
        if (typeof this.LastName === "object") this.LastName = this.LastName.join(" ");
    }

    // returns years of experience of selected player
    getPlayerXp() {
        return this.playersInfo.find( playerData => playerData.DraftKingsName === this.name || (playerData.FirstName + ' ' + playerData.LastName) === this.name).Experience;
    }
}

// Search for player in input field

export const searchedPlayer = class Searched {
    constructor(playerName) {
        this.playerName = playerName.toLowerCase();
    }

    async getSearchedPlayer() {
        const res = await axios(`https://api.fantasydata.net/v3/nba/stats/json/Players?key=${keys.key2}`);
        const data = res.data;
        const found = data.filter(el => {
            if (el.FirstName.toLowerCase() === this.playerName || el.LastName.toLowerCase() === this.playerName ||el.DraftKingsName !== null && el.DraftKingsName.toLowerCase() === this.playerName ) return el;
            // console.log(el.DraftKingsName.toLowerCase())
        })
        this.foundPlayers = found;
        return found;
    }

    refineName() {
        if (typeof this.LastName === "object") this.LastName = this.LastName.join(" ");
    }

    // returns years of experience of selected player
    getPlayerXp() {
        return this.playersInfo.find( playerData => playerData.DraftKingsName === this.name || (playerData.FirstName + ' ' + playerData.LastName) === this.name).Experience;
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