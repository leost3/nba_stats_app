import {elements} from './base';
import Chart from 'chart.js';



export const renderTeam = (team) => {
console.log(team);

elements.teamPhoto.style.backgroundImage = `url('/images/teams_images/${team.selectedTeam.toLowerCase()}.jpg')`
elements.teamPhoto.classList.add('.team__photo--active');
elements.teamPlayers.style.backgroundImage = `linear-gradient(to right bottom, #${team.PrimaryColor},#${team.SecondaryColor})`;
// `url("/images/teams_images/${team.selectedTeam}.jpg" alt="" srcset="")`;
//    let markup = `<img src="/images/teams_images/${team.selectedTeam}.jpg" alt="" srcset="">`;

//     elements.teamPhoto.insertAdjacentHTML('afterbegin', markup);

//     console.log(team.selectedTeam)
}






// 
// Radar graph chart
// 

// const ctx = document.getElementById('myChart').getContext('2d');


// const myChart = new Chart(ctx, {
//     type: 'radar',
//     data: {
//         labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
//         datasets: [{
//             label: '# of Votes',
//             data: [12, 19, 33, 45, 122, 23],
//             backgroundColor: [
//                 // 'rgba(255, 99, 132, 0.2)',
//                 // 'rgba(54, 162, 235, 0.2)',
//                 // 'rgba(255, 206, 86, 0.2)',
//                 // 'rgba(75, 192, 192, 0.2)',
//                 // 'rgba(153, 102, 255, 0.2)',
//                 // 'rgba(255, 159, 64, 0.2)'
//                 `rgba(0,0,0,0.5)`
//             ],
//             borderColor: [
//                 // 'rgba(255, 99, 132, 1)',
//                 // 'rgba(54, 162, 235, 1)',
//                 // 'rgba(255, 206, 86, 1)',
//                 // 'rgba(75, 192, 192, 1)',
//                 // 'rgba(153, 102, 255, 1)',
//                 // 'rgba(255, 159, 64, 1)'
//                 'rgba(0,0,0)'
//             ],
//             borderWidth: 1
//         },
//         {
//             label: '# of Votes',
//             data: [120, 15, 63, 4, 22, 123],
//             backgroundColor: [
//                 // 'rgba(255, 99, 132, 0.2)',
//                 // 'rgba(54, 162, 235, 0.2)',
//                 // 'rgba(255, 206, 86, 0.2)',
//                 // 'rgba(75, 192, 192, 0.2)',
//                 // 'rgba(153, 102, 255, 0.2)',
//                 // 'rgba(255, 159, 64, 0.2)'
//                 `rgba(22,222,0,0.5)`
//             ],
//             borderColor: [
//                 // 'rgba(255, 99, 132, 1)',
//                 // 'rgba(54, 162, 235, 1)',
//                 // 'rgba(255, 206, 86, 1)',
//                 // 'rgba(75, 192, 192, 1)',
//                 // 'rgba(153, 102, 255, 1)',
//                 // 'rgba(255, 159, 64, 1)'
//                 'rgba(0,0,0)'
//             ],
//             borderWidth: 1
//         },
//         {
//             label: '# of Votes',
//             data: [10, 135, 633, 14, 122, 22],
//             backgroundColor: [
//                 // 'rgba(255, 99, 132, 0.2)',
//                 // 'rgba(54, 162, 235, 0.2)',
//                 // 'rgba(255, 206, 86, 0.2)',
//                 // 'rgba(75, 192, 192, 0.2)',
//                 // 'rgba(153, 102, 255, 0.2)',
//                 // 'rgba(255, 159, 64, 0.2)'
//                 `rgba(221,222,0,0.5)`
//             ],
//             borderColor: [
//                 // 'rgba(255, 99, 132, 1)',
//                 // 'rgba(54, 162, 235, 1)',
//                 // 'rgba(255, 206, 86, 1)',
//                 // 'rgba(75, 192, 192, 1)',
//                 // 'rgba(153, 102, 255, 1)',
//                 // 'rgba(255, 159, 64, 1)'
//                 'rgba(0,0,0)'
//             ],
//             borderWidth: 1
//         }]
//     }
//     ,
//     options: {
//         scales: {
//             yAxes: [{
//                 ticks: {
//                     beginAtZero: true
//                 }
//             }]
//         }
//     }
// });












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