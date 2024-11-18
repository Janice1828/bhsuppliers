import React from 'react'
import Sidebar from '../components/Sidebar'
import Header from '../components/Header'
import Footer from '../components/Footer'
const Brand = () => {
    return (
        <>
            <header
                className="navbar sticky-top d-flex d-md-none bg-custom-dark flex-md-nowrap p-0 shadow"
                data-bs-theme="dark"
            >
                <a
                    className="navbar-brand col-md-3 py-3 col-lg-2 me-0 px-3 fs-6 text-white"
                    href="#"
                >BH Suppliers
                </a>

                <ul className="navbar-nav flex-row d-md-none">
                    <li className="nav-item text-nowrap">
                        <button
                            className="nav-link px-3 text-white"
                            type="button"
                            data-bs-toggle="offcanvas"
                            data-bs-target="#sidebarMenu"
                            aria-controls="sidebarMenu"
                            aria-expanded="false"
                            aria-label="Toggle navigation"
                        >
                            <i className="fa-solid fa-list"></i>
                        </button>
                    </li>
                </ul>

                <div id="navbarSearch" className="navbar-search w-100 collapse">
                    <input
                        className="form-control w-100 rounded-0 border-0"
                        type="text"
                        placeholder="Search"
                        aria-label="Search"
                    />
                </div>
            </header>
            <div className="container-fluid px-0">
                <div className="row gx-0">
                    <Sidebar />
                    <main className="col-md-9 ms-sm-auto col-lg-10 waste-device-report-container"
                        style={{ background: "#f3f3f3" }}
                    >
                        <Header />
                        <div className="px-md-5 px-3">
                            <div className="mb-3 row">
                                <div className="col-12 col-sm-6">
                                    <a
                                        href="#" type='button' data-bs-toggle="modal" data-bs-target="#exampleModal"
                                        className="text-decoration-none d-flex gap-2 align-items-center">
                                        <div className="rounded-1 bg-custom-dark">
                                            <i
                                                className="fa-solid fa-plus d-flex justify-content-center align-items-center"
                                                style={{ color: "#fff", height: "40px", width: "40px", fontSize: "25px" }}></i>
                                        </div>
                                        <div>
                                            <h6
                                                className="mb-0 text-dark"
                                                style={{ fontWeight: "600", fontSize: "16px" }}
                                            >
                                                Brand
                                            </h6>
                                            <p className="mb-0"
                                                style={{ color: "#b9babf", fontSize: "14px" }}>
                                                Add Brand
                                            </p>
                                        </div>
                                    </a>
                                    {/* Modal Start */}
                                    <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                        <div className="modal-dialog">
                                            <div className="modal-content">
                                                <div className="modal-header">
                                                    <h1 className="modal-title fs-5" id="exampleModalLabel">Add New Brand</h1>
                                                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                                </div>
                                                <div className="modal-body">
                                                    <form>
                                                        <div className="mb-3">
                                                            <label for="message-text" className="col-form-label">Title</label>
                                                            <input type="text" className='form-control' />
                                                        </div>
                                                    </form>
                                                </div>
                                                <div class="modal-footer">
                                                    <button type="button" className="btn btn-secondary py-1 px-4" data-bs-dismiss="modal">Close</button>
                                                    <button type="button" className="btn btn-success py-1 px-4">Add</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* Modal End */}
                                </div>
                            </div>
                            <div
                                className="table-responsive bg-light p-2 mt-4 small category-tbl bg-light"
                            >
                                <table className="table table-striped-columns" id="myTable">
                                    <thead>
                                        <tr>
                                            <th className="py-2 bg-custom-dark text-light text-start">
                                                S.No.
                                            </th>
                                            <th className="py-2 bg-custom-dark text-light text-start">
                                                Title
                                            </th>

                                            <th className="py-2 bg-custom-dark text-light text-start">
                                                Action
                                            </th>


                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td className="text-start">1</td>
                                            <td className="text-start">Goldstar</td>
                                            <td>
                                                <div className="d-flex gap-3 align-items-center">
                                                    <i class="fa-regular fa-pen-to-square text-secondary fs-6"></i><i class="text-danger fs-6 fa-solid fa-trash"></i>
                                                </div>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        <div className="mt-3" style={{ width: "inherit !important" }}>
                            <Footer />
                        </div>
                    </main >
                </div >
            </div >
        </>
    )
}
export default Brand