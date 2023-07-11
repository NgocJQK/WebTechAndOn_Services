import java.util.Date;

/**
 *
 * A Java class modeling a Person
 */
public class Person {
	
	private String firstName;
	private String lastName;
	private Date birthday;
	
	public Person(String firstName, String lastName, Date birthday) {
		this.firstName = firstName;
		this.lastName = lastName;
		this.birthday = birthday;
	}
	
	/**
	 * @return Returns the birthday.
	 */
	public Date getBirthday() {
		return birthday;
	}
	/**
	 * @param birthday The birthday to set.
	 */
	public void setBirthday(Date birthday) {
		this.birthday = birthday;
	}
	/**
	 * @return Returns the firstName.
	 */
	public String getFirstName() {
		return firstName;
	}
	/**
	 * @param firstName The firstName to set.
	 */
	public void setFirstName(String firstName) {
		this.firstName = firstName;
	}
	/**
	 * @return Returns the lastName.
	 */
	public String getLastName() {
		return lastName;
	}
	/**
	 * @param lastName The lastName to set.
	 */
	public void setLastName(String lastName) {
		this.lastName = lastName;
	}
}
