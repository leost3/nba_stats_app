import {elements} from '../views/base';
// import {teams.jso} from './../teams.json';
const key = '86a8a62f6d7c4969858b4744aec1763c';

export const nbaTeams =  class Team {
    constructor(conference) {
        this.conference = conference;
    }

    async getTeams() {
        try {
            // const res = await fetch(`https://api.fantasydata.net/v3/nba/stats/json/AllTeams?key=86a8a62f6d7c4969858b4744aec1763c`)
            // const data = await res.json();
            if (this.conference === 'all') {
                this.teams = teams.filter(el => el.Key !== 'EAST'&&el.Key !== 'WEST');
            } else {
                this.teams = teams.filter( el => {
                    if (el.Conference) {
                        return el.Conference === this.conference;
                    } 
                });
                this.teams.reverse();
            };
        }catch(err) {
            alert(err);
        }
    }

}


const teams = [
{
"TeamID": 1,
"Key": "WAS",
"Active": true,
"City": "Washington",
"Name": "Wizards",
"LeagueID": 3,
"StadiumID": 1,
"Conference": "Eastern",
"Division": "Southeast",
"PrimaryColor": "E31837",
"SecondaryColor": "002B5C",
"TertiaryColor": "C4CED4",
"QuaternaryColor": "FFFFFF",
"WikipediaLogoUrl": "https://upload.wikimedia.org/wikipedia/en/0/02/Washington_Wizards_logo.svg",
"WikipediaWordMarkUrl": null,
"GlobalTeamID": 20000001
},
{
"TeamID": 2,
"Key": "CHA",
"Active": true,
"City": "Charlotte",
"Name": "Hornets",
"LeagueID": 3,
"StadiumID": 2,
"Conference": "Eastern",
"Division": "Southeast",
"PrimaryColor": "1D1160",
"SecondaryColor": "00788C",
"TertiaryColor": "A1A1A4",
"QuaternaryColor": "7AB2DD",
"WikipediaLogoUrl": "https://upload.wikimedia.org/wikipedia/en/c/c4/Charlotte_Hornets_%282014%29.svg",
"WikipediaWordMarkUrl": null,
"GlobalTeamID": 20000002
},
{
"TeamID": 3,
"Key": "ATL",
"Active": true,
"City": "Atlanta",
"Name": "Hawks",
"LeagueID": 3,
"StadiumID": 3,
"Conference": "Eastern",
"Division": "Southeast",
"PrimaryColor": "E03A3E",
"SecondaryColor": "C1D32F",
"TertiaryColor": "26282A",
"QuaternaryColor": null,
"WikipediaLogoUrl": "https://upload.wikimedia.org/wikipedia/en/2/24/Atlanta_Hawks_logo.svg",
"WikipediaWordMarkUrl": null,
"GlobalTeamID": 20000003
},
{
"TeamID": 4,
"Key": "MIA",
"Active": true,
"City": "Miami",
"Name": "Heat",
"LeagueID": 3,
"StadiumID": 4,
"Conference": "Eastern",
"Division": "Southeast",
"PrimaryColor": "98002E",
"SecondaryColor": "F9A01B",
"TertiaryColor": "000000",
"QuaternaryColor": null,
"WikipediaLogoUrl": "https://upload.wikimedia.org/wikipedia/en/f/fb/Miami_Heat_logo.svg",
"WikipediaWordMarkUrl": null,
"GlobalTeamID": 20000004
},
{
"TeamID": 5,
"Key": "ORL",
"Active": true,
"City": "Orlando",
"Name": "Magic",
"LeagueID": 3,
"StadiumID": 5,
"Conference": "Eastern",
"Division": "Southeast",
"PrimaryColor": "0077C0",
"SecondaryColor": "000000",
"TertiaryColor": "C4CED4",
"QuaternaryColor": null,
"WikipediaLogoUrl": "https://upload.wikimedia.org/wikipedia/en/1/10/Orlando_Magic_logo.svg",
"WikipediaWordMarkUrl": null,
"GlobalTeamID": 20000005
},
{
"TeamID": 6,
"Key": "NY",
"Active": true,
"City": "New York",
"Name": "Knicks",
"LeagueID": 3,
"StadiumID": 6,
"Conference": "Eastern",
"Division": "Atlantic",
"PrimaryColor": "006BB6",
"SecondaryColor": "F58426",
"TertiaryColor": "BEC0C2",
"QuaternaryColor": "000000",
"WikipediaLogoUrl": "https://upload.wikimedia.org/wikipedia/en/2/25/New_York_Knicks_logo.svg",
"WikipediaWordMarkUrl": null,
"GlobalTeamID": 20000006
},
{
"TeamID": 7,
"Key": "PHI",
"Active": true,
"City": "Philadelphia",
"Name": "76ers",
"LeagueID": 3,
"StadiumID": 7,
"Conference": "Eastern",
"Division": "Atlantic",
"PrimaryColor": "ED174C",
"SecondaryColor": "006BB6",
"TertiaryColor": "002B5C",
"QuaternaryColor": "FFFFFF",
"WikipediaLogoUrl": "https://upload.wikimedia.org/wikipedia/en/0/0e/Philadelphia_76ers_logo.svg",
"WikipediaWordMarkUrl": null,
"GlobalTeamID": 20000007
},
{
"TeamID": 8,
"Key": "BKN",
"Active": true,
"City": "Brooklyn",
"Name": "Nets",
"LeagueID": 3,
"StadiumID": 8,
"Conference": "Eastern",
"Division": "Atlantic",
"PrimaryColor": "000000",
"SecondaryColor": "FFFFFF",
"TertiaryColor": null,
"QuaternaryColor": null,
"WikipediaLogoUrl": "https://upload.wikimedia.org/wikipedia/commons/4/44/Brooklyn_Nets_newlogo.svg",
"WikipediaWordMarkUrl": null,
"GlobalTeamID": 20000008
},
{
"TeamID": 9,
"Key": "BOS",
"Active": true,
"City": "Boston",
"Name": "Celtics",
"LeagueID": 3,
"StadiumID": 9,
"Conference": "Eastern",
"Division": "Atlantic",
"PrimaryColor": "008348",
"SecondaryColor": "BB9753",
"TertiaryColor": "000000",
"QuaternaryColor": null,
"WikipediaLogoUrl": "https://upload.wikimedia.org/wikipedia/en/8/8f/Boston_Celtics.svg",
"WikipediaWordMarkUrl": null,
"GlobalTeamID": 20000009
},
{
"TeamID": 10,
"Key": "TOR",
"Active": true,
"City": "Toronto",
"Name": "Raptors",
"LeagueID": 3,
"StadiumID": 10,
"Conference": "Eastern",
"Division": "Atlantic",
"PrimaryColor": "CE1141",
"SecondaryColor": "000000",
"TertiaryColor": "A1A1A4",
"QuaternaryColor": "FFFFFF",
"WikipediaLogoUrl": "https://upload.wikimedia.org/wikipedia/en/3/36/Toronto_Raptors_logo.svg",
"WikipediaWordMarkUrl": null,
"GlobalTeamID": 20000010
},
{
"TeamID": 11,
"Key": "CHI",
"Active": true,
"City": "Chicago",
"Name": "Bulls",
"LeagueID": 3,
"StadiumID": 11,
"Conference": "Eastern",
"Division": "Central",
"PrimaryColor": "CE1141",
"SecondaryColor": "000000",
"TertiaryColor": null,
"QuaternaryColor": null,
"WikipediaLogoUrl": "https://upload.wikimedia.org/wikipedia/en/6/67/Chicago_Bulls_logo.svg",
"WikipediaWordMarkUrl": null,
"GlobalTeamID": 20000011
},
{
"TeamID": 12,
"Key": "CLE",
"Active": true,
"City": "Cleveland",
"Name": "Cavaliers",
"LeagueID": 3,
"StadiumID": 12,
"Conference": "Eastern",
"Division": "Central",
"PrimaryColor": "6F263D",
"SecondaryColor": "FDB81C",
"TertiaryColor": "041E42",
"QuaternaryColor": "000000",
"WikipediaLogoUrl": "https://upload.wikimedia.org/wikipedia/en/4/4b/Cleveland_Cavaliers_logo.svg",
"WikipediaWordMarkUrl": null,
"GlobalTeamID": 20000012
},
{
"TeamID": 13,
"Key": "IND",
"Active": true,
"City": "Indiana",
"Name": "Pacers",
"LeagueID": 3,
"StadiumID": 13,
"Conference": "Eastern",
"Division": "Central",
"PrimaryColor": "002D62",
"SecondaryColor": "FDBB30",
"TertiaryColor": "BEC0C2",
"QuaternaryColor": null,
"WikipediaLogoUrl": "https://upload.wikimedia.org/wikipedia/en/1/1b/Indiana_Pacers.svg",
"WikipediaWordMarkUrl": null,
"GlobalTeamID": 20000013
},
{
"TeamID": 14,
"Key": "DET",
"Active": true,
"City": "Detroit",
"Name": "Pistons",
"LeagueID": 3,
"StadiumID": 14,
"Conference": "Eastern",
"Division": "Central",
"PrimaryColor": "006BB6",
"SecondaryColor": "ED174C",
"TertiaryColor": "BEC0C2",
"QuaternaryColor": "FFFFFF",
"WikipediaLogoUrl": "https://upload.wikimedia.org/wikipedia/commons/7/7c/Pistons_logo17.svg",
"WikipediaWordMarkUrl": "",
"GlobalTeamID": 20000014
},
{
"TeamID": 15,
"Key": "MIL",
"Active": true,
"City": "Milwaukee",
"Name": "Bucks",
"LeagueID": 3,
"StadiumID": 15,
"Conference": "Eastern",
"Division": "Central",
"PrimaryColor": "00471B",
"SecondaryColor": "EEE1C6",
"TertiaryColor": "0077C0",
"QuaternaryColor": "000000",
"WikipediaLogoUrl": "https://upload.wikimedia.org/wikipedia/en/4/4a/Milwaukee_Bucks_logo.svg",
"WikipediaWordMarkUrl": null,
"GlobalTeamID": 20000015
},
{
"TeamID": 16,
"Key": "MIN",
"Active": true,
"City": "Minnesota",
"Name": "Timberwolves",
"LeagueID": 3,
"StadiumID": 16,
"Conference": "Western",
"Division": "Northwest",
"PrimaryColor": "0C2340",
"SecondaryColor": "78BE20",
"TertiaryColor": "236192",
"QuaternaryColor": "9EA2A2",
"WikipediaLogoUrl": "https://upload.wikimedia.org/wikipedia/en/c/c2/Minnesota_Timberwolves_logo.svg",
"WikipediaWordMarkUrl": null,
"GlobalTeamID": 20000016
},
{
"TeamID": 17,
"Key": "UTA",
"Active": true,
"City": "Utah",
"Name": "Jazz",
"LeagueID": 3,
"StadiumID": 17,
"Conference": "Western",
"Division": "Northwest",
"PrimaryColor": "002B5C",
"SecondaryColor": "F9A01B",
"TertiaryColor": "00471B",
"QuaternaryColor": null,
"WikipediaLogoUrl": "https://upload.wikimedia.org/wikipedia/en/0/04/Utah_Jazz_logo_%282016%29.svg",
"WikipediaWordMarkUrl": null,
"GlobalTeamID": 20000017
},
{
"TeamID": 18,
"Key": "OKC",
"Active": true,
"City": "Oklahoma City",
"Name": "Thunder",
"LeagueID": 3,
"StadiumID": 18,
"Conference": "Western",
"Division": "Northwest",
"PrimaryColor": "007AC1",
"SecondaryColor": "EF3B24",
"TertiaryColor": "FDBB30",
"QuaternaryColor": "002D62",
"WikipediaLogoUrl": "https://upload.wikimedia.org/wikipedia/en/5/5d/Oklahoma_City_Thunder.svg",
"WikipediaWordMarkUrl": null,
"GlobalTeamID": 20000018
},
{
"TeamID": 19,
"Key": "POR",
"Active": true,
"City": "Portland",
"Name": "Trail Blazers",
"LeagueID": 3,
"StadiumID": 19,
"Conference": "Western",
"Division": "Northwest",
"PrimaryColor": "E03A3E",
"SecondaryColor": "000000",
"TertiaryColor": "FFFFFF",
"QuaternaryColor": null,
"WikipediaLogoUrl": "https://upload.wikimedia.org/wikipedia/en/2/21/Portland_Trail_Blazers_logo.svg",
"WikipediaWordMarkUrl": null,
"GlobalTeamID": 20000019
},
{
"TeamID": 20,
"Key": "DEN",
"Active": true,
"City": "Denver",
"Name": "Nuggets",
"LeagueID": 3,
"StadiumID": 20,
"Conference": "Western",
"Division": "Northwest",
"PrimaryColor": "00285E",
"SecondaryColor": "5091CD",
"TertiaryColor": "FDB927",
"QuaternaryColor": null,
"WikipediaLogoUrl": "https://upload.wikimedia.org/wikipedia/en/7/76/Denver_Nuggets.svg",
"WikipediaWordMarkUrl": null,
"GlobalTeamID": 20000020
},
{
"TeamID": 21,
"Key": "MEM",
"Active": true,
"City": "Memphis",
"Name": "Grizzlies",
"LeagueID": 3,
"StadiumID": 21,
"Conference": "Western",
"Division": "Southwest",
"PrimaryColor": "00285E",
"SecondaryColor": "6189B9",
"TertiaryColor": "BED4E9",
"QuaternaryColor": "FDB927",
"WikipediaLogoUrl": "https://upload.wikimedia.org/wikipedia/en/f/f1/Memphis_Grizzlies.svg",
"WikipediaWordMarkUrl": null,
"GlobalTeamID": 20000021
},
{
"TeamID": 22,
"Key": "HOU",
"Active": true,
"City": "Houston",
"Name": "Rockets",
"LeagueID": 3,
"StadiumID": 22,
"Conference": "Western",
"Division": "Southwest",
"PrimaryColor": "CE1141",
"SecondaryColor": "C4CED4",
"TertiaryColor": "000000",
"QuaternaryColor": "FFFFFF",
"WikipediaLogoUrl": "https://upload.wikimedia.org/wikipedia/en/2/28/Houston_Rockets.svg",
"WikipediaWordMarkUrl": null,
"GlobalTeamID": 20000022
},
{
"TeamID": 23,
"Key": "NO",
"Active": true,
"City": "New Orleans",
"Name": "Pelicans",
"LeagueID": 3,
"StadiumID": 23,
"Conference": "Western",
"Division": "Southwest",
"PrimaryColor": "002B5C",
"SecondaryColor": "B4975A",
"TertiaryColor": "E31837",
"QuaternaryColor": null,
"WikipediaLogoUrl": "https://upload.wikimedia.org/wikipedia/en/0/0d/New_Orleans_Pelicans_logo.svg",
"WikipediaWordMarkUrl": null,
"GlobalTeamID": 20000023
},
{
"TeamID": 24,
"Key": "SA",
"Active": true,
"City": "San Antonio",
"Name": "Spurs",
"LeagueID": 3,
"StadiumID": 24,
"Conference": "Western",
"Division": "Southwest",
"PrimaryColor": "000000",
"SecondaryColor": "C4CED4",
"TertiaryColor": null,
"QuaternaryColor": null,
"WikipediaLogoUrl": "https://upload.wikimedia.org/wikipedia/en/a/a2/San_Antonio_Spurs.svg",
"WikipediaWordMarkUrl": null,
"GlobalTeamID": 20000024
},
{
"TeamID": 25,
"Key": "DAL",
"Active": true,
"City": "Dallas",
"Name": "Mavericks",
"LeagueID": 3,
"StadiumID": 25,
"Conference": "Western",
"Division": "Southwest",
"PrimaryColor": "0053BC",
"SecondaryColor": "BBC4CA",
"TertiaryColor": "000000",
"QuaternaryColor": null,
"WikipediaLogoUrl": "https://upload.wikimedia.org/wikipedia/en/9/97/Dallas_Mavericks_logo.svg",
"WikipediaWordMarkUrl": null,
"GlobalTeamID": 20000025
},
{
"TeamID": 26,
"Key": "GS",
"Active": true,
"City": "Golden State",
"Name": "Warriors",
"LeagueID": 3,
"StadiumID": 26,
"Conference": "Western",
"Division": "Pacific",
"PrimaryColor": "006BB6",
"SecondaryColor": "FDB927",
"TertiaryColor": "26282A",
"QuaternaryColor": null,
"WikipediaLogoUrl": "https://upload.wikimedia.org/wikipedia/en/0/01/Golden_State_Warriors_logo.svg",
"WikipediaWordMarkUrl": null,
"GlobalTeamID": 20000026
},
{
"TeamID": 27,
"Key": "LAL",
"Active": true,
"City": "Los Angeles",
"Name": "Lakers",
"LeagueID": 3,
"StadiumID": 27,
"Conference": "Western",
"Division": "Pacific",
"PrimaryColor": "552583",
"SecondaryColor": "FDB927",
"TertiaryColor": "000000",
"QuaternaryColor": null,
"WikipediaLogoUrl": "https://upload.wikimedia.org/wikipedia/commons/3/3c/Los_Angeles_Lakers_logo.svg",
"WikipediaWordMarkUrl": null,
"GlobalTeamID": 20000027
},
{
"TeamID": 28,
"Key": "LAC",
"Active": true,
"City": "Los Angeles",
"Name": "Clippers",
"LeagueID": 3,
"StadiumID": 27,
"Conference": "Western",
"Division": "Pacific",
"PrimaryColor": "ED174C",
"SecondaryColor": "006BB6",
"TertiaryColor": "87ceeb",
"QuaternaryColor": "000000",
"WikipediaLogoUrl": "https://upload.wikimedia.org/wikipedia/en/b/bb/Los_Angeles_Clippers_%282015%29.svg",
"WikipediaWordMarkUrl": null,
"GlobalTeamID": 20000028
},
{
"TeamID": 29,
"Key": "PHO",
"Active": true,
"City": "Phoenix",
"Name": "Suns",
"LeagueID": 3,
"StadiumID": 28,
"Conference": "Western",
"Division": "Pacific",
"PrimaryColor": "1D1160",
"SecondaryColor": "E56020",
"TertiaryColor": "000000",
"QuaternaryColor": "F9A01B",
"WikipediaLogoUrl": "https://upload.wikimedia.org/wikipedia/en/d/dc/Phoenix_Suns_logo.svg",
"WikipediaWordMarkUrl": null,
"GlobalTeamID": 20000029
},
{
"TeamID": 30,
"Key": "SAC",
"Active": true,
"City": "Sacramento",
"Name": "Kings",
"LeagueID": 3,
"StadiumID": 29,
"Conference": "Western",
"Division": "Pacific",
"PrimaryColor": "5A2B81",
"SecondaryColor": "63727A",
"TertiaryColor": "000000",
"QuaternaryColor": "FFFFFF",
"WikipediaLogoUrl": "https://upload.wikimedia.org/wikipedia/en/c/c7/SacramentoKings.svg",
"WikipediaWordMarkUrl": null,
"GlobalTeamID": 20000030
},
{
"TeamID": 31,
"Key": "EAST",
"Active": false,
"City": "Team",
"Name": "LeBron",
"LeagueID": 3,
"StadiumID": null,
"Conference": null,
"Division": null,
"PrimaryColor": null,
"SecondaryColor": null,
"TertiaryColor": null,
"QuaternaryColor": null,
"WikipediaLogoUrl": null,
"WikipediaWordMarkUrl": null,
"GlobalTeamID": 20000031
},
{
"TeamID": 32,
"Key": "WEST",
"Active": false,
"City": "Team",
"Name": "Giannis",
"LeagueID": 3,
"StadiumID": null,
"Conference": null,
"Division": null,
"PrimaryColor": null,
"SecondaryColor": null,
"TertiaryColor": null,
"QuaternaryColor": null,
"WikipediaLogoUrl": null,
"WikipediaWordMarkUrl": null,
"GlobalTeamID": 20000032
}
]