logIn()
function logIn (){
let mail = ''
let password = '' 
do {
    mail = prompt('Enter your email');
} while (mail !== 'admin@test.io');
if (mail == 'admin@test.io') {
    alert('Your email is correct')
} 
do {
    password = prompt('Enter your password');
} while (password !== 'admin1234');
if (password == 'admin1234') {
    alert('Your paswword is correct')
} 
if (mail = 'admin@test.io' && password == 'admin1234' ) {
    alert('Successful login')
}
}