const myGrade = require("./grade_class.js");

let grade = new myGrade();
function print_grade(){
	if(grade.print_letter_grade() !== "F"){
		console.log(`Your got an ${grade.print_letter_grade()}. Congratulations!`);
	}else{
		console.log(`Your got an ${grade.print_letter_grade()}. I am sorry. You failed!`);
	}
}

let empty_dash = "-----------------------------------";
grade.number_of_subjects();
console.log(grade.what_are_your_subject());
console.log("These are your subjects and score:");
console.log("subject -------------------score")
for(subject in grade.subjects){
	console.log(`  ${subject} --------------------${grade.subjects[subject]}`)
}
console.log(empty_dash);
console.log(`Your average is ${grade.calculate_average()}.`);
console.log(empty_dash);
print_grade();


