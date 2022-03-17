import React from 'react'
import { BiSearch } from "react-icons/bi"
import "./style.scss";

interface Filters {
    items: Array<string>
}

function FilterItems(props: Filters) {
    return (
        <div style={{ padding: "10px" }}>
            <div className='filter-search' style={{ maxHeight: "120px", display: "flex", alignItems: "center", padding: "10px", border: "1px solid #A6A6A6", outline: "none", borderRadius: "5px" }}>
                <input placeholder='search' style={{ border: "none", outline: "none" }}></input>
                <BiSearch></BiSearch>
            </div>
            <div style={{ textAlign: "start" }}>
                {props.items.map((data) => {
                    return <p style={{fontSize:"16px",color:"#A6A6A6",cursor:"pointer"}}>{data}</p>
                })}
            </div>
        </div>
    )
}

export default FilterItems
