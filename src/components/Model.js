import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {Col, Label, Modal,Row,Button, ModalBody} from 'reactstrap'
import {Control,Errors,LocalForm} from 'react-redux-form'
const required = (val) => (val) && val.length;
const maxLength = (len)=> (val)=> !(val) || val.length<=len
const minLength = (len) => (val)=> (val) && val.length>=len;  
class Model extends Component {
    constructor(props) {
        super(props);
       this.state={
          modal:false
       }
       this.handleSubmit=this.handleSubmit.bind(this)
       this.toggle=this.toggle.bind(this)
    }
    toggle(){
        this.setState({
            modal:!this.state.modal
        })
    }
    handleSubmit(values){
        console.log(JSON.stringify(values));
        alert(JSON.stringify(values));
    }
    render(){
        return(
            <React.Fragment>
                 <Button outline onClick={this.toggle}>
                    <span className="fa fa-comments fa-lg"></span> Submit Comment
                </Button>
            <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
              <ModalBody>
              <LocalForm onSubmit={(values)=>this.handleSubmit(values)}>
                
                <Row className="form-group">
                                  <Label htmlFor="rating" md={12} >Rating</Label>
                                  <Col md={12}>
                                      <Control.select model=".rating"
                                          className="form-control"
                                          name="rating"
                                          id="rating"
                                          validators={{
                                              required
                                          }}
                                      >
                                          <option>Please Select</option>
                                          <option>1</option>
                                          <option>2</option>
                                          <option>3</option>
                                          <option>4</option>
                                          <option>5</option>
                                      </Control.select>
                                      <Errors
                                          className="text-danger"
                                          model=".author"
                                          show="touched"
                                          messages={{
                                              required: 'Required',
                                          }}
                                      />  
                                  </Col>
                              </Row>
  
                   <Row className="form-group">
                      <Label htmlFor='firstname' md={2}>Name</Label>
                      <Col md={12}>
                      <Control.text model=".firstname"
                      id="firstname"
                      name="firstname"
                      className="form-control"
                      validators={{
                          required,minLength:minLength(3),maxLength:maxLength(15)
                      }}
                      />
                      <Errors
                       className="text-danger"
                       show='touched'
                       model=".firstname"
                      messages={{
                         required:'Required',
                         maxLength:'must be less than 15',
                         minLength:'must be greater than 3'
                      }}
                      />
                      </Col>
                      
                   </Row>
                   
                   <Row className="form-group">
                                  <Label htmlFor="comment" md={12}>Comment</Label>
                                  <Col md={12}>
                                      <Control.textarea model=".comment" id="comment" name="comment"
                                          rows="6"
                                          className="form-control"
                                          validators={{
                                              required
                                          }}
                                      />
                                      <Errors
                                          className="text-danger"
                                          model=".author"
                                          show="touched"
                                          messages={{
                                              required: 'Required',
                                          }}
                                      />
                                  </Col>
  
                              </Row>
  
                              {/* submit button */}
                              <Row className="form-group">
                                  <Col>
                                      <Button type="submit" color="primary">
                                          Submit
                                      </Button>
                                  </Col>
                              </Row>
  
  
                </LocalForm>
              </ModalBody>
              
        </Modal>
            </React.Fragment>
           
        );
    }
}
export default Model;