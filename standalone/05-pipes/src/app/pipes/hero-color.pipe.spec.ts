import { HeroColorPipe } from './hero-color.pipe';

describe('HeroColorPipe', () => {
  it('create an instance', () => {
    const pipe = new HeroColorPipe();
    expect(pipe).toBeTruthy();
  });
});
