import React from 'react'
import UserKit from '../data/userKit'
import { useHistory } from 'react-router-dom'
export default function ButtonDeleteCustomer(url) {
    const userKit = new UserKit()
    const id = url.id

    function deleteCustomer() {
        userKit.deleteCustomer(id)
        .then(() => history.goBack())
    }

    let history = useHistory();
    return (
        <>
            <button onClick={deleteCustomer}>Delete Customer</button>
        </>
    );
}
