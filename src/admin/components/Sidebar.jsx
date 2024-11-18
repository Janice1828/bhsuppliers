import React from 'react'

const Sidebar = () => {
    return (
        <>
            <div
                className="sidebar col-md-3 col-lg-2 p-0 bg-custom-dark text-light sidebar-h-100-vh"
            >
                <div
                    className="offcanvas-md offcanvas-end bg-custom-dark position-fixed"
                    //   style="
                    // height: 100%;
                    // overflow-y: auto !important;
                    // width: inherit !important;
                    // scrollbar-width: thin;
                    // "
                    tabindex="-1"
                    id="sidebarMenu"
                    aria-labelledby="sidebarMenuLabel">
                    <div className="offcanvas-header">
                        <h5
                            className="offcanvas-title text-center text-light"
                            id="sidebarMenuLabel"
                        >
                            BH Suppliers
                        </h5>
                        <button
                            type="button"
                            className="btn-close text-light"
                            data-bs-dismiss="offcanvas"
                            data-bs-target="#sidebarMenu"
                            aria-label="Close"
                        ></button>
                    </div>
                    <div
                        className="offcanvas-body d-md-flex flex-column p-0 pt-lg-3 overflow-y-auto"
                    >

                        <ul className='nav flex-column'>
                            <h6
                                class="px-3 sidebar-list-color sidebar-title-bg pt-2 mb-0"
                                style={{ fontWeight: "600" }}

                            >
                                Main
                            </h6>
                            <li className="nav-item">
                                <a
                                    className="nav-link d-flex align-items-center gap-2 text-light"
                                    aria-current="page"
                                    href="#"
                                >
                                    <i className="fa-solid fa-chart-simple sidebar-list-color"></i>
                                    <span className="sidebar-list-color"> Dashboard</span>
                                </a>
                            </li>
                            <h6
                                class="px-3 mt-2 sidebar-list-color sidebar-title-bg pt-2 mb-0"
                                style={{ fontWeight: "600" }}
                            >
                                Manage Users
                            </h6>
                            <li className="nav-item">
                                <a
                                    className="nav-link d-flex align-items-center gap-2 text-light"
                                    aria-current="page"
                                    href="#"
                                >
                                    <i class="fa-solid fa-user"></i>
                                    <span className="sidebar-list-color">Customers</span>
                                </a>
                            </li>
                            <h6
                                class="px-3 mt-2 sidebar-list-color sidebar-title-bg pt-2 mb-0"
                                style={{ fontWeight: "600" }}

                            >
                                Manage Products
                            </h6>
                            <li className="nav-item">
                                <a
                                    className="nav-link d-flex align-items-center gap-2 text-light"
                                    aria-current="page"
                                    href="#"
                                >
                                    <i class="fa-solid fa-box"></i>
                                    <span className="sidebar-list-color">Product</span>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a
                                    className="nav-link py-0 d-flex align-items-center gap-2 text-light"
                                    aria-current="page"
                                    href="#"
                                >
                                    <i class="fa-solid fa-list"></i>
                                    <span className="sidebar-list-color">Category</span>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a
                                    className="nav-link d-flex align-items-center gap-2 text-light"
                                    aria-current="page"
                                    href="#"
                                >
                                    <i class="fa-brands fa-bandcamp"></i>
                                    <span className="sidebar-list-color">Brand</span>
                                </a>
                            </li>
                            <h6
                                class="px-3 mt-2 sidebar-list-color sidebar-title-bg pt-2 mb-0"
                                style={{ fontWeight: "600" }}
                            >
                                Manage Orders
                            </h6>
                            <li className="nav-item">
                                <a
                                    className="nav-link d-flex align-items-center gap-2 text-light"
                                    aria-current="page"
                                    href="#"
                                >
                                    <i class="fa-solid fa-cart-shopping"></i>
                                    <span className="sidebar-list-color">Orders</span>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a
                                    className="nav-link py-0 d-flex align-items-center gap-2 text-light"
                                    aria-current="page"
                                    href="#"
                                >
                                    <i class="fa-solid fa-circle-xmark"></i>
                                    <span className="sidebar-list-color">Cancelled Orders</span>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Sidebar