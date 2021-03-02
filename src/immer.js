import produce from 'immer';

const movies = [{ title: '어벤져스', description: '개꿀잼' }];

const newMovies = [...movies];

console.log('TEST 1:', movies === newMovies);

const nextState = produce(movies, draftState => {
  // draftState.push({ todo: 'Tweet about it' });
  // draftState[1].done = true;
});

console.log('nextState:', nextState);

console.log('TEST 2:', movies === nextState);
