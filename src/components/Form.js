import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

function MyForm() {
  return (
  <div>
     <h3 className='touch-h3'>Get In Touch</h3>
      <Form className='myform'>
      <Form.Group className="mb-3 " controlId="exampleForm.ControlInput1" >
        <Form.Label className='formlabel'>Name</Form.Label>
        <Form.Control type="name" placeholder="Name" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label className='formlabel'>Email address</Form.Label>
        <Form.Control type="email" placeholder="Email Address" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label className='formlabel'>Email address</Form.Label>
        <Form.Control type="phone" placeholder="Phone Number" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label className='formlabel'>Comment or Message</Form.Label>
        <Form.Control as="textarea" rows={3} />
      </Form.Group>
      <Button variant="primary" type="submit" className='contact-button'>
        SEND MESSAGE
      </Button>
    </Form>
  </div>
  );
}

export default MyForm;
