import { useSearchParams, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { Container, Row } from "react-bootstrap";

const HomeComponent = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  useEffect(() => {
    if (!localStorage.getItem("accessToken")) navigate("/login");
    if (searchParams.get("accessToken")) {
      localStorage.setItem("accessToken", searchParams.get("accessToken"));
      navigate("/");
    }
  }, [navigate, searchParams]);

  return (
    <Container>
      <Row className="justify-content-center mt-3">
        <h1> Welcome to our app! </h1>
        <h3>here you can see that is working</h3>
        <h4>StriveBlog</h4>
        <h5>FrontEnd part</h5>
      </Row>
    </Container>
  );
};

export default HomeComponent;
