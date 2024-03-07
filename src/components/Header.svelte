<script lang="ts">
  import { push } from "svelte-spa-router";
  import ModeSwitch from "./ModeSwitch.svelte";
  import { supabase } from "../lib/supabase";
  import type { AuthSession } from "./lib/supabase";

  export let session: AuthSession;

  async function handleLogout() {
    try {
      const { error } = await supabase.auth.signOut();
      if (error) {
        throw error;
      }
      console.log("ログアウトしました");
    } catch (error) {
      console.error("ログアウトエラー:", error.message);
    }
  }
</script>

<div class="navbar bg-base-100 sticky top-0 z-50">
  <div class="navbar-start">
    <div class="dropdown">
      <div tabindex="0" role="button" class="btn btn-ghost lg:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          ><path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M4 6h16M4 12h8m-8 6h16"
          /></svg
        >
      </div>
      <ul
        tabindex="-1"
        class="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
      >
        <li><a href="#/">Home</a></li>
        <li><a href="#/about">About</a></li>
      </ul>
    </div>
    <a href="#/" class="btn btn-ghost text-xl">daisyUI</a>
  </div>
  <div class="navbar-center hidden lg:flex">
    <ul class="menu menu-horizontal px-1">
      <li><a href="#/">Home</a></li>
      <li><a href="#/about">About</a></li>
    </ul>
  </div>
  <div class="navbar-end">
    <ModeSwitch />
    {#if session}
      <a href="#/dashboard" class="btn mr-2">ダッシュボード</a>
      <button class="btn" on:click={handleLogout}>ログアウト</button>
    {:else}
      <a href="#/login" class="btn">ログイン</a>
    {/if}
  </div>
</div>
