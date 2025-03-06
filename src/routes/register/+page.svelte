<script lang="ts">
  import { isUserLoggedIn } from '$lib/service/login'
  import Particles from '$lib/components/Particles.svelte'
  import { goto } from '$app/navigation'
  import OTP from '$lib/components/OTP.svelte'
  import { pageHomeClass } from '$lib/service/store'

  pageHomeClass.set('disable-menu')

  //TODO: unframe
  if (isUserLoggedIn()) {
    goto('/chat').then(() => {
      window.location.reload()
    })
  }
</script>

<svelte:head>
  <title>Sign Up</title>
  <link
    href="https://cdn.jsdelivr.net/npm/bootstrap@4.1.1/dist/css/bootstrap.min.css"
    rel="stylesheet"
  />
  <script
    src="https://cdn.jsdelivr.net/npm/bootstrap@4.1.1/dist/js/bootstrap.bundle.min.js"
  ></script>
</svelte:head>

<div class="back-ground"><Particles></Particles></div>
<div id="register-container" class="container">
  <div class="row">
    <div class="col-sm-10 col-md-6 col-lg-5 mx-auto d-table">
      <div class="d-table-cell align-middle">
        <div class="text-center mt-4 text-white">
          <h1 class="h2">Register</h1>
          <p class="lead">Register now for secure and instant messaging!</p>
        </div>
        <OTP showCheckbox={true}></OTP>
      </div>
    </div>
  </div>
</div>

<style>
  .back-ground {
    position: fixed;
    top: 0px;
    left: 0px;
    width: 100%;
    height: 100%;
    background: #007bff !important;
  }

  .container {
    position: fixed;
    max-width: 100% !important;
  }
</style>
