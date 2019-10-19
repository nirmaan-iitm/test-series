const initState = {}

const testReducer = (state = initState, action) => {
    switch (action.type) {
        case 'CREATE_TEST_SUCCESS':
            console.log('create test success');
            return state;
        case 'CREATE_TEST_ERROR':
            console.log('create test error');
            return state;
        case 'SUBMIT_TEST_SUCCESS':
            console.log('submit test success');
            return state;
        case 'SUBMIT_TEST_ERROR':
            console.log('submit test error');
            return state;
        default:
            return state;
    }
};

export default testReducer;