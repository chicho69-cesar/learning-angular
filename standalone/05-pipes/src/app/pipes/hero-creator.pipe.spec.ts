import { HeroCreatorPipe } from './hero-creator.pipe';

describe('HeroCreatorPipe', () => {
  it('create an instance', () => {
    const pipe = new HeroCreatorPipe();
    expect(pipe).toBeTruthy();
  });
});
