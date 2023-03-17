const initState = {
   filters: '',
   sort: ''
};

const reducer = (state, action) => {
   // console.log('reducer ', action.filters);

   switch (action.type) {
      case 'GET_ALL':
         return {
            ...state,
            status: action.status || 'error',
            // category: action.category || 'search',
            page: action.page || 1,
            data: action.payload,
            filters: action.filters || '',
            sort: action.sort || '',
         };
      default:
         console.log(action.type, 'action invalid');
         return state;
   }
};
export { initState };
export default reducer;
