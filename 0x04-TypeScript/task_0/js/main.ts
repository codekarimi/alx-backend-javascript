interface Student {
    firstName: string;
    lastName: string;
    age: number;
    location: string;
}

const student1: Student = {
    firstName: 'Mark',
    lastName: 'Musili',
    age: 20,
    location: 'Kenya'
}
const student2: Student = {
    firstName: 'John',
    lastName: 'Murife',
    age: 23,
    location: 'Kathwenzoni'
}

const studentsList: Student[] = [student1, student2];

// Get a reference to the table element
const table = document.createElement('table');

// Loop through each student in the studentsList array
studentsList.forEach(student => {
    // Create a new row element
    const row = document.createElement('tr');

    // Create cell elements for the first name and location
    const firstNameCell = document.createElement('td');
    firstNameCell.textContent = student.firstName;

    const locationCell = document.createElement('td');
    locationCell.textContent = student.location;

    // Append the cells to the row
    row.appendChild(firstNameCell);
    row.appendChild(locationCell);

    // Append the row to the table
    table.appendChild(row);
});

// Append the table to the body of the document
document.body.appendChild(table);

