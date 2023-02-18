import Context from './Context.js'
import {useReducer} from 'react'
import reducer, {initState} from './reducer.js'

function Provider ({children}) {

	// const asycnDispatch = async (params) => {
	// 	//  dispatch({type: 'loading'});
	// 	const data = await productServices.getProducts(params);
	// 	console.log("data = ", data)
	// 	 dispatch({type:"finished", payload: data.data})
  
	//  }

	const [state, dispatch] = useReducer(reducer,initState)

	return (
		<Context.Provider value={[state, dispatch]}>
			{children}
		</Context.Provider>
		)

}


export default Provider