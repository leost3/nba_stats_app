import {elements} from './base';
import Chart from 'chart.js';



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
                <h3>Won last ${team.teamStanding.streak} ${team.teamStanding.streak === 1 ? "game" : "games"}</h3>
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

export const renderSchedule = (scheduleObj) => {
    const scheduleBox = document.querySelector('.team__players .schedule__box');
    for (let prop in scheduleObj) {
        resSchedule(scheduleObj[prop], scheduleBox);
    }
};


export const chart = (team) => {
    createChart(team)
};

export const changeBackgroundColor = (team) => {

    const teamBasicStats = document.querySelectorAll('.team__stats--basics .stats li');
    const teamInfoSlidersStats = document.querySelector('.team__stats--info--slider');
    const teamHeader = document.querySelector('.team__stats--headpage')

    teamHeader.style.backgroundImage = `linear-gradient(rgba(0,0,0,0.7), rgba(0, 0, 0, 0.699)) ,url('/images/teams_images/${team.selectedTeam}.jpg')`;

    teamInfoSlidersStats.style.background = `linear-gradient(to right, #${team.teamInfo.primaryColor}, ${team.teamInfo.primaryColor === "000000" ? "#333" : "#000"})`;

    teamBasicStats.forEach(el => el.style.background = `linear-gradient(to right,#${team.teamInfo.primaryColor}, ${team.teamInfo.primaryColor === "000000" ? "#333" : "#000"}`);

}


const createChart = (data) => {

    const ctx = document.getElementById('myChart').getContext('2d');
    const myChart = new Chart(ctx, {
    type: 'radar',
    data: {
        labels: ['fg', '2pt%', 'ts%', '3p%'],
        datasets: [
            {
            label: data.selectedTeam,
            data: [
                data.fieldGoalsPercentage,
                data.twoPointersPercentage,
                data.trueShootingPercentage,
                data.threePointersPercentage
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
            label: 'NBA',
            data: [
                data.opponentStats.fieldGoalsPercentage,
                data.opponentStats.twoPointersPercentage,
                data.opponentStats.trueShootingPercentage,
                data.opponentStats.threePointersPercentage
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
// suns
// CLippers 
// NOP
// POR
// INd
// bulls
// check Cs
// Orlando magic
// Heat
// CHA
// WAS
// Crop GSW