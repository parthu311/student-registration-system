document.getElementById('studentForm').addEventListener('submit', addData);

function addData(e) {
    e.preventDefault(); 

    var fullName = document.getElementById('text').value;
    var stuId = document.getElementById('stuId').value;
    var email = document.getElementById('email').value;
    var number = document.getElementById('contact').value;

    var isValid = true;

    if (stuId.length !== 5 || isNaN(stuId)) {
        isValid = false;
        alert('Student ID must be exactly 5 digits.');
    } else if (isNaN(number) || number.length !== 10) {
        isValid = false;
        alert('Contact number must be exactly 10 digits.');
    } else {
        alert('Data added successfully');

        // Get existing data from localStorage
        var students = JSON.parse(localStorage.getItem('students')) || [];

        var studentData = {
            fullName: fullName,
            stuId: stuId,
            email: email,
            number: number
        };

        // Add new data to the array
        students.push(studentData);

        // Save the updated array to localStorage
        localStorage.setItem('students', JSON.stringify(students));

        addRowToTable(studentData);

        // Form after Emty
        document.getElementById('studentForm').reset();
    }
}


// Add data on table
function addRowToTable(studentData) {
    var table = document.getElementsByTagName('tbody')[0];
    var newRow = table.insertRow();

    var cell1 = newRow.insertCell(0);
    var cell2 = newRow.insertCell(1);
    var cell3 = newRow.insertCell(2);
    var cell4 = newRow.insertCell(3);

    cell1.textContent = studentData.fullName;
    cell2.textContent = studentData.stuId;
    cell3.textContent = studentData.email;
    cell4.textContent = studentData.number;

    // make edit button
    var editButton = document.createElement('button');
    editButton.textContent = 'Edit';
    editButton.className = 'edit-btn';
    editButton.addEventListener('click', function() {
        editRow(newRow, studentData);
    });

    // deletbuton create
    var deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.className = 'delete-btn';
    deleteButton.addEventListener('click', function() {
        deleteRow(newRow, studentData.stuId);
    });

    var actionCell = document.createElement('td');
    actionCell.className = 'action-btns';
    actionCell.appendChild(editButton);
    actionCell.appendChild(deleteButton);

    newRow.appendChild(actionCell);
} 

// edit button function
function editRow(row, studentData) {
    var cells = row.getElementsByTagName('td');
    document.getElementById('text').value = studentData.fullName;
    document.getElementById('stuId').value = studentData.stuId;
    document.getElementById('email').value = studentData.email;
    document.getElementById('contact').value = studentData.number;

    deleteRow(row, studentData.stuId);
}

// Delete button function
function deleteRow(row, stuId) {
    if (confirm('Are you sure you want to delete this row?')) {
        // Remove from local storage
        var students = JSON.parse(localStorage.getItem('students')) || [];
        students = students.filter(student => student.stuId !== stuId);
        localStorage.setItem('students', JSON.stringify(students));

        row.parentNode.removeChild(row);
    }
}

// Load data from localStorage on page load
function loadData() {
    var students = JSON.parse(localStorage.getItem('students')) || [];
    students.forEach(student => {
        addRowToTable(student);
    });
}

document.addEventListener('DOMContentLoaded', loadData);
