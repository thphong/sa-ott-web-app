<script lang="ts">
</script>

<svelte:head>
  <title>Group</title>
  <link
    href="https://cdn.jsdelivr.net/npm/bootstrap@4.1.1/dist/css/bootstrap.min.css"
    rel="stylesheet"
  />
  <script
    src="https://cdn.jsdelivr.net/npm/bootstrap@4.1.1/dist/js/bootstrap.bundle.min.js"
  ></script>
</svelte:head>

<section class="container">
  <div class="content__inner">
    <header class="content__title">
      <h1>Groups</h1>

      <div class="actions">
        <a href="" class="actions__item zmdi zmdi-trending-up"></a>
        <a href="" class="actions__item zmdi zmdi-check-all"></a>

        <div class="dropdown actions__item">
          <i data-toggle="dropdown" class="zmdi zmdi-more-vert"></i>
          <div class="dropdown-menu dropdown-menu-right">
            <a href="" class="dropdown-item">Refresh</a>
            <a href="" class="dropdown-item">Manage Widgets</a>
            <a href="" class="dropdown-item">Settings</a>
          </div>
        </div>
      </div>
    </header>

    <div class="toolbar">
      <div class="toolbar__label">125 Groups</div>

      <div class="actions">
        <i
          class="actions__item zmdi zmdi-search"
          data-sa-action="toolbar-search-open"
        ></i>
        <a href="" class="actions__item zmdi zmdi-info-outline hidden-xs-down"
        ></a>

        <div class="dropdown actions__item hidden-xs-down">
          <i class="zmdi zmdi-more-vert" data-toggle="dropdown"></i>
          <div class="dropdown-menu dropdown-menu-right">
            <a href="" class="dropdown-item">Refresh</a>
            <a href="" class="dropdown-item">Delete</a>
            <a href="" class="dropdown-item">Settings</a>
          </div>
        </div>
      </div>

      <div class="toolbar__search">
        <input type="text" placeholder="Search..." />

        <i
          class="toolbar__search__close zmdi zmdi-long-arrow-left"
          data-sa-action="toolbar-search-close"
        ></i>
      </div>
    </div>

    <div class="row groups">
      <div class="col-xl-2 col-lg-3 col-sm-4 col-6">
        <div class="groups__item">
          <a href="">
            <div class="groups__img">
              <img
                class="avatar-img"
                src="https://bootdey.com/img/Content/avatar/avatar1.png"
                alt=""
              />
              <img
                class="avatar-img"
                src="https://bootdey.com/img/Content/avatar/avatar2.png"
                alt=""
              />
              <img
                class="avatar-img"
                src="https://bootdey.com/img/Content/avatar/avatar3.png"
                alt=""
              />
              <img
                class="avatar-img"
                src="https://bootdey.com/img/Content/avatar/avatar4.png"
                alt=""
              />
            </div>

            <div class="groups__info">
              <strong>Sold Properties</strong>
              <small>106 Contacts</small>
            </div>
          </a>

          <div class="actions">
            <div class="dropdown actions__item">
              <i class="zmdi zmdi-more-vert" data-toggle="dropdown"></i>

              <div class="dropdown-menu dropdown-menu-right">
                <a class="dropdown-item" href="">Edit</a>
                <a
                  class="dropdown-item"
                  href=""
                  data-demo-action="delete-listing">Delete</a
                >
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="col-xl-2 col-lg-3 col-sm-4 col-6">
        <div class="groups__item">
          <a href="">
            <div class="groups__img">
              <div class="avatar-img avatar-char">A</div>
              <img
                class="avatar-img"
                src="https://bootdey.com/img/Content/avatar/avatar1.png"
                alt=""
              />
              <img
                class="avatar-img"
                src="https://bootdey.com/img/Content/avatar/avatar2.png"
                alt=""
              />
              <div class="avatar-img avatar-char">D</div>
            </div>

            <div class="groups__info">
              <strong>San Fransisco</strong>
              <small>12 Contacts</small>
            </div>
          </a>

          <div class="actions">
            <div class="dropdown actions__item">
              <i class="zmdi zmdi-more-vert" data-toggle="dropdown"></i>

              <div class="dropdown-menu dropdown-menu-right">
                <a class="dropdown-item" href="">Edit</a>
                <a
                  class="dropdown-item"
                  href=""
                  data-demo-action="delete-listing">Delete</a
                >
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="col-xl-2 col-lg-3 col-sm-4 col-6">
        <div class="groups__item">
          <a href="">
            <div class="groups__img">
              <img
                class="avatar-img"
                src="https://bootdey.com/img/Content/avatar/avatar6.png"
                alt=""
              />
              <img
                class="avatar-img"
                src="https://bootdey.com/img/Content/avatar/avatar7.png"
                alt=""
              />
              <div class="avatar-img avatar-char">E</div>
              <img
                class="avatar-img"
                src="https://bootdey.com/img/Content/avatar/avatar1.png"
                alt=""
              />
            </div>

            <div class="groups__info">
              <strong>Pending Leads</strong>
              <small>42 Contacts</small>
            </div>
          </a>
          <div class="actions">
            <div class="dropdown actions__item">
              <i class="zmdi zmdi-more-vert" data-toggle="dropdown"></i>

              <div class="dropdown-menu dropdown-menu-right">
                <a class="dropdown-item" href="">Edit</a>
                <a
                  class="dropdown-item"
                  href=""
                  data-demo-action="delete-listing">Delete</a
                >
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="col-xl-2 col-lg-3 col-sm-4 col-6">
        <div class="groups__item">
          <a href="">
            <div class="groups__img">
              <img
                class="avatar-img"
                src="https://bootdey.com/img/Content/avatar/avatar6.png"
                alt=""
              />
              <img
                class="avatar-img"
                src="https://bootdey.com/img/Content/avatar/avatar7.png"
                alt=""
              />
              <img
                class="avatar-img"
                src="https://bootdey.com/img/Content/avatar/avatar4.png"
                alt=""
              />
              <div class="avatar-img avatar-char"></div>
            </div>

            <div class="groups__info">
              <strong>Management</strong>
              <small>3 Contacts</small>
            </div>
          </a>
          <div class="actions">
            <div class="dropdown actions__item">
              <i class="zmdi zmdi-more-vert" data-toggle="dropdown"></i>

              <div class="dropdown-menu dropdown-menu-right">
                <a class="dropdown-item" href="">Edit</a>
                <a
                  class="dropdown-item"
                  href=""
                  data-demo-action="delete-listing">Delete</a
                >
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="col-xl-2 col-lg-3 col-sm-4 col-6">
        <div class="groups__item">
          <a href="">
            <div class="groups__img">
              <img
                class="avatar-img"
                src="https://bootdey.com/img/Content/avatar/avatar1.png"
                alt=""
              />
              <img
                class="avatar-img"
                src="https://bootdey.com/img/Content/avatar/avatar6.png"
                alt=""
              />
              <img
                class="avatar-img"
                src="https://bootdey.com/img/Content/avatar/avatar4.png"
                alt=""
              />
              <img
                class="avatar-img"
                src="https://bootdey.com/img/Content/avatar/avatar3.png"
                alt=""
              />
            </div>

            <div class="groups__info">
              <strong>Colleagues</strong>
              <small>22 Contacts</small>
            </div>
          </a>
          <div class="actions">
            <div class="dropdown actions__item">
              <i class="zmdi zmdi-more-vert" data-toggle="dropdown"></i>

              <div class="dropdown-menu dropdown-menu-right">
                <a class="dropdown-item" href="">Edit</a>
                <a
                  class="dropdown-item"
                  href=""
                  data-demo-action="delete-listing">Delete</a
                >
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="col-xl-2 col-lg-3 col-sm-4 col-6">
        <div class="groups__item">
          <a href="">
            <div class="groups__img">
              <div class="avatar-img avatar-char">E</div>
              <div class="avatar-img avatar-char">T</div>
              <div class="avatar-img avatar-char">O</div>
              <div class="avatar-img avatar-char">G</div>
            </div>

            <div class="groups__info">
              <strong>Los Angeles</strong>
              <small>27 Contacts</small>
            </div>
          </a>
          <div class="actions">
            <div class="dropdown actions__item">
              <i class="zmdi zmdi-more-vert" data-toggle="dropdown"></i>

              <div class="dropdown-menu dropdown-menu-right">
                <a class="dropdown-item" href="">Edit</a>
                <a
                  class="dropdown-item"
                  href=""
                  data-demo-action="delete-listing">Delete</a
                >
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="col-xl-2 col-lg-3 col-sm-4 col-6">
        <div class="groups__item">
          <a href="">
            <div class="groups__img">
              <img
                class="avatar-img"
                src="https://bootdey.com/img/Content/avatar/avatar1.png"
                alt=""
              />
              <div class="avatar-img avatar-char"></div>
              <div class="avatar-img avatar-char"></div>
              <div class="avatar-img avatar-char"></div>
            </div>

            <div class="groups__info">
              <strong>Out Sourcing</strong>
              <small>1 Contacts</small>
            </div>
          </a>
          <div class="actions">
            <div class="dropdown actions__item">
              <i class="zmdi zmdi-more-vert" data-toggle="dropdown"></i>

              <div class="dropdown-menu dropdown-menu-right">
                <a class="dropdown-item" href="">Edit</a>
                <a
                  class="dropdown-item"
                  href=""
                  data-demo-action="delete-listing">Delete</a
                >
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="col-xl-2 col-lg-3 col-sm-4 col-6">
        <div class="groups__item">
          <a href="">
            <div class="groups__img">
              <div class="avatar-img avatar-char">Z</div>
              <div class="avatar-img avatar-char">R</div>
              <div class="avatar-img avatar-char">N</div>
              <div class="avatar-img avatar-char">B</div>
            </div>

            <div class="groups__info">
              <strong>San Diego</strong>
              <small>243 Contacts</small>
            </div>
          </a>
          <div class="actions">
            <div class="dropdown actions__item">
              <i class="zmdi zmdi-more-vert" data-toggle="dropdown"></i>

              <div class="dropdown-menu dropdown-menu-right">
                <a class="dropdown-item" href="">Edit</a>
                <a
                  class="dropdown-item"
                  href=""
                  data-demo-action="delete-listing">Delete</a
                >
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="col-xl-2 col-lg-3 col-sm-4 col-6">
        <div class="groups__item">
          <a href="">
            <div class="groups__img">
              <img
                class="avatar-img"
                src="https://bootdey.com/img/Content/avatar/avatar1.png"
                alt=""
              />
              <img
                class="avatar-img"
                src="https://bootdey.com/img/Content/avatar/avatar6.png"
                alt=""
              />
              <img
                class="avatar-img"
                src="https://bootdey.com/img/Content/avatar/avatar5.png"
                alt=""
              />
              <img
                class="avatar-img"
                src="https://bootdey.com/img/Content/avatar/avatar3.png"
                alt=""
              />
            </div>

            <div class="groups__info">
              <strong>Communication</strong>
              <small>96 Contacts</small>
            </div>
          </a>
          <div class="actions">
            <div class="dropdown actions__item">
              <i class="zmdi zmdi-more-vert" data-toggle="dropdown"></i>

              <div class="dropdown-menu dropdown-menu-right">
                <a class="dropdown-item" href="">Edit</a>
                <a
                  class="dropdown-item"
                  href=""
                  data-demo-action="delete-listing">Delete</a
                >
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="col-xl-2 col-lg-3 col-sm-4 col-6">
        <div class="groups__item">
          <a href="">
            <div class="groups__img">
              <div class="avatar-img avatar-char"></div>
              <div class="avatar-img avatar-char"></div>
              <div class="avatar-img avatar-char"></div>
              <div class="avatar-img avatar-char"></div>
            </div>

            <div class="groups__info">
              <strong>Not varified</strong>
              <small>0 Contacts</small>
            </div>
          </a>
          <div class="actions">
            <div class="dropdown actions__item">
              <i class="zmdi zmdi-more-vert" data-toggle="dropdown"></i>

              <div class="dropdown-menu dropdown-menu-right">
                <a class="dropdown-item" href="">Edit</a>
                <a
                  class="dropdown-item"
                  href=""
                  data-demo-action="delete-listing">Delete</a
                >
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="col-xl-2 col-lg-3 col-sm-4 col-6">
        <div class="groups__item">
          <a href="">
            <div class="groups__img">
              <img
                class="avatar-img"
                src="https://bootdey.com/img/Content/avatar/avatar1.png"
                alt=""
              />
              <img
                class="avatar-img"
                src="https://bootdey.com/img/Content/avatar/avatar6.png"
                alt=""
              />
              <div class="avatar-img avatar-char">G</div>
              <img
                class="avatar-img"
                src="https://bootdey.com/img/Content/avatar/avatar7.png"
                alt=""
              />
            </div>

            <div class="groups__info">
              <strong>Email List</strong>
              <small>10 Contacts</small>
            </div>
          </a>
          <div class="actions">
            <div class="dropdown actions__item">
              <i class="zmdi zmdi-more-vert" data-toggle="dropdown"></i>

              <div class="dropdown-menu dropdown-menu-right">
                <a class="dropdown-item" href="">Edit</a>
                <a
                  class="dropdown-item"
                  href=""
                  data-demo-action="delete-listing">Delete</a
                >
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="col-xl-2 col-lg-3 col-sm-4 col-6">
        <div class="groups__item">
          <a href="">
            <div class="groups__img">
              <img
                class="avatar-img"
                src="https://bootdey.com/img/Content/avatar/avatar1.png"
                alt=""
              />
              <div class="avatar-img avatar-char">G</div>
              <div class="avatar-img avatar-char">L</div>
              <img
                class="avatar-img"
                src="https://bootdey.com/img/Content/avatar/avatar3.png"
                alt=""
              />
            </div>

            <div class="groups__info">
              <strong>Connected</strong>
              <small>178 Contacts</small>
            </div>
          </a>
          <div class="actions">
            <div class="dropdown actions__item">
              <i class="zmdi zmdi-more-vert" data-toggle="dropdown"></i>

              <div class="dropdown-menu dropdown-menu-right">
                <a class="dropdown-item" href="">Edit</a>
                <a
                  class="dropdown-item"
                  href=""
                  data-demo-action="delete-listing">Delete</a
                >
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<style>
  :global(body) {
    margin-top: 20px;
  }

  .groups__item,
  :global(.messages) {
    background-color: rgba(0, 0, 0, 0.2);
    border-radius: 2px;
    box-shadow: 0 1px 5px rgba(0, 0, 0, 0.1);
  }

  @media (max-width: 575px) {
    .groups {
      margin: 0 -5px;
    }
    .groups [class*='col-'] {
      padding: 0 5px;
    }
    .groups .groups__item {
      margin-bottom: 10px;
    }
  }

  .groups__item {
    position: relative;
    text-align: center;
    padding: 2rem 1rem 1.5rem;
    margin-bottom: 30px;
  }

  .groups__item:hover .actions {
    opacity: 1;
  }

  .groups__item .actions {
    position: absolute;
    top: 0.7rem;
    right: 0.5rem;
    z-index: 1;
    opacity: 0;
  }

  .groups__img {
    width: 6.5rem;
    display: inline-block;
  }

  .groups__img .avatar-img {
    display: inline-block;
    margin: 0 1px 4px 0;
    vertical-align: top;
  }

  .avatar-char,
  .avatar-img {
    border-radius: 2px;
    width: 3rem;
    height: 3rem;
    margin-right: 1.2rem;
  }

  .avatar-char {
    color: #fff;
    background-color: rgba(255, 255, 255, 0.08);
  }

  .avatar-char {
    line-height: 2.9rem;
    font-size: 1.2rem;
    text-align: center;
    font-style: normal;
  }

  .groups__info {
    margin-top: 1rem;
  }

  .groups__info > strong {
    color: #fff;
    display: block;
    font-weight: 600;
  }

  :global(.messages, .messages__body) {
    display: -webkit-box;
    display: -ms-flexbox;
    -webkit-box-direction: normal;
  }

  .groups__info > small {
    font-size: 0.9rem;
    color: rgba(255, 255, 255, 0.7);
  }

  .toolbar {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-direction: normal;
    -ms-flex-direction: row;
    flex-direction: row;
    height: 4.5rem;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    padding: 0.05rem 2.2rem 0;
    position: relative;
  }

  .toolbar:not(.toolbar--inner) {
    background-color: rgba(0, 0, 0, 0.2);
    border-radius: 2px;
    margin-bottom: 30px;
    box-shadow: 0 1px 5px rgba(0, 0, 0, 0.1);
  }

  .toolbar .actions {
    margin: 0.05rem -0.8rem 0 auto;
  }

  :global(.toolbar--inner) {
    margin-bottom: 1rem;
    border-radius: 2px 2px 0 0;
    background-color: rgba(0, 0, 0, 0.1);
  }

  :global(.toolbar__nav) {
    white-space: nowrap;
    overflow-x: auto;
  }

  :global(.toolbar__nav > a) {
    display: inline-block;
    transition: color 0.3s;
  }

  :global(.toolbar__nav > a + a) {
    padding-left: 1rem;
  }

  :global(.toolbar__nav > a.active, .toolbar__nav > a:hover) {
    color: rgba(255, 255, 255, 0.85);
  }

  .toolbar__search {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    border-radius: 2px;
    padding-left: 3rem;
    display: none;
    background-color: rgba(0, 0, 0, 0.96);
  }

  .toolbar__search input[type='text'] {
    width: 100%;
    height: 100%;
    border: 0;
    padding: 0 1.6rem;
    font-size: 1.2rem;
    background-color: transparent;
    color: rgba(255, 255, 255, 0.85);
  }

  .toolbar__search input[type='text']::-webkit-input-placeholder {
    color: rgba(255, 255, 255, 0.5);
  }

  .toolbar__search input[type='text']:-moz-placeholder {
    color: rgba(255, 255, 255, 0.5);
  }

  .toolbar__search input[type='text']::-moz-placeholder {
    color: rgba(255, 255, 255, 0.5);
  }

  .toolbar__search input[type='text']:-ms-input-placeholder {
    color: rgba(255, 255, 255, 0.5);
  }

  .toolbar__search__close,
  .toolbar__search__close:hover {
    color: rgba(255, 255, 255, 0.85);
  }

  .toolbar__search__close {
    transition: color 0.3s;
    cursor: pointer;
    position: absolute;
    top: 1.5rem;
    left: 1.8rem;
    font-size: 1.5rem;
  }

  .toolbar__label {
    margin: 0;
    font-size: 1.1rem;
  }
</style>
