(function() {
	// 基于准备好的dom，初始化echarts实例

	var myChart = echarts.init(document.getElementById('main'), "macarons");

	function randomData() {
		return Math.round(Math.random() * 1000);
	}
	// 指定图表的配置项和数据
	var option = {
		title: {
			text: '实时监控平台',
			subtext: '',
			left: 'center'
		},
		tooltip: {
			show: true
		},
		legend: {
			orient: 'vertical',
			left: 'left',
			data: ['访问量']
		},
		visualMap: {
			min: 0,
			max: 2500,
			left: 'left',
			top: 'bottom',
			text: ['高', '低'], // 文本，默认为数值文本
			calculable: true
		},
		toolbox: {
			show: false,
			orient: 'vertical',
			left: 'right',
			top: 'center',
			feature: {
				dataView: { readOnly: false },
				restore: {},
				saveAsImage: {}
			}
		},
		series: [{
			name: 'iphone3',
			type: 'map',
			mapType: 'china',
			roam: false,
			zoom:"1.2",
			itemStyle: {
				emphasis: { label: { show: true } }
			},
			label: {
				normal: {
					show: true
				},
				emphasis: {
					show: true
				}
			},
			data: [ 
				{ name: '北京', value: randomData() },
				{ name: '天津', value: randomData() },
				{ name: '上海', value: randomData() },
				{ name: '重庆', value: randomData() },
				{ name: '河北', value: randomData() },
				{ name: '河南', value: randomData() },
				{ name: '云南', value: randomData() },
				{ name: '辽宁', value: randomData() },
				{ name: '黑龙江', value: randomData() },
				{ name: '湖南', value: randomData() },
				{ name: '安徽', value: randomData() },
				{ name: '山东', value: randomData() },
				{ name: '新疆', value: randomData() },
				{ name: '江苏', value: randomData() },
				{ name: '浙江', value: randomData() },
				{ name: '江西', value: randomData() },
				{ name: '湖北', value: randomData() },
				{ name: '广西', value: randomData() },
				{ name: '甘肃', value: randomData() },
				{ name: '山西', value: randomData() },
				{ name: '内蒙古', value: randomData() },
				{ name: '陕西', value: randomData() },
				{ name: '吉林', value: randomData() },
				{ name: '福建', value: randomData() },
				{ name: '贵州', value: randomData() },
				{ name: '广东', value: randomData() },
				{ name: '青海', value: randomData() },
				{ name: '西藏', value: randomData() },
				{ name: '四川', value: randomData() },
				{ name: '宁夏', value: randomData() },
				{ name: '海南', value: randomData() },
				{ name: '台湾', value: randomData() },
				{ name: '香港', value: randomData() },
				{ name: '澳门', value: randomData() }
			],
			animation:true
		}]
	};
	// 使用刚指定的配置项和数据显示图表。
	myChart.setOption(option);
	//	myChart.setOption({
	//		backgroundColor: '#3ba7dc'
	//	});
	myChart.on('click', function(params) {
		$("#main").fadeOut(800);
		$("#pro").fadeIn(800);
	});

	//	myChart.dispatchAction({
	//		type: 'highlight',
	//		seriesIndex: 0,
	//		dataIndex: 3
	//	});
	//	myChart.dispatchAction({
	//		type: 'showTip',
	//		seriesIndex: 0,
	//		dataIndex: 3
	//	});
	//
	function random() {
		var app = {};
		app.currentIndex = 0;
		window.timer = setInterval(function() {
			setData();
			var dataLen = option.series[0].data.length;
			// 取消之前高亮的图形
			myChart.dispatchAction({
				type: 'downplay',
				seriesIndex: 0,
				dataIndex: app.currentIndex
			});
			app.currentIndex = (app.currentIndex + 1) % dataLen;
			// 高亮当前图形
			myChart.dispatchAction({
				type: 'highlight',
				seriesIndex: 0,
				dataIndex: app.currentIndex
			});
			// 显示 tooltip
			myChart.dispatchAction({
				type: 'showTip',
				seriesIndex: 0,
				dataIndex: app.currentIndex
			});
		}, 1000);
	}
			random();
	//

	function setData() {
		function randomData() {
			return Math.round(Math.random() * 1000);
		}
		myChart.setOption({
			series: [{
				name: 'iphone3',
				// 通过饼图表现单个柱子中的数据分布
				data: [{ name: '北京', value: randomData() },
					{ name: '天津', value: randomData() },
					{ name: '上海', value: randomData() },
					{ name: '重庆', value: randomData() },
					{ name: '河北', value: randomData() },
					{ name: '河南', value: randomData() },
					{ name: '云南', value: randomData() },
					{ name: '辽宁', value: randomData() },
					{ name: '黑龙江', value: randomData() },
					{ name: '湖南', value: randomData() },
					{ name: '安徽', value: randomData() },
					{ name: '山东', value: randomData() },
					{ name: '新疆', value: randomData() },
					{ name: '江苏', value: randomData() },
					{ name: '浙江', value: randomData() },
					{ name: '江西', value: randomData() },
					{ name: '湖北', value: randomData() },
					{ name: '广西', value: randomData() },
					{ name: '甘肃', value: randomData() },
					{ name: '山西', value: randomData() },
					{ name: '内蒙古', value: randomData() },
					{ name: '陕西', value: randomData() },
					{ name: '吉林', value: randomData() },
					{ name: '福建', value: randomData() },
					{ name: '贵州', value: randomData() },
					{ name: '广东', value: randomData() },
					{ name: '青海', value: randomData() },
					{ name: '西藏', value: randomData() },
					{ name: '四川', value: randomData() },
					{ name: '宁夏', value: randomData() },
					{ name: '海南', value: randomData() },
					{ name: '台湾', value: randomData() },
					{ name: '香港', value: randomData() },
					{ name: '澳门', value: randomData() }
				]
			}]
		});
	}
	$.getJSON("data/china.json", function(data) {
		echarts.registerMap("china", data);
		var opt = {
			geo: {
				layoutCenter: ['30%', '30%'],
				// 如果宽高比大于 1 则宽度为 100，如果小于 1 则高度为 100，保证了不超过 100x100 的区域
				layoutSize: 100
			}
		};
		myChart.setOption(opt);
	})
})()