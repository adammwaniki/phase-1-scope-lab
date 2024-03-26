// Write your solution in this file!
var customerName = 'bob'
//uppercase bob
function upperCaseCustomerName() {
    return customerName = customerName.toUpperCase();
}

//best customer
function setBestCustomer() {
    return bestCustomer = 'not bob';
}

//
function overwriteBestCustomer() {
    return bestCustomer = 'maybe bob';
}

//least facourite character is unsuccessfully overwritten
function changeLeastFavoriteCustomer() {
    throw 'Assignment to constant variable.';
}

/*
//another way is like this
//least facourite character is unsuccessfully overwritten
function changeLeastFavoriteCustomer() {
    const leastFavoriteCustomer = 'jack'
    return leastFavoriteCustomer= 'jane';
}
*/