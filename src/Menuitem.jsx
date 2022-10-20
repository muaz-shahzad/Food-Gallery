import React from 'react'
import "/node_modules/bootstrap/dist/css/bootstrap-grid.css";
import "/node_modules/bootstrap/dist/css/bootstrap-grid.min.css";
import "/node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";

const Menuitem = (props) => {
    return (
        <>
            <div className='container col-12 col-md-12 col-lg-10 col-xl-10 mx-auto mt-5'>
                <div className='row'>
                    {
                        props.items.map((elem) => {
                            const { id, img, price, name } = elem;
                            return (
                                <div className='item1 col-4 col-sm-4 col-md-4 col-lg-4 col-xl-4 my-3 ms-5 mx-auto' key={id} >
                                    <div className='row'>
                                        <div className="card">
                                            <div className="row no-gutters">
                                                <div className="col-md-4">
                                                    <img src={img} style={{height: "130px"}} className="card-img" alt="..." />
                                                </div>
                                                <div className="col-md-8" style={{marginTop: "-15px"}}>
                                                    <div className="card-body">
                                                        <h5 className="card-title">{name}</h5>
                                                        <p className="card-text">Rs: {price}</p>
                                                    </div>
                                                    <div style={{ textAlign: "end" }} className="mb-1">
                                                        <button className='btn btn-outline-success'>Order Now
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        {/* <div className='col-3 col-md-3 col-lg-3 col-xl-3 img-div' >
                                            <img src={img} alt="Pics" className='img-fluid' />
                                        </div>
                                        <div className='col-8 col-md-8 col-lg-8'>
                                            <div className='main-title pt-1 d-flex justify-content-between'>
                                                <h1>{name}</h1>
                                                <h2 style={{ fontSize: "17px" }}>Rs: {price}
                                                </h2>
                                            </div>
                                            <div className='menu-price-book'>
                                                <div className='price-book-divide'>
                                                    <button className='btn btn-outline-success'>Order Now
                                                    </button>
                                                    <input type="number" id="quantity" placeholder='Qty' name="quantity" min="1" max="10" />
                                                </div>
                                            </div>

                                        </div> */}
                                    </div>
                                </div>

                            )
                        })
                    }

                </div>

            </div>
            {/* <div className='container col-12 col-md-12 col-lg-4 col-xl-4' style={{border: "2px solid indigo"}}>
                <div className='row'>
                    <div class="card mb-3">
                        <div class="row no-gutters">
                            <div class="col-md-4">
                                <img src="..." class="card-img" alt="..." />
                            </div>
                            <div class="col-md-8">
                                <div class="card-body">
                                    <h5 class="card-title">Card title</h5>
                                    <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                    <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div> */}




        </>
    )
}

export default Menuitem