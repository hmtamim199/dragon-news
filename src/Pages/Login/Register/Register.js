import React, { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { AuthContext } from '../../../Context/AuthProvider';
import { toast } from 'react-hot-toast';


const Register = () => {
  const { createUser, updateProfileUser, verifyEmail } = useContext(AuthContext)

  const handleSubmit = event => {
    event.preventDefault()
    const form = event.target;
    const name = form.name.value;
    const photoURL = form.photoURL.value;
    const email = form.email.value;
    const password = form.password.value;
    console.log(name, photoURL, email, password)
    createUser(email, password)
      .then(result => {
        const user = result.user;
        console.log(user)
        form.reset()
        handleUpdateUserProfile(name, photoURL)
        handleEmailVerify();
        toast.success('please verify your email')
      })
      .catch(error => {
        console.error(error)
      })
  }

  const handleUpdateUserProfile = (name, photoURL) => {
    const profile = {
      displayName: name,
      photoURL: photoURL
    }
    updateProfileUser(profile)
      .then(() => { })
      .catch(error => {
        console.error(error)

      })

  }

  const handleEmailVerify = () => {
    verifyEmail()
      .then(() => { })
      .catch((error) => console.error(error))
  }

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Your Name</Form.Label>
        <Form.Control name='name' type="text" placeholder="your name" />

      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>PhotoURL</Form.Label>
        <Form.Control name='photoURL' type="text" placeholder="your photoURL " />

      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control name='email' type="email" placeholder="Enter email" />

      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control name='password' type="password" placeholder="Password" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">

      </Form.Group>
      <Button variant="primary" type="submit">
        Register
      </Button>
    </Form>
  );
};

export default Register;