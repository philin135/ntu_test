// Task 1: Declare an array to store patient's names
let patients = [];

// Task 2: Add code to add patient's name into the array declared in Task 1
function addPatient(patientName) {
    patients.push(patientName);
}

// Task 3: Implement listPatient() function to print all patient's names stored in the array
function listPatient() {
    console.log(patients);
}

// Adding patients
addPatient("John");
addPatient("Mary");
addPatient("Mark");

// Listing patients
listPatient(); // This should list ["John", "Mary", "Mark"]