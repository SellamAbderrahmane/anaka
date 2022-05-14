import React from "react"
// import { Link } from "react-router-dom"
import { useDispatch } from "react-redux"
import { Form, Input, Button } from "antd"
import { useAuth } from ".."

function SignIn(props: any) {
  const dispatch = useDispatch()
  const auth = useAuth()

  const loginHandler = (values: any) => {
    const { username, password } = values

    if (username && password) {
      dispatch(auth.login(username, password))
    }
  }

  return (
    <>
      <h1 className='primary-color'>Log In</h1>
      <div className='mt-10'>
        <Form name='basic' layout='vertical' onFinish={loginHandler}>
          <Form.Item
            label='Username'
            name='username'
            rules={[{ required: true, message: "Please input your username!" }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label='Password'
            name='password'
            rules={[{ required: true, message: "Please input your password!" }]}
          >
            <Input.Password />
          </Form.Item>
          <Form.Item>
            <Button
              type='primary'
              htmlType='submit'
              size='large'
              block={true}
              loading={props.loading}
            >
              Login
            </Button>
          </Form.Item>
        </Form>
      </div>
    </>
  )
}

export default SignIn
