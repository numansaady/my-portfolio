import emailjs from '@emailjs/browser';
import Menubar from "../../Shear/Menubar/Menubar";
import "./ContactUs.css";

import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ContactUs = () => {
  // const notify = () => toast("Successfully Send");
  const handleContact = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_49lajuk",
        "template_meew8qq",
        e.target,
        "wqsgDh-tuYfTdz0xV"
      )
      .then((res) => {
        console.log(res);
        alert("Successfully Send");
        if (res.status === 200) {
          toast.success("Successfully Send", {
            position: "top-center",
          });
        }
        e.target.value = "";
      })
      .catch((err) => console.log(err));
  };
  return (
    <div className="container pt-5  mt-5">
      <Menubar />
      <div className="container" data-aos="fade-up" data-aos-duration="2000">
        <div className="contact_section p-5">
          <h2>Contact</h2>
          <h3 className="display-5 fw-bold">
            Contact me to get <br /> your work done
          </h3>
          <div className="row pt-5">
            <div className="col-lg-4">
              <div className="contact_me">
                <div className="call_icon">
                  <i className="fas fa-phone"></i>
                </div>
                <div>
                  <h4>Call Me</h4>
                  <p>+88 01710 269430</p>
                </div>
              </div>
              <div className="contact_me">
                <div className="call_icon">
                  <i className="far fa-envelope-open"></i>
                </div>
                <div>
                  <h4>Email Us</h4>
                  <p>jamilrayhan10@gmail.com</p>
                </div>
              </div>
              <div className="contact_me">
                <div className="call_icon">
                  <i className="fas fa-location-arrow"></i>
                </div>
                <div>
                  <h4>Address</h4>
                  <p>Sunamgonj, Bangladesh</p>
                </div>
              </div>
            </div>
            <div className="col-lg-8">
              <div className="contact_form">
                <form onSubmit={handleContact}>
                  <input name="name" type="text" placeholder="Name" required />{" "}
                  <br />
                  <input
                    name="user_email"
                    type="email"
                    placeholder="Email"
                    required
                  />{" "}
                  <br />
                  <input type="text" placeholder="Subject" required /> <br />
                  <input type="number" placeholder="Phone" required /> <br />
                  <textarea
                    name="message"
                    id=""
                    cols="30"
                    rows="6"
                  ></textarea>{" "}
                  <br />
                  <input
                    // onClick={notify}
                    className="submit_btn"
                    type="submit"
                  />
                  <ToastContainer />
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
