type PoemWithPages = {
  name: string;
  pages: number;
}

type PoemWithRhymes = {
  name: string;
  rhymes: boolean;
}

type Poem2 = PoemWithPages | PoemWithRhymes;

const poem: Poem2 = Math.random() > 0.5
  ? { name: 'Gabriel Yoon', pages: 7 }
  : { name: 'JuHyun Yoon', rhymes: true };

console.log(poem.name);
// console.log(poem.pages);
// console.log(poem.rhymes);
