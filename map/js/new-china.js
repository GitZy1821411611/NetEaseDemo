(function() {
	var myChart = echarts.init(document.getElementById('main'));

	function randomData() {
		return Math.round(Math.random() * 1000);
	}
	var app = {};
	app.title = '34 省切换查看';
	var provinces = ['shanghai', 'hebei', 'shanxi', 'neimenggu', 'liaoning', 'jilin', 'heilongjiang', 'jiangsu', 'zhejiang', 'anhui', 'fujian', 'jiangxi', 'shandong', 'henan', 'hubei', 'hunan', 'guangdong', 'guangxi', 'hainan', 'sichuan', 'guizhou', 'yunnan', 'xizang', 'shanxi1', 'gansu', 'qinghai', 'ningxia', 'xinjiang', 'beijing', 'tianjin', 'chongqing', 'xianggang', 'aomen'];
	var provincesText = ['上海', '河北', '山西', '内蒙古', '辽宁', '吉林', '黑龙江', '江苏', '浙江', '安徽', '福建', '江西', '山东', '河南', '湖北', '湖南', '广东', '广西', '海南', '四川', '贵州', '云南', '西藏', '陕西', '甘肃', '青海', '宁夏', '新疆', '北京', '天津', '重庆', '香港', '澳门'];

	function showProvince() {
		var name = provinces[currentIdx];

		// myChart.showLoading();

		$.get('data/province/' + "anhui" + '.json', function(geoJson) {

			// myChart.hideLoading();

			echarts.registerMap(name, geoJson);

			myChart.setOption(option = {
				backgroundColor: '#404a59',
				title: {
					text: provincesText[currentIdx],
					left: 'center',
					textStyle: {
						color: '#fff'
					}
				},
				tooltip: {
					show: true
				},
				series: [{
					type: 'map',
					mapType: name,
					label: {
						emphasis: {
							textStyle: {
								color: '#fff'
							}
						}
					},
					itemStyle: {
						normal: {
							borderColor: '#389BB7',
							areaColor: '#fff',
						},
						emphasis: {
							areaColor: '#389BB7',
							borderWidth: 0
						}
					},
					label: {
						normal: {
							show: true
						},
						emphasis: {
							show: true
						}
					},
					animation: false,
					// animationDurationUpdate: 1000,
					// animationEasingUpdate: 'quinticInOut'
					data: [
						{ name: "浦东新区", value: 145 }
					]
				}]
			});
		});
	}

	var currentIdx = 0;

	option = {
		graphic: [{
			id: 'left-btn',
			type: 'circle',
			shape: { r: 20 },
			style: {
				text: '<',
				fill: '#eee'
			},
			left: 10,
			top: 'middle',
			onclick: function() {
				currentIdx -= 1;
				if(currentIdx < 0) {
					currentIdx += provinces.length;
				}
				showProvince();
			}
		}, {
			id: 'right-btn',
			type: 'circle',
			shape: { r: 20 },
			style: {
				text: '>',
				fill: '#eee'
			},
			top: 'middle',
			right: 10,
			onclick: function() {
				currentIdx = (currentIdx + 1) % provinces.length;
				showProvince();
			}
		}],

		series: []
	};

	showProvince();
	myChart.on("click", function(p) {
		console.log(p);
	})
})()