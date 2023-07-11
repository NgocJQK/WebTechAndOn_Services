import java.util.ArrayList;
import java.util.Date;

/**
 *
 * A Java class modeling a Professor
 */
public class Professor extends Person {
	private ArrayList courseList;
	private boolean onSabbatical;
	
	public Professor(String firstName, String lastName, Date birthday) {
		super(firstName, lastName, birthday);
		this.courseList = new ArrayList();
		this.onSabbatical = false;	
	}
	
	/**
	 * @retrn Returns the courseList as a comma delimited
	 * list of course names.
	 */
	public String getCourseList() {
		String toReturn = "";
		for(int i=0;i<courseList.size(); i++) {
			toReturn += (String)courseList.get(i) + ",";
		}
		
		return toReturn.substring( 0, toReturn.length()-1 );
	}
	
	public void addCourse(String course) {
		courseList.add( course );
	}
	
	/**
	 * @return Returns the onSabbatical.
	 */
	public boolean isOnSabbatical() {
		return onSabbatical;
	}
	/**
	 * @param onSabbatical The onSabbatical to set.
	 */
	public void setOnSabbatical(boolean onSabbatical) {
		this.onSabbatical = onSabbatical;
	}
}
