var a = ['January', 'March', 'April', 'Tuesday', 'May', 'July', 'Wednesday', 'Thursday', 
    'Friday', 'August', 'September', 'October', 'Saturday', 'December', 'Sunday']
a.unshift("Monday")
console.log(a)
a.shift()
console.log(a)
a.splice(1,0,'February')
console.log(a)
a.splice(a.indexOf('Tuesday'),1)
console.log(a)
a.splice(a.indexOf('May'),0,'June')
console.log(a)


/*
Ex - 2
 
var a = ['January','March','April','Tuesday','May','July','Wednesday','Thursday','Friday','August','September','October','Saturday','December','Sunday']
 
1. Add an element Monday at the beginning of the array.
2. Remove an element from the beginning of the array.
3. Add an element 'February' at the first index position.
4. Remove an element 'Tuesday' from the array
5. Add an element 'June' in between 'May' and "July"
6. Remove the elements 'Wednesday' to 'Friday' from the array
7. Change the value 'Saturday' to 'November'
8. Remove the value Sunday from the array.
 */