import React from 'react'
import { useHistory } from 'react-router-dom';

export default function ButtonBack() {
    let history = useHistory();
    return (
        <>
            <button onClick={() => history.goBack()}>Back</button>
        </>
    );
};
