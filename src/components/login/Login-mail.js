import { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import {Form, Alert} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FormattedMessage } from 'react-intl';
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
<h1>{submited ? formValues.email : <FormattedMessage id="Access"/>}</h1>
<h3>{submited ? "":  <FormattedMessage id="Access to your UniAlpes account"/>}</h3>
<Form>
{!submited &&
<Form.Group className="mb-6" controlId="formBasicEmail">
<Form.Label><FormattedMessage id="Email"/></Form.Label>
<Form.Control type="email" 
onChange={handleEmailChange} value={formValues.email}/>
{!validationStates.emailState && <Alert variant="danger"><Form.Text className="text-muted">{<FormattedMessage id={renderMailMessage()}/>}</Form.Text></Alert>}
</Form.Group>

}
{!submited &&
<Button variant="primary"  onClick={clickSubmit1} disabled={!validationStates.emailState}>
{<FormattedMessage id="Submit"/>}
</Button>
}

{submited && <Form.Group className="mb-3" controlId="formBasicPassword">
<Form.Control type="password" placeholder={<FormattedMessage id="Enter your password"/>}
onChange={handlePasswordChange} value={formValues.password} />

{!validationStates.paswordState && <Alert variant="danger"><Form.Text className="text-muted">{<FormattedMessage id="Your password should be  at least 6 char long"/>}</Form.Text></Alert>}
</Form.Group>}

{submited && 
    <Link to="/carros" className="nav-link principal">
<Button variant="primary"  onClick={clickSubmit2} disabled={!validationStates.paswordState}>
{<FormattedMessage id="Submit"/>}
</Button>
</Link>}



</Form>
</div>
);

    }
export default LoginMail;
