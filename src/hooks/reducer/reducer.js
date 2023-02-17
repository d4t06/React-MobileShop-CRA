import * as productServices from '../../services/productServices'

export const initState = {
	data: [],
	page: 0,
	category: '',
	filters: {}
}

const reducer = async (state, action) => {
	// console.log("action= ", action)
	switch (action.type) {
		case "GET_ALL":
			// const response = productServices.getProducts(action.payload)
			return {
				...state,
				data: action.payload
			}			 
		default: throw new Error('action not found!');
		}
}

export default reducer