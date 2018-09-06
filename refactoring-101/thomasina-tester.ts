import "jest";
import { Grade } from "./Grade";

describe("The Grade Module", () => {

	describe(".passingGradeLetters", () => {
		test("returns all passing grade letter", () => {
			expect(new Grade().passingGradeLetters()).toEqual(['A', 'B', 'C', 'D']);
		});
	});

	describe(".findGrade", () => {
		test("Throws an error if there is no percentage provided", () => {
			expect(new Grade().findGrade()).rejects.toThrowError();
		});
	});

	describe(".letterGrade", () => {
		test('returns correct letter for percentage', () => {
      const grade = new Grade(0.8);
      expect(grade.letterGrade()).to.equal('B');
    });

    test('returns A for 100 percent', () => {
      const grade = new Grade(1);
      expect(grade.letterGrade()).to.equal('A');
    });

    test('returns F for 0 percent', () => {
      const grade = new Grade(0);
      expect(grade.letterGrade()).to.equal('F');
    });
	});

	describe(".isPassing", () => {
		test("Returns true if a grade has passed", () => {
			const grade = new Grade(0.9);
			expect(grade.isPassing()).toBe(true);
		});

		test("Returns false if the grade does not pass", () => {
			const grade = new Grade(0.4);
			expect(grade.isPassing()).toBe(true);
		});
	});

	describe(".isBetterThan", () => {
		test('returns true if grade is better than comparison grade', () => {
      const grade1 = new Grade(0.6);
      const grade2 = new Grade(0.5);
      expect(grade1.isBetterThan( grade2 )).toBe(true);
    });

    test('returns false if grades are equal', () => {
      const grade1 = new Grade(0.5);
      const grade2 = new Grade(0.5);
      expect(grade1.isBetterThan( grade2 )).toBe(false);
    });
	});
});
