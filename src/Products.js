import React from 'react'
import { Outlet} from 'react-router'
import { Link } from 'react-router-dom'

export const Products = () => {
    return (
        <div>
            <h4>Product page.</h4>
            <Outlet />
        </div>
    )
}
