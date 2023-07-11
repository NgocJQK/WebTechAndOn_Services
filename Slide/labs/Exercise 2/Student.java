import java.util.Date;

/**
 *
 * A Java class modeling a Student
 */
public class Student extends Person {
	private int studentId;
	private String program;
	private boolean isGraduated;
	
	public Student(String firstName, String lastName, Date birthday, int studentID) {
		super(firstName, lastName, birthday);
		this.isGraduated = false;
		this.studentId = studentId;
		this.program = null;
	}
	
	/**
	 * @return Returns the isGraduated.
	 */
	public boolean isGraduated() {
		return isGraduated;
	}
	/**
	 * @param isGraduated The isGraduated to set.
	 */
	public void setGraduated(boolean isGraduated) {
		this.isGraduated = isGraduated;
	}
	/**
	 * @return Returns the program.
	 */
	public String getProgram() {
		return program;
	}
	/**
	 * @param program The program to set.
	 */
	public void setProgram(String program) {
		this.program = program;
	}
	/**
	 * @return Returns the studentId.
	 */
	public int getStudentId() {
		return studentId;
	}
	/**
	 * @param studentId The studentId to set.
	 */
	public void setStudentId(int studentId) {
		this.studentId = studentId;
	}
}
