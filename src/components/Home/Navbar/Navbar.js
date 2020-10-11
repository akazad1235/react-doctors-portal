import React from 'react';

const Navbar = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light">
                <a className="navbar-brand" href="#">Navbar</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item active">
                            <a className="nav-link mr-4" href="#">Home <span className="sr-only">(current)</span></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link mr-4" href="#">About</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link mr-4" href="#">Digital Service</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link mr-4" href="#">Reviews</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link mr-4" href="#">Blog</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link mr-4" href="#">Contact Us</a>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;