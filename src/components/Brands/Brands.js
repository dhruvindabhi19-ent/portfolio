import React, { useState } from "react";
import { Container, Row, Col, Modal, Card } from "react-bootstrap";
import BrandsCards from "./BrandsCards";
import { OTHERBRANDS, PROJECTS } from "../../Constants";
import OtherBrandsCards from "./OtherBrandsCards";

function Brands() {
  const [show, setShow] = useState(false);
  const [pdfUrl, setPdfUrl] = useState("");
  const [loading, setLoading] = useState(false);

  const isMobile = () => {
    return window.innerWidth <= 768;
  };

  const handleOpenPdf = (url) => {
    if (isMobile()) {
      window.open(url, "_blank");
    } else {
      setLoading(true);
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

        {/* Main Brands */}
        <h1 className="project-heading">
          Our Premium <strong className="purple">Brand Partners</strong>
        </h1>

        <p style={{ color: "#414141" }}>
          Leading brands we primarily specialize in and work closely with.
        </p>

        <Row style={{ justifyContent: "center", paddingBottom: "40px" }}>
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

        {/* Other Brands Section */}
        <h1
          className="project-heading"
          style={{ marginTop: "50px" }}
        >
          More <strong className="purple">Brands We Offer</strong>
        </h1>

        <p style={{ color: "#414141", textAlign: "center" }}>
          Additional trusted brands available to meet diverse customer needs.
        </p>

        <Row
          style={{
            justifyContent: "center",
            paddingBottom: "40px",
            marginTop: "30px",
          }}
        >
          {OTHERBRANDS.map((brand, index) => (
            <Col
              lg={3}
              md={4}
              sm={6}
              xs={12}
              key={index}
              className="project-card"
            >
              <OtherBrandsCards
                imgPath={brand.image}
                title={brand.name}
                link={() =>
                  brand.url
                    ? window.open(brand.url, "_blank")
                    : null
                }
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
              alignItems: "center",
              position: "relative",
            }}
          >
            {/* Loader */}
            {loading && (
              <div
                style={{
                  position: "absolute",
                  zIndex: 10,
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <div className="pdf-loader"></div>

                <p
                  style={{
                    marginTop: "15px",
                    color: "#6d28d9",
                    fontWeight: "600",
                  }}
                >
                  Loading Catalogue...
                </p>
              </div>
            )}

            {pdfUrl && (
              <iframe
                src={pdfUrl}
                title="PDF Viewer"
                width="100%"
                height="100%"
                style={{
                  border: "none",
                  opacity: loading ? 0 : 1,
                  transition: "0.3s ease",
                }}
                onLoad={() => setLoading(false)}
              />
            )}
          </Modal.Body>
        </Modal>
      </Container>
    </Container>
  );
}

export default Brands;