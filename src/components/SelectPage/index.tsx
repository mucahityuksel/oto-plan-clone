import React from 'react'
import {Pagination} from "rsuite"
import "./style.scss"

function SelectPage() {
    const [activePage, setActivePage] = React.useState(1);
    return (
        <div className='page-picker'>
            <Pagination
        prev
        color='#EC710C'
        next
        size="md"
        total={1}
        limit={4}
        activePage={activePage}
        onChangePage={setActivePage}
      />
        </div>
    )
}

export default SelectPage
