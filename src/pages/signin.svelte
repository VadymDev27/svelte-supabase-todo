<script lang="ts">
  import { supabase } from '../lib/supabase'

  let loading = false

  const handleLogin = async () => {
    try {
      loading = true
      const { data, error } = await supabase.auth.signInWithOAuth({
        provider: 'github',
        options: {
          redirectTo: import.meta.env.VITE_SUPABASE_AUTH_REDIRECT,
        },
      })

      if (error) throw error
      alert('githubで認証します')
    } catch (error) {
      if (error instanceof Error) {
        alert(error.message)
      }
    } finally {
      loading = false
    }
  }
</script>

<h2 class="text-5xl">signinのページ</h2>
<div class="h-svh">
  <div class="h-96 justify-center items-center flex">
    <form class="form-widget" on:submit|preventDefault="{handleLogin}">
      <button type="submit" disabled="{loading}" class="btn btn-wide" aria-live="polite">githubでログイン</button>
    </form>
  </div>
</div>