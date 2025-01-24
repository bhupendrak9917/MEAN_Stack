let grade = 56

if(grade>70)
    console.log(grade, "Distinction")
else if(grade<70 && grade>=60)
    console.log(grade, "First Class")
else if(grade<60 && grade>=50)
    console.log(grade, "Second Class")
else if(grade<500 && grade>=40)
    console.log(grade, "Pass")
else
    console.log(grade, "Fail")