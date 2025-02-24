import React, { useContext, useEffect } from 'react'
import { MobileOutlined, ClockCircleOutlined, DesktopOutlined, CrownOutlined, AppleOutlined, CustomerServiceOutlined, LaptopOutlined, FundProjectionScreenOutlined, TabletOutlined, SolutionOutlined, UsbOutlined } from '@ant-design/icons'
import '../../styles/Navbar.css';
import { getAllCategory } from '../features/recallApiLoading';
import { useSelector, useDispatch } from "react-redux";
import { Link } from 'react-router-dom';
import { AppContext } from '../../context/AppProvider';
export const Navbar = () => {
    const iconArray = [
        <ClockCircleOutlined />, 
        <LaptopOutlined/>,      
        <MobileOutlined />,
        <DesktopOutlined />,
        <AppleOutlined />,
        <CustomerServiceOutlined />,
        <CrownOutlined />,
        <SolutionOutlined />,
        // Add more icons as needed
    ];
    const dispatch = useDispatch();
    const responseCategoryApi = useSelector(state => state.apiSave?.responApiCategory);
    useEffect(() => {
        // Dispatch the action to fetch brand data when the component mounts
        dispatch(getAllCategory());
    }, [dispatch]);

    // Log the data when it changes
    useEffect(() => {
        if (responseCategoryApi) {
            // console.log("Here", responseCategoryApi);
        }
    }, [responseCategoryApi]);

    return (
        <ul className='navbar-container'>
            {responseCategoryApi && responseCategoryApi.content.map((category, index) => (
                <Link className='cmm' key={index} to={"/productCategory"} onClick={() => localStorage.setItem('categoryName', category.name)}>
                    <li className='navbar-item'>
                        {React.cloneElement(iconArray[index], { className: 'navbar-item-icon' })}
                        <span className='navbar-item-text' style={{ textTransform: 'uppercase' }}>{category.name}</span>
                    </li>
                </Link>
            ))
            }
            <Link to={"/productCategory"} >
                <li className='navbar-item'>
                    <CustomerServiceOutlined className='navbar-item-icon' />
                    <span className='navbar-item-text'>DỊCH VỤ</span>
                </li>
            </Link>
            <Link to={"/productCategory"}>
                <li className='navbar-item'>
                    <CrownOutlined className='navbar-item-icon' />
                    <span className='navbar-item-text'>ƯU ĐÃI</span>
                </li>
            </Link>
            <Link to={"/productCategory"}>
                <li className='navbar-item'>
                    <SolutionOutlined className='navbar-item-icon' />
                    <span className='navbar-item-text'>TIN HOT</span>
                </li>
            </Link>
        </ul >
    )
}
