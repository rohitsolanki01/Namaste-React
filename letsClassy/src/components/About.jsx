import User from "./User";
import UserClass from "./UserClass";

const About = () => {
    return(
        <>
        <UserClass name="Rohit in the Class Component" age="20years from class" current="student from class" />
        <User name="Rohit in the Functional Component" age="20years" current="student" />
        </>
    );
}
export default About;