import React, { Component } from 'react';
import FormBootstrap from './components/FormBootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import _ from "loadsh/fp";
import { useForm } from 'react-hook-form';

function App(){
  const { register, handleSubmit, watch, errors } = useForm();
  const onSubmit = data => {
    alert(JSON.stringify(data));
  } //your form submit functio which will invoke after successful validation
  
  return (
    <div className="App">
        <FormBootstrap/>
    </div>
  );
}

export default App;

