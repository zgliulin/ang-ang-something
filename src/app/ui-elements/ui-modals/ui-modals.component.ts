import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { EChartOption } from 'echarts';
import { SidebarService } from '../../services/sidebar.service';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';

@Component({
	selector: 'app-ui-modals',
	templateUrl: './ui-modals.component.html',
	styleUrls: ['./ui-modals.component.css']
})
export class UiModalsComponent implements OnInit {

	public visitorsOptions: EChartOption = {};
	public visitsOptions: EChartOption = {};
	public sidebarVisible: boolean = true;
	closeResult: string;

	constructor(private sidebarService: SidebarService, private cdr: ChangeDetectorRef, private modalService: NgbModal) {
		this.visitorsOptions = this.loadLineChartOptions([3, 5, 1, 6, 5, 4, 8, 3], "#49c5b6");
		this.visitsOptions = this.loadLineChartOptions([4, 6, 3, 2, 5, 6, 5, 4], "#f4516c");
	}

	loadLineChartOptions(data, color) {
		let chartOption: EChartOption;
		let xAxisData: Array<any> = new Array<any>();

		data.forEach(element => {
			xAxisData.push("");
		});

		return chartOption = {
			xAxis: {
				type: 'category',
				show: false,
				data: xAxisData,
				boundaryGap: false,
			},
			yAxis: {
				type: 'value',
				show: false
			},
			tooltip: {
				trigger: 'axis',
				formatter: function (params, ticket, callback) {
					return '<span style="display:inline-block;margin-right:5px;border-radius:10px;width:10px;height:10px;background-color:' + color + ';"></span>' + params[0].value;
				}
			},
			grid: {
				left: '0%',
				right: '0%',
				bottom: '0%',
				top: '0%',
				containLabel: false
			},
			series: [{
				data: data,
				type: 'line',
				showSymbol: false,
				symbolSize: 1,
				lineStyle: {
					color: color,
					width: 1
				}
			}]
		};
	}
	openModal(content, size) {
		this.modalService.open(content, { size: size });
	}

	toggleFullWidth() {
		this.sidebarService.toggle();
		this.sidebarVisible = this.sidebarService.getStatus();
		this.cdr.detectChanges();
	}

	ngOnInit() {
	}

}
