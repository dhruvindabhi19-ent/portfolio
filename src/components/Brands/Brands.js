import React, { useState } from "react";
import { Container, Row, Col, Modal } from "react-bootstrap";
import BrandsCards from "./BrandsCards";
import { PROJECTS } from "../../Constants";

function Brands() {

  const [show, setShow] = useState(false);
  const [pdfUrl, setPdfUrl] = useState("");

  const isMobile = () => {
    return window.innerWidth <= 768;
  };

  const handleOpenPdf = (url) => {
    if (isMobile()) {
      window.open(url, '_blank');
    } else {
      setPdfUrl(url);
      setShow(true);
    }
  };

  const handleClose = () => {
    setShow(false);
    setPdfUrl("");
  };

  return (
    <Container fluid className="project-section">
      <Container>
        <h1 className="project-heading">
          My all <strong className="purple">Brands </strong>
        </h1>
        <p style={{ color: "sub-heading" }}>
          Here are a few brands I've worked on.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          {PROJECTS.map((project, index) => (
            <Col md={4} className="project-card" key={index}>
              <BrandsCards
                imgPath={project.image}
                isBlog={false}
                title={project.name}
                link={() => handleOpenPdf(project.url)}
              />
            </Col>
          ))}
        </Row>

        {/* PDF Modal */}
        <Modal
          show={show}
          onHide={handleClose}
          size="lg"
          centered
        >
          <Modal.Header closeButton>
            <Modal.Title>Brand Document</Modal.Title>
          </Modal.Header>

          <Modal.Body
            style={{
              height: "80vh",
              display: "flex",
              justifyContent: "center",
            }}
          >
            {pdfUrl && (
              <iframe
                src={pdfUrl}
                title="PDF Viewer"
                width="100%"
                height="100%"
                style={{ border: "none" }}
              />
            )}
          </Modal.Body>
        </Modal>

      </Container>
    </Container>
  );
}

export default Brands;
