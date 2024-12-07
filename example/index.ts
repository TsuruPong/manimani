import { tokenize } from 'manimani';

tokenize("柿の種", (moras: string[]) => {
  console.log(JSON.stringify(moras, null, 2));
});
