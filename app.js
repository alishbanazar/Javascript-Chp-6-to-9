// var a = 8
// document.write("Result:"+ "<br>"+ "The value of a is: " + a + "<br>" + "<br>")

// ++a
// document.write("the value of " + " ++a " + " is " + a + "<br>");
// document.write("Now the valve of a is " + a + "<br>" + "<br>")

// a++
// document.write("The value of a++ is " + 9 +"<br>")
// document.write("Now the valve of a is " + a + "<br>" + "<br>")

// --a;
// document.write("the value of " + " --a " + " is " + a + "<br>");
// document.write("Now the valve of a is " + a + "<br>" + "<br>")

// a--;
// document.write("the value of " + " a-- " + " is " + 9 + "<br>");
// document.write("Now the valve of a is " + a + "<br>" + "<br>")



// var b = 2 ;
// var c = 1;
// var result = --b - --c + ++c + c--;
// 1 - 0 + 1 + 1
// 3
// document.write("b is 2 " + "<br>")
// document.write("c is 1" + "<br>")
// document.write( "The result is" + result + "<br>" + "<br>")




var userName = prompt("Please enter your name:");
alert("Hello, " + userName + "! Welcome to our website!");


// Take three subjects' names from the user
var subject1 = prompt ("Enter the name of the first subject.");
var subject2 = prompt ("Enter the name of the second subject.");
var subject3 = prompt ("Enter the name of the third subject.");

// Total marks for each subject is 100, store it in another variable
var totalMarks = 300;

// Take obtained marks for first subject from user and stored it in different variable.
 var obtainSubject1 = +prompt("Enter your first subject marks");

//  Take obtained marks for remaining 2 subjects from user and store them in variables.
var obtainSubject2 = +prompt("Enter your second subject marks");
var obtainSubject3 = +prompt("Enter your third subject marks");

// Now calculate total marks and percentage and show the result in browser like this.
var obtainMarks = obtainSubject1+obtainSubject2+obtainSubject3;
var percentage = (obtainMarks/totalMarks)*100;
percentage = percentage.toFixed(2);
var percentage1 = (obtainSubject1/100)*100;
percentage1 = percentage1.toFixed(2);
var percentage2 = (obtainSubject2/100)*100;
percentage2 = percentage2.toFixed(2);
var percentage3 = (obtainSubject3/100)*100;
percentage3 = percentage3.toFixed(2);
 
//  Now make table
// document.write("<Table border=1px>")
// document.write("<tr>");
// document.write("<th>"+"Subjects "+"</th>")
// document.write("<th>"+" Total"+'</th>')
// document.write("<th>"+" Obtained Marks "+"</th>")
// document.write("<th>"+" Percentage "+"</th>")
// document.write("</tr>");


document.write("<table border=1px>")
document.write("<h2>"+ "Subject Marks" + "<h2>")
// document.write("<tr><th>Subject</th><th>Total</th><th>Obtained Marks</th><th>Percentage</th></tr>")
document.write("<tr>")
document.write("<th>" + "SUBJECT" + "</th>")
document.write("<th>" + "TOTAL" + "</th>")
document.write("<th>" + "OBTAINED MARKS" + "</th>")
document.write("<th>" + "PERCENTAGE" + "</th>")

document.write('<tr>');
document.write('<td>'+subject1 +'</td>')
document.write('<td>'+100+'</td>')
document.write('<td>'+ obtainSubject1+'</td>')
document.write('<td>'+percentage1+'%'+'</td>')
document.write('</tr>');


document.write('<tr>');
document.write('<td>'+ subject2+'</td>')
document.write('<td>'+100+'</td>')
document.write('<td>'+obtainSubject2+'</td>')
document.write('<td>'+percentage2+'%'+'</td>')
document.write('</tr>');

document.write('<tr>');
document.write('<td>'+subject3+'</td>')
document.write('<td>'+100+'</td>')
document.write('<td>'+obtainSubject3+'</td>')
document.write('<td>'+percentage3+'%'+'</td>')
document.write('</tr>');

document.write("<tr>");
document.write("<th>" + "</th>");
document.write("<th>"+totalMarks+"</th>");
document.write("<th>"+obtainMarks+"</th>");
document.write("<th>"+percentage+"%"+"</th>");
document.write("</tr>");
document.write("</Table>")

