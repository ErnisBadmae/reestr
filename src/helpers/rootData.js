export default () => {
  return async (dispatch) => {
    let res = await fetch('/table.json');
    let data = await res.json();
    // console.log('data', data)
    // console.log(dispatch)
    dispatch({ type: 'GET_DATA', payload: data });
  }

}
