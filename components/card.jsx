import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function CardNews({ newsAPI }) {
  return (
    <>
      <Container className="pt-3 mt-3 pb-3 mb-3">
        <Row xxl={4} xl={4} lg={4} md={2}>
          {newsAPI.map((item, index) => {
            return (
              <div key={index}>
                <Col>
                  <Card border="dark" className="pt-3 mt-3 pb-3 mb-3" style={{ width: "15rem", height: "28rem" }}>
                    <Card.Img height={200} variant="top" src={item.imageUrl} />
                    <Card.Body>
                      <Card.Title>{item.title}</Card.Title>
                      <Card.Text>{item.author}</Card.Text>
                      <Button variant="primary">Read News</Button>
                    </Card.Body>
                  </Card>
                </Col>
              </div>
            );
          })}
        </Row>
      </Container>
    </>
  );
}

export default CardNews;
