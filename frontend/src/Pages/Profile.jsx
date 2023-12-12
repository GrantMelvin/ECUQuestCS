import { AccountContext } from '../components/AccountContext';
import { useContext } from 'react';
import Sidebar from '../components/Navbar/Navbar';
import { HStack, VStack, Text, Button } from '@chakra-ui/react';
import { Formik, Form } from 'formik';
import * as Yup from "yup" ;
import { useState } from 'react';
import TextField from './Login/TextField';

function Profile() {
  const {user} = useContext(AccountContext) ;

  const [change, setChange] = useState(false) ;
  const [formToChange, setFormToChange] = useState("Initial") ;

  const [message, setMessage] = useState("") ;
  const [error, setError] = useState(null) ;
  

  const resetFirstName = ({...vals}) => {
    fetch("http://localhost:4000/auth/resetFirstName", {
    method: "POST",
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      firstName: vals.firstName,
      email: user.email
    }),
  }).catch(err => {
      console.log(1)
      return;
    })
    .then(res => {
      if (!res || !res.ok || res.status >= 400) {
        return;
      }
      return res.json();
    })
    .then(data => {
      if (!data){
        return ;
      }  
      setMessage(data)
      if (data.status){
        setError(data.status)
      }
    });
  }

  const resetLastName = ({...vals}) => {
  fetch("http://localhost:4000/auth/resetLastName", {
    method: "POST",
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      lastName: vals.lastName,
      email: user.email
    }),
  }).catch(err => {
      console.log(1)
      return;
    })
    .then(res => {
      if (!res || !res.ok || res.status >= 400) {
        return;
      }
      return res.json();
    })
    .then(data => {
      if (!data){
        return ;
      }  
      setMessage(data)
      if (data.status){
        setError(data.status)
      }
    });
  }

  const resetEmail = ({...vals}) => {
    fetch("http://localhost:4000/auth/resetEmail", {
    method: "POST",
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      newEmail: vals.email,
      email: user.email
    }),
  }).catch(err => {
      return;
    })
    .then(res => {
      if (!res || !res.ok || res.status >= 400) {
        return;
      }
      return res.json();
    })
    .then(data => {
      if (!data){
        return ;
      }  
      setMessage(data)
      if (data.status){
        setError(data.status)
      }
    });
  }

  const resetPassword = ({...vals}) => {
    fetch("http://localhost:4000/auth/resetPassword", {
    method: "POST",
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email: user.email,
      oldPass: vals.oldPass,
      newPass: vals.password
    }),
  }).catch(err => {
      return;
    })
    .then(res => {
      if (!res || !res.ok || res.status >= 400) {
        return;
      }
      return res.json();
    })
    .then(data => {
      if (!data){
        return ;
      }  
      setMessage(data)
      if (data.status){
        setError(data.status)
      }
    });
  }

  return(
    <Formik
    initialValues = {{firstName: '', lastName: '', email: '', password: '', oldPass: ''}}
    validationSchema = {Yup.object({
      firstName: Yup.string()
      .matches(/^[aA-zZ\s]+$/, "Please enter a valid name"),
      lastName: Yup.string()
      .matches(/^[aA-zZ\s]+$/, "Please enter a valid name"),
      email: Yup.string()
      .min(8, "Email is too short")
      .max(56, "Email is too long")
      .email("Must be a valid email"),
      newPass: Yup.string()
      .min(6,"Password is too short")
      .max(28,"Password is too long"),
      password: Yup.string()
      .min(6,"Password is too short")
      .max(28,"Password is too long")
    })}
        onSubmit={(values, actions) => {
          values.email = values.email.toLowerCase() ;
          const vals = {...values} ;
          actions.resetForm() ;
            switch(formToChange){
              case "firstName":
                resetFirstName(vals) ;
                break ;
              case "lastName": 
                resetLastName(vals);
                break ;
              case "email":
                resetEmail(vals) ;
                break ;
              case "password":
                resetPassword(vals) ; 
                break ;
              default:
                break ;
            }
          }}
        >

          {(formik) => (
           
            <VStack 
            w="100%" 
            spacing={100}>
            
            <HStack>{Sidebar()}</HStack>
       
            <VStack spacing={50}>
             <HStack spacing={30}>
       
             <VStack spacing={30}>
             <Text>
               First Name:
             </Text>
       
             <Text>
               Last Name:
             </Text>
       
             <Text>
               Email:
             </Text>
       
             </VStack>
       
             <VStack spacing={30}>
             <Text>
               {user.firstname}  
             </Text>
       
             <Text>
              {user.lastname}
             </Text>
       
             <Text>
               {user.email}
             </Text>
       
             </VStack>
       
             <VStack>
               <Button onClick={() => {
                setChange(true) ;
                setFormToChange("firstName")
               }
              }>Change
              </Button>

               <Button onClick={() => {
                setChange(true) ;
                setFormToChange("lastName")
               }
              }>Change
              </Button>

               <Button onClick={() => {
                setChange(true) ;
                setFormToChange("email")
               }
              }>Change</Button>

             </VStack>

             <VStack
             as={Form}
             opacity={change === true ? 1 : 0}
             pointerEvents={change === true ? 1 : 0}
             >
              <Text 
              as='p'
              color={"green.200"}>
              {message}
              <br/>
              {message === '' ? '' : 'Relog to see changes'}
              </Text>

              <Text 
              as="p" color="red.500">
                {error}
              </Text>

              <TextField
              name='oldPass'
              placeholder={"Enter old password"}
              autoComplete="off"
              opacity={formToChange === "password" ? 1 : 0}/>

              <TextField 
              name={formToChange}
              placeholder={"Enter new value"}
              autoComplete="off"
              />
              <Button type='submit'>Submit</Button>
            </VStack>
       
             </HStack>
             <Button onClick={() => {
                setChange(true) ;
                setFormToChange("password")
               }
              }>Change Password
              </Button>

            </VStack>
           </VStack>
          )}
    </Formik>
  ) ;
}

export default Profile ;