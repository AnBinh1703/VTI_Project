import React, { useContext, useState } from 'react'
import { Button, Modal, Input } from 'antd';
import '../../styles/TopNavigation.css'
import { AppContext } from '../../context/AppProvider';
import axios from 'axios';

export const FormLogin = () => {
    const {setIsModalOpen} = useContext(AppContext)
    const {isStatusLogin, setIsStatusLogin} = useContext(AppContext)
    const [formData, setFormData] = useState({
        username:'',
        password:'',
    })

    const handleInputChange = (e) => {
        const {name, value} = e.target;
        setFormData(
            {
                ...formData,
                [name]:value
            }
        )
    }

    const handleBtnLogin = async(e) => {
        try{
            console.log(formData);
            const response = await axios.post("http://localhost:8080/api/v1/auth/login", formData)
            setIsModalOpen(false);
            console.log(response.data);
            const arr = response.data.split('/');
            const userId = arr[0];
            const role = arr[1];
            const username = arr[2]
            const token = arr[3];
            localStorage.setItem('userId', userId);
            localStorage.setItem('role', role);
            localStorage.setItem('username', username);
            localStorage.setItem('token',token);
            
        }catch(err){
            console.log(err);
        }
    }

    return (
        <div>
            <div className='modal-login'>
                <div className='modal-login-left'>
                    <div className='modal-login-image'>
                        <img className='image-logo-login' src="https://ipos.vn/wp-content/uploads/2022/08/quan-cafe-lam-viec-23.png" alt="" />
                    </div>
                </div>
                <div className='modal-login-right'>
                    <h1 className='login-title'>Login</h1>
                    <div className='form-login'>
                        <label htmlFor=''>Username</label>
                        <Input
                            name='username' // Đặt đúng name
                            placeholder='Username'
                            className='login-username'
                            value={formData.username}
                            onChange={handleInputChange}
                        />
                        <label htmlFor=''>Password</label>
                        <Input
                            name='password' // Đặt đúng name
                            placeholder='Password'
                            className='login-password'
                            value={formData.password}
                            onChange={handleInputChange}
                        />
                    </div>
                    <Button className='btn-login' onClick={handleBtnLogin}>
                        Đăng nhập
                    </Button>
                    <div className='btn-sub-login'>
                        <p className='btn-forgot-password' onClick={() => setIsStatusLogin("form-forgot-password")}>Fortgot Username/ Password</p>
                        {
                            isStatusLogin !== "form-create-account" ? (
                                <p className='btn-create-account' onClick={() => setIsStatusLogin("form-create-account")}>Create your account</p>
                            ) :
                                <p className='btn-create-account' onClick={() => setIsStatusLogin("form-login")}>Already have an account</p>
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}
