// API urls:

// const rosterUrl = `https://api.codetabs.com/v1/proxy?quest=http://data.nba.net//data/10s/prod/v1/2018/teams/${team}/roster.json`;
// const teamsUrl = 'https://api.codetabs.com/v1/proxy?quest=http://data.nba.net//data/10s/prod/v1/2018/teams.json';
const playersUrl ='https://api.codetabs.com/v1/proxy?quest=http://data.nba.net//data/10s/prod/v1/2018/players.json';
// const playerImgUrl = `https://nba-players.herokuapp.com/players/:lastName/:firstName`;
//const playerProfile = `http://data.nba.net/data/10s/prod/v1/2018/players/${personId}_profile.json
//returns an array if each player`s id from the roster;


//retrieves personId of all players in the roster
async function displayRoster(team) {
    const url = await fetch(`https://api.codetabs.com/v1/proxy?quest=http://data.nba.net//data/10s/prod/v1/2018/teams/${team}/roster.json`);
    const response = await url.json();
    const data = response["league"]["standard"]["players"];
    return data;//{personId: 2332334, ... }
}

//returns an array with an object of players information of the roster
async function displayPlayerInfo(team) {
    let playerInfo = [];
    const url = await fetch(playersUrl);
    const response = await url.json();
    const datas = response['league']['standard'];// returns players information from all pleayers of NBA


    //returns personIds of all players from the roster
    const teamIds = await displayRoster(team)
    .then( results => results.map(result => {
        return result.personId;
    }));

    //iterates through all personIds of the roster and players information
    //iterates through all objects of players information of NBA and pushes the players information that match with player id;
    teamIds.forEach(id => {
        datas.forEach(data => {
            if (data.personId === id && data.nbaDebutYear < 2018)
                playerInfo.push(data);
        });
    });

    // console.log({playerInfo});

    //return array with objects of players information of the wished roster;
    return playerInfo;
}


//PROBLEM: ERASE ALL DATA DISPLAYED WHEN CLICKED IN ANOTHER TEAM


function executeFunction() {
    let clickedTeam = this.dataset.teamname;
    displayPlayerInfo(clickedTeam)
    .then(responses => responses.map(response => {
        //detructuring -> Use it to fix names[apostrofe, compostos]
            // let {firstName, lastName} = response;
            // console.log(firstName,lastName);
        
    
        return {
            lastNameFirstName: `${response.lastName}\/${response.firstName}`,
            fullName: `${response.firstName} ${response.lastName}`,
            debutYear: response.nbaDebutYear,
        }
        //displayPlayerInfo(clickedTeam) returns:
            
            // collegeName: ""
            // country: "South Sudan"
            // dateOfBirthUTC: "1997-02-01"
            // draft: {teamId: "", pickNum: "", roundNum: "", seasonYear: ""}
            // firstName: "Deng"
            // heightFeet: "6"
            // heightInches: "7"
            // heightMeters: "2.01"
            // isActive: true
            // jersey: "32"
            // lastAffiliation: " South Sudan/South Sudan"
            // lastName: "Adel"
            // nbaDebutYear: "2018"
            // personId: "1629061"
            // pos: "F"
            // teamId: "1610612739"
            // teams: [{…}]
            // weightKilograms: "90.7"
            // weightPounds: "200"
            // yearsPro: "0"
            // __proto__: Object

    }))
    .then(results => results.forEach((result,index) => {
        // console.log(result);//returns lastName/firstName
        index < 5 ? 
        playerImgS.insertAdjacentHTML("beforeend",
        `
        <div class="player__profile">
             <img src="https://nba-players.herokuapp.com/players/${result.lastNameFirstName}" alt="${result.fullName}">
        </div>
        `) 
         :
         playerImgB.insertAdjacentHTML("beforeend",
        `
        <div class="player__profile">
             <img src="https://nba-players.herokuapp.com/players/${result.lastNameFirstName}" alt="${result.fullName}">
        </div>
        `) ;
    }));
};

// executeFunction();


const playerChart = document.querySelector('.playerList');
const playerImgS = document.querySelector('.starters');//starters players
const playerImgB = document.querySelector('.bench');//bench players
const playerImg = document.querySelector('.players');


const teams = document.querySelectorAll('.nav__side img');
teams.forEach(team => {
    team.addEventListener('click', executeFunction);
});

// console.log(this.dataset.teamname)



const {toString: s} = 123;
console.log(s)


