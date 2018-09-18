import { Component, OnInit } from '@angular/core';
import { Chart} from 'chart.js'
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  myChart =[];
  StudentPieChart = [];
  StaffPieChart = [];

  ngOnInit(){

    this.StudentPieChart = new Chart('student-pie', {
      type: 'pie',
      data: {
        labels: ["Present", "Absent"],
        datasets: [{
          label: "Total Strength",
          backgroundColor: ["#2efd12", "#ff9422"],
          data: [2478,5267]
        }]
      },
      options: {
        // title: {
        //   display: true,
        //   text: 'Total Strength of the Students'
        // }
      }
  });

  this.StaffPieChart = new Chart('staff-pie', {
    type: 'pie',
    data: {
      labels: ["Present", "Absent"],
      datasets: [{
        label: "Total Strength",
        backgroundColor: ["#2efd12", "#ff9422"],
        data: [300,21]
      }]
    },
    options: {
     
      // title: {
      //   display: true,
      //   text: 'Total Strength of the Staff'
      // }
    }
    });



    this.myChart = new Chart('lineChart', {
      type: 'bar',
      data: {
          labels: ["Class 1", "Class 2", "Class 3", "Class 4", "Class 5", "Class 6","Class 7", "Class 8","Class 9","Class 10"],
          datasets: [{
              label: 'Pass Percentage',
              data: [92, 100, 34, 83, 25, 55, 61, 82, 45, 67],
              backgroundColor: "#67e5ff",
              borderColor: "#00b7d2",
              borderWidth: 1
          },

          {
            label: 'Attendance Percentage',
            data: [45, 66, 72, 32, 82, 51, 71, 39, 75, 90],
            backgroundColor: "#ffa8a8",
            borderColor: "#f95b5b",
            borderWidth: 1
          }
        ]
      },
      options: {
          scales: {
              xAxes: [{
                barPercentage: 0.9,
                categoryPercentage:0.7
              }],
              yAxes: [{
                  ticks: {
                    min: 0,
                    max: 100,
                    stepSize: 20,
                      beginAtZero:true
                  }
              }],
              tooltips: {
                enabled: true,
                mode: 'single',
                callbacks: {
                  //title: function(tooltipItem, data) {
                   // return "Login History";
          
                  //}, // This returns the hour range for the tool tip, and - Now for the current hour
                  title: function(tooltipItem, data) {
                    if (tooltipItem.index == 23) {
                      return data.labels[tooltipItem.index] + " - Now";
                    } else {
                      return data.labels[tooltipItem.index] + " - " + data.labels[(tooltipItem.index) + 1];
                    }
                  },
                  // This sets the label for the tool tip for the number of either successfully logged on users
                  // or failed users
                  label: function(tooltipItem, data) {
                    var successCount = data.datasets[0].data[tooltipItem.index];
                    var failCount = data.datasets[1].data[tooltipItem.index];
                    return "Success: " + successCount + "\n Distinct: " + failCount;
                  }
                }
              }
          }
      }
  }) 

  

  

  }
 
  
  

}
