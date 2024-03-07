<script lang="ts">
  import { onMount } from "svelte";
  import { supabase } from "../../lib/supabase";
  import type { AuthSession } from "../../lib/supabase";
  import { userId } from "../../store/user";
  import Avatar from "../../components/Avatar.svelte";
  import DeleteUser from "../../components/DeleteUser.svelte";

  let uid: string | null;
  $: {
    uid = $userId;
    console.log(uid);
    if (uid) getProfile();
  }

  let loading = false;
  let email: string | null = null;
  let username: string | null = null;
  let website: string | null = null;
  let avatarUrl: string | null = null;

  onMount(() => {
    getProfile();
  });

  const getProfile = async () => {
    try {
      loading = true;

      const { data, error, status } = await supabase
        .from("profiles")
        .select("email, username, website, avatar_url")
        .eq("id", uid)
        .single();

      if (error && status !== 406) throw error;

      if (data) {
        email = data.email;
        username = data.username;
        website = data.website;
        avatarUrl = data.avatar_url;
      }
    } catch (error) {
      if (error instanceof Error) {
        alert(error.message);
      }
    } finally {
      loading = false;
    }
  };

  const updateProfile = async () => {
    try {
      loading = true;

      const updates = {
        id: uid,
        username,
        website,
        avatar_url: avatarUrl,
        updated_at: new Date().toISOString(),
      };

      const { error } = await supabase.from("profiles").upsert(updates);

      if (error) {
        throw error;
      }
    } catch (error) {
      if (error instanceof Error) {
        alert(error.message);
      }
    } finally {
      loading = false;
    }
  };
</script>

<h1 class="text-3xl mb-5">プロフィールページ</h1>
<div class="flex justify-center items-center">
  <form on:submit|preventDefault={updateProfile}>
    <div class="border rounded-lg p-2 grid grid-col gap-4">
      <div>
        <Avatar bind:url={avatarUrl} on:upload={updateProfile} />
      </div>
      <div>
        <span class="block text-left">Email:</span>
        <input
          type="text"
          value={email}
          class="input input-bordered w-full max-w-xs"
          disabled
        />
      </div>
      <div>
        <label for="username" class="block text-left">Name</label>
        <input
          id="username"
          type="text"
          bind:value={username}
          class="input input-bordered w-full max-w-xs"
        />
      </div>
      <div>
        <label for="website" class="block text-left">Website</label>
        <input
          id="website"
          type="text"
          bind:value={website}
          class="input input-bordered w-full max-w-xs"
        />
      </div>
      <div>
        <button type="submit" class="btn btn-wide" disabled={loading}>
          {loading ? "Saving ..." : "更新"}
        </button>
      </div>
    </div>
  </form>
</div>

<DeleteUser />
