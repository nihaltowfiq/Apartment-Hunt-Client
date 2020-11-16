import React from 'react';
import { Button, Container, Row } from 'react-bootstrap';
import logo from '../../logos/Logo.png';
import googleIcon from '../../logos/google.png';
import './Login.css';
import { Link } from 'react-router-dom';
// import * as firebase from "firebase/app";
// import "firebase/auth";
import firebaseConfig from './firebase.config';

const Login = () => {

    // if (firebase.apps.length === 0) {
    //     firebase.initializeApp(firebaseConfig);
    // };
    // const handleGoogle = () => {
    //     const provider = new firebase.auth.GoogleAuthProvider();
    //     firebase.auth().signInWithPopup(provider)
    //         .then(result => {
    //             const { displayName, email, photoURL } = result.user;
    //             const signedInUser = { name: displayName, email, img: photoURL };
    //         })
    //         .catch(error => {
    //             const errorMessage = error.message;
    //             console.log(errorMessage);
    //         });
    // };

    return (
        <Container className="text-center">
            <Link to="/home"><img className="mt-5" style={{ height: '65px' }} src={logo} alt="" /></Link>
            <Row className="justify-content-md-center mt-3">
                <div className="login-card mt-5">
                    <h3>Login With</h3>
                    <Button variant="light"  ><img src={googleIcon} alt="" /> Continue with Google</Button>
                    <p>Don't have an account? <a href="https://accounts.google.com/signup?hl=en" target="blank">Create an account.</a></p>
                </div>
            </Row>
        </Container>
    );
};

export default Login;