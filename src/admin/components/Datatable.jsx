import React from 'react'

const Datatable = () => {
    return (
        <>
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
                                Brand
                            </th>
                            <th className="py-2 bg-custom-dark text-light text-start">
                                Action
                            </th>


                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="text-start">1</td>
                            <td className="text-start">Sports Shoes</td>
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
        </>
    )
}

export default Datatable