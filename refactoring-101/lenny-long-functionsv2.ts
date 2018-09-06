var grades = [
	{letter: 'A', minimumPercentage: 0.9, passing: true},
	{letter: 'B', minimumPercentage: 0.8, passing: true},
	{letter: 'C', minimumPercentage: 0.7, passing: true},
	{letter: 'D', minimumPercentage: 0.6, passing: true},
	{letter: 'F', minimumPercentage: 0,   passing: false}
];

function passingGradeLetters() {
	return _.chain(grades).where({passing: true}).pluck('letter').value();
};

function findGrade(percentage: number) {
	return _.find(grades, function(grade) {
		return percentage >= grade.minimumPercentage;
	});
}

function getStudentLetterGradeString() {
	return grade.letter;
}

function notGotAnF(grade) {
	return grade.passing
}

function compareGrades(grade1, grade2) {
	return grade1.percentage > grade2.percentage;
}

// ==============================

export class Grade {

	private percentage: number;
	private grade: IGrade;
	private grades: Grade[];


	constructor(percentage: number) {
		this.percentage = percentage;
		this.grade = this.findGrade(percentage);
		this.grades = DataStore.getGrades();

		return this;
	}

  public passingGradeLetters(): string[] {
    return _.chain(this.grades).where({passing: true}).pluck('letter').value();
  };

  public findGrade(percentage = this.percentage): IGrade {
    return _.find(this.grades, function(grade) {
      return percentage >= grade.minimumPercentage;
    });
  }

  public letterGrade(): string {
    return this.grade.letter;
  }

  public isPassing(): boolean {
    return this.grade.passing;
	}

	public isBetterThan(grade: IGrade): boolean {
    return this.percentage > grade.percentage;
  }
};
