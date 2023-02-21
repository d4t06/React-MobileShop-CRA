const initState = {
	category: '',
	href: '',
	page: '',
}

const reducer = (state, action) => {
	console.log("action= ", action)
	// console.log("pre state = ", state)
	
	switch (action.type) {
		case "GET_ALL":
			return {
				...state,
				category: action.category ? action.category : 'mobile',
				page: action.page ? action.page : 1,
				data: action.payload,
				filters: action.filters ? action.filters : ''
			}
		case "GET_ONE":
			return  {
				...state,
				category: action.category ? action.category : 'mobile',
				href: action.href ? action.href : '/'
			}
		default: 
			console.log(action.type, "action invalid")
			return state
	}

}
export {initState}
export default reducer