<script lang="ts">
  import Counter from "./lib/Counter.svelte";
  import JsCounter from "./lib/JSCounter.svelte";
  import TsCounter from "./lib/TSCounter.svelte";
</script>

<main>
  <div>
    <a href="https://vitejs.dev" target="_blank" rel="noreferrer">
      <img src="/vite.svg" class="logo" alt="Vite Logo" />
    </a>
  </div>
  <h1>Web Workers in Vite</h1>

  <div class="card">
    <Counter />
    <JsCounter />
    <TsCounter />
  </div>

  <p class="read-the-docs">Click on the Vite and Svelte logos to learn more</p>
</main>

<style>
  .logo {
    height: 6em;
    padding: 1.5em;
    will-change: filter;
  }
  .logo:hover {
    filter: drop-shadow(0 0 2em #646cffaa);
  }

  .read-the-docs {
    color: #888;
  }

  :global(button) {
    margin: 0.5rem 0.25rem 0.25rem;
  }
</style>
