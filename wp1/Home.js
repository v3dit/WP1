import React from "react";
import coffeeimg1 from "./coffeeimg1.jpg";
import "react-router-dom";

const Home = () => {
  return (
    <div className="body conatiner" style={{ backgroundColor: "#000000", backgroundImage: "coffee-beans-luxe-digital.jpg" }}>

      <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="false">
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={coffeeimg1} className="d-block w-100" alt="..." />
            <div className="carousel-caption d-none d-md-block">
              <h5>First slide label</h5>
              <p>Some representative placeholder content for the first slide.</p>
            </div>
          </div>
          <div className="carousel-item">
            <img src={coffeeimg1} className="d-block w-100" alt="..." />
            <div className="carousel-caption d-none d-md-block">
              <h5>Second slide label</h5>
              <p>Some representative placeholder content for the second slide.</p>
            </div>
          </div>
          <div className="carousel-item">
            <img src={coffeeimg1} className="d-block w-100" alt="..." />
            <div className="carousel-caption d-none d-md-block">
              <h5>Third slide label</h5>
              <p>Some representative placeholder content for the third slide.</p>
            </div>
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
      <div style={{ padding: 50 }}>
        <div className="row row-cols-3 align-self-center">

          <div className="col-md-4" style={{ paddingInlineStart: 50, paddingInlineEnd: 0 }}>
            <div className="card" style={{ backgroundColor: "white", height: 470, width: 300, padding: 7, borderRadius: 15 }}>
              <img src={coffeeimg1} alt="Coffee" style={{ maxWidth: 400, borderRadius: 15 }} />
              <div className="card-body">
                <h1 style={{ textAlign: "left" }}>Coffee1</h1>
                <p style={{ fontSize: 20, textAlign: "left" }}>TEXT</p>
                <button type="btn btn-backgroung" style={{ float: "left", width: 75, hight: 1, borderRadius: 20 }}>
                  Shop
                </button>
              </div>
            </div>
          </div>

          <div className="col-md-4" style={{ paddingInlineStart: 50, paddingInlineEnd: 0 }}>
            <div className="card" style={{ backgroundColor: "white", height: 470, width: 300, padding: 7, borderRadius: 15 }}>
              <img src={coffeeimg1} alt="Coffee" style={{ maxWidth: 400, borderRadius: 15 }} />
              <div className="card-body">
                <h1 style={{ textAlign: "left" }}>Coffee1</h1>
                <p style={{ fontSize: 20, textAlign: "left" }}>TEXT</p>
                <button type="btn btn-backgroung" style={{ float: "left", width: 75, hight: 1, borderRadius: 20 }}>
                  Shop
                </button>
              </div>
            </div>
          </div>

          <div className="col-md-4" style={{ paddingInlineStart: 50, paddingInlineEnd: 0 }}>
            <div className="card" style={{ backgroundColor: "white", height: 470, width: 300, padding: 7, borderRadius: 15 }}>
              <img src={coffeeimg1} alt="Coffee" style={{ maxWidth: 400, borderRadius: 15 }} />
              <div className="card-body">
                <h1 style={{ textAlign: "left" }}>Coffee1</h1>
                <p style={{ fontSize: 20, textAlign: "left" }}>TEXT</p>
                <button type="btn btn-backgroung" style={{ float: "left", width: 75, hight: 1, borderRadius: 20 }}>
                  Shop
                </button>
              </div>
            </div>
          </div>

          <div style={{ color: "white" }}>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <h1>
              About the brand...
              <br></br>
            </h1>
            <h3>
              text.
            </h3>
            <br></br><br></br>
          </div>
        </div>

      </div>
    </div>
  );
}

export default Home;