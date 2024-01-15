import React, { Component } from "react";
import "./Carousel.css";
// you can explore more - and check as how to use materiul ui
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

// implement the class below
class Carousel extends Component {
  constructor() {
    super();
    this.state = {
      activeIndex: 0,
    };
  }

  nextHandler = () => {
    if (this.state.activeIndex < this.props.ImgData.length - 1) {
      this.setState({
        activeIndex: this.state.activeIndex + 1,
      });
    } else {
      this.setState({
        activeIndex: 0,
      });
    }
    console.log(this.state.activeIndex);
  };

  backHandler = () => {
    if (this.state.activeIndex > 0) {
      this.setState({
        activeIndex: this.state.activeIndex - 1,
      });
    } else {
      this.setState({
        activeIndex: 2,
      });
    }
    console.log(this.state.activeIndex);
  };

  render() {
    return (
      <>
        <div className="carousel">
          <div onClick={this.backHandler} className="arrowHolder">
            <ArrowBackIosIcon className="left-arrow" />
          </div>
          <div className="carousel-inner">
            {this.props.ImgData.map((item, index) => {
              return (
                <div
                  key={index}
                  className={
                    index === this.state.activeIndex
                      ? "carousel-item active"
                      : "carousel-item"
                  }
                >
                  <h1 className="absoluteText top">{this.props.ImgData[index].title}</h1> 
                  <h1 className="absoluteText bottom">{this.props.ImgData[index].subtitle}</h1>  
                  <img src={item.img} alt="carousel-image" />
                </div>
              );
            })}
          </div>
          <div onClick={this.nextHandler} className="arrowHolder">
            <ArrowForwardIosIcon className="right-arrow" />
          </div>
        </div>
      </>
    );
  }
}

export default Carousel;
