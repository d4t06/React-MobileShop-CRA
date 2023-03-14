import { useLocation, Navigate, Outlet } from "react-router-dom"

import useAuth from "../hooks/useAuth"


function RequireAuth ({allowedRole}) {
    const [auth] = useAuth();
    const location = useLocation()


    console.log(" auth requireAuth = ", auth);
    console.log("is valid Role =", !!allowedRole?.find(role => auth?.role === role))
    return (
        !!allowedRole?.find(role => auth?.role === role)
        ? <Outlet/>
        : auth?.username
            ? <Navigate to="/unauthorized" state={{from: location}} replace/>
            : <Navigate to="/login" state={{from: location}} replace/>
       )
    
}

export default RequireAuth