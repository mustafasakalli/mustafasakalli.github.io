const btn = document.querySelector('.btn');
let table = document.querySelector('table')

let nameInput = document.querySelector('#name')
let courseInput = document.querySelector('#course')
let studentIdInput = document.querySelector('#student_id')
let midtermInput = document.getElementById('midterm');
let finalInput = document.getElementById('final');
let errorElement = document.getElementById('error')
let gradeSystemInput = document.querySelector('#grade_system')


console.log(typeof midtermInput)
console.log(typeof finalInput)


/* let gradePercentage = (((midtermInput * 40) / 100) + ((finalInput * 60) / 100))

if (gradePercentage <= 100 && gradePercentage >= 90) {
    gradeLetter = "A";
} else if (gradePercentage <= 89 && gradePercentage >= 80) {
    gradeLetter = "B";
} else if (gradePercentage <= 79 && gradePercentage >= 70) {
    gradeLetter = "C"
} else if (gradePercentage <= 69 && gradePercentage >= 60) {
    gradeLetter = "D"
} else if (gradePercentage <= 59 && gradePercentage >= 0) {
    gradeLetter = "F"
}
 */
btn.addEventListener('click', () => {
 
    if(nameInput.value === '' || nameInput.value === null ){
        alert("Name must required!")
        return false
    };

    if(!isNaN(nameInput.value)){
        alert("Name must be string")
        return false
    }

    if(studentIdInput.value === '' || studentIdInput.value === null ){
        alert("Student ID is required!")
        return false
    }

    if(isNaN(studentIdInput.value) || isNaN(midtermInput.value) || isNaN(finalInput.value)){
        alert("Student ID, Midterm and Final must be a number")
        return false        
    }

    if(studentIdInput.value < 0 ) {
        alert("ID must be greated than 0!")
        return false
    }

    if (midtermInput.value < 0 || midtermInput.value > 100) {
        alert("Midterm should between 0 and 100!");
        return false
    };

    if (finalInput.value < 0 || finalInput.value > 100) {
        alert("Final should between 0 and 100!");
        return false
    }

    


    var gradeLetter

    var calculation = ((((midtermInput.value) * 40) / 100) + (((finalInput.value) * 60) / 100))

    if(gradeSystemInput.value === 'ten_base' ){
        if (calculation <= 100 && calculation >= 90) {
            gradeLetter = "A";
        } else if (calculation <= 89 && calculation >= 80) {
            gradeLetter = "B";
        } else if (calculation <= 79 && calculation >= 70) {
            gradeLetter = "C"
        } else if (calculation <= 69 && calculation >= 60) {
            gradeLetter = "D"
        } else if (calculation <= 59 && calculation >= 0) {
            gradeLetter = "F"
        }
    }

    if(gradeSystemInput.value === 'seven_base'){
        if (calculation <= 100 && calculation >= 93) {
            gradeLetter = "A";
        } else if (calculation <= 92 && calculation >= 85) {
            gradeLetter = "B";
        } else if (calculation <= 84 && calculation >= 77) {
            gradeLetter = "C"
        } else if (calculation <= 76 && calculation >= 70) {
            gradeLetter = "D"
        } else if (calculation <= 69 ) {
            gradeLetter = "F"
        }
    }


    var table = document.getElementById("table");
    var row  = table.insertRow(-1);
    var nameTable = row.insertCell(0);
    var courseTable = row.insertCell(1);
    var studentTable = row.insertCell(2);
    var calculationTable = row.insertCell(3);
    var actionsTable = row.insertCell(4);
    nameTable.innerHTML = nameInput.value;
    courseTable.innerHTML = courseInput.value;
    studentTable.innerHTML = studentIdInput.value;
    calculationTable.innerHTML = gradeLetter;
    actionsTable.innerHTML = '<input type="button" name="add" value="Delete" onClick="delRow(this);" class="btn" id="delete-button" >';
    

})

function delRow(student) {
    var s = student.parentNode.parentNode;
    s.parentNode.removeChild(s);
}
                