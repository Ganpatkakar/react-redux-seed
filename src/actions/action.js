export const CommonAction = () => dispatch => {
    dispatch({
        type: 'Initial_state',
        payload: true
    })
}

export const TestAction = () => dispatch => {
    fetch('https://jsonplaceholder.typicode.com/todos/1')
        .then(response => response.json())
        .then(data => dispatch({
            type: 'test_state',
            payload: data
        }))
}