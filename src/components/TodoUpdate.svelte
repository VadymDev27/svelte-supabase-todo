<script lang="ts">
  import { userId } from "../store/user";
  import { supabase } from "../lib/supabase";
  import Modal from "../components/Modal.svelte";

  let uid: string | null = $userId;
  export let props_update_id: string | null = null;

  $: {
    if (props_update_id) {
      console.log(props_update_id);
      handle_todo_select_update(props_update_id);
    }
  }

  let update_data = {};
  let update_id = "";
  let update_title = "";
  let update_body = "";
  let update_priority = "low";
  let update_completed = false;
  let update_is_disable = true;

  const handle_todo_select_update = async (props_id) => {
    try {
      const { data, error } = await supabase
        .from("todos")
        .select("*")
        .eq("id", props_id)
        .single();

      update_id = data.id;
      update_title = data.title;
      update_body = data.body;
      update_priority = data.priority;
      update_completed = data.completed;
      update_is_disable = false;
    } catch (error) {
      console.log(error.message);
    }
  };

  const handle_todo_update = async (event) => {
    event.preventDefault();

    const updatedata = {
      uid,
      title: update_title,
      body: update_body,
      priority: update_priority,
      completed: update_completed,
      updated_at: new Date().toISOString(),
    };

    try {
      const { data, error } = await supabase
        .from("todos")
        .update(updatedata)
        .eq("id", update_id);
      if (error) {
        throw error;
      }
      console.log("編集しました");
      document.getElementById("my_modal").close();
    } catch (error) {
      console.log(error.message);
    }
  };
</script>

<Modal>
  <div class="flex justify-center items-center">
    <form on:submit={handle_todo_update}>
      <div class="grid grid-col gap-4">
        <div>
          <label for="update_title" class="block">タイトル：</label>
          <input
            type="text"
            id="update_title"
            bind:value={update_title}
            placeholder="タイトルを入力"
            class="input input-bordered w-full max-w-xs"
          />
        </div>
        <div>
          <label for="update_body" class="block">本文：</label>
          <input
            type="text"
            id="update_body"
            bind:value={update_body}
            placeholder="本文を入力"
            class="input input-bordered w-full max-w-xs"
          />
        </div>
        <div>
          <span class="block">優先度：</span>
          <label for="update_low">
            <input
              type="radio"
              id="update_low"
              class="radio radio-xs"
              bind:group={update_priority}
              value="low"
              checked
            />
            <span>低</span>
          </label>
          <label for="update_medium">
            <input
              type="radio"
              id="update_medium"
              class="radio radio-xs"
              bind:group={update_priority}
              value="medium"
            />
            <span>中</span>
          </label>
          <label for="update_high">
            <input
              type="radio"
              id="update_high"
              class="radio radio-xs"
              bind:group={update_priority}
              value="high"
            />
            <span>高</span>
          </label>
        </div>
        <div>
          <label for="update_completed"
            ><span class="block">完了：</span>
            <input
              type="checkbox"
              id="update_completed"
              class="toggle toggle-sm"
              bind:checked={update_completed}
            />
          </label>
        </div>
        <div>
          <button
            type="submit"
            class="btn btn-wide"
            disabled={update_is_disable}>送信</button
          >
        </div>
      </div>
    </form>
  </div>
</Modal>
