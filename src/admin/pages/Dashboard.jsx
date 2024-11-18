import React from 'react'
import Sidebar from '../components/Sidebar'
import Header from '../components/Header'
import Footer from '../components/Footer'

const Dashboard = () => {

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
            <div>
              <div className="px-5 py-3">
                <h1>Welcome Admin!</h1>

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

export default Dashboard