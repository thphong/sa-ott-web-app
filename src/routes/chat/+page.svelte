<script lang="ts">
  // import "../../styles/bootstrap4.5.0.css";
</script>

<svelte:head>
  <title>Chatbox</title>
  <link
    href="https://cdn.jsdelivr.net/npm/bootstrap@4.5.0/dist/css/bootstrap.min.css"
    rel="stylesheet"
  />
  <script
    src="https://cdn.jsdelivr.net/npm/bootstrap@4.5.0/dist/js/bootstrap.bundle.min.js"
  ></script>
</svelte:head>

<main id="chat-container" class="content">
  <div class="p-0">
    <div class="card">
      <div class="row g-0">
        <div id="left-content" class="col-12 col-lg-5 col-xl-3 border-right">
          <div class="px-4 d-none d-md-block">
            <div class="d-flex align-items-center">
              <div class="flex-grow-1">
                <input
                  type="text"
                  class="form-control my-3"
                  placeholder="Search..."
                />
              </div>
            </div>
          </div>

          <a href="#" class="list-group-item list-group-item-action border-0">
            <div class="badge bg-success float-right">5</div>
            <div class="d-flex align-items-start">
              <img
                src="https://bootdey.com/img/Content/avatar/avatar5.png"
                class="rounded-circle mr-1"
                alt="Vanessa Tucker"
                width="40"
                height="40"
              />
              <div class="flex-grow-1 ml-3">
                Vanessa Tucker
                <div class="small">
                  <span class="fas fa-circle chat-online"></span> Online
                </div>
              </div>
            </div>
          </a>
          <a href="#" class="list-group-item list-group-item-action border-0">
            <div class="badge bg-success float-right">2</div>
            <div class="d-flex align-items-start">
              <img
                src="https://bootdey.com/img/Content/avatar/avatar2.png"
                class="rounded-circle mr-1"
                alt="William Harris"
                width="40"
                height="40"
              />
              <div class="flex-grow-1 ml-3">
                William Harris
                <div class="small">
                  <span class="fas fa-circle chat-online"></span> Online
                </div>
              </div>
            </div>
          </a>
          <a href="#" class="list-group-item list-group-item-action border-0 selected-chat">
            <div class="d-flex align-items-start">
              <img
                src="https://bootdey.com/img/Content/avatar/avatar3.png"
                class="rounded-circle mr-1"
                alt="Sharon Lessman"
                width="40"
                height="40"
              />
              <div class="flex-grow-1 ml-3">
                Sharon Lessman
                <div class="small">
                  <span class="fas fa-circle chat-online"></span> Online
                </div>
              </div>
            </div>
          </a>
          <a href="#" class="list-group-item list-group-item-action border-0">
            <div class="d-flex align-items-start">
              <img
                src="https://bootdey.com/img/Content/avatar/avatar4.png"
                class="rounded-circle mr-1"
                alt="Christina Mason"
                width="40"
                height="40"
              />
              <div class="flex-grow-1 ml-3">
                Christina Mason
                <div class="small">
                  <span class="fas fa-circle chat-offline"></span> Offline
                </div>
              </div>
            </div>
          </a>
          <a href="#" class="list-group-item list-group-item-action border-0">
            <div class="d-flex align-items-start">
              <img
                src="https://bootdey.com/img/Content/avatar/avatar5.png"
                class="rounded-circle mr-1"
                alt="Fiona Green"
                width="40"
                height="40"
              />
              <div class="flex-grow-1 ml-3">
                Fiona Green
                <div class="small">
                  <span class="fas fa-circle chat-offline"></span> Offline
                </div>
              </div>
            </div>
          </a>
          <a href="#" class="list-group-item list-group-item-action border-0">
            <div class="d-flex align-items-start">
              <img
                src="https://bootdey.com/img/Content/avatar/avatar2.png"
                class="rounded-circle mr-1"
                alt="Doris Wilder"
                width="40"
                height="40"
              />
              <div class="flex-grow-1 ml-3">
                Doris Wilder
                <div class="small">
                  <span class="fas fa-circle chat-offline"></span> Offline
                </div>
              </div>
            </div>
          </a>
          <a href="#" class="list-group-item list-group-item-action border-0">
            <div class="d-flex align-items-start">
              <img
                src="https://bootdey.com/img/Content/avatar/avatar4.png"
                class="rounded-circle mr-1"
                alt="Haley Kennedy"
                width="40"
                height="40"
              />
              <div class="flex-grow-1 ml-3">
                Haley Kennedy
                <div class="small">
                  <span class="fas fa-circle chat-offline"></span> Offline
                </div>
              </div>
            </div>
          </a>
          <a href="#" class="list-group-item list-group-item-action border-0">
            <div class="d-flex align-items-start">
              <img
                src="https://bootdey.com/img/Content/avatar/avatar3.png"
                class="rounded-circle mr-1"
                alt="Jennifer Chang"
                width="40"
                height="40"
              />
              <div class="flex-grow-1 ml-3">
                Jennifer Chang
                <div class="small">
                  <span class="fas fa-circle chat-offline"></span> Offline
                </div>
              </div>
            </div>
          </a>

          <hr class="d-block d-lg-none mt-1 mb-0" />
        </div>
        <div id="right-content" class="col-12 col-lg-7 col-xl-9">
          <div class="py-2 px-4 border-bottom d-none d-lg-block">
            <div class="d-flex align-items-center py-1">
              <div class="position-relative">
                <img
                  src="https://bootdey.com/img/Content/avatar/avatar3.png"
                  class="rounded-circle mr-1"
                  alt="Sharon Lessman"
                  width="40"
                  height="40"
                />
              </div>
              <div class="flex-grow-1 pl-3">
                <strong>Sharon Lessman</strong>
                <div class="text-muted small"><em>Typing...</em></div>
              </div>
            </div>
          </div>

          <div id="message-container" class="position-relative">
            <div class="chat-messages p-4">
              <div class="chat-message-right pb-4">
                <div>
                  <img
                    src="https://bootdey.com/img/Content/avatar/avatar1.png"
                    class="rounded-circle mr-1"
                    alt="Chris Wood"
                    width="40"
                    height="40"
                  />
                </div>
                <div class="flex-shrink-1 rounded py-2 px-3 mr-3">
                  Lorem ipsum dolor sit amet, vis erat denique in, dicunt
                  prodesset te vix.
                  <div class="text-muted small text-nowrap mt-2">2:33 am</div>
                </div>
              </div>

              <div class="chat-message-left pb-4">
                <div>
                  <img
                    src="https://bootdey.com/img/Content/avatar/avatar3.png"
                    class="rounded-circle mr-1"
                    alt="Sharon Lessman"
                    width="40"
                    height="40"
                  />
                </div>
                <div class="flex-shrink-1 rounded py-2 px-3 ml-3">
                  Sit meis deleniti eu, pri vidit meliore docendi ut, an eum
                  erat animal commodo.
                  <div class="text-muted small text-nowrap mt-2">2:34 am</div>
                </div>
              </div>

              <div class="chat-message-right mb-4">
                <div>
                  <img
                    src="https://bootdey.com/img/Content/avatar/avatar1.png"
                    class="rounded-circle mr-1"
                    alt="Chris Wood"
                    width="40"
                    height="40"
                  />
                </div>
                <div class="flex-shrink-1 bg-light rounded py-2 px-3 mr-3">
                  Cum ea graeci tractatos.
                  <div class="text-muted small text-nowrap mt-2">2:35 am</div>
                </div>
              </div>

              <div class="chat-message-left pb-4">
                <div>
                  <img
                    src="https://bootdey.com/img/Content/avatar/avatar3.png"
                    class="rounded-circle mr-1"
                    alt="Sharon Lessman"
                    width="40"
                    height="40"
                  />
                </div>
                <div class="flex-shrink-1 bg-light rounded py-2 px-3 ml-3">
                  Sed pulvinar, massa vitae interdum pulvinar, risus lectus
                  porttitor magna, vitae commodo lectus mauris et velit. Proin
                  ultricies placerat imperdiet. Morbi varius quam ac venenatis
                  tempus.
                  <div class="text-muted small text-nowrap mt-2">2:36 am</div>
                </div>
              </div>

              <div class="chat-message-left pb-4">
                <div>
                  <img
                    src="https://bootdey.com/img/Content/avatar/avatar3.png"
                    class="rounded-circle mr-1"
                    alt="Sharon Lessman"
                    width="40"
                    height="40"
                  />
                </div>
                <div class="flex-shrink-1 bg-light rounded py-2 px-3 ml-3">
                  Cras pulvinar, sapien id vehicula aliquet, diam velit
                  elementum orci.
                  <div class="text-muted small text-nowrap mt-2">2:37 am</div>
                </div>
              </div>

              <div class="chat-message-right mb-4">
                <div>
                  <img
                    src="https://bootdey.com/img/Content/avatar/avatar1.png"
                    class="rounded-circle mr-1"
                    alt="Chris Wood"
                    width="40"
                    height="40"
                  />
                </div>
                <div class="flex-shrink-1 bg-light rounded py-2 px-3 mr-3">
                  Lorem ipsum dolor sit amet, vis erat denique in, dicunt
                  prodesset te vix.
                  <div class="text-muted small text-nowrap mt-2">2:38 am</div>
                </div>
              </div>
            </div>
          </div>

          <div class="flex-grow-0 py-3 px-4 border-top">
            <div class="input-group">
              <input
                type="text"
                class="form-control"
                placeholder="Type your message"
              />
              <button class="btn btn-primary">Send</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</main>

