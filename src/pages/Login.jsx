import React from 'react'
import Form from '../components/Form'
import Input from '../components/Input'
import Button from '../components/Button'
import { Link } from 'react-router-dom'

const Login = () => {
  return (
   <div className='w-screen h-screen flex flex-col justify-center items-center'>
    <h2 className='text-3xl font-bold text-teal-950'>Login</h2>
    <p className='text-sm mb-3'>Welcome back to MLab</p>
     <Form>
      <Input placeholder={"Email"} type={"email"} />
      <Input placeholder={"Password"} type={"password"}/>
      {/* <Input /> */}
      <Button />
    </Form>
    <Link to='/register'>Don't have an account? Register</Link>
   </div>
  )
}

export default Login