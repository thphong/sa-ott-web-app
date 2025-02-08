<script lang="ts">
    import { Pie } from "svelte-chartjs";
    import {
        Chart as ChartJS,
        Title,
        Tooltip,
        Legend,
        ArcElement,
        CategoryScale,
        Colors
    } from "chart.js";

    ChartJS.register(Title, Tooltip, Legend, ArcElement, CategoryScale, Colors);

    let sum = 0;
    const options = {
        plugins: {
            colors: {
                forceOverride: true
            },
            legend: {
                display: true,
                position: "bottom"
            },
            tooltip: {
                callbacks: {
                    label: function (context) {
                        return ` count: ${
                            context.formattedValue
                        }       percent: ${
                            Math.round((context.parsed * 1000) / sum) / 10
                        }%`;
                    }
                }
            }
        },
        responsive: true,
        radius: "90%"
    };

    export let data;
    export let title;

    let dataChart = {
        labels: [],
        datasets: [
            {
                data: []
            }
        ]
    };

    if (data) {
        data.sort((a, b) => {
            let valueA = Object.values(a)[1];
            let valueB = Object.values(b)[1];
            if (valueA < valueB) return 1;
            return -1;
        });

        data.forEach((item) => {
            dataChart.labels.push(Object.values(item)[0]);
            dataChart.datasets[0].data.push(Object.values(item)[1]);
            let val = parseFloat(Object.values(item)[1] + "");
            if (val) sum += val;
        });
    }
</script>

<div style="text-align: center;">
    <h5>{title}</h5>
</div>
<Pie data={dataChart} {options} />
