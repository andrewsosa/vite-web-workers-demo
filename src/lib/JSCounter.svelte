<script lang="ts">
  let count: number = 0;

  const callPublicWorker = () => {
    const publicWorker = new Worker("public.worker.js");

    publicWorker.postMessage(count);

    publicWorker.addEventListener("message", (msg) => {
      count = msg.data;
    });
  };
</script>

<button on:click={callPublicWorker}>
  javascript worker: {count}
</button>
