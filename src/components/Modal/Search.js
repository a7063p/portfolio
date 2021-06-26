import { react, useState} from 'react';
import {Modal, Button} from 'react-bootstrap'


function SearchModal() {
    const [show, setShow] = useState(false);
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  
    return (
      <>
      <div className="modal-btn-div">
        <Button variant="primary" onClick={handleShow}>
          More Info
        </Button>
        </div>
  
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Modal heading</Modal.Title>
          </Modal.Header>
          <Modal.Body>
              <ul>
                  <li>Oprational Data</li>
                  <li>Charge configuration Data</li>
                  <li>Oprational Data</li>
                  <li>Oprational Data</li>
                  <li>Oprational Data</li>
              </ul>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>            
          </Modal.Footer>
        </Modal>
      </>
    );
  }
  
 export default SearchModal