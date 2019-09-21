import React from "react";

class Splash extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const splash = document.getElementById("splash");
    splash.addEventListener("mousemove", e => {
      const airplane = document.getElementById("splash-airplane");
      const valueXairplane = (e.clientX * -1) / 12;
      const valueYairplane = (e.clientY * -1) / 12;
      airplane.style.transform = `translate3d(${valueXairplane}px,${valueYairplane}px,0)`;

      const title = document.getElementById("splash-title");
      const valueXtitle = (e.clientX * -1) / 48;
      const valueYtitle = (e.clientY * -1) / 48;
      title.style.transform = `translate3d(${valueXtitle}px,${valueYtitle}px,0)`;
    });
  }

  render() {
    return (
      <div className="splash" id="splash">
        <img
          src="/static/images/airplane.png"
          className="w-lg-75 w-md-100 splash-airplane"
          id="splash-airplane"
        />
        <div className="cloud-1 one"></div>
        <div className="cloud-1 two"></div>
        <div className="cloud-1 three"></div>
        <div className="cloud-1 four"></div>

        <div className="cloud-2 one"></div>
        <div className="cloud-2 two"></div>
        <div className="cloud-2 three"></div>
        <div className="cloud-2 four"></div>

        <div className="cloud-3 one"></div>
        <div className="cloud-3 two"></div>
        <div className="cloud-3 three"></div>

        <div class="splash-title" id="splash-title">
          <p>بهترین تجربه پرواز</p>
        </div>
      </div>
    );
  }
}

export default Splash;
