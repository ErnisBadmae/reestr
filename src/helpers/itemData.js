export default (page_id) => {
  return async (dispatch) => {
    let res = await fetch('/table.json');
    let data = await res.json();
    // console.log('dispatch from itemData helpers', dispatch);
    dispatch({ type: 'GET_ITEM', payload: { data, page_id } });
  }

}
