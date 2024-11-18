import React from 'react'

const Adddata = () => {
    return (
        <div>
            <div className="">
                <div className="mb-3 row">
                    <div className="col-12 col-sm-6">
                        <a
                            href="#"
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
                                    Product
                                </h6>
                                <p className="mb-0"
                                    style={{ color: "#b9babf", fontSize: "14px" }}>
                                    Add Product
                                </p>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Adddata