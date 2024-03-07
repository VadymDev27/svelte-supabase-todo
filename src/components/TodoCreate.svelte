<script lang="ts">
  import { supabase } from '../lib/supabase'
  import { userId } from '../store/user';

  let uid: string | null = null;
  let title = ''
  let body = ''
  let priority = 'low'
  let completed = false
  let is_disable = true

  $: {
    uid = $userId;
    if(uid)is_disable = false
  }

  const handleSubmit = async (event) => {
    event.preventDefault();

    const postdata = {
      uid,
      title,
      body,
      priority,
      completed,
    }

    try{
      const { data, error } = await supabase.from('todos').insert(postdata)
      if(error){
        throw error;
      }

      console.log('送信されました', data)
      title = '';
      body = '';
      priority = 'low';
      completed = false;
    }
    catch(error){
      console.error('エラー:', error.message);
    }

  }
</script>

<div class="flex justify-center items-center">
  <form on:submit={handleSubmit}>
    <div class="grid grid-col gap-4">
      <div>
        <label for="title" class="block">タイトル：</label>
          <input type="text" id="title" bind:value={title} placeholder="タイトルを入力" class="input input-bordered w-full max-w-xs" />
      </div>
      <div>
        <label for="body" class="block">本文：</label>
          <input type="text" id="body" bind:value={body} placeholder="本文を入力" class="input input-bordered w-full max-w-xs" />
      </div>
      <div>
        <span class="block">優先度：</span>
        <label for="low">
          <input type="radio" id="low" class="radio radio-xs" bind:group={priority} value="low" checked />
          <span>低</span>
        </label>
        <label for="medium">
          <input type="radio" id="medium" class="radio radio-xs" bind:group={priority} value="medium" />
          <span>中</span>
        </label>
        <label for="high">
          <input type="radio" id="high" class="radio radio-xs" bind:group={priority} value="high" />
          <span>高</span>
        </label>
      </div>
      <div>
        <label for="completed"><span class="block">完了：</span>
          <input type="checkbox" id="completed" class="toggle toggle-sm" bind:checked={completed} />
        </label>
      </div>
      <div>
        <button type="submit" class="btn btn-wide" disabled={is_disable}>送信</button>
      </div>
    </div>
  </form>
</div>