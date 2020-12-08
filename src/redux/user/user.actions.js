import { ACTION } from './user.reducer';

export const setCurrentUser = user => ({
    type: ACTION.SET_CURRENT_USER,
    payload: user
})