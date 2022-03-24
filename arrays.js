const users = [
    {id: 1232, firstName: 'Cam', lastName: 'Danvers', logins: 35, isPremiumMember: false},
    {id: 3283, firstName: 'Elijah', lastName: 'Hawkings', logins: 3, isPremiumMember: true},
    {id: 9283, firstName: 'Ragupathy', lastName: 'Bodem', logins: 12, isPremiumMember: false},
    {id: 6972, firstName: 'Jamilla', lastName: 'Johnson', logins: 5, isPremiumMember: true},
    {id: 3998, firstName: 'Jose', lastName: 'Rivera', logins: 16, isPremiumMember: false},
    {id: 4982, firstName: 'Ted', lastName: 'Witherspoon', logins: 53, isPremiumMember: true},
    {id: 6929, firstName: 'Igor', lastName: 'Silenski', logins: 23, isPremiumMember: false},
    {id: 3879, firstName: 'Ira', lastName: 'Bolislovitz', logins: 9, isPremiumMember: false}
];

// Find a user named 'Jose'
const wheresJose = users.find(users=>users.firstName=='Jose');
console.log(wheresJose);
// Get an array of all the premium members
const premiumMember = users.filter(users=>users.isPremiumMember=true);
console.log(premiumMember);
// Get an array of all the user last names
const userLastNames = users.map(users=>users.lastName);
console.log(userLastNames);
// Get an array of the full names who have logged in more than 10 times
const heavyHitters = users.filter(users=>users.logins>10);
const heavyHittersNames = heavyHitters.map(users=>users.firstName+users.lastName);
console.log(heavyHittersNames);
// Get the total number of logins for the list of users
const totalLogins = users.reduce(function(sum,users){
    return sum+users.logins;
},0)
console.log(totalLogins);