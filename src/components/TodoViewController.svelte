<script lang="ts">
  import { onMount } from 'svelte'
  import { supabase } from '../lib/supabase'
  import { userId } from '../store/user';
  import TodoUpdate from '../components/TodoUpdate.svelte';
  import TodoDelete from '../components/TodoDelete.svelte';
  import Modal from '../components/Modal.svelte';

  let uid: string | null = null;

  let todo_all_data = []
  let todo_view_data = []

  let query_priority = []
  let query_completed = false

  let props_update_id = ''
  let props_delete_id = ''

  $: {
    uid = $userId;
  }

  onMount(async() => {
    try{
      const { data, error } = await supabase.from('todos').select('*')
      todo_all_data = data
      todo_view_data = data.filter(todo => !todo.completed)
    }
    catch(error){
      console.log(error.message)
    }
  })

  const handle_todo_search = async (event) => {
    const { checked, value, id } = event.target;
    switch (id) {
      case 'priority':
        if (checked) {
          query_priority = [...query_priority, value];
        } else {
          query_priority = query_priority.filter(priority => priority !== value);
        }
        break;
      case 'completed':
        query_completed = checked;
        break;
      default:
        break;
    }

    if (query_priority.length || query_completed) {
      todo_view_data = todo_all_data.filter(todo => {
        if (!query_completed && query_priority.includes(todo.priority) && !todo.completed) {
          return true;
        }
        if(query_completed && todo.completed && query_priority.includes(todo.priority)){
          return true
        }
        if(!query_priority.length && query_completed && todo.completed){
          return true
        }

        return false;
      });
    } else {
      todo_view_data = todo_all_data.filter(todo => !todo.completed);
    }

  }
</script>

<div class="flex flex-col">
<div>
  <label for="priority"><input type="checkbox" id="priority" value="low" on:change={handle_todo_search} class="checkbox" /> row</label>
  <label for="priority"><input type="checkbox" id="priority" value="medium" on:change={handle_todo_search} class="checkbox" /> medium</label>
  <label for="priority"><input type="checkbox" id="priority" value="high" on:change={handle_todo_search} class="checkbox" /> high</label>
  <label for="completed"><input type="checkbox" id="completed" value="true" on:change={handle_todo_search} class="checkbox" /> close</label>
</div>

{#if todo_view_data.length > 0}
  {#each todo_view_data as todo}
    <div class="flex justify-center items-center">
      <div class="card w-96 base-200 base-content border mb-2">
        <div class="card-body">
          <h2 class="card-title">{todo.title}</h2>
          {#if todo.priority == 'low'}
            <div class="badge badge-success gap-2">
              {todo.priority}
            </div>
          {:else if todo.priority == 'medium'}
            <div class="badge badge-warning gap-2">
              {todo.priority}
            </div>
          {:else if todo.priority == 'high'}
            <div class="badge badge-error gap-2">
              {todo.priority}
            </div>
          {/if}
          {#if todo.completed}
            <div class="badge badge-ghost">close</div>
          {/if}
          <p class="text-left">{todo.body}</p>
          <div class="card-actions justify-end">
            <button class="btn" onclick="my_modal.showModal()" on:click={() => props_update_id = todo.id}>編集</button>
            <button class="btn" on:click={() => props_delete_id = todo.id}>削除</button>
          </div>
        </div>
      </div>
    </div>
  {/each}
{/if}

<TodoUpdate {props_update_id} />
<TodoDelete {props_delete_id} />
</div>