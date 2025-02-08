<script lang="ts">
    import { Line } from "svelte-chartjs";
    import {
        Chart as ChartJS,
        Title,
        Tooltip,
        Legend,
        LineElement,
        LinearScale,
        PointElement,
        CategoryScale,
        Colors
    } from "chart.js";

    ChartJS.register(
        Title,
        Tooltip,
        Legend,
        LineElement,
        LinearScale,
        PointElement,
        CategoryScale,
        Colors
    );

    const options = {
        plugins: {
            colors: {
                forceOverride: true
            },
            legend: {
                display: true,
                position: "bottom"
            },
        },
        responsive: true,
        maintainAspectRatio: true,
        aspectRatio: 3,
        scales: {
            y: {
                suggestedMin: 0
            }
        }
    };

    export let data;
    export let title;
    export let label;

    const lineConfig = {
        fill: true,
        lineTension: 0.3,
        borderCapStyle: "butt",
        borderDash: [],
        borderDashOffset: 0.0,
        borderJoinStyle: "miter",
        pointHoverRadius: 5,
        pointHoverBorderWidth: 2,
        pointHitRadius: 10
    };

    let dataChart = {
        labels: [],
        datasets: [
            {
                label: label,
                data: []
            }
        ]
    };

    if (data) {
        data.sort((a, b) => {
            let valueA = Object.values(a)[0];
            let valueB = Object.values(b)[0];
            if (valueA > valueB) return 1;
            return -1;
        });

        Object.assign(dataChart.datasets[0], lineConfig);
        data.forEach((item, index) => {
            dataChart.labels.push(Object.values(item)[0]);
            dataChart.datasets[0].data.push(Object.values(item)[1]);
        });
    }
</script>

<div style="text-align: center;">
    <h5>{title}</h5>
</div>
<Line data={dataChart} {options} />
