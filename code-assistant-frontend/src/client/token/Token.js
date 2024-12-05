import React, {useState} from "react";
import { Button } from 'react-bootstrap';
import  {ENDPOINT}  from '../config/services.constants';
import axios from 'axios';

const Token = () => {
  const [key, setKey] = useState('');
  
  const url = ENDPOINT?.backend_endpoint + "token";
  const token = "IUzI1NiIsInR5c";

  const handleSend = (e) => {

    
    if (key.trim()) {
            
      const rta = axios
          .post(url, {code: key, key: "" }, {
            "headers": {"Authorization": "Bearer " + token}
          })
          .then(response => {
            //console.log(response)
            //res.send(response) // <= send data to the client
            //console.log( response);
            //setNewMessage('');
            
            return null;
          })
          .catch(err => {
            //res.send({ err }) // <= send error
            console.log(err);
            //setNewMessage('');
            return null;
          })
    } else {
      
    }
  };

  return (
    <div id="token" className="min-vh-100">
  <header className="header-assistant">
      <h1>Token</h1>
    </header> 
    <div>
    
    <main className="">
      <section className="pt-5">
        <span>In order to use the system, provide your email to sent new token </span> <br></br>
        <div className="col-16">
          <input
            type="text"
            value={key}
            onChange={(e) => setKey(e.target.value)}
            style={{ width: '80%', margin: '10px' }}
            placeholder="Your Email"
          />
          <Button className='btn btn-primary' onClick={(e) => handleSend(e)}>
            Request a Token 
          </Button>
        </div>
      </section>
    </main>
  </div>
  </div>
  );
};
export default Token;