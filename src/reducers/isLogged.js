const isLogged = (state = false, action) => {
    action.type === 'LOG IN' ? state = true : state = false;
    return state;
}

export default isLogged; 