// Define a rooster
Rooster = {};

// the first test in index_test.js is testing that the Rooster.announceDawn() is returning the expected output 'cock-a-doodle-doo!'
// Return a morning rooster call
Rooster.announceDawn = () => {
  return 'cock-a-doodle-doo!';
}
// in the second it block in index_test.js will test if timeAtDawn() returns a string
// the next it block checks if it Throws an Error if hour is not between 0 and 23 inclusive
// notice the rangeError is a form of error that means when we test (if rangeError works), we will expect rangeError as an output from this function when we throw this func inside assert.throws().
// asser.throws() takes two arguments. The first argument will be a function which calls .timeAtDawn() and the second argument will be the error you expect to be thrown
// then when we'll run the test script with invalid input, we'll get to see if RangeError works as expected
Rooster.timeAtDawn = (hour) => {
  if (hour < 0 || hour > 23) {
    throw new RangeError;
  } else {
    return hour.toString();
  };
}

module.exports = Rooster;
