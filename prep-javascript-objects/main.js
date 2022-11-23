var person = {
  firstName: 'Robinson',
  lastName: 'Saradeth',
  hobby: 'Music'
};

console.log(person);

var firstName = 'Robinson';
var lastName = 'Saradeth';
var fullName = firstName + ' ' + lastName;
console.log("The person's name is:", fullName);

person.job = 'stargazing';
console.log("The person's job is:", person.job);

person.previousJob = 'philosophy';
console.log("The person's previous job is:", person.previousJob);

console.log('The complete person object is:', person);
