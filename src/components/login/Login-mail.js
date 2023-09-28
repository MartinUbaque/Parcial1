import { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import {Form, Alert} from 'react-bootstrap';
import { Link } from 'react-router-dom';
function LoginMail() {

  const [formValues, setFormValues] = useState({email:"",password:""})
  const [validationStates, setValidationState] = useState({emailState:false,paswordState:false})
  const [submited, setSubmited] = useState(false)



  const handleEmailChange = ((e) => {
    setFormValues({...formValues, email: e.target.value})
    validateMail();
    });

    const handlePasswordChange = ((e) => {
        setFormValues({...formValues, password: e.target.value})
        validatePassword();
        });

    const clickSubmit1 = (() => {

        validateMail();
        //Call fetch
        var alertMessage = JSON.stringify(formValues);

        setSubmited(true);

        })

        const clickSubmit2 = (() => {

            //Call fetch
            var alertMessage = JSON.stringify(formValues)
            console.log(alertMessage); 
            })
    



  const validateMail= (()=>{

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if(emailRegex.test(formValues.email)){
    setValidationState({...validationStates, emailState:true})
  }
  else{
    setValidationState({...validationStates, emailState:false})
  }

  })

  
  const validatePassword= (()=>{

    if(formValues.password.length>5){
      setValidationState({...validationStates, paswordState:true})
    }
    else{
      setValidationState({...validationStates, paswordState:false})
    }


  })



  const renderMailMessage = (()=>{
    if (!validationStates.emailState){
      return "Your Email should follow an stablished format";
    }
    else {
      return "";
    }

  })

  

      

  return (
<div>
<h1>{submited ? formValues.email : 'Acceder'}</h1>
<h3>{submited ? "": 'Accede a tu cuenta UniAlpes'}</h3>
<Form>
{!submited &&
<Form.Group className="mb-6" controlId="formBasicEmail">

<Form.Control type="email" placeholder="Correo electrónico"
onChange={handleEmailChange} value={formValues.email}/>
{!validationStates.emailState && <Alert variant="danger"><Form.Text className="text-muted">{renderMailMessage()}</Form.Text></Alert>}
</Form.Group>

}
{!submited &&
<Button variant="primary"  onClick={clickSubmit1} disabled={!validationStates.emailState}>
Submit
</Button>
}

{submited && <Form.Group className="mb-3" controlId="formBasicPassword">
<Form.Control type="password" placeholder="Ingresa tu contraseña"
onChange={handlePasswordChange} value={formValues.password} />

{!validationStates.paswordState && <Alert variant="danger"><Form.Text className="text-muted">Your password should be  at least 6 char long</Form.Text></Alert>}
</Form.Group>}

{submited && 
    <Link to="/carros" className="nav-link principal">
<Button variant="primary"  onClick={clickSubmit2} disabled={!validationStates.paswordState}>
Submit
</Button>
</Link>}



</Form>
</div>
);

    }
export default LoginMail;
