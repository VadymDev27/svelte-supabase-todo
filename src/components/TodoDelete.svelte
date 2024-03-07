<script lang="ts">
  import { supabase } from '../lib/supabase'

  export let props_delete_id: string | null = null;

  $:{
    if(props_delete_id) {
      console.log(props_delete_id)
      handle_todo_delete(props_delete_id)
    }
  }

  const handle_todo_delete = async(id) => {
    try{
      const { data, error } = await supabase.from('todos').delete().eq('id', id)
      console.log("削除しました")

    }
    catch(error){
      console.log(error.message)
    }
  }
</script>