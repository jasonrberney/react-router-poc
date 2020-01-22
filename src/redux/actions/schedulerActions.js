export const setTest = test => ({
    type: 'SET_TEST',
    test
});

export function setTestThunk(test) {
    return async function (dispatch) {
        await dispatch(setTest(test));
    }
}
