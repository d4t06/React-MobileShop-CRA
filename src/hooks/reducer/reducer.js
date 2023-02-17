// import * as productServices from '../../services/productServices'
import {ProductContext} from '../../App'

export const initState = {
	// data: [],
	status: 'idle'
}

const reducer = async (state, action) => {
	// console.log("action= ", action)
	console.log("pre state = ", state)

	let newState;
	switch (action.type) {
		case "finished":
			return {
				...state,
				status: 'finished',
				data: action.payload || []
			}
		case "loading":
			return  {
				...state,
				status: 'loading'
			}	
		default: 
			return state
	}

}

export default reducer