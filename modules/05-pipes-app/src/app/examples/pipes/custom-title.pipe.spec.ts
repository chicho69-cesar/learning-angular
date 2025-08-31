import { CustomTitlePipe } from './custom-title.pipe';

describe('CustomNamePipe', () => {
  it('create an instance', () => {
    const pipe = new CustomTitlePipe();
    expect(pipe).toBeTruthy();
  });
});
