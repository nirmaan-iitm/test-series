export const createQues = (test) => {
    return (dispatch, getState, {getFirestore}) => {
        const firestore = getFirestore();
        const testid = test.testid;
        const num = Math.random().toString(36).slice(2); 
        const test_ans = testid.concat("_ans");
        firestore.collection(testid).add({
            quesid: num,
            ques: test.question,
            opt1: test.opt1,
            opt2: test.opt2,
            opt3: test.opt3,
            opt4: test.opt4,
            createdAt: new Date()
        }).then(() => {
            console.log("no error")
            dispatch({type: 'CREATE_TEST_SUCCESS'});
        }).catch(err => {
            console.log("error")
            dispatch({ type : 'CREATE_TEST_ERROR'}, err);
        });
        firestore.collection(test_ans).add({
            quesid: num,
            ans: test.ans
        }).then(() => {
            console.log("no error")
            dispatch({type: 'SUBMIT_TEST_SUCCESS'});
        }).catch(err => {
            console.log("error")
            dispatch({ type : 'SUBMIT_TEST_ERROR'}, err);
        });
    }
};

export const submitQuiz = (test) => {
    return (dispatch, getState, {getFirestore}) => {
        const firestore = getFirestore();
        console.log(test)
        const testid = test.testid;
        const authid = test.authid
        const ans_testid = testid.concat("_sub")
        firestore.collection(ans_testid).doc(authid).set({
            ...test.ans
        }).then(() => {
            console.log("no error")
            dispatch({type: 'CREATE_TEST_SUCCESS'});
        }).catch(err => {
            console.log("error")
            dispatch({ type : 'CREATE_PROJECT_ERROR'}, err);
        });
    }
};