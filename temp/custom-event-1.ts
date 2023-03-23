type CreateEvent = CustomEvent<{
  restaurant: {
    name: string;
    distance: number;
  };
}>;

interface HTMLElementEventMap {
  create: CreateEvent;
}

document.querySelector('ul')?.addEventListener('create', (event) => {
  event.detail.restaurant;

  const myEvent: CreateEvent = new CustomEvent('create', {
    detail: {
      restaurant: {
        name: '한식당',
        distance: 5,
      },
    },
  });
});
