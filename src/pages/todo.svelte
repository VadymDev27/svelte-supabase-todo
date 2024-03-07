<script lang="ts">
  import TodoViewController from '../components/TodoViewController.svelte';
  import TodoCreate from '../components/TodoCreate.svelte';

</script>

<h1 class="text-3xl mb-5">todoのページ</h1>

<div class="flex w-100 justify-center items-start gap-3">
  <TodoCreate />
  <TodoViewController />
</div>



