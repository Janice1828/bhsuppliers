import React from 'react'

const Header = () => {
    return (
        <div>
            <div
                className="d-flex bg-light px-md-5 justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-3 mb-4 border-bottom px-3"
            >
                <div></div>
                <div className="dropdown">
                    <button
                        className="border-0 bg-transparent dropdown-toggle"
                        type="button"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                    >
                        <i className="fa-regular fa-user"></i>
                    </button>
                    <ul className="dropdown-menu">
                        <li>
                            <button
                                className="dropdown-item d-flex gap-2 align-items-center"
                                type="button"
                            >
                                <span>Profile</span>
                                <i
                                    className="fa-solid fa-user text-dark"
                                    style={{ color: "#1a2035" }}
                                ></i>
                            </button>
                        </li>
                        <li>
                            <button
                                className="dropdown-item d-flex gap-2 align-items-center"
                                type="button"
                            >
                                <span> Forgot Password? </span>
                                <i className="fa-solid fa-key text-secondary"></i>
                            </button>
                        </li>
                        <li>
                            <button
                                className="dropdown-item d-flex gap-2 align-items-center"
                                type="button"
                            >
                                <span> Log Out </span>
                                <i className="fa-solid fa-right-from-bracket text-danger"></i>
                            </button>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Header