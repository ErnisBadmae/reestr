export default (page_id) => {
  return async (dispatch) => {
    let res = await fetch('/table.json');
    let data = await res.json();
    // console.log('data', data)
    // console.log(dispatch)
    dispatch({ type: 'GET_ITEM', payload: { data, page_id } });
  }

}
