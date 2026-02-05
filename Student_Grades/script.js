// ===== ARRAYS =====
let studentNames = [];
let studentMarks = [];

// ===== ADD STUDENT =====
function addStudent() {
    let name = document.getElementById("name").value.trim();
    let marks = parseInt(document.getElementById("marks").value);

    if (name === "" || isNaN(marks) || marks < 0 || marks > 100) {
        alert("Please enter valid name and marks (0-100)");
        return;
    }

    studentNames.push(name);
    studentMarks.push(marks);

    document.getElementById("name").value = "";
    document.getElementById("marks").value = "";
}

// ===== CALCULATE GRADE USING IF-ELSE & LOOP =====
function showGrades() {
    let output = "";

    for (let i = 0; i < studentMarks.length; i++) {
        let grade;

        if (studentMarks[i] >= 90) {
            grade = "S";
        } else if (studentMarks[i] >= 80) {
            grade = "A+";
        } else if (studentMarks[i] >= 70) {
            grade = "A";
        } else if (studentMarks[i] >= 60) {
            grade = "B+";
        } else if (studentMarks[i] >= 50) {
            grade = "B";
        } else if (studentMarks[i] >= 35) {
            grade = "C";
        } else {
            grade = "Fail";
        }

        output += `
            <div class="student">
                <b>Name:</b> ${studentNames[i]} <br>
                <b>Marks:</b> ${studentMarks[i]} <br>
                <b>Grade:</b> ${grade}
            </div>
        `;
    }

    document.getElementById("result").innerHTML = output;
}
