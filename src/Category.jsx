import React from 'react'
import "/node_modules/bootstrap/dist/css/bootstrap-grid.css";
import "/node_modules/bootstrap/dist/css/bootstrap-grid.min.css";
import "/node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";


const Category = ({ filterItem, btn }) => {
    return (
        <>

            <div className='container tb col-sm-12 col-md-12 col-lg-2 col-xl-2 mx-auto' key={btn.key} >
                {
                    btn.map((elem,key) => {
                        return (
                            <>
                                <button  key={btn.key} className='btn btn-warning' onClick={() => filterItem(elem)}>{elem}</button><br />

                            </>)
                    })
                }
            </div>
        </>
    )
}

export default Category