import React from 'react'
import { Link, NavLink } from 'react-router-dom'

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
                                <NavLink
                                    className={({ isActive }) => (isActive ? 'nav-link d-flex align-items-center gap-2 text-dark' : 'nav-link d-flex align-items-center gap-2 text-light')}
                                    aria-current="page"
                                    to="/admin/dashboard"
                                >
                                    <i className="fa-solid fa-chart-simple sidebar-list-color"></i>
                                    <span className="sidebar-list-color"> Dashboard</span>
                                </NavLink>
                            </li>
                            <h6
                                class="px-3 mt-2 sidebar-list-color sidebar-title-bg pt-2 mb-0"
                                style={{ fontWeight: "600" }}
                            >
                                Manage Users
                            </h6>
                            <li className="nav-item">
                                <NavLink
                                    className={({ isActive }) => (isActive ? 'nav-link d-flex align-items-center gap-2 text-dark' : 'nav-link d-flex align-items-center gap-2 text-light')}
                                    aria-current="page"
                                    to="/admin/customers"
                                >
                                    <i class="fa-solid fa-user"></i>
                                    <span className="sidebar-list-color">Customers</span>
                                </NavLink>
                            </li>
                            <h6
                                class="px-3 mt-2 sidebar-list-color sidebar-title-bg pt-2 mb-0"
                                style={{ fontWeight: "600" }}

                            >
                                Manage Products
                            </h6>
                            <li className="nav-item">
                                <NavLink
                                    className={({ isActive }) => (isActive ? 'nav-link d-flex align-items-center gap-2 text-dark' : 'nav-link d-flex  align-items-center gap-2 text-light')}
                                    aria-current="page"
                                    to="/admin/product"
                                >
                                    <i class="fa-solid fa-box"></i>
                                    <span className="sidebar-list-color">Product</span>
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink
                                    className={({ isActive }) => (isActive ? 'nav-link d-flex align-items-center gap-2 py-0 text-dark' : 'nav-link d-flex py-0 align-items-center gap-2 text-light')}
                                    aria-current="page"
                                    to="/admin/category"
                                >
                                    <i class="fa-solid fa-list"></i>
                                    <span className="sidebar-list-color">Category</span>
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink
                                    className={({ isActive }) => (isActive ? 'nav-link d-flex align-items-center gap-2 text-dark' : 'nav-link d-flex align-items-center gap-2 text-light')}
                                    aria-current="page"
                                    to="/admin/brand"
                                >
                                    <i class="fa-brands fa-bandcamp"></i>
                                    <span className="sidebar-list-color">Brand</span>
                                </NavLink>
                            </li>
                            <h6
                                class="px-3 mt-2 sidebar-list-color sidebar-title-bg pt-2 mb-0"
                                style={{ fontWeight: "600" }}
                            >
                                Manage Orders
                            </h6>
                            <li className="nav-item">
                                <NavLink
                                    className={({ isActive }) => (isActive ? 'nav-link d-flex align-items-center gap-2 text-dark' : 'nav-link d-flex align-items-center gap-2 text-light')}
                                    aria-current="page"
                                    to="/admin/orders"
                                >
                                    <i class="fa-solid fa-cart-shopping"></i>
                                    <span className="sidebar-list-color">Orders</span>
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink
                                    className={({ isActive }) => (isActive ? 'nav-link d-flex align-items-center gap-2 text-dark pt-0' : 'nav-link d-flex align-items-center gap-2 text-light pt-0')}
                                    aria-current="page"
                                    to="/admin/cancel-order"
                                >
                                    <i class="fa-solid fa-circle-xmark"></i>
                                    <span className="sidebar-list-color">Cancelled Orders</span>
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Sidebar