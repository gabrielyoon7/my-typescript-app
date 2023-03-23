type Crew = {
  [K in '솔로스타' | '우코']: K extends '솔로스타' ? true : never;
};

function 출입할수있나요(crew: Crew) {
  const who = crew.우코;
}
