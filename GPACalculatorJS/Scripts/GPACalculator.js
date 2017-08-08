function calculateGPA() {
    var grade1 = document.getElementById("class1").value;
    var grade2 = document.getElementById("class2").value;
    var grade3 = document.getElementById("class3").value;
    var grade4 = document.getElementById("class4").value;
    var grade5 = document.getElementById("class5").value;

    var grades = [grade1, grade2, grade3, grade4, grade5];
    var totalPoints = 0;

    for(var i = 0; i < grades.length; i++) {
        if(grades[i] == "A")
        {
            totalPoints += 4;
        }
        else if(grades[i] == "A-")
        {
            totalPoints += 3.67;
        }
        else if(grades[i] == "B+")
        {
            totalPoints += 3.33;
        }
        else if(grades[i] == "B")
        {
            totalPoints += 3;
        }
        else if(grades[i] == "B-")
        {
            totalPoints += 2.67;
        }
        else if(grades[i] == "C+")
        {
            totalPoints += 2.33;
        }
        else if(grades[i] == "C")
        {
            totalPoints += 2;
        }
        else if(grades[i] == "C-")
        {
            totalPoints += 1.67;
        }
        else if(grades[i] == "D+")
        {
            totalPoints += 1.33;
        }
        else if(grades[i] == "D")
        {
            totalPoints += 1;
        }
        else if(grades[i] == "D-")
        {
            totalPoints += 0.67;
        }
        else if(grades[i] == "F")
        {
            totalPoints += 0;
        }
        else{alert("Invalid Letter")}
        
    }
    var average = totalPoints / 5;
    document.getElementById("GPA").innerHTML = "GPA: " + average;
    }
    
    
