function singAllTheSongs(singer: string, ...songs: string[]) {
  // eslint-disable-next-line no-restricted-syntax
  for (const song of songs) {
    console.log(`${song}, by ${singer}`);
  }
}

singAllTheSongs('Alicia Keys');
singAllTheSongs('Lady Gaga', 'Bad Romance', 'Just Dance', 'Poker Face');
