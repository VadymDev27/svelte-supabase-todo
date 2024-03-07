<script lang="ts">
  import { adminAuthClient } from '../lib/supabasedelete'
  import { userId } from '../store/user';

  const uid = $userId;
  
  const handle_delete_user = async () =>{
    try{
      const { data, error } = await adminAuthClient.deleteUser(uid)

      if(error instanceof Error){
        throw new Error('Error deleting user');
      }

      try {
        const { error } = await supabase.auth.signOut();
        if (error) {
          throw error;
        }
        console.log('削除後にログアウトしました');

      } catch (error) {
        console.error('削除後ログアウトエラー:', error.message);
      }
    }
    catch(error){
      console.error(error);
    }
  } 

</script>

<div class="p-3">
  <button class="btn btn-wide btn-error" on:click="{handle_delete_user}">退会</button>
</div>