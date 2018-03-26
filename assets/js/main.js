$(document).ready(function(){
    var ctx = document.getElementById('myChart').getContext('2d');
    ctx.canvas.height = 250;
    var myLineChart = new Chart(ctx, {
        type: 'line',
        data:  {
        labels: ["March", "April", "May", "June", "July"],
        datasets: [{
            label: "Task created",
            backgroundColor: 'transparent',
            borderColor: 'rgb(255, 99, 132)',
            data: [0, 10, 5, 2, 20, 30, 45],
        },
        {
            label: "Task accepted",
            backgroundColor: 'transparent',
            borderColor: 'orange',
            data: [20, 10, 5, 2, 20, 30, 45],
        }]
    },

        options: {}
    });
    var ctx2 = document.getElementById('myChart2').getContext('2d');
    ctx2.canvas.height = 250;
    var myLineChart = new Chart(ctx2, {
        type: 'line',
        data:  {
        labels: ["March", "April", "May", "June", "July"],
        datasets: [{
            label: "Task created",
            backgroundColor: 'transparent',
            borderColor: '#57c5fe',
            data: [0, 10, 5, 2, 20, 30, 45],
        }]
    },

        options: {}
    });
});
