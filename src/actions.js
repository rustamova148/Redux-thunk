export const addData = () => {
    return async  (dispatch, getState) => {
    const response = await fetch("https://jsonplaceholder.typicode.com/todos");
    const data = await response.json();

    dispatch({
        type: "ADD_DATA",
        payload: data
    });
  };
};