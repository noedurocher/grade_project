const prompt = require('prompt-sync')();
console.log("Welcome to GradeBook");
class Grade{
	constructor(){
		this.subjects = {};
	}

	number_of_subjects(){
		this.num_of_subjects = Number(prompt("How many subject are you entering today?"));
		if(this.num_of_subjects>0 && this.num_of_subjects<6){
			return this.num_of_subjects;
		}else{
			console.log("Range 1-5 the only option");
			return this.number_of_subjects();
		}
		
	}

	what_are_your_subject(){
		let begin = 0, subject="", score=0, sub_num=1;
		while(begin<this.num_of_subjects){
			subject = prompt(`What is subject ${sub_num}? `);
			score = Number(prompt(`What is your score for ${subject}? `));
			this.subjects[subject] = score
			sub_num++;
			begin++;
		}
		return;
	}

	calculate_average(){
		this.total = 0;
		for(let subject in this.subjects){
			if(this.subjects.hasOwnProperty(subject)){
				this.total += this.subjects[subject]
			}
		}

		return this.total/this.num_of_subjects;
	}

	print_letter_grade(){
		/*
			0-50 F
			51-69 D
			70-79 C
			80-89 B
			90-100 A
		*/
		let average = this.calculate_average();
		this.grade_letter = ""
		switch(true){
			case average>=90:
				return this.grade_letter = "A";
				break;
			case average>=80:
				return this.grade_letter = "B";
				break;
			case average>=70:
				return this.grade_letter = "C";
				break;
			case average>=60:
				return this.grade_letter = "D";
				break;
			default:
		 		return this.grade_letter = "F";

		 }
		return this.grade_letter; 
	}	
}

module.exports = Grade;

