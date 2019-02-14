const logoball = document.querySelector('.logo__ball');
const sectionTeams = document.querySelector('.section__logos')

function displayTeams() {
    sectionTeams.style.display = 'block';
}


logoball.addEventListener('click', displayTeams);


window.addEventListener('scroll', function() {
    if (scrollY === 0)
        sectionTeams.style.display = 'none';

})

// const rosterUrl = `https://api.codetabs.com/v1/proxy?quest=http://data.nba.net//data/10s/prod/v1/2018/teams/${team}/roster.json`;
const teamsUrl = 'https://api.codetabs.com/v1/proxy?quest=http://data.nba.net//data/10s/prod/v1/2018/teams.json';
const playersUrl ='https://api.codetabs.com/v1/proxy?quest=http://data.nba.net//data/10s/prod/v1/2018/players.json'

//returns an array if each player`s id from the roster;

async function displayRoster(team) {
    const url = await fetch(`https://api.codetabs.com/v1/proxy?quest=http://data.nba.net//data/10s/prod/v1/2018/teams/${team}/roster.json`);
    const response = await url.json();
    const data = response["league"]["standard"]["players"];
    return data;
}


async function displayPlayers() {
    let playerInfo = [];
    const url = await fetch(playersUrl);
    const response = await url.json();
    const datas = response['league']['standard'];
    const spursIds = await displayRoster('mavericks')
    .then( results => results.map(result => {
        return result.personId;
    }));
    spursIds.forEach(id => {
        datas.forEach(data => {
            if (data.personId === id)
                playerInfo.push(data);
        });
    })
    console.log({playerInfo});
}
displayPlayers();



