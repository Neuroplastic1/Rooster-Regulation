// Using require(), imported the assert module
const assert = require('assert');
// import Rooster from index.js
const Rooster = require('../index');

describe('Rooster', () => {
   describe('.announceDawn', () => {
    it('returns a rooster call', () => {
       // Defining expected output
       const expected = 'cock-a-doodle-doo!';

      // Calling Rooster.announceDawn and store result in variable
       const contents = Rooster.announceDawn();
      // Useing an assert method to compare actual and expected result
      assert.strictEqual(contents,expected);
    });
 });
});
