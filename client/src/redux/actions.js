export const fetchData = () => {
   return async (dispatch) => {
      const res = await fetch('http://localhost:4000/api')
      const { response } = await res.json()
      dispatch({ type: 'FETCH_DATA', payload: response })
   }
}

export const borrarPersona = (nombre) => {
   return { type: 'DELETE_PERSONA', payload: nombre }
}
