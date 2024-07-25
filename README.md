
GitHub Link: https://github.com/parthu311/student-registration-system

### HTML and JavaScript Documentation for Student Registration System

#### HTML Structure

1. DOCTYPE and HTML Language
   - Declares the document type and specifies the language as English.
   
2. Head Section
   - <meta charset="UTF-8">: Sets the character encoding.
   - <meta name="viewport" content="width=device-width, initial-scale=1.0">: Ensures the webpage is responsive.
   - <title>: Student Registration System
   - <link rel="stylesheet" href="style.css">: Links to the external CSS stylesheet.

3. Body Section
   - Container Division
     - .container: Main container for the page content.
     
   - Header Division
     - .header: Contains the main heading of the webpage.
     - <h1>: Displays "Student Registration System".

   - Content Division
     - .content: Wraps the form and table content.
     - .student-form: Container for the student registration form.
     - <form>: Defines the student registration form with various input fields and a submit button.
     - Form Fields
       - Student Name: Text input for the student's name.
       - Student Id: Text input for the student's ID.
       - Enter Your Email: Email input for the student's email.
       - Contact No: Number input for the student's contact number.
     - <button type="submit">: Button to submit the form data.

   - Form Data Table
     - .formdata: Container for the data table.
     - <table>: Defines the table structure.
     - <thead>: Table header with columns for Name, Id, Email, Number, and Edit/Delete actions.
     - <tbody>: Table body where student data will be dynamically inserted.

4. JavaScript Link
   - <script src="script.js"></script>: Links to the external JavaScript file.

#### JavaScript Functionality

1. Event Listener for Form Submission
   - document.getElementById('studentForm').addEventListener('submit', addData);
     - Listens for form submission and triggers addData function.

2. Add Data Function (addData)
   - Prevents default form submission behavior using e.preventDefault().
   - Retrieves values from input fields.
   - Validates the Student ID (must be 5 digits) and Contact Number (must be 10 digits).
   - Alerts user if validation fails.
   - On successful validation:
     - Alerts "Data added successfully".
     - Retrieves existing student data from localStorage.
     - Creates a studentData object with form data.
     - Adds the new data to the existing array.
     - Saves the updated array to localStorage.
     - Calls addRowToTable to add the data to the table.
     - Resets the form fields.

3. Add Row to Table Function (addRowToTable)
   - Inserts a new row in the table body.
   - Adds cells for Name, Id, Email, and Number.
   - Creates and appends Edit and Delete buttons to the row.
   - Edit button triggers editRow function.
   - Delete button triggers deleteRow function.

4. Edit Row Function (editRow)
   - Populates form fields with the data from the selected row.
   - Calls deleteRow to remove the current row from the table and localStorage.

5. Delete Row Function (deleteRow)
   - Confirms with the user before deleting.
   - Removes the student data from localStorage.
   - Removes the row from the table.

6. Load Data Function (loadData)
   - Fetches student data from localStorage on page load.
   - Calls addRowToTable for each student to populate the table.

7. DOMContentLoaded Event Listener
   - document.addEventListener('DOMContentLoaded', loadData);
     - Ensures loadData is called when the DOM is fully loaded.

