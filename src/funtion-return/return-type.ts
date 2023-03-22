function singSongs(songs: string[]) {
  for (const song of songs) {
    console.log(song);
  }
  return songs.length;
}

function getSongAt(songs: string[], index: number) {
  return index < songs.length ? songs[index] : undefined;
}
