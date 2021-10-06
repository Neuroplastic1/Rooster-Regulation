// Using require(), imported the assert module
const assert = require('assert');
// import Rooster from index.js
const Rooster = require('../index');

// testing Rooster.announceDawn()'s output
// A describe block for Rooster
describe('Rooster', () => {
  // Within the first block write another describe block for the .announceDawn method
  describe('.announceDawn', () => {
    // Within the nested describe block, write an it block that tests that the method 'returns a rooster call'
    // four phases of a test: setup, exercise, and verify in this it block (teardown optional for now)
    it('returns a rooster call', () => {
      // Setup -  Defining expected output
      const expected = 'cock-a-doodle-doo!';

      // exercise - call the function under test - Calling Rooster.announceDawn and store result in variable
      const actual = Rooster.announceDawn();
      // verify - Using an assert method to compare actual and expected output
      assert.strictEqual(actual, expected);
    });
  });


  //Test that .timeAtDawn 'returns its argument as a string'
  describe('.timeAtDawn', () => {
    it('returns its argument as a string', () => {
      // this time we can use an input for testing our function Rooster.timeAtDawn(hour)
      const inputHour = 12;
      //setup
      const expected = '12';
      // excercise
      const actual = Rooster.timeAtDawn(12);
      // verify
      assert.strictEqual(actual, expected);
    });

    // this it block tests if .timeAtDawn(hour) throws an error if the valid (hour) parameter(hour < 0 || hour > 23) is not provided
    // first checking if it throws an error giving it an inputHour less than 0
    it('throws an error if passed a number less than 0', () => {
      //setup
      const inputHour = -1;
      const expected = RangeError;
      // verify
      assert.throws(
        () => {
          // excercise
          Rooster.timeAtDawn(inputHour);
        },
        expected
      );
    });

    // test hour's upper limit
    it('throws an error if passed a number more than 23', () => {
      //setup
      const inputHour = 24;
      const expected = RangeError;
      // verify
      assert.throws(
        () => {
          // excercise
          Rooster.timeAtDawn(inputHour);
        },
        expected
      );
    });

  });
});
