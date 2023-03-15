import request from "../utils/request"
import useAuth from "./useAuth"

const useRefreshToken = () => {
    const {setAuth} = useAuth()

    const refresh = async () => {
        try {
            const response = await request.get("http://localhost:3000/api/refresh")
    
            setAuth(prev => {
                const newToken = response.data.token
                const role_code = response.data.role_code
                return {...prev, token: newToken, role_code}
            })
            return response.data.token
        } catch (error) {
            console.log({message: error})
        }
    }
    return refresh
}

export default useRefreshToken