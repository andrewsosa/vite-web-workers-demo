# Svelte + TS + Vite Web Worker Demo


We can define a `echo.worker.ts` file:

```typescript
self.onmessage = (event: MessageEvent<string>) => {
  self.postMessage(event.data);
};

export {}; // this is to make typescript happy
```

The magic sauce is:

```typescript
// import using `?worker` suffix
import ViteWorker from "../echo.worker?worker";

// instantiate the worker
const tsWorker = new ViteWorker();

// send and receive messages from the worker
tsWorker.postMessage("how now, brown cow?");

tsWorker.addEventListener("message", (msg: MessageEvent<string>) => {
    console.log(message.data); // how now, brown cow?
});
```


