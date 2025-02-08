<script lang="ts">
  import { Bar } from 'svelte-chartjs'
  import {
    Chart,
    Title,
    Tooltip,
    Legend,
    BarElement,
    CategoryScale,
    LinearScale
  } from 'chart.js'

  Chart.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale)

  const options = {
    plugins: {
      colors: {
        forceOverride: true
      },
      legend: {
        display: true,
        position: 'bottom'
      }
    },
    responsive: true,
    maintainAspectRatio: true,
    aspectRatio: 1.6,
    scales: {
      y: {
        suggestedMin: 0,
        suggestedMax: 0
      }
    }
  }

  export let data
  export let title
  export let label

  let dataChart = {
    labels: [],
    datasets: [
      {
        label: label,
        data: []
      }
    ]
  }

  if (data) {
    let max = 0
    data.sort((a:any, b:any) => {
      let valueA:any = Object.values(a)[0]
      let valueB:any = Object.values(b)[0]
      if (valueA > valueB) return 1
      return -1
    })

    data.forEach((item:any) => {
      dataChart.labels.push(Object.values(item)[0])
      dataChart.datasets[0].data.push(Object.values(item)[1])
      if (max < Object.values(item)[1]) {
        max = Object.values(item)[1]
      }
    })
    options.scales.y.suggestedMax = max * 1.1
  }
</script>

<div style="text-align: center;">
  <h5>{title}</h5>
</div>
<Bar data={dataChart} {options} />
