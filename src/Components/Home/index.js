import React from 'react';
import {Link} from "react-router-dom";


const Home = () => {

    return (
        <div className=' mt-5'>
            <div className='row main g-3 sign-box'>
                <div className='col justify-content-center align-items-center '>
                    <div className="box me-3 mt-3">
                        <label htmlFor="inputLogin" className="form-label" placeholder='E-mail...'>Login:</label>
                        <input type="email" className="form-control" id="inputLogin"/>
                    </div>
                    <div className="box  mt-3">
                        <label htmlFor="inputPassword4" className="form-label"
                               placeholder='Password...'>Password:</label>
                        <input type="password" className="form-control" id="inputPassword4"/>
                    </div>
                </div>
                <Link to='/' >Sign in</Link>
            </div>
            <div>
            </div>
        </div>
    );
};

export default Home;