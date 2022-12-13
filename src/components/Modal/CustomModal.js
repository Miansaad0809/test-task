import { React, useState, useEffect } from 'react';
import { Button, Col, Modal, ModalBody, Form, FormGroup, Label, Input } from 'reactstrap';
import Avatar from '../../assets/images/avatar.png';
import Camera from '../../assets/images/camera.png';
import Pencil from '../../assets/images/edit.png';
import './CustomModal.css';

function CustomModal(props) {
  const [showModal, setShowModal] = useState(false);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [bio, setBio] = useState("");
  const [wallet, setWallet] = useState("");
  const [image, setImage] = useState(null);
  const [coverImage, setCoverImage] = useState(null);

  useEffect(()=> {
    setShowModal(props.show)
  }, []);

  const submit = (e) => {
    e.preventDefault();

    if(username.length === 0 || email.length === 0) {
      alert("Username & email are required");
      return;
    }
    alert('Success')
    props.close(false);
    setShowModal(false);
  }

  return (
    <>
      <Modal isOpen={showModal} size={'xl'}>
        <ModalBody>
          <div className='row'>
            <div className='col-12 col-lg-3'>
              <div className='side-menu pb-2'>
                <div className='p-4'>
                  <h4>Settings</h4>
                </div>
                <div className='nav-menu'>
                  <ul className='nav'>
                    <li className='px-4 py-2 active'>Account</li>
                    <li className='px-4 py-2'>Add Socials</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className='col-12 col-lg-9 mt-4 mt-lg-0'>
              <div className='main-content p-4'>
                <div className='images-container'>
                  <div className='cover-image'>
                    {(coverImage)? (
                      <img src={coverImage} className='cover'/>
                    ):(
                      <div className='placeholder'></div>
                    )}
                    <div class="image-upload">
                      <label for="file-input1" className='file-input'>
                        <img src={Pencil} />
                      </label>
                      <input id="file-input1" type="file" className='d-none' onChange={(e)=>setCoverImage(URL.createObjectURL(e.target.files[0]))} />
                    </div>
                  </div>
                  <div className='profile'>
                    {(image)? (
                      <img src={image} className='avatar'/>
                    ):(
                      <img src={Avatar} className='avatar'/>
                    )}
                    <div class="image-upload">
                      <label for="file-input" className='file-input'>
                        <img src={Camera} />
                      </label>
                      <input id="file-input" type="file" className='d-none' onChange={(e)=>setImage(URL.createObjectURL(e.target.files[0]))} />
                    </div>
                  </div>
                </div>
                <div className='input-form'>
                  <Form onSubmit={(e)=>submit(e)}>
                    <FormGroup row>
                      <Col lg={5}>
                        <Label for="username">
                          Username (min. 6 characters)
                          <span className='text-danger'>*</span>
                        </Label>
                        <Input
                          id="username"
                          name="username"
                          placeholder="Your Username"
                          type="text"
                          required={true}
                          onChange={(e)=>setUsername(e.target.value)}
                        />
                      </Col>
                      <Col lg={7}>
                        <Label for="email">
                          E-mail
                          <span className='text-danger'>*</span>
                        </Label>
                        <Input
                          id="email"
                          name="email"
                          placeholder="Your E-mail"
                          type="email"
                          required={true}
                          onChange={(e)=>setEmail(e.target.value)}
                        />
                      </Col>
                    </FormGroup>
                    <FormGroup row>
                      <Col lg={12}>
                        <Label for="wallet">
                          Wallet
                        </Label>
                        <Input
                          id="wallet"
                          name="wallet"
                          type="text"
                          onChange={(e)=>setWallet(e.target.value)}
                        />
                      </Col>
                    </FormGroup>
                    <FormGroup row>
                      <Col lg={12}>
                        <Label for="bio">
                          Bio (Optional)
                        </Label>
                        <Input
                          id="bio"
                          name="bio"
                          type="textarea"
                          row={7}
                          onChange={(e)=>setBio(e.target.value)}
                        />
                      </Col>
                    </FormGroup>
                    <FormGroup row className='btn-container'>
                      <Col lg={12}>
                        <Button type='submit' className='submit-btn' disabled={(username.length === 0 || email.length === 0)? true:false}>Save Changes</Button>
                      </Col>
                    </FormGroup>
                  </Form>
                </div>
              </div>
            </div>
          </div>
        </ModalBody>
      </Modal>
    </>
  )
};

export default CustomModal;