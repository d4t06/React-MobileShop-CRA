const initState = {};

const reducer = (state, action) => {
   console.log('reducer ', action);

   switch (action.type) {
      case 'loading':
         return {
            ...state,
            status: action.status || 'error',
            data: '',
         };
      case 'GET_ALL':
         return {
            ...state,
            status: action.status || 'error',
            category: action.category || 'search',
            page: action.page || 1,
            data: action.payload,
            filters: action.filters || '',
            sort: action.sort || '',
         };
      case 'GET_ONE':
         return {
            ...state,
            category: action.category ? action.category : 'dtdd',
            href: action.href ? action.href : '/',
         };
      default:
         console.log(action.type, 'action invalid');
         return state;
   }
};
export { initState };
export default reducer;
