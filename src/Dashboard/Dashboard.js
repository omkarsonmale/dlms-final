import React from 'react'
import { Route, Routes } from 'react-router-dom';
import './Dashboard.css';

import Navbar from './Navbar'
import Development from './Development';
import CollegeStudy from './CollegeStudy';
import Blogs from './Blogs';

export default function Dashboard() {
    return (
        <div>
            <div className='dashboard'>
                        <Navbar />
                        
                        <Development />
            </div>
        </div>
    )
}
