<script lang="ts">
  import { onMount } from 'svelte'

  let canvas: HTMLCanvasElement
  let ctx: CanvasRenderingContext2D | null
  let particles: {
    x: number
    y: number
    vx: number
    vy: number
    size: number
  }[] = []

  function initParticles() {
    const numParticles = 50
    particles = []

    for (let i = 0; i < numParticles; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 2,
        vy: (Math.random() - 0.5) * 2,
        size: Math.random() * 3 + 2
      })
    }
  }

  function updateParticles() {
    if (!ctx) return

    ctx.clearRect(0, 0, canvas.width, canvas.height)

    particles.forEach((p) => {
      p.x += p.vx
      p.y += p.vy

      if (p.x < 0 || p.x > canvas.width) p.vx *= -1
      if (p.y < 0 || p.y > canvas.height) p.vy *= -1

      ctx.beginPath()
      ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2)
      ctx.fillStyle = 'white'
      ctx.fill()
    })

    requestAnimationFrame(updateParticles)
  }

  onMount(() => {
    if (!canvas) return
    canvas.width = window.innerWidth
    canvas.height = window.innerHeight
    ctx = canvas.getContext('2d')

    initParticles()
    updateParticles()
  })
</script>


<canvas bind:this={canvas} class="absolute top-0 left-0 w-full h-full bg-black"></canvas>