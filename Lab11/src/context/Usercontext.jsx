import { createContext } from "react";

const UserContext = createContext({
    username: '',
    password: ''
})

export default UserContext;