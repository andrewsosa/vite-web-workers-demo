<script lang="ts">
  import ViteWorker from "../demo.worker?worker";

  let count: number = 0;

  const callTSWorker = () => {
    const tsWorker = new ViteWorker();

    tsWorker.postMessage(count);

    tsWorker.addEventListener("message", (msg: MessageEvent<number>) => {
      count = msg.data;
    });
  };
</script>

<button on:click={callTSWorker}>
  typescript worker: {count}
</button>
