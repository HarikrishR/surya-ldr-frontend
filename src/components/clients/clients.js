import React from "react";
import one from "../../assets/images/clients/01.webp";
import two from "../../assets/images/clients/02.webp";
import three from "../../assets/images/clients/03.webp";
import four from "../../assets/images/clients/04.webp";
import five from "../../assets/images/clients/05.webp";
import six from "../../assets/images/clients/06.webp";
import seven from "../../assets/images/clients/07.webp";
import eight from "../../assets/images/clients/08.webp";
import nine from "../../assets/images/clients/09.webp";
import ten from "../../assets/images/clients/10.webp";
import "./clients.css";
import Slider from "react-infinite-logo-slider";

class Clients extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      settings: {
        width: "200px",
        duration: 75,
        pauseOnHover: true,
        blurBorders: true,
      },
    };
  }

  render() {
    return (
        <div className="container-fluid clients text-center">
            <h2 className="mb-5">Valuable Clients</h2>
            <Slider
            width={this.state.settings.width}
            duration={this.state.settings.duration}
            pauseOnHover={this.state.settings.pauseOnHover}
            blurBorders={this.state.settings.blurBorders}
            >
                <Slider.Slide>
                    <img src={one} alt="" />
                </Slider.Slide>
                <Slider.Slide>
                    <img src={two} alt="" />
                </Slider.Slide>
                <Slider.Slide>
                    <img src={three} alt="" />
                </Slider.Slide>
                <Slider.Slide>
                    <img src={four} alt="" />
                </Slider.Slide>
                <Slider.Slide>
                    <img src={five} alt="" />
                </Slider.Slide>
                <Slider.Slide>
                    <img src={six} alt="" />
                </Slider.Slide>
                <Slider.Slide>
                    <img src={seven} alt="" />
                </Slider.Slide>
                <Slider.Slide>
                    <img src={eight} alt="" />
                </Slider.Slide>
                <Slider.Slide>
                    <img src={nine} alt="" />
                </Slider.Slide>
                <Slider.Slide>
                    <img src={ten} alt="" />
                </Slider.Slide>
            </Slider>
        </div>
    );
  }
}

export default Clients;
