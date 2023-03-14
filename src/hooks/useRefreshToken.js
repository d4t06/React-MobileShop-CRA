import request from "../utils/request"
import useAuth from "./useAuth"

const useRefreshToken = () => {
    const {setAuth} = useAuth()

    const refresh = async () => {
        const response = await request.get("/refresh", {
            withCredentials: true
        })
        console.log(response)
        // setAuth(prev => {
            // const token = response
            
        // })
        return response
    }
    return refresh
}

export default useRefreshToken