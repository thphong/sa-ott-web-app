<script lang="ts">
  import '../styles/main.css'
  import { isUserLoggedIn, logOutUserSession } from '$lib/service/login'
  import { goto } from '$app/navigation'
  import { onMount } from 'svelte'

  if (!isUserLoggedIn()) {
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
        <img src="https://bootdey.com/img/Content/avatar/avatar1.png" alt="profileImg" />
        <div class="name_job">
          <div class="name">Prem Shahi</div>
          <div class="job">Web designer</div>
        </div>
      </div>
      <i class="bx bx-log-out" on:click={logOut} id="log_out"></i>
    </li>
  </ul>
</div>
<section class="home-section">
  <slot/>
</section>

<style>
  @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@200;300;400;500;600;700&display=swap');
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Poppins', sans-serif;
  }
  .sidebar {
    position: fixed;
    left: 0;
    top: 0;
    height: 100%;
    width: 78px;
    background: #007bff;
    padding: 6px 14px;
    z-index: 99;
    transition: all 0.5s ease;
  }
  :global(.sidebar.open) {
    width: 250px;
  }
  .sidebar .logo-details {
    height: 60px;
    display: flex;
    align-items: center;
    position: relative;
  }
  .sidebar .logo-details .icon {
    opacity: 0;
    transition: all 0.5s ease;
  }
  .sidebar .logo-details .logo_name {
    color: #fff;
    font-size: 20px;
    font-weight: 600;
    opacity: 0;
    transition: all 0.5s ease;
  }
  :global(.sidebar.open .logo-details .icon,
  .sidebar.open .logo-details .logo_name) {
    opacity: 1;
  }
  .sidebar .logo-details #btn {
    position: absolute;
    top: 50%;
    right: 0;
    transform: translateY(-50%);
    font-size: 22px;
    transition: all 0.4s ease;
    font-size: 23px;
    text-align: center;
    cursor: pointer;
    transition: all 0.5s ease;
  }
  :global(.sidebar.open .logo-details #btn) {
    text-align: right;
  }
  .sidebar i {
    color: #fff;
    height: 60px;
    min-width: 50px;
    font-size: 28px;
    text-align: center;
    line-height: 60px;
  }
  .sidebar .nav-list {
    margin-top: 20px;
    height: 100%;
  }
  .sidebar li {
    position: relative;
    margin: 8px 0;
    list-style: none;
  }
  .sidebar li .tooltip {
    position: absolute;
    top: -20px;
    left: calc(100% + 15px);
    z-index: 3;
    background: #fff;
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.3);
    padding: 6px 12px;
    border-radius: 4px;
    font-size: 15px;
    font-weight: 400;
    opacity: 0;
    white-space: nowrap;
    pointer-events: none;
    transition: 0s;
  }
  .sidebar li:hover .tooltip {
    opacity: 1;
    pointer-events: auto;
    transition: all 0.4s ease;
    top: 50%;
    transform: translateY(-50%);
  }
  :global(.sidebar.open li .tooltip) {
    display: none;
  }
  .sidebar input {
    font-size: 15px;
    color: #fff;
    font-weight: 400;
    outline: none;
    height: 50px;
    width: 100%;
    width: 50px;
    border: none;
    border-radius: 12px;
    transition: all 0.5s ease;
    background: #1d1b31;
  }
  :global(.sidebar.open input) {
    padding: 0 20px 0 50px;
    width: 100%;
  }
  
  .sidebar li a {
    display: flex;
    height: 100%;
    width: 100%;
    border-radius: 12px;
    align-items: center;
    text-decoration: none;
    transition: all 0.4s ease;
    background: #007bff;
  }
  .sidebar li a:hover {
    background: #fff;
  }
  .sidebar li a .links_name {
    color: #fff;
    font-size: 15px;
    font-weight: 400;
    white-space: nowrap;
    opacity: 0;
    pointer-events: none;
    transition: 0.4s;
  }
  :global(.sidebar.open li a .links_name) {
    opacity: 1;
    pointer-events: auto;
  }
  .sidebar li a:hover .links_name,
  .sidebar li a:hover i {
    transition: all 0.5s ease;
    color: #11101d;
  }
  .sidebar li i {
    height: 50px;
    line-height: 50px;
    font-size: 18px;
    border-radius: 12px;
  }
  .sidebar li.profile {
    position: fixed;
    height: 60px;
    width: 78px;
    left: 0;
    bottom: -8px;
    padding: 10px 14px;
    background: #0058b7;
    transition: all 0.5s ease;
    overflow: hidden;
  }
  :global(.sidebar.open li.profile) {
    width: 250px;
  }
  .sidebar li .profile-details {
    display: flex;
    align-items: center;
    flex-wrap: nowrap;
  }
  .sidebar li img {
    height: 45px;
    width: 45px;
    object-fit: cover;
    border-radius: 6px;
    margin-right: 10px;
  }
  .sidebar li.profile .name,
  .sidebar li.profile .job {
    font-size: 15px;
    font-weight: 400;
    color: #fff;
    white-space: nowrap;
  }
  .sidebar li.profile .job {
    font-size: 12px;
  }
  .sidebar .profile #log_out {
    position: absolute;
    top: 50%;
    right: 0;
    transform: translateY(-50%);
    background: #0058b7;
    width: 100%;
    height: 60px;
    line-height: 60px;
    border-radius: 0px;
    transition: all 0.5s ease;
  }
  :global(.sidebar.open .profile #log_out) {
    width: 50px;
    background: none;
  }
  .home-section {
    position: relative;
    background: #e4e9f7;
    min-height: 100vh;
    top: 0;
    left: 78px;
    width: calc(100% - 78px);
    transition: all 0.5s ease;
    z-index: 2;
  }
  :global(.sidebar.open ~ .home-section) {
    left: 250px;
    width: calc(100% - 250px);
  }
  .home-section .text {
    display: inline-block;
    color: #11101d;
    font-size: 25px;
    font-weight: 500;
    margin: 18px;
  }
  @media (max-width: 420px) {
    .sidebar li .tooltip {
      display: none;
    }
  }
</style>
