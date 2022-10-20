import React from 'react'
import "/node_modules/bootstrap/dist/css/bootstrap-grid.css";
import "/node_modules/bootstrap/dist/css/bootstrap-grid.min.css";
import "/node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import Fooddata from './Fooddata';
import { useState } from 'react';
import Menuitem from './Menuitem';
import Category from './Category';

const newitems =  [...new Set(Fooddata.map((elem,key)=>{return elem.category})),"All"]


const FoodGallery = () => {
    const [items, setitems] = useState(Fooddata)
    const [btn, setbtn] = useState(newitems)

    const filterItem = (cateitem) => {
        if(cateitem === "All")
        {
            console.log("All")
            return  setitems(Fooddata);
            
        }else
        {
            const updateitem = Fooddata.filter((currelem) => {
                return currelem.category === cateitem;
            })
            setitems(updateitem)

        }
       
    }
    return (
        <>
            <h1 className='mt-5 text-center main-heading'>Order Your Favourite Dish</h1>
            <hr />
            <div className='container-fluid'>
                <div className='row'>
                   <Category filterItem={filterItem}
                     btn={btn}/>
                    <Menuitem items={items}/>

                </div>
            </div>
        </>
    )
}

export default FoodGallery