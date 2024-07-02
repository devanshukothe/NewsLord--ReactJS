import React from "react";
import new1 from "./new.png"; // Assuming you will use this image later

export default function About() {
  return (
    <>
      <div className="container col-xxl-8 px-4 py-5">
        <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
          <div className="col-20 col-sm-8 col-lg-6">
            <img
              src="https://previews.123rf.com/images/almoond/almoond1108/almoond110800005/10205179-world-news-concept-abstract-world-map-made-from-world-news-words-vector.jpg"
              className="d-block mx-lg-auto img-fluid"
              alt="Bootstrap Themes"
              width="700"
              height="500"
              loading="lazy"
            />
          </div>
          <div className="col-lg-6">
            <h1 className="display-5 fw-bold lh-1 mb-3">Welcome to NewsLord</h1>
            <h3 className="display-7 lh-2 mb-3">
              Your Premier Source for the Latest News
            </h3>
            <p className="lead">
              Welcome to NewsLord, your one-stop destination for the most
              current and comprehensive news coverage from around the globe. We
              bring you the latest headlines, in-depth articles, and expert
              analysis across various categories, ensuring you stay informed and
              engaged.
            </p>
            <div className="d-grid gap-2 d-md-flex justify-content-md-start">
              <button
                type="button"
                className="btn btn-primary btn-lg px-4 me-md-2"
              >
                Primary
              </button>
              <button
                type="button"
                className="btn btn-outline-secondary btn-lg px-4"
              >
                Default
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="container px-4 py-5" id="icon-grid">
        <h2 className="pb-2 border-bottom">Icon grid</h2>

        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4 py-5">
          <div className="col d-flex align-items-start">
            <svg
              className="bi text-body-secondary flex-shrink-0 me-3"
              width="1.75em"
              height="1.75em"
            >
              <use xlinkHref="<FontAwesomeIcon icon="fa-regular fa-newspaper" /></svg>"></use>
            </svg>
            <div>
              <h3 className="fw-bold mb-0 fs-4 text-body-emphasis">
                Featured title
              </h3>
              <p>Paragraph of text beneath the heading to explain the heading.</p>
            </div>
          </div>
          <div className="col d-flex align-items-start">
            <svg
              className="bi text-body-secondary flex-shrink-0 me-3"
              width="1.75em"
              height="1.75em"
            >
              <use xlinkHref="#cpu-fill"></use>
            </svg>
            <div>
              <h3 className="fw-bold mb-0 fs-4 text-body-emphasis">
                Featured title
              </h3>
              <p>Paragraph of text beneath the heading to explain the heading.</p>
            </div>
          </div>
          <div className="col d-flex align-items-start">
            <svg
              className="bi text-body-secondary flex-shrink-0 me-3"
              width="1.75em"
              height="1.75em"
            >
              <use xlinkHref="#calendar3"></use>
            </svg>
            <div>
              <h3 className="fw-bold mb-0 fs-4 text-body-emphasis">
                Featured title
              </h3>
              <p>Paragraph of text beneath the heading to explain the heading.</p>
            </div>
          </div>
          <div className="col d-flex align-items-start">
            <svg
              className="bi text-body-secondary flex-shrink-0 me-3"
              width="1.75em"
              height="1.75em"
            >
              <use xlinkHref="#home"></use>
            </svg>
            <div>
              <h3 className="fw-bold mb-0 fs-4 text-body-emphasis">
                Featured title
              </h3>
              <p>Paragraph of text beneath the heading to explain the heading.</p>
            </div>
          </div>
          <div className="col d-flex align-items-start">
            <svg
              className="bi text-body-secondary flex-shrink-0 me-3"
              width="1.75em"
              height="1.75em"
            >
              <use xlinkHref="#speedometer2"></use>
            </svg>
            <div>
              <h3 className="fw-bold mb-0 fs-4 text-body-emphasis">
                Featured title
              </h3>
              <p>Paragraph of text beneath the heading to explain the heading.</p>
            </div>
          </div>
          <div className="col d-flex align-items-start">
            <svg
              className="bi text-body-secondary flex-shrink-0 me-3"
              width="1.75em"
              height="1.75em"
            >
              <use xlinkHref="#toggles2"></use>
            </svg>
            <div>
              <h3 className="fw-bold mb-0 fs-4 text-body-emphasis">
                Featured title
              </h3>
              <p>Paragraph of text beneath the heading to explain the heading.</p>
            </div>
          </div>
          <div className="col d-flex align-items-start">
            <svg
              className="bi text-body-secondary flex-shrink-0 me-3"
              width="1.75em"
              height="1.75em"
            >
              <use xlinkHref="#geo-fill"></use>
            </svg>
            <div>
              <h3 className="fw-bold mb-0 fs-4 text-body-emphasis">
                Featured title
              </h3>
              <p>Paragraph of text beneath the heading to explain the heading.</p>
            </div>
          </div>
          <div className="col d-flex align-items-start">
            <svg
              className="bi text-body-secondary flex-shrink-0 me-3"
              width="1.75em"
              height="1.75em"
            >
              <use xlinkHref="#tools"></use>
            </svg>
            <div>
              <h3 className="fw-bold mb-0 fs-4 text-body-emphasis">
                Featured title
              </h3>
              <p>Paragraph of text beneath the heading to explain the heading.</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
