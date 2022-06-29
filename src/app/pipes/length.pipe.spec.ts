import { LengthPipe } from './length.pipe';

describe('EncryptPipe', () => {
  it('create an instance', () => {
    const pipe = new LengthPipe();
    expect(pipe).toBeTruthy();
  });
});
