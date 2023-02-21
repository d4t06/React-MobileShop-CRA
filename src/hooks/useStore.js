import {useContext} from 'react'
import Context from '../store/Context'

const useStore = () => {
	const [state, dispatch] = useContext(Context)
	return [state, dispatch];
}
 export default useStore
