export class Grade{

	private percentage: number;
	private grade: IGrade;
	private grades: Grade[];


	constructor(percentage: number) {
		this.percentage = percentage;
		this.grade = this.findGrade(percentage);
		this.grades = DataStore.getGrades();

		return this;
	}

	/**
	 * // => BAD - Finds letters that are passing
	 * // => GOOD - Used to get the passing grade letters, this is rendered on the frontend
	 * @returns string[] - an array of passing grade letters
	 */
  public passingGradeLetters(): string[] {
    return _.chain(this.grades).where({passing: true}).pluck('letter').value();
  };

	/**
	 * // => BAD
	 * 		Finds the grade using lodash find. TODO: Fix null chance
	 * // => GOOD
	 * 		Gets the grade based on the percentage passed to the method.
	 * 		Called by the report component to get the students grade for their individual report
	 * 		TODO JIRA-78: Fix chance constructor value is null and no arg is passed
	 * @param percentage - the percentage grade, by default this is the one passed to the constructor
	 * @returns IGrade - An interface of the grade the student achieved
	 */
  public findGrade(percentage = this.percentage): IGrade {
    return _.find(this.grades, function(grade) {
      return percentage >= grade.minimumPercentage;
    });
  }

	/**
	 * => BAD
	 *		Checks if one grade is better than another
	 * => GOOD
	 * 		Used to compare two students grades
	 * 		It is used by our classroom organiser to put the students in the appropriate set.
	 *    It is also used to produce a scoreboard of the class scores
	 *    It can be used like so - new Grade(0.75).isBetterThan(new Grade(0.5)) // => true
	 * @param grade - The students grade you want to compare
	 * @returns boolean - true if the grade you are comparing is lower, false if the grade you are comparing is higher
	 */
	public isBetterThan(grade: IGrade): boolean {
    return this.percentage > grade.percentage;
  }
};
