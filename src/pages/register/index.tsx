import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import styles from './style.module.css';
import Image from 'next/image';

interface Props {
    onClick: () => void;
}

const Login: React.FC<Props> = ({ onClick }) => {
    return (
        <div className={styles.container}>
            <Card className={styles.card}>
                <div className={styles.content}>
                    
                    <Form style={{padding:"10px"}}>
                    <Image src="/images/logo.svg" alt='logo'
                        layout="responsive"
                        width={100}
                        height={100}
                        style={{ width: '50%',padding:"20px" }}></Image>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label style={{fontFamily:"Segoe UI"}}>Email address</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" />
                            <Form.Text className="text-muted">
                                We will never share your email with anyone else.
                            </Form.Text>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" />
                            <div className={styles.forget}>
                                <Form.Text className="text-muted">
                                    Forget password? Reset your password by
                                </Form.Text>
                                <a href='/reset-password' className={styles.clicking}>clicking here</a>
                            </div>
                        </Form.Group>
                        <Button className={styles.button} variant="primary" type="submit">
                            Submit
                        </Button>
                        <div className={styles.activation}>
                            <span>Did not get any activation code? <a href='/resend-code' className={styles.clicking}>clicking here</a></span>
                        </div>
                    </Form>
                </div>
            </Card>
        </div>
    );
};

export default Login;