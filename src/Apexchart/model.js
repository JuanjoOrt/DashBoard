

export function getLineModel(){

    return {
        options: {
            chart: {
                zoom: {
                    enabled: false
                }
            },
            stroke: {
                curve: 'straight'
            },
            grid: {
                row: {
                    colors: ['#f3f3f3', 'transparent'],
                    opacity: 1
                },
            },
            xaxis: {
                categories: null,
            }
        },
        series: null

    }
}

export function getBarModel(){
    return {
        options: {
            plotOptions: {
                bar: {
                    dataLabels: {
                        position: 'top', // top, center, bottom
                    },
                }
            },
            dataLabels: {
                enabled: true,
                formatter: function (val) {
                    return val + " $";
                },
                offsetY: -20,
                style: {
                    fontSize: '12px',
                    colors: ["#304758"]
                }
            },
            xaxis: {
                categories: null,
                position: 'top',
                labels: {
                    offsetY: -18,
                },
                axisBorder: {
                    show: false
                },
                axisTicks: {
                    show: false
                },
                crosshairs: {
                    fill: {
                        type: 'gradient',
                        gradient: {
                            colorFrom: '#D8E3F0',
                            colorTo: '#BED1E6',
                            stops: [0, 100],
                            opacityFrom: 0.4,
                            opacityTo: 0.5,
                        }
                    }
                },
                tooltip: {
                    enabled: true,
                    offsetY: -35,
                }
            },
            fill: {
                gradient: {
                    shade: 'light',
                    type: "horizontal",
                    shadeIntensity: 0.25,
                    gradientToColors: undefined,
                    inverseColors: true,
                    opacityFrom: 1,
                    opacityTo: 1,
                    stops: [50, 0, 100, 100]
                },
            },
            yaxis: {
                axisBorder: {
                    show: false
                },
                axisTicks: {
                    show: false,
                },
                labels: {
                    show: false,
                    formatter: function (val) {
                        return val + " $";
                    }
                }
            },
            title: {
                text: null,
                floating: true,
                offsetY: 320,
                align: 'center',
                style: {
                    color: '#444'
                }
            }
        },
        series: [{
            name: null,
            data: null
        }],
    }
}

export function getDonutModel(){
    return {
        options: {
            labels: null,
            responsive: [{
                breakpoint: 480,
                options: {
                    chart: {
                        width: 200
                    },
                    legend: {
                        show: false
                    }
                }
            }],
            legend: {
                position: 'right',
                offsetY: 0,
                height: 230,
            }
        },
        series: null,
    }
}
