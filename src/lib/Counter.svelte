<script lang="ts">
  let count: number = 0;
  const increment = () => {
    count += 1;
  };
</script>

<div>
  <button on:click={increment}>
    in browser: {count}
  </button>
</div>