<style>
  .chat-online {
    color: #34ce57;
  }

  .chat-offline {
    color: #e4606d;
  }

  .chat-messages {
    display: flex;
    flex-direction: column;
    max-height: 800px;
    overflow-y: scroll;
  }

  .chat-message-left,
  .chat-message-right {
    display: flex;
    flex-shrink: 0;
  }

  .chat-message-left {
    margin-right: auto;
  }

  .chat-message-right {
    flex-direction: row-reverse;
    margin-left: auto;
  }
  .py-3 {
    padding-top: 1rem !important;
    padding-bottom: 1rem !important;
  }
  .px-4 {
    padding-right: 1.5rem !important;
    padding-left: 1.5rem !important;
  }
  .flex-grow-0 {
    flex-grow: 0 !important;
  }
  .border-top {
    border-top: 1px solid #dee2e6 !important;
  }

  #message-container {
    background-color: #ebecf0;
  }

  .chat-message-left .rounded {
    background-color: #ffffff !important;
    border: 1px solid transparent;
    border-radius: 6px;
    box-shadow: rgba(21, 39, 71, 0.25) 0px 0px 1px 0px, rgba(21, 39, 71, 0.25) 0px 1px 1px 0px
  }

  .chat-message-right .rounded {
    background-color: #dbebff !important;
    border: 1px solid transparent;
    border-radius: 6px;
    box-shadow: rgba(21, 39, 71, 0.25) 0px 0px 1px 0px, rgba(21, 39, 71, 0.25) 0px 1px 1px 0px
  }

  #right-content {
    padding-left: 0px;
  }

  #left-content {
    padding-right: 0px;
  }

  .selected-chat {
    background-color: #dbebff !important;
  }
</style>
