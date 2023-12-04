import {VStack, ButtonGroup, Button, 
Heading, Text } from "@chakra-ui/react" ;
import { Form, Formik } from "formik";
import * as Yup from "yup" ;
import TextField from "./TextField"
import { useNavigate } from "react-router";
import { AccountContext } from "../AccountContext";
import { useContext } from "react" ;
import { useState } from "react";

const Login = () => {

    const {setUser} = useContext(AccountContext) ;
    const navigate = useNavigate();
    const [error, setError] = useState(null) ;

    return (
        <Formik
        initialValues = {{email: "", password: ""}}
        validationSchema = {Yup.object({
            email: Yup.string()
            .required("Email Required")
            .min(8,"Email is too short")
            .max(56,"Email is too long")
            .email("Must be a valid email"),
            password: Yup.string().required()
            .required("Password Required")
            .min(6,"Password is too short")
            .max(28,"Password is too long")
        })}
        onSubmit={(values, actions) => {
            values.email = values.email.toLowerCase() ;
            const vals = { ...values } ;
            actions.resetForm();
            fetch("http://localhost:4000/auth/login", {
              method: "POST",
              credentials: "include",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify(vals),
            })
            .catch(err => {
              console.log(err)
              return;
            })
            .then(res => {
              console.log(res)
              if (!res || !res.ok || res.status >= 400) {
                return; 
              }
              return res.json();
            })
            .then(data => {
              console.log(data)
              if (!data) return ;
                setUser({...data}) ;
              if (data.status){
                setError(data.status)
              }else if(data.loggedIn){
                navigate("/Dashboard") ;
              }
            });
          }}
        >
            {(formik) => (
                <VStack 
                as ={Form}
                w={{base: "90%", md: "500px"}} 
                m="auto" 
                justify="center" 
                h="100vh"
                spacing="1rem"
                >
                    <Heading>Login</Heading>

                    <Text as="p" color="red.500">
                      {error}
                    </Text>
        
                    <TextField 
                    name="email"
                    placeholder="Enter email"
                    autoComplete="off"
                    label="Email"
                    />
         
                    <TextField 
                    name="password"
                    placeholder="Enter password"
                    autoComplete="off"
                    type="password"
                    label="Password"
                    />
        
                    <ButtonGroup pt="1rem">

                        <Button colorScheme="teal" type="submit">
                            Login
                        </Button>

                        <Button colorScheme="teal" onClick={() => navigate("/register")}>
                            Create Account
                        </Button>

                    </ButtonGroup>
                </VStack> 
            )}
            </Formik>
    ) ;
} ;

export default Login