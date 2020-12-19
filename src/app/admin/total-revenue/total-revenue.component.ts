import { Component, OnInit } from '@angular/core';
declare var require: any;
import { EChartOption } from 'echarts';

@Component({
  selector: 'app-total-revenue',
  templateUrl: './total-revenue.component.html',
  styleUrls: ['./total-revenue.component.css']
})
export class TotalRevenueComponent implements OnInit {

  public earningsBarChart:EChartOption = {};
  public doghnutChart:any = {};

  constructor() {
    this.earningsBarChart = this.getEarningsChartOptions();
    this.doghnutChart = this.getDougnutChartOptions();
  }

  ngOnInit() {
  }

  getEarningsChartOptions() {
    let options: EChartOption = {
        tooltip : {
            trigger: 'item',
            formatter:function(params){
                let param:any = params;
              return param.marker+" "+param.value;
            }
        },
        grid: {
            borderWidth: 0
        },
        xAxis : [
            {
                type : 'category',
                show: false,
            }
        ],
        yAxis : [
            {
                type : 'value',
                show: false
            }
        ],
        series : [
            {
                
                type: 'bar',
                data: [2, 5, 4, 8, 3, 9, 1, 5],
                itemStyle: {
                    color: '#7460ee'
                },
                barWidth: '10px'
            }
        ]
    };
    return options;
  }

  getDougnutChartOptions(){
    let options: any = {
      title: {
          text: '63',
          x: 'center',
          y: 'center',
          textStyle : {
              color : 'rgb(33, 33, 33)',
              fontFamily : 'Arial',
              fontSize : 20,
              fontWeight : 'bolder'
          }
      },
      tooltip : {
          show: true,
          formatter: function(params, ticket, callback) {
              return '<span style="display:inline-block;margin-right:5px;border-radius:10px;width:10px;height:10px;background-color:#212121;"></span>63';
          }
      },
      series : [
          {
              type: 'pie',
              startAngle: 215,
              clockWise: 1,
              radius : [38, 50],
              itemStyle : {
                  normal: {
                      label: {show: false},
                      labelLine: {show: false}
                  }
              },
              data: [
                    {
                        value: 45,
                        itemStyle :  {
                            color: '#212121',
                            emphasis : {
                                color: '#212121'
                            }
                        }
                    },
                    {
                        value: 34,
                        itemStyle :  {
                            normal: {
                                color: '#EEEEEE',
                                label: {show: false},
                                labelLine: {show: false},
                                tooltip: {show: false}
                            },
                            emphasis : {
                                color: '#EEEEEE'
                            }
                        }
                    },
                    {
                        value: 33,
                        itemStyle :  {
                            normal : {
                                color: 'rgba(0,0,0,0)',
                                label: {show: false},
                                labelLine: {show: false},
                                tooltip: {show: false}
                            }
                        }
                    }
                ]
          }
      ]
    }

    return options;
  }

}
