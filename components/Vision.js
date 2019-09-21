import React from "react";
import { Container, Row, Col } from "reactstrap";

class Vision extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    window.addEventListener("scroll", () => {
      const height = document.documentElement.clientHeight;
      let value = window.pageYOffset / height;
      value = value <= 1 ? value : 1;
      const airplane = document.getElementById("vision-airplane");
      if (airplane != undefined) {
        let translateValue = value ** 2 * 60;
        if (document.documentElement.clientWidth <= 991) {
          translateValue = value ** 2 * 40;
        }
        airplane.style.transform = `translate3d(${translateValue}%,${translateValue}%,0)`;
      }
    });
  }
  componentWillUnmount() {
    console.log("test");
  }
  render() {
    return (
      <div className="vision">
        <div className="vision-gradient"></div>
        <img
          src="/static/images/vision-airplane.png"
          className="vision-airplane"
          id="vision-airplane"
        />
        <Container className="vision-info">
          <Row className="text-right">
            <Col className="col-12 col-md-6 col-lg-6">
              <img
                src="/static/images/vision.jpg"
                className="img-thumbnail shadow-lg vision-image"
              />
            </Col>
            <Col className="col-12 col-md-6 col-lg-6">
              <h3>چشم انداز هواپیمایی دلیران</h3>
              <p>
                طبق برنامه ریزی صورت گرفته ، شرکت هواپیمایی دلیران به ارائه
                خدمات جابه جایی مسافر ، بار و پست بصورت چارتری بین المللی طبق
                ضوابط تعریف و تعیین شده برای اینگونه پروازها توسط سازمان
                هواپیمایی کشوری در مقیاس های داخلی و بین المللی مبادرت خواهد
                نمود .
              </p>
              <p>
                با عنایت به اینکه شرکت های هواپیمایی موجود در صنعت ، جملگی بصورت
                FULL AOC فعالیت می نمایند ، موضوع فعالیت این شرکت مدل جدیدی از
                کسب و کار خواهد بود که با عنایت به پتانسیل های این شرکت از لحاظ
                مالی ، سابقه چندین ساله اعضای کلیدی این شرکت در فعالیت های
                چارتری و برخورداری از عمده ترین زیرساخت بسته های مسافرتی افق
                روشنی پیش روی این شرکت بوده و این امر وجه تمایز آشکار درخواست
                مطرح شده با فعالیت های جاری صنعت می باشد .
              </p>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Vision;
