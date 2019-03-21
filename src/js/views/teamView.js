import {elements} from './base';
import Chart from 'chart.js';



export const renderTeam = (team) => {
// console.log(team);
let markup = `<canvas id="myChart"></canvas>`

elements.teamPlayers.insertAdjacentHTML('afterbegin', markup);

createChart(team);

elements.teamPhoto.style.backgroundImage = `url('/images/teams_images/${team.selectedTeam.toLowerCase()}.jpg')`
elements.teamPhoto.classList.add('.team__photo--active');
// elements.teamPlayers.style.backgroundImage = `linear-gradient(to right bottom, #${team.PrimaryColor},#${team.SecondaryColor})`;
;
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
                `rgba(0,0,0,0.5)`
            ],
            borderColor: [
                'rgba(0,0,0)'
            ],
            borderWidth: 1
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
                `rgba(10,220,90,0.5)`
            ],
            borderColor: [
                'rgba(0,0,0)'
            ],
            borderWidth: 1
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