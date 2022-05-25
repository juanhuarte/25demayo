// const initialState = {
//    hora: new Date().toLocaleTimeString(),
//    dia: new Date().toLocaleDateString(),
// }

const initialState = {
   personas: [],
}

const miReducer = (state = initialState, action) => {
   switch (action.type) {
      //   case 'ACTUALIZAR_HORA':
      //      return {
      //         ...state,
      //         hora: action.payload,
      //      }
      case 'FETCH_DATA':
         return {
            ...state,
            personas: action.payload,
         }
      case 'DELETE_PERSONA':
         return {
            ...state,
            personas: state.personas.filter((p) => p.nombre !== action.payload),
         }
      default:
         return state
   }
}

export default miReducer
