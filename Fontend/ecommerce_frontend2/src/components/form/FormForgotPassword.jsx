import React, { useContext, useState } from 'react';
import { Alert, Button, Input,Spin  } from 'antd';
import '../../styles/TopNavigation.css';
import { AppContext } from '../../context/AppProvider';
import instance from '../../api/api';

export const FormForgotPassword = () => {
    const { isStatusLogin, setIsStatusLogin } = useContext(AppContext);
    const [loading, setLoading] = useState(false);
    const [email, setEmail] = useState('');

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };
    const { setIsModalOpen } = useContext(AppContext);
    const handleForgotPassword = () => {
        setLoading(true);
        instance.post("/forgot_password", email, { timeout: 5000 })
            .then(res => {
                alert(res.data);
                setIsModalOpen(false);
                setEmail('');
            })
            .catch(err => {
                console.log(err);
            });
    };

    return (
        <div className='modal-login'>
            <div className='modal-login-left'>
                <div className='modal-login-image'>
                    <img className='image-logo-login' src="https://ipos.vn/wp-content/uploads/2022/08/quan-cafe-lam-viec-23.png" alt="" />
                </div>
            </div>
            <div className='modal-login-right'>
                <h1 className='forgot-password-title'>Forgot password</h1>
                <div className='form-register'>
                    <span className='email-register'>Email: </span>
                    <Input
                        placeholder='Please enter your email'
                        className='forgot-account'
                        value={email}
                        onChange={handleEmailChange}
                    />
                </div>
                <Button className='btn-login' onClick={handleForgotPassword}>
                    {loading ? (
                        <Spin />
                    ) : (
                        'Quên mật khẩu'
                    )}
                </Button>
                <div className='btn-sub-login btn-sub-login-2'>
                    <p className='btn-forgot-password' onClick={() => setIsStatusLogin("form-forgot-password")}>
                        Forgot Username/ Password
                    </p>
                    {isStatusLogin !== "form-create-account" ? (
                        <p className='btn-create-account' onClick={() => setIsStatusLogin("form-create-account")}>
                            Create your account
                        </p>
                    ) : (
                        <p className='btn-create-account' onClick={() => setIsStatusLogin("form-login")}>
                            Already have an account
                        </p>
                    )}
                </div>
            </div>
        </div>
    );
};
