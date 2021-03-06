import React, {useState} from 'react';

import Row from 'react-bootstrap/Row';
import Form from 'react-bootstrap/Form';

import CustomButton from '../CustomButton/CustomButton';

import './ExperienceForm.scss';

const ExperienceForm = ({ handleChange, handleFileChange, onSubmitChange, descriptionLength }) => {
    return(
        <div className="experience-form">
            <p className="text-center">Add an experience</p>
            <Row>
                <Form id="formExperience">
                    <Form.Group controlId="exampleForm.ControlInput1">
                        <Form.Label>Name</Form.Label>
                        <Form.Control type="text" name="name" placeholder="Experience name" onChange={(event) => handleChange(event)} />
                    </Form.Group> 
                    <Form.Group controlId="exampleForm.ControlInput1" >
                        <Form.Label style={{display: 'flex', justifyContent: 'space-between'}}>Description <span>{descriptionLength}/200 characters</span></Form.Label>
                        <Form.Control type="text" name="description" placeholder="Experience description" onChange={(event) => handleChange(event)} />
                    </Form.Group> 
                    <Form.Group controlId="exampleForm.ControlInput1" >
                        <Form.Label>Skills ( separated by commas )</Form.Label>
                        <Form.Control type="text" name="skills" placeholder="Experience skills" onChange={(event) => handleChange(event)} />
                    </Form.Group> 
                    <Form.Group controlId="exampleForm.ControlInput1" >
                        <Form.Label>URL</Form.Label>
                        <Form.Control type="text" name="url" placeholder="Experience URL" onChange={(event) => handleChange(event)} />
                    </Form.Group>  
                    <Form.Group controlId="exampleForm.ControlInput1" >
                        <Form.Label>File</Form.Label>
                        <Form.Control type="file" name="fileExperience" placeholder="Experience file" onChange={(event) => handleFileChange(event)} />
                    </Form.Group> 
                    <CustomButton type="button" onClick={onSubmitChange}>Submit Experience</CustomButton>
                </Form>                           
            </Row>
        </div>
    );
}

export default ExperienceForm;