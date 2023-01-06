import { ArrowBackIcon } from "@chakra-ui/icons";
import { Button, ButtonGroup, Heading, VStack, Text } from "@chakra-ui/react";
import { Form, Formik } from "formik";
import { useNavigate } from "react-router";
import * as Yup from "yup";
import TextField from "./TextField";
import { AccountContext } from "../AccountContext";
import { useContext } from "react" ;
import { useState } from "react";

const SignUp = () => {

  const {setUser} = useContext(AccountContext) ;
  const navigate = useNavigate();
  const [error, setError] = useState(null) ;

  return (
    <Formik
        initialValues = {{firstname: "", lastname: "", email: "", password: ""}}
        validationSchema = {Yup.object({
            firstname: Yup.string()
            .required("First name required"),
            lastname: Yup.string()
            .required("First name required"),
            email: Yup.string()
            .required("Email Required")
            .min(8,"Email is too short")
            .max(56,"Email is too long")
            .email("Must be a valid email"),
            password: Yup.string().required()
            .required("Password Required")
            .min(6,"Password is too short")
            .max(28,"Password is too long"),
        })}
        onSubmit={(values, actions) => {
          values.email = values.email.toLowerCase() ;
          const vals = { ...values };
          vals.email.toLowerCase() ;
          actions.resetForm();
          fetch("http://localhost:4000/auth/register", {
            method: "POST",
            credentials: "include",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(vals),
          })
            .catch(err => {
              return;
            })
            .then(res => {
              if (!res || !res.ok || res.status >= 400) {
                return;
              }
              return res.json();
            })
            .then(data => {
              if (!data) return ;
              setUser({...data}) ;
              if (data.status){
                setError(data.status)
              }else if(data.loggedIn){
                navigate("/Login") ;
              }
            });
        }}
        >
          {(formik) => (
      <VStack
        as={Form}
        w={{ base: "90%", md: "500px" }}
        m="auto"
        justify="center"
        h="100vh"
        spacing="1rem"
      >
        <Heading>Sign Up</Heading>

        <Text as="p" color="red.500">
          {error}
        </Text>

        <TextField
          name="firstname"
          placeholder="Enter first name"
          autoComplete="off"
          label="First Name"
        />

        <TextField
          name="lastname"
          placeholder="Enter last name"
          autoComplete="off"
          label="Last Name"
        />

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
          label="Password"
        />

        <ButtonGroup pt="1rem">
          <Button colorScheme="teal" type="submit">
            Create Account
          </Button>
          <Button onClick={() => navigate("/")} leftIcon={<ArrowBackIcon />}>
            Back
          </Button>
        </ButtonGroup>
      </VStack>
      )}
    </Formik>
  );
};

export default SignUp ; 