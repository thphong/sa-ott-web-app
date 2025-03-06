<script lang="ts">
  import '../styles/main.css'
  import { isUserLoggedIn, logOutUserSession } from '$lib/service/login'
  import { goto } from '$app/navigation'
  import { onMount } from 'svelte'
  import { page } from '$app/stores'
  import { pageHomeClass } from '$lib/service/store';  
  import Loader from "$lib/components/loader/Loader.svelte";

  if (
    !isUserLoggedIn() &&
    $page.url.pathname.toLocaleLowerCase() != '/register' &&
    $page.url.pathname.toLocaleLowerCase() != '/login' &&
    $page.url.pathname.toLocaleLowerCase() != '/reset-password'
  ) {
    goto('/login')
  }

  const logOut = () => {
    logOutUserSession()
    goto('/login')
  }

  onMount(() => {
    let sidebar = document.querySelector('.sidebar')
    let closeBtn = document.querySelector('#btn')

    closeBtn.addEventListener('click', () => {
      sidebar.classList.toggle('open')
      menuBtnChange() //calling the function(optional)
    })

    // following are the code to change sidebar button(optional)
    function menuBtnChange() {
      if (sidebar.classList.contains('open')) {
        closeBtn.classList.replace('bx-menu', 'bx-menu-alt-right') //replacing the iocns class
      } else {
        closeBtn.classList.replace('bx-menu-alt-right', 'bx-menu') //replacing the iocns class
      }
    }
  })
</script>

<Loader/>
<div class="sidebar">
  <div class="logo-details">
    <i class="bx bxl-c-plus-plus icon"></i>
    <div class="logo_name">VChat</div>
    <i class="bx bx-menu" id="btn"></i>
  </div>
  <ul class="nav-list">
    <li>
      <a href="/chat">
        <i class="bx bx-message-rounded"></i>
        <span class="links_name">Messages</span>
      </a>
      <span class="tooltip">Messages</span>
    </li>
    <li>
      <a href="/group">
        <i class="bx bx-group"></i>
        <span class="links_name">Groups</span>
      </a>
      <span class="tooltip">Groups</span>
    </li>
    <li>
      <a href="/files">
        <i class="bx bx-folder-open"></i>
        <span class="links_name">Files</span>
      </a>
      <span class="tooltip">Files</span>
    </li>
    <li>
      <a href="/profile">
        <i class="bx bx-pie-chart-alt-2"></i>
        <span class="links_name">Analytics</span>
      </a>
      <span class="tooltip">Analytics</span>
    </li>
    <li>
      <a href="/notification">
        <i class="bx bx-bell"></i>
        <span class="links_name">Notifications</span>
      </a>
      <span class="tooltip">Notifications</span>
    </li>
    <li class="profile">
      <div class="profile-details">
        <img
          src="https://bootdey.com/img/Content/avatar/avatar1.png"
          alt="profileImg"
        />
        <div class="name_job">
          <div class="name">Prem Shahi</div>
          <div class="job">Web designer</div>
        </div>
      </div>
      <i class="bx bx-log-out" on:click={logOut} id="log_out"></i>
    </li>
  </ul>
</div>
<section class="home-section {$pageHomeClass}">
  <slot />
</section>

<style>
  
</style>
