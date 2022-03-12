import React from 'react';
import { Button, Form } from 'react-bootstrap';

class ContactForm extends React.Component {


    render() {
        return <div className="p-3 rounded border">
            {this.props.name}

            <Form>
                <Form.Label ><b>За повече информация:</b></Form.Label>
                <Form.Group className="mb-3" >
                    <Form.Label>Име</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Enter first name" />
                    <Form.Label>Фамилия</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Enter last name" />
                    <Form.Label>Имейл адрес</Form.Label>
                    <Form.Control
                        type="email"
                        placeholder="Enter email" />
                    <Form.Label>Телефонен номер:</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Enter phone number" />
                </Form.Group>
                <Button
                    variant="primary"
                    type="submit">
                    Изпрати
                </Button>
            </Form>

        </div>
    }
}
export default ContactForm;