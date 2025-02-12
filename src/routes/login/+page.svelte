<svelte:head>
  <title>Login</title>
  <link
    href="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0-beta/dist/css/bootstrap.min.css"
    rel="stylesheet"
  />
  <link
    href="https://maxcdn.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css"
    rel="stylesheet"
  />
  <script
    src="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/js/bootstrap.bundle.min.js"
  ></script>
</svelte:head>

<div class="container">
  <div class="row justify-content-center">
    <div class="col-md-8">
      <div class="card-group mb-0">
        <div class="card p-4">
          <div class="card-body">
            <h1>Login</h1>
            <p class="text-muted">Sign In to your account</p>
            <div class="input-group mb-3">
              <span class="input-group-addon"><i class="fa fa-user"></i></span>
              <input type="text" class="form-control" placeholder="Username" />
            </div>
            <div class="input-group mb-4">
              <span class="input-group-addon"><i class="fa fa-lock"></i></span>
              <input
                type="password"
                class="form-control"
                placeholder="Password"
              />
            </div>
            <div class="row">
              <div class="col-6">
                <button type="button" class="btn btn-primary px-4">Login</button
                >
              </div>
              <div class="col-6 text-right">
                <button type="button" class="btn btn-link px-0"
                  >Forgot password?</button
                >
              </div>
            </div>
          </div>
        </div>
        <div
          class="card text-white bg-primary py-5 d-md-down-none"
          style="width:44%"
        >
          <div class="card-body text-center">
            <div>
              <h2>Sign up</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <button type="button" class="btn btn-primary active mt-3"
                >Register Now!</button
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

<style>
  :global(body) {
    background: #eee !important;
  }

  .container {
    margin-top: 50px;
    margin-right: auto;
    margin-left: auto;
    padding-right: 15px;
    padding-left: 15px;
    width: 100%;
  }

  @media (min-width: 576px) {
    .container {
      max-width: 540px;
    }
  }

  @media (min-width: 768px) {
    .container {
      max-width: 720px;
    }
  }

  @media (min-width: 992px) {
    .container {
      max-width: 960px;
    }
  }

  @media (min-width: 1200px) {
    .container {
      max-width: 1140px;
    }
  }

  :global(.card-columns .card) {
    margin-bottom: 0.75rem;
  }

  @media (min-width: 576px) {
    :global(.card-columns) {
      column-count: 3;
      column-gap: 1.25rem;
    }
    :global(.card-columns .card) {
      display: inline-block;
      width: 100%;
    }
  }
  .text-muted {
    color: #9faecb !important;
  }

  p {
    margin-top: 0;
    margin-bottom: 1rem;
  }
  .mb-3 {
    margin-bottom: 1rem !important;
  }

  .input-group {
    position: relative;
    display: flex;
    width: 100%;
  }
</style>
