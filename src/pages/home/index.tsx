import BookCard from '@/components/BookCard';
import React from 'react';
import { Container, InputGroup, Form, Button, Row, Col } from 'react-bootstrap';
import styles from "./styles.module.css"
interface Props {
  onClick: () => void;
}

const Home: React.FC<Props> = ({ }) => {
  return (
    <Container fluid className={styles.container}>
      <h1 className={styles.title} >All Books</h1>
      <InputGroup className="mb-3">
        <Form.Control
          placeholder="Search Book"
          aria-label="Search Book"
          aria-describedby="basic-addon2"
        />
        <Button variant="outline-secondary" id="button-addon2">
          Search
        </Button>
      </InputGroup>
      <Row  sm={8}>
        {[1, 2, 3, 4, 5, 6].map(idx => {
          return (
            <Col style={{marginTop:"10px"}}>
              <BookCard title='Harry Potter and the Deathly Hallow' content='By JK Rowling' image='https://media.harrypotterfanzone.com/deathly-hallows-us-childrens-edition.jpg'></BookCard>
            </Col>
          )
        })}
      </Row>
    </Container>
  );
};

export default Home;