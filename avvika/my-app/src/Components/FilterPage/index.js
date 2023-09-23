import React from 'react';
import { useParams } from 'react-router-dom';
import './index.js'

const FilterPage = () => {
    const { value } = useParams();
    console.log(value)
    return (
        <h1>hhh</h1>
    )
}
export default FilterPage