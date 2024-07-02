import React from 'react';

const Newslord = () => {
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
            <h3 className="display-7 lh-2 mb-3 py-3">
              Your Premier Source for the Latest News
            </h3>
            <p className="text-semibold my-3">
              Welcome to NewsLord, your one-stop destination for the most
              current and comprehensive news coverage from around the globe. We
              bring you the latest headlines, in-depth articles, and expert
              analysis across various categories, ensuring you stay informed and
              engaged.
            </p>
          </div>
        </div>
      </div>
      <div className="container px-4 py-5" id="icon-grid">
        <h1 className="pb-2 border-bottom text-center text-bold">News Category</h1>
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-3 g-3 py-5">
          <div className="col d-flex align-items-start">
            <div>
              <h4 className="fw-bold mb-0">Business Headlines</h4>
              <p>
                Get the latest updates on global markets, corporate strategies,
                economic policies, and financial trends. Stay informed with
                breaking news and insightful analysis to keep ahead in the
                business world.
              </p>
            </div>
          </div>
          <div className="col d-flex align-items-start">
            <div>
              <h4 className="fw-bold mb-0">Entertainment Headlines</h4>
              <p>
                Explore the latest celebrity gossip, movie reviews, music
                releases, and red carpet events. Dive into the world of
                entertainment with exclusive interviews, behind-the-scenes
                stories, and trending entertainment news.
              </p>
            </div>
          </div>
          <div className="col d-flex align-items-start">
            <div>
              <h4 className="fw-bold mb-0">Health Headlines</h4>
              <p>
                Learn about new medical research, health trends, fitness tips,
                and nutrition advice. Stay updated on healthcare policies,
                wellness strategies, and insights into living a healthier life.
              </p>
            </div>
          </div>
          <div className="col d-flex align-items-start">
            <div>
              <h4 className="fw-bold mb-0">Science Headlines</h4>
              <p>
                Discover groundbreaking discoveries, scientific advancements,
                space exploration updates, and technology innovations. Stay
                informed about the latest developments in biology, physics,
                astronomy, and more.
              </p>
            </div>
          </div>
          <div className="col d-flex align-items-start">
            <div>
              <h4 className="fw-bold mb-0">Sports Headlines</h4>
              <p>
                Stay updated with the latest scores, player transfers, match
                highlights, and insights from the world of sports. From football
                to tennis, cricket to basketball, get all the sports news you
                need.
              </p>
            </div>
          </div>
          <div className="col d-flex align-items-start">
            <div>
              <h4 className="fw-bold mb-0">Technology Headlines</h4>
              <p>
                Explore the world of gadgets, software updates, cybersecurity,
                AI developments, and tech industry trends. Stay ahead with
                reviews of the latest gadgets, in-depth analysis of tech giants,
                and updates on digital transformation and innovation.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Newslord;
