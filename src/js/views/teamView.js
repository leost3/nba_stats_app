import {elements} from './base';
import Chart from 'chart.js';


// Returns either WON or Lost game depending on streak (negative or positive)
function correctStreak(element) {
    if (element < 0) {
        element * -1;
        return "Lost";
    } else {
        return "Won";
    }
}


// Render team page informations into team page
export const renderTeam = (team) => {

    let markup = `
    <div class= team__information>
        <div class="team__stats">
            <div class="team__stats--headpage">
                <div class="team__stats--logo--Record">
                    <img src="/images/Logos/teams_logos/${team.selectedTeam}_logo.svg" alt="${team.selectedTeam}">
                    <h1>W ${team.record} L</h1>
                </div>
            </div>
            <div class="team__stats--basics">
                <ul class="stats">
                    <li><img src="/images/Logos/page_logo/basketlogo.png" alt="" srcset="">${team.ppg.toFixed(1)} Points per game</li>
                    <li><img src="/images/Logos/page_logo/basketlogo.png" alt="" srcset="">${team.apg.toFixed(1)} assists per game</li>
                    <li><img src="/images/Logos/page_logo/basketlogo.png" alt="" srcset="">${team.threePointersAttemptedPerGame.toFixed(1)} Attempted 3 pointers per game</li>
                </ul>
            </div>
            <div class="team__stats--info--slider">
                <h3>Has ${correctStreak(team.teamStanding.streak)} last ${team.teamStanding.streak < 0 ? team.teamStanding.streak * -1 : team.teamStanding.streak } ${team.teamStanding.streak === 1 || team.teamStanding.streak === -1 ? "game" : "games"}</h3>
                <h3>${team.teamStanding.conferenceRecord} against ${team.conference} conference teams</h3>
                <h3>${team.teamStanding.homeRecord} at home</h3>
                <h3>${team.teamStanding.awayRecord} away</h3>
            </div>
            
            <div class="schedule__box">
            </div>
            
            <div class="canvas__radar">
                <canvas id="myChart"></canvas>
            </div>
        </div>
    </div>
`
    // Insert markup into HTML
    elements.teamPlayers.insertAdjacentHTML('afterbegin', markup);
}


// Render Schedules into HTML
const resSchedule = (teamSchedule, scheduleBox) => {

    let markup;

    if (teamSchedule.length > 0) {
         markup = `
            <div class="schedule__game">
                <div class="schedule__away">
                    <img src="/images/Logos/teams_logos/${teamSchedule[0]}_logo.svg" alt="${teamSchedule[0]}">
                    <p>${teamSchedule[0]}</p>
                </div>
                <div class="at">
                    <h3>${teamSchedule[2]} ${teamSchedule[3]}</h3>
                    <h2>AT</h2>
                </div>
                <div class="schedule__home">
                    <img src="/images/Logos/teams_logos/${teamSchedule[1]}_logo.svg" alt="${teamSchedule[1]}">
                    <p>${teamSchedule[1]}</p>
                </div>                
            </div>
    `
    } else {
        markup = `No games Scheduled`;
    }

    scheduleBox.insertAdjacentHTML('beforeend', markup);
}

// Get teams next schedules
export const renderSchedule = (scheduleObj) => {
    const scheduleBox = document.querySelector('.team__players .schedule__box');
    for (let prop in scheduleObj) {
        resSchedule(scheduleObj[prop], scheduleBox);
    }
};


export const chart = (team) => {
    createChart(team);
};

// Change background colors of boxes depending on team`s colors
export const changeBackgroundColor = (team) => {

    const teamBasicStats = document.querySelectorAll('.team__stats--basics .stats li');
    // const teamInfoSlidersStats = );
    // const teamHeader = 

    document.querySelector('.team__stats--headpage').style.backgroundImage = `linear-gradient(rgba(0,0,0,0.7), rgba(0, 0, 0, 0.699)) ,url('/images/teams_images/${team.selectedTeam}.jpg')`;

    document.querySelector('.team__stats--info--slider').style.background = `linear-gradient(to right, #${team.teamInfo.primaryColor}, ${team.teamInfo.primaryColor === "000000" ? "#333" : "#000"})`;

    teamBasicStats.forEach(el => el.style.background = `linear-gradient(to right,#${team.teamInfo.primaryColor}, ${team.teamInfo.primaryColor === "000000" ? "#333" : "#000"}`);

}


const createChart = (data) => {
    console.log(data)
    const ctx = document.getElementById('myChart').getContext('2d');
    new Chart(ctx, {
    type: 'radar',
    data: {
        labels: ['FG', '2PT%', 'TrueShotting%', '3PT%','ReboundsPerGame'],
        datasets: [
            {
            label: data.selectedTeam,
            data: [
                data.fieldGoalsPercentage,
                data.twoPointersPercentage,
                data.trueShootingPercentage,
                data.threePointersPercentage,
                data.rpg,
                    ],
            backgroundColor: [
                hexToRgbA(`#${data.teamInfo.primaryColor}`)
            ],
            borderColor: [
                `${data.teamInfo.primaryColor}`
            ],
            borderWidth: 4
        },
            {
            label: `OPONNENTS VS ${data.selectedTeam}`,
            data: [
                data.opponentStats.fieldGoalsPercentage,
                data.opponentStats.twoPointersPercentage,
                data.opponentStats.trueShootingPercentage,
                data.opponentStats.threePointersPercentage,
                data.opponentStats.rpg
                    ],
            backgroundColor: [
                `rgba(255,255,55, 0.5)`
            ],
            borderColor: [
                'rgba(0,0,0)'
            ],
            borderWidth: 4
        },
        ]
    }
    ,
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
});

}

// TURN HEX INTO RGBA CODE
function hexToRgbA(hex){
    let c;
    if(/^#([A-Fa-f0-9]{3}){1,2}$/.test(hex)){
        c= hex.substring(1).split('');
        if(c.length== 3){
            c= [c[0], c[0], c[1], c[1], c[2], c[2]];
        }
        c= '0x'+c.join('');
        return 'rgba('+[(c>>16)&255, (c>>8)&255, c&255].join(',')+',0.5)';
    }
    throw new Error('Bad Hex');
}








// Change background pictures
// check Cs
