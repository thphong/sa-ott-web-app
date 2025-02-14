<script lang="ts">
  import { logInUserSession } from '$lib/service/login'
  import { isUserLoggedIn } from '$lib/service/login'
  import { goto } from '$app/navigation'
  import Particles from "$lib/components/Particles.svelte"

  if (isUserLoggedIn()) {
    goto('/chat')
  }

  const register = () => {
    logInUserSession()
    goto('/chat')
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
<div class="container">
  <div class="row">
    <div class="col-sm-10 col-md-8 col-lg-6 mx-auto d-table">
      <div class="d-table-cell align-middle">
        <div class="text-center mt-4 text-white">
          <h1 class="h2">Register</h1>
          <p class="lead">Register now for secure and instant messaging!</p>
        </div>

        <div class="card">
          <div class="card-body">
            <div class="m-sm-4">
              <form>
                <div class="form-group">
                  <label>Name</label>
                  <input
                    class="form-control form-control-lg"
                    type="text"
                    name="name"
                    placeholder="Enter your name"
                  />
                </div>
                <div class="form-group">
                  <label>Email</label>
                  <input
                    class="form-control form-control-lg"
                    type="email"
                    name="email"
                    placeholder="Enter your email"
                  />
                </div>
                <div class="form-group">
                  <label>Phone</label>
                  <input
                    class="form-control form-control-lg"
                    type="text"
                    name="phong"
                    placeholder="Enter your phone"
                  />
                </div>
                <div class="form-group">
                  <label>Password</label>
                  <input
                    class="form-control form-control-lg"
                    type="password"
                    name="password"
                    placeholder="Enter password"
                  />
                </div>
                <div class="text-center mt-3">
                  <button type="button" class="btn btn-lg btn-primary" on:click={register}>Sign up</button>
                </div>
              </form>
            </div>
          </div>
        </div>
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
  }

  .card {
    margin-bottom: 1.5rem;
    box-shadow: 0 1px 15px 1px rgba(52, 40, 104, 0.08);
  }

  .card {
    position: relative;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-direction: column;
    flex-direction: column;
    min-width: 0;
    word-wrap: break-word;
    background-color: #fff;
    background-clip: border-box;
    border: 1px solid #e5e9f2;
    border-radius: 0.2rem;
  }

  input,
  button {
    font-size: 16px !important;
  }
</style>
