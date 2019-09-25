

export default function getModel(){

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

