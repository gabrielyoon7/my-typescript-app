type CreateEvent = CustomEvent<{
  restaurant: {
    name: string;
    distance: number;
  };
}>;

interface HTMLElementEventMap {
  create: CreateEvent;
}

document.body.addEventListener('create', (event) => {
  event.detail.restaurant;
});
