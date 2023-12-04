const Yup = require('yup') ;

const formSchema = Yup.object({
    email: Yup.string()
        .required("Email required")
        .min(8, "Email is too short")
        .max(56, "Email is too long")
        .email("Must be a valid email"),
    password: Yup.string()
        .required("Password required")
        .min(6,"Password is too short")
        .max(28,"Password is too long"),
}) ;

const validateForm = (req, res) => {
    const formData = req.body ;
    
    formSchema
    .validate(formData)
    .catch(err => {
        res.status(422).send() ;
        console.log(err.errors) ; 
    }) ;
}

module.exports = validateForm ;