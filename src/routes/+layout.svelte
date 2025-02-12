<script lang="ts">
  import '../styles/main.css'
</script>

<nav>

  <div class="sidebar">
    <div class="logo">
      <span class="logo-name">VChat</span>
    </div>

    <div class="sidebar-content">
      <ul class="lists">
        
        <li class="list">
            <a href="/chat" class="nav-link">
              <i class="bx bx-message-rounded icon"></i>
              <span class="link">Messages</span>
            </a>
          </li>
          <li class="list">
            <a href="/group" class="nav-link">
              <i class="bx bx-group icon"></i>
              <span class="link">Groups</span>
            </a>
          </li>
          <li class="list">
            <a href="/files" class="nav-link">
              <i class="bx bx-folder-open icon"></i>
              <span class="link">Files</span>
            </a>
          </li>
          <li class="list">
            <a href="/profile" class="nav-link">
              <i class="bx bx-pie-chart-alt-2 icon"></i>
              <span class="link">Profile</span>
            </a>
          </li>
          <li class="list">
            <a href="/notification" class="nav-link">
              <i class="bx bx-bell icon"></i>
              <span class="link">Notifications</span>
            </a>
          </li>
      </ul>

      <div class="bottom-cotent">
        <li class="list">
          <a href="#" class="nav-link">
            <i class="bx bx-cog icon"></i>
            <span class="link">Settings</span>
          </a>
        </li>
        <li class="list">
          <a href="#" class="nav-link">
            <i class="bx bx-log-out icon"></i>
            <span class="link">Logout</span>
          </a>
        </li>
      </div>
    </div>
  </div>
</nav>
<div class="main-content"><slot /></div>



