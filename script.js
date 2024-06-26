document.getElementById('myForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting the traditional way

    const ageInput = document.getElementById('age');
    const nameInput = document.getElementById('name');
    const age = ageInput.value;
    const name = nameInput.value;

    // Validate inputs
    if (age === '' || name === '') {
        alert('Please fill out all fields.');
        return;
    }

    // Process the form submission using a promise
    new Promise((resolve, reject) => {
        setTimeout(() => {
            if (age >= 18) {
                resolve(`Welcome, ${name}. You can vote.`);
            } else {
                reject(`Oh sorry ${name}. You aren't old enough.`);
            }
        }, 4000);
    })
    .then(message => {
        alert(message);
    })
    .catch(error => {
        alert(error);
    });
});
