<script lang="ts">
  import { isShown } from './loader'
</script>

{#if $isShown}
  <div class="loader-container"></div>
  <div class="loader"></div>
{/if}

<style lang="scss">
  .loader-container {
    position: fixed;
    left: 0px;
    top: 0px;
    width: 100%;
    height: 100%;
    background-color: #333333;
    opacity: 0.1;
    z-index: 1001;
  }

  .loader {
    position: fixed;
    left: 50%;
    top: 50%;
    margin-left: -60px;
    margin-top: -60px;
    z-index: 1002;
    border: 16px solid #f3f3f3;
    border-radius: 50%;
    border-top: 16px solid #3498db;
    width: 60px;
    height: 60px;
    -webkit-animation: spin 2s linear infinite; /* Safari */
    animation: spin 2s linear infinite;
  }

  /* Safari */
  @-webkit-keyframes spin {
    0% {
      -webkit-transform: rotate(0deg);
    }
    100% {
      -webkit-transform: rotate(360deg);
    }
  }

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
</style>
