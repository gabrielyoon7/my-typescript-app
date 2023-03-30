function sing(song: string) {
  console.log(`Singing : ${song}`);
}
sing('Palms Trax');

console.log('---');

function singTwo(first: string, second: string) {
  console.log(`${first} / ${second}`);
}

singTwo('Palms', 'Trax');

console.log('---');

function announceSong(song: string, singer?: string) {
  console.log(`Song: ${song}`);
  if (singer) {
    console.log(`Singer: ${singer}`);
  }
}
announceSong('Cooking with Palms Trax', 'Palms Trax');
console.log('---');
announceSong('Cooking with Palms Trax', undefined);
console.log('---');
announceSong('Cooking with Palms Trax');
