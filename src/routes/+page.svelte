<script lang="ts">
  import { goto } from '$app/navigation'
  import { isUserLoggedIn } from '$lib/service/login'

  if (!isUserLoggedIn()) {
    goto('/login')
  } else {
    goto('/chat')
  }
</script>
