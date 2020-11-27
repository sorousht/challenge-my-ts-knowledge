import fs from 'fs';
import path from 'path';

describe('Some APIs use use null when something is unavailable', () => {
  test('how Node.js callback style APIs use null', (done) => {
    fs.readFile(path.resolve('src/01-null-vs-undefined/foo.md'), (error) => {
      expect(error).toBe(/* FIXME */);
      done();
    });
  })
});