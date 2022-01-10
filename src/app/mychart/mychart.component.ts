import { Component, OnInit } from '@angular/core';
import {Chart}  from 'node_modules/chart.js';

@Component({
  selector: 'app-mychart',
  templateUrl: './mychart.component.html',
  styleUrls: ['./mychart.component.css']
})
export class MychartComponent implements OnInit {
  canvas:any; ctx:any; canvas2:any; ctx2:any; canvas3:any; ctx3:any;
  constructor() { }

  ngOnInit(): void {
    this.canvas = document.getElementById('myChart');
this.canvas2 = document.getElementById('myChart2');
this.canvas3 = document.getElementById('myChart3');
this.ctx = this.canvas.getContext('2d');
this.ctx2 = this.canvas2.getContext('2d');
  this.ctx3 = this.canvas3.getContext('2d');
    let myChart = new Chart('myChart', {
      type: 'bar',
      data: {
          labels: ["Angular 11", "Angular 10", "Angular 9"],
          datasets: [{
              label: 'Active Angular Vesrions',
              data: [85, 100, 60],
              backgroundColor: ["red","blue", "orange"],
              borderWidth: 1
          }]
      },
      options: {
    
    scales: {
        y: {
            
                beginAtZero: true
            }
        }
    }
      
    });
  
  let myChart2 = new Chart('myChart2', {
      type: 'pie',
      data: {
          labels: ["Angular 11", "Angular 10", "Angular 9"],
          datasets: [{
              label: 'Active Angular Vesrions',
              data: [85, 100, 60],
              backgroundColor: ["red","blue", "orange"],
              borderWidth: 1
          }]
      },
      options: {
    
    scales: {
        y:{
          beginAtZero: true
            }
        }
    }
     
    });
  
  let myChart3 = new Chart('myChart3', {
      type: 'line',
      data: {
          labels: ["Angular 11", "Angular 10", "Angular 9"],
          datasets: [{
              label: 'Active Angular Vesrions',
              data: [85, 100, 60],
              borderColor: 'rgb(75, 192, 192)',
              borderWidth: 1
          }]
      },
      options: {
    
    scales: {
        yAxes: {
            
                beginAtZero: true
            }
        }
    }
      
    });
  }

}
