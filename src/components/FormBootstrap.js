import React from 'react';
import Form from 'react-bootstrap/Form';

function FormBootstrap(){
    return(
        <div>
            <h3>Exemplo Form usando Boostrap</h3>
            <Form>
                <div className="form-group">
                    <label htmlFor="exemple1">Large input</label>
                    <input type="text" id="example1" className="form-control form-control-lg"/>
                </div>
                <div className="form-group">
                <label htmlFor="exemple1">Large input</label>
                    <input type="text" id="example2" className="form-control form-control-md"/>
                </div>
                <div className="form-group">
                    <label htmlFor="example3">Small input</label>
                    <input type="text" id="example3" className="form-control form-control-sm"/>
                </div>
            </Form>
        </div>
    )
}

export default FormBootstrap;