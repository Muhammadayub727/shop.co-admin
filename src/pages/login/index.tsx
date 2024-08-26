// import React from 'react';
import { Button, Form, Input } from 'antd';
import './style.scss';
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';
import SignIn from '../../assets/sign-in.svg';

function Login() {
  const navigate = useNavigate();

  async function handleSubmit(value: any) {
    try {
      // Log the submitted form values (this also makes sure 'value' is used)
      console.log('Submitted values:', value);

      // Simulate an API call using the submitted values
      const response = { status: 200, data: { payload: { token: 'fake-token' } } };
      if (response.status === 200) {
        localStorage.setItem('access_token', response?.data?.payload?.token);
        navigate('/dashboard');
      } else {
        alert('Invalid credentials');
      }
    } catch (error) {
      alert('An error occurred. Please try again.');
    }
  }

  return (
    <div className='login-container'>
      <div className='login-box'>
        <div className='illustration'>
          <img src={SignIn} alt='Login Illustration' />
        </div>
        <div className='login-form'>
          <h1 style={{ marginLeft: 50 }}>Working <span>Sign In</span></h1>
          <Form onFinish={handleSubmit}>
            <Form.Item
              name='username'
              rules={[
                {
                  required: true,
                  message: 'Please input your username!',
                },
              ]}
              hasFeedback
            >
              <Input
                prefix={<UserOutlined />}
                placeholder='Enter your username'
              />
            </Form.Item>

            <Form.Item
              hasFeedback
              name='password'
              rules={[
                {
                  required: true,
                  message: 'Please input your password!',
                },
              ]}
            >
              <Input.Password
                prefix={<LockOutlined />}
                placeholder='********'
              />
            </Form.Item>
            <Button type='primary' htmlType='submit'>
              Sign In
            </Button>
          </Form>
          <p className='signup-link'>
            Don't have an account? <a href='/sign-up'>Sign Up</a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;
