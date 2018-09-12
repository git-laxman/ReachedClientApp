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
          backgroundColor: ["#050567", "#ff9422"],
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
        backgroundColor: ["#050567", "#ff9422"],
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
              backgroundColor: [
                  'rgba(255, 99, 132, 0.2)',
                  'rgba(54, 162, 235, 0.2)',
                  'rgba(255, 206, 86, 0.2)',
                  'rgba(75, 192, 192, 0.2)',
                  'rgba(255, 206, 86, 0.2)',
                  'rgba(75, 192, 192, 0.2)',
                  'rgba(153, 102, 255, 0.2)',
                  'rgba(255, 159, 64, 0.2)',
                  'rgba(153, 102, 255, 0.2)',
                  'rgba(255, 159, 64, 0.2)'
              ],
              borderColor: [
                  'rgba(255,99,132,1)',
                  'rgba(54, 162, 235, 1)',
                  'rgba(255, 206, 86, 1)',
                  'rgba(75, 192, 192, 1)',
                  'rgba(255,99,132,1)',
                  'rgba(54, 162, 235, 1)',
                  'rgba(153, 102, 255, 1)',
                  'rgba(255, 159, 64, 1)',
                  'rgba(153, 102, 255, 1)',
                  'rgba(255, 159, 64, 1)'
              ],
              borderWidth: 1,
           
          }]
      },
      options: {
          scales: {
              yAxes: [{
                  ticks: {
                      beginAtZero:true
                  }
              }]
          }
      }
  }) 

  

  }
  

}
