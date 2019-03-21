import {elements} from './base';
import Chart from 'chart.js';



export const renderTeam = (team) => {
// console.log(team);
let markup = `<canvas id="myChart" width="400" height="400"></canvas>`

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
        datasets: [{
            label: data.selectedTeam,
            data: [
                data.FieldGoalsPercentage,
                data.TwoPointersPercentage,
                data.TrueShootingPercentage,
                data.ThreePointersPercentage
                    ],
            backgroundColor: [
                // 'rgba(255, 99, 132, 0.2)',
                // 'rgba(54, 162, 235, 0.2)',
                // 'rgba(255, 206, 86, 0.2)',
                // 'rgba(75, 192, 192, 0.2)',
                // 'rgba(153, 102, 255, 0.2)',
                // 'rgba(255, 159, 64, 0.2)'
                `rgba(0,0,0,0.5)`
            ],
            borderColor: [
                // 'rgba(255, 99, 132, 1)',
                // 'rgba(54, 162, 235, 1)',
                // 'rgba(255, 206, 86, 1)',
                // 'rgba(75, 192, 192, 1)',
                // 'rgba(153, 102, 255, 1)',
                // 'rgba(255, 159, 64, 1)'
                'rgba(0,0,0)'
            ],
            borderWidth: 1
        },
        {
            label: 'NBA',
            data: [
                data.OpoonentFieldGoalsPercentage,
                data.OpoonentTwoPointersPercentage,
                data.OpoonentTrueShootingPercentage,
                data.OpoonentThreePointersPercentage],
            backgroundColor: [
                // 'rgba(255, 99, 132, 0.2)',
                // 'rgba(54, 162, 235, 0.2)',
                // 'rgba(255, 206, 86, 0.2)',
                // 'rgba(75, 192, 192, 0.2)',
                // 'rgba(153, 102, 255, 0.2)',
                // 'rgba(255, 159, 64, 0.2)'
                `rgba(22,222,0,0.5)`
                
            ],
            borderColor: [
                // 'rgba(255, 99, 132, 1)',
                // 'rgba(54, 162, 235, 1)',
                // 'rgba(255, 206, 86, 1)',
                // 'rgba(75, 192, 192, 1)',
                // 'rgba(153, 102, 255, 1)',
                // 'rgba(255, 159, 64, 1)'
                'rgba(0,0,0)'
            ],
            borderWidth: 1
        },
        // {
        //     label: '# of Votes',
        //     data: [10, 135, 633, 14, 122, 22],
        //     backgroundColor: [
        //         // 'rgba(255, 99, 132, 0.2)',
        //         // 'rgba(54, 162, 235, 0.2)',
        //         // 'rgba(255, 206, 86, 0.2)',
        //         // 'rgba(75, 192, 192, 0.2)',
        //         // 'rgba(153, 102, 255, 0.2)',
        //         // 'rgba(255, 159, 64, 0.2)'
        //         `rgba(221,222,0,0.5)`
        //     ],
        //     borderColor: [
        //         // 'rgba(255, 99, 132, 1)',
        //         // 'rgba(54, 162, 235, 1)',
        //         // 'rgba(255, 206, 86, 1)',
        //         // 'rgba(75, 192, 192, 1)',
        //         // 'rgba(153, 102, 255, 1)',
        //         // 'rgba(255, 159, 64, 1)'
        //         'rgba(0,0,0)'
        //     ],
        //     borderWidth: 1
        // }
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