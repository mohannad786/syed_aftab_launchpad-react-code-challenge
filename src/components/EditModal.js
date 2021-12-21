import React, {Component} from "react";
import {Modal, Button, Row, Col, Form, FormLabel, FormGroup} from 'react-bootstrap';



export class EditModal extends Component {
    constructor (props) {
        super(props);
    }
    handleSubmit(event){
    event.preventDefault();
    
    fetch('https://jsonplaceholder.typicode.com/posts', {
      method:"Put",
      headers: {
        'Accept' : 'application/json',
        'Content-Type' : 'application/json'
        },
        body:JSON.stringify({
          id:event.target.id.value,
          userId : event.target.userId.value,
          title : event.target.title.value,
          body : event.target.body.value,
        })
    })
    
    .then(res=> res.json())
    .then((result) => 
    {
      alert(result);
    }, 
    
    (error) => {
      alert('Failed')
    }
  )
}


    render(){
        return (
            <Modal
      {...this.props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
         Edit Data
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
       <div className="container">
         <Row> 
            <col sm={6}></col>
            <Form onSubmit={this.handleSubmit}>
            <Form.Group controlId="id">  
            <FormLabel>id</FormLabel>  
            <Form.Control type='number' name = 'id' required disabled placehoder="id"/>
            </Form.Group>
            <FormGroup></FormGroup>
            <Form.Group controlId="userId">  
            <FormLabel>userId</FormLabel>  
            <Form.Control type='number' name = 'userId' required  placehoder="userId"/>
            </Form.Group>
            <Form.Group controlId="title">  
            <FormLabel>title</FormLabel>  
            <Form.Control type='text' name = 'userId' required  placehoder="userId"/>
            </Form.Group>
            <Form.Group controlId="body">  
            <FormLabel>body</FormLabel>  
            <Form.Control type='text' name = 'userId' required  placehoder="userId"/>
            </Form.Group>
            <FormGroup>
            <br/>

            </FormGroup>
            <Button variant='primary' type='submit'>Update Data input </Button>
              
            </Form>
         </Row>

       </div>
      </Modal.Body>
      <Modal.Footer>
      
              
           
        <Button variant="secondary" onClick={this.props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>

        )
   
    }
}