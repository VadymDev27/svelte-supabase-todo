<script>
  import logo from "../assets/svelte.png";
  import Counter from "../lib/Counter.svelte";
</script>

<div class="hero min-h-screen bg-base-200 mb-5">
  <div class="hero-content text-center">
    <div class="max-w-md">
      <div class="w-100 justify-center items-center flex">
        <img src={logo} alt="Svelte Logo" />
      </div>
      <h1 class="text-5xl font-bold">Hello there</h1>
      <p class="py-6">
        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
        excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a
        id nisi.
      </p>
      <button class="btn btn-primary">Get Started</button>
      <p>
        Check out <a href="https://github.com/sveltejs/kit#readme">SvelteKit</a>
        for the officially supported framework, also powered by Vite!
      </p>
      <Counter />
    </div>
  </div>
</div>

<div class="flex flex-col w-full border-opacity-50">
  <div class="divider">↓</div>
</div>

<h2 class="text-4xl font-bold">サブタイトル</h2>
<p>
  Visit <a href="https://svelte.dev">svelte.dev</a> to learn how to build Svelte
  apps.
</p>

<p>
  Check out <a href="https://github.com/sveltejs/kit#readme">SvelteKit</a> for the
  officially supported framework, also powered by Vite!
</p>

<div class="hero min-h-screen bg-base-200 mb-5">
  <div class="hero-content flex-col lg:flex-row">
    <img
      src="https://daisyui.com/images/stock/photo-1635805737707-575885ab0820.jpg"
      class="max-w-sm rounded-lg shadow-2xl"
      alt="hero image1"
    />
    <div>
      <h1 class="text-5xl font-bold">Box Office News!</h1>
      <p class="py-6">
        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
        excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a
        id nisi.
      </p>
      <button class="btn btn-primary">Get Started</button>
    </div>
  </div>
</div>

<div class="hero min-h-screen bg-base-200">
  <div class="hero-content flex-col lg:flex-row-reverse">
    <img
      src="https://daisyui.com/images/stock/photo-1635805737707-575885ab0820.jpg"
      class="max-w-sm rounded-lg shadow-2xl"
      alt="hero image2"
    />
    <div>
      <h1 class="text-5xl font-bold">Box Office News!</h1>
      <p class="py-6">
        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
        excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a
        id nisi.
      </p>
      <button class="btn btn-primary">Get Started</button>
    </div>
  </div>
</div>

<div class="flex flex-col w-full border-opacity-50">
  <div class="divider">↓</div>
</div>

<h2 class="text-4xl font-bold">サブタイトル</h2>
<p>
  Visit <a href="https://svelte.dev">svelte.dev</a> to learn how to build Svelte
  apps.
</p>
<div class="flex justify-center gap-4 flex-wrap">
  <div class="card w-96 bg-base-100 shadow-xl">
    <figure>
      <img
        class="object-contain"
        src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
        alt="Shoes"
      />
    </figure>
    <div class="card-body">
      <h2 class="card-title">
        Shoes!
        <div class="badge badge-secondary">NEW</div>
      </h2>
      <p>If a dog chews shoes whose shoes does he choose?</p>
      <div class="card-actions justify-end">
        <div class="badge badge-outline">Fashion</div>
        <div class="badge badge-outline">Products</div>
      </div>
    </div>
  </div>
  <div class="card w-96 bg-base-100 shadow-xl">
    <figure>
      <img
        class="object-cover"
        src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
        alt="Shoes"
      />
    </figure>
    <div class="card-body">
      <h2 class="card-title">
        Shoes!
        <div class="badge badge-secondary">NEW</div>
      </h2>
      <p>If a dog chews shoes whose shoes does he choose?</p>
      <div class="card-actions justify-end">
        <div class="badge badge-outline">Fashion</div>
        <div class="badge badge-outline">Products</div>
      </div>
    </div>
  </div>
  <div class="card w-96 bg-base-100 shadow-xl">
    <figure>
      <img
        class="object-scale-down"
        src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
        alt="Shoes"
      />
    </figure>
    <div class="card-body">
      <h2 class="card-title">
        Shoes!
        <div class="badge badge-secondary">NEW</div>
      </h2>
      <p>If a dog chews shoes whose shoes does he choose?</p>
      <div class="card-actions justify-end">
        <div class="badge badge-outline">Fashion</div>
        <div class="badge badge-outline">Products</div>
      </div>
    </div>
  </div>
</div>

<style>
  img {
    height: 16rem;
    width: 16rem;
  }

  h1 {
    color: #ff3e00;
    text-transform: uppercase;
    font-size: 4rem;
    font-weight: 100;
    line-height: 1.1;
    margin: 2rem auto;
    max-width: 14rem;
  }

  p {
    max-width: 14rem;
    margin: 1rem auto;
    line-height: 1.35;
  }

  @media (min-width: 480px) {
    h1 {
      max-width: none;
    }

    p {
      max-width: none;
    }
  }
</style>
