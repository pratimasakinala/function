var userFirstName = 'Pratima';
var userLastName = 'Sakinala';

console.log(formatName(userFirstName, userLastName));
// console.log(createUserObj);

// declare a function
function formatName(firstName, lastName) {
    // console.log(firstName);
    // console.log(lastName);

    // console.log(lastName + ' ' + firstName);
    // save to server
    var formattedName = lastName + ' ' + firstName;

    // TODO: check if userFullName is already saved in localStorage,
    // if it is, then don't override
    // if not, save it

    if (!localStorage.getItem('userFullName')) {
        localStorage.setItem('userFullName', formattedName); // save to localStorage
    }

    return formattedName;
}

// formatName(userLastName, userFirstName);

// function expression:
var createUserObj = function (firstName, lastName) {
    var userObj = {
        name: formatName(firstName, lastName),
        age: null
    };

    return userObj;
}(userFirstName, userLastName); // add last set of parenthesis to evaluate function expression immediately after creation

// constructor way
var concatinate = new Function('x', 'y', 'return x + y');
// console.log(concatinate('Pratima', 'Sakinala'));