document.getElementById('ageCalculator').addEventListener('submit', function(event) {
    event.preventDefault();
    var dob = new Date(document.getElementById('dob').value);
    var today = new Date();
    var age = today.getFullYear() - dob.getFullYear();
    var monthDiff = today.getMonth() - dob.getMonth();
    var dayDiff = today.getDate() - dob.getDate();

    if (monthDiff < 0 || (monthDiff === 0 && dayDiff < 0)) {
        age--;
        monthDiff = (12 + monthDiff); // Adding 12 to month difference to ensure positive value
    }

    var result = 'Your age is ' + age + ' years, ' + monthDiff + ' months, and ' + dayDiff + ' days.';
    document.getElementById('result').innerText = result;
});
