// console.log('hello');
// var rellax = new Rellax('.rellax', {
// // center: true
// callback: function(position) {
// // callback every position change
// console.log(position);
// }
// });

let myChart = document.getElementById('myChart').getContext('2d');

Chart.defaults.global.defaultFontFamily = 'Lato';
Chart.defaults.global.defaultFontSize = 15;
Chart.defaults.global.defaultFontColor = '#777';

let massPopChart = new Chart(myChart, {
  type:'horizontalBar', // bar, horizontalBar, pie, line, doughnut, radar, polarArea
  data:{
    labels:['Cancer', 'Joint Disease', 'Diabetes', 'Back problems','High cholestrol'],
    datasets:[{
      label:'$ in Billion',
      data:[
        82,
        62,
        51,
        39,
        37
      ],
      backgroundColor:[
        'rgba(126, 213, 111, 0.801)',
        'rgba(126, 213, 111, 0.801)',
        'rgba(126, 213, 111, 0.801)',
        'rgba(126, 213, 111, 0.801)',
        'rgba(126, 213, 111, 0.801)',
        'rgba(126, 213, 111, 0.801)'
        // '#3185FC',
        // '#ADBDFF',
        // '#690375',
        // '#CB429F',
        // '#F15946'
      ],
      borderWidth:1,
      borderColor:'#777',
      hoverBorderWidth:3,
      hoverBorderColor:'#000'
    }]
  },
  options:{
    title:{
      display:true,
      text:'Most expensive Conditions in America',
      fontSize:20
    },
    legend:{
      display:true,
      position:'right',
      labels:{
        fontColor:'#000'
      }
    },
    layout:{
      padding:{
        left:0,
        right:0,
        bottom:0,
        top:0
      }
    },
    tooltips:{
      enabled:true
    }
  }
});