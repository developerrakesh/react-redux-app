const increment = () => {
    return {
        type: 'INCREMENT',
        payload: 1
    }
}

const decrement = () => {
    return {
        type: 'DECREMENT',
        payload: 1
    }
}

const login = () => {
    return {
        type: 'LOG IN'
    }
}

const logout = () => {
    return {
        type: 'LOG OUT'
    }
}

export { increment, decrement, login, logout };