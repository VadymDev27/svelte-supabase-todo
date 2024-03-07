<script lang="ts">
  import { onMount } from 'svelte'
  import { push } from 'svelte-spa-router'

  onMount(() => {
    setTimeout(() => {
        push("#/dashboard");
    }, 1000);
  })

</script>
<h1>コールバック</h1>