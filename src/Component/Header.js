import React from 'react';
import {Link} from 'react-router-dom';
import Facebook from './Facebook';

export const Header = () => {
    return (
        <header>
            <div className="container">
                <div className="inner-content">
                    <div className="brand">
                        <Link to="/">YouthFlix</Link>
                    </div>

                    <ul className="nav-links">
                        <li>
                            <Link to="/">Watch List</Link>
                        </li>

                        <li>
                            <Link to="/watched">Watched</Link>
                        </li>

                        <li>
                            <Link to="/add" className="btn">
                                + Add
                            </Link>
                        </li>

                        <li>
                            <Link to="/facebook" className="btnFB">
                                <Facebook/>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </header>
    )
}
