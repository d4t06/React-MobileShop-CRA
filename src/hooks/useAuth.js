import { useContext } from "react";
import {AuthContext} from '../store/AuthContext'

function useAuth() {
    const {auth, setAuth}  = useContext(AuthContext)
    return {auth, setAuth}
}

export default useAuth
