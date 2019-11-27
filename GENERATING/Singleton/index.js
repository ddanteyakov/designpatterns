const TelephoneDirectory = require('./telephoneDirectory');

const phoneDirectory = new TelephoneDirectory();
const testName = 'Alex';
phoneDirectory.setNumber(testName, 123);
const phoneDirectory2 = new TelephoneDirectory();
console.log(phoneDirectory2.getNumberByName(testName));