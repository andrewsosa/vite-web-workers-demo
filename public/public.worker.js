self.onmessage = (event) => {
  self.postMessage(event.data + 1);
};
