import { useRef, useState } from "react";
import validateCommentForm from "../utils/validator";

function Footer() {
  const emailRef = useRef("");
  const emailFormRef = useRef();
  const [errors, setErrors] = useState([]);

  const handleOptin = (e) => {
    e.preventDefault();
    const checkErrors = validateCommentForm(
      { email: emailRef.current.value },
      []
    );
    setErrors(checkErrors);
    if (checkErrors.length) {
      console.log(checkErrors[0].msg);
    } else {
      emailFormRef.current.reset();
      console.log("email submitted!", emailRef.current.value);
    }
  };

  return (
    <div>
      <div className="optin-container">
        <div className="optin-header">
          <span>اشترك في النشرة البريدية</span>
          <span>و كن أول من يعلم عن كل جديد في عالم التجارة الإلكترونية</span>
        </div>
        <form
          ref={emailFormRef}
          onSubmit={handleOptin}
          className="email-input-container"
        >
          <div className="email-btn">
            <input type="submit" value="اشتراك" />
          </div>
          <div className="email-input">
            <input
              ref={emailRef}
              dir="rtl"
              type="text"
              name="email"
              placeholder="البريد الإلكتروني"
            />
            <div>
              <img src="./icons/mail.svg" alt="mail icon" />
            </div>
            {errors[0] ? (
              <span key={"comment"} className="error-msg">
                {errors[0].msg}
              </span>
            ) : null}
          </div>
        </form>
      </div>
      <footer>
        <div className="footer-content">
          <a>الشروط والاحكام</a>
          <div className="footer-social">
            <div className="footer-social-btn">
              <span>كن كاتبا معنا</span>
            </div>
            <div className="footer-split"></div>
            <div className="footer-social-icons">
              <div>
                <img className="social-icon" src="./icons/twitter.svg" alt="" />
              </div>
              <div>
                <img
                  className="social-icon"
                  src="./icons/instgram.svg"
                  alt=""
                />
              </div>
              <div>
                <img
                  className="social-icon"
                  src="./icons/facebook.svg"
                  alt=""
                />
              </div>
              <div>
                <img className="social-icon" src="./icons/mail2.svg" alt="" />
              </div>
            </div>
          </div>
          <span>
            جميع الحقوق محفوظة
            <strong style={{ fontWeight: 500, color: "#404343" }}>
              {" "}
              لشركة مدونة 2022{" "}
            </strong>
          </span>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
