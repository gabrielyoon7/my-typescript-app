function rateSong(song: string, rating = 0) {
  console.log(`${song} gets ${rating}/5 stars`);
}
rateSong('Boiler Room');
rateSong('Boiler Room', 5); // 덮어 쓴다
rateSong('Boiler Room', undefined);
