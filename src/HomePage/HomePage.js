import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { userActions } from '../_actions';

function HomePage() {
    debugger;
    //const user = useSelector(state => state.authentication.customer);
    const userInfo = JSON.parse(localStorage.getItem("customerInfo"));
    const dispatch = useDispatch();
/* 
    useEffect(() => {
        dispatch(userActions.getAll());
    }, []);
 */
    function handleDeleteUser(id) {
        dispatch(userActions.delete(id));
    }

    return (
        <div className="col-lg-8 offset-lg-2">
            <h3> {userInfo.customerName + " " + userInfo.customerSurname}</h3>
            <p>
                <Link to="/login">Logout</Link>
            </p>
        </div>
    );
}

export { HomePage }