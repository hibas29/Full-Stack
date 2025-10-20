import UserContext from "react";
import UserContext from "../context/Usercontext";

function ViewDataForm() {

    const [username, password] = useContext(UserContext);

    return (
        <div className="container mt-5 ">
            <h2>View Data from Context</h2>
            <h1>Username:</h1>
            <h3>{username}</h3>
            <br />
            <h1>Password:</h1>
            <h3>{password}</h3>
        </div>
    )
};

export default ViewDataForm;