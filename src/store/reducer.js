const initState = {
	status: 'idle'
}

const reducer = (state, action) => {
	// console.log("action= ", action)
	// console.log("pre state = ", state)

	switch (action.type) {
		case "finished":
			return {
				...state,
				status: 'finished',
				data: action.data.payload,
				category: action.data.category ? action.data.category : '',
				page: action.data.page ? action.data.page : 1
			}
		case "loading":
			return  {
				...state,
				status: 'loading'
			}
		default: 
			console.log(action.type, "action invalid")
			return state
	}

}
export {initState}
export default reducer