import { Component, OnInit, ElementRef } from '@angular/core';
import { ChartType, ChartOptions, ChartDataSets } from 'chart.js';
import { SingleDataSet, Label, Color, MultiDataSet, monkeyPatchChartJsLegend, monkeyPatchChartJsTooltip } from 'ng2-charts';
import { CommonserviceService } from 'src/app/common/services/commonservice.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  servicesData: any = [];
  public pieChartOptions: ChartOptions = {
    responsive: true,
  };

  public doughnutChartLabels: Label[] = ['Loan', 'Due'];
  public doughnutChartData: MultiDataSet = [
    [350, 450]
  ];
  public doughnutChartType: ChartType = 'doughnut';
  public doughnutColors=[
    {
      backgroundColor: ['#3f51b5', '#3f51b58f' ]
    }
  ];


  public barChartColors: Color[] = [
    { backgroundColor: '#3f51b5' },
    { backgroundColor: '#3f51b58f' },
  ]
  public barChartLabels: Label[] = ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7'];
  public barChartType: ChartType = 'bar';
  public barChartLegend = true;
  public barChartData: ChartDataSets[] = [
    { data: [65, 59, 80, 81, 56, 55, 40], label: 'Pending' },
    { data: [28, 48, 40, 19, 86, 27, 90], label: 'Complete' }
  ];

  constructor(private elementRef: ElementRef, public commonser: CommonserviceService) {
    monkeyPatchChartJsTooltip();
    monkeyPatchChartJsLegend();
    this.getData();
  }
  // getData() {
  //   let menuData = this.commonser.getMenuData();

  //   this.servicesData = menuData.master;
  //   this.servicesData.shift();

  //   let mappingData = menuData.mapping;
  //   mappingData.shift();
  //   let scheduleData = menuData.schedule;
  //   scheduleData.shift();
  //   this.servicesData = this.servicesData.concat(mappingData).concat(scheduleData)
  // }
  getData() {
    this.servicesData = this.commonser.getMenuData();
    this.servicesData.master.shift();
    this.servicesData.mapping.shift();
    this.servicesData.schedule.shift();
  }
  ngOnInit() {
    localStorage.pageName = 'home';
    this.elementRef.nativeElement.ownerDocument.body.style.backgroundColor = 'white';
  }


}
