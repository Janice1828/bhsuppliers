import React from 'react'
import Sidebar from '../components/Sidebar'
import Header from '../components/Header'
import Adddata from '../components/Adddata'
import Datatable from '../components/Datatable'
import Footer from '../components/Footer'

const Dashboard = () => {
  return (
    <>
      <div
        className="dropdown position-fixed bottom-0 end-0 mb-3 me-3 bd-mode-toggle"
      >
        <button
          className="btn btn-bd-primary py-2 dropdown-toggle d-flex align-items-center"
          id="bd-theme"
          type="button"
          aria-expanded="false"
          data-bs-toggle="dropdown"
          aria-label="Toggle theme (light)"
        >
          <span className="visually-hidden" id="bd-theme-text">Toggle theme</span>
        </button >
        <ul
          className="dropdown-menu dropdown-menu-end shadow"
          aria-labelledby="bd-theme-text"
        >
          <li>
            <button
              type="button"
              className="dropdown-item d-flex align-items-center active"
              data-bs-theme-value="light"
              aria-pressed="true"
            ></button>
          </li>
          <li>
            <button
              type="button"
              className="dropdown-item d-flex align-items-center"
              data-bs-theme-value="dark"
              aria-pressed="false"
            ></button>
          </li>
          <li>
            <button
              type="button"
              className="dropdown-item d-flex align-items-center"
              data-bs-theme-value="auto"
              aria-pressed="false"
            >
              Auto
            </button>
          </li>
        </ul>
      </div>
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
              <Adddata />
              <Datatable />
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