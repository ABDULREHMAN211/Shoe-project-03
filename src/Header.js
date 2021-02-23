import React from 'react'
import { Link } from 'react-router-dom'

export const Header = () => {
    return (
        <nav>
            <Link to="Home">Home</Link>{" | "}
            <Link to="Products">Products</Link>
        </nav>

    )
}