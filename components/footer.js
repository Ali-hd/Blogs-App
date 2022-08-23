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
      <div className="flex flex-col items-center gap-4 p-10 justify-center bg-[#F7F7F7] mt-[70px] mwsm2:mt-10">
        <div className="flex flex-col items-center p-0 gap-2 mb-[7px] flex-none flex-grow-0 mwsm2:max-w-[304px]">
          <span className="font-normal text-[20px] leading-[30px] text-[#202221] mwsm2:text-lg mwsm2:leading-[27px]">اشترك في النشرة البريدية</span>
          <span className="font-normal text-sm leading-6 text-[#808686] mwsm2:leading-[21px]">و كن أول من يعلم عن كل جديد في عالم التجارة الإلكترونية</span>
        </div>
        <form
          ref={emailFormRef}
          onSubmit={handleOptin}
          className="flex items-center p-0 w-[571px] bg-white border border-solid border-[#F7F7F7] rounded mwsm2:w-full mwxxsm:flex mwxxsm:flex-col-reverse mwxxsm:gap-3"
        >
          <div className="flex items-center justify-center w-[166px] h-[42px] bg-[#5DD5C4] rounded-tl rounded-bl mwxxsm:w-full">
            <input className="max-w-[166px] h-[42px] px-16 text-sm flex items-center text-right text-white border-0 outline-none rounded-tl rounded-bl bg-[#5DD5C4] cursor-pointer mwxxsm:h-[21px]" type="submit" value="اشتراك" />
          </div>
          <div className="flex items-center text-right relative w-full">
            <input
              className="flex items-center text-right outline-none border-0 py-[10px] pr-[38px] h-[21px] text-sm w-full"
              ref={emailRef}
              dir="rtl"
              type="text"
              name="email"
              placeholder="البريد الإلكتروني"
            />
            <div className="absolute right-[10px] w-[19px] h-[19px] flex items-center justify-center">
              <img src="./icons/mail.svg" alt="mail icon" />
            </div>
            {errors[0] ? (
              <span key={"comment"} className="absolute right-0 top-[55px] text-error font-normal text-sm text-right mt-[-10px] mb-[10px]">
                {errors[0].msg}
              </span>
            ) : null}
          </div>
        </form>
      </div>
      <footer className="bg-white flex flex-col items-center p-5 gap-5">
        <div className="flex items-center justify-between p-0 gap-[25px] w-full max-w-[1170px] text-center flex-wrap mwsm4:justify-center mwsm4:gap-[15px] mwxxsm:flex-col">
          <a className="text-right text-[#808686] leading-[21px] mwsm4:order-1">الشروط والاحكام</a>
          <div className="flex items-center mwxxsm:flex-col mwxxsm:gap-[14px]">
            <div className="flex justify-center items-center gap-[10px] w-[141px] h-[42px] bg-[#FF9F4B] rounded cursor-pointer">
              <span className="text-white text-right font-medium text-sm mwsm4:order-2">كن كاتبا معنا</span>
            </div>
            <div className="w-[42px] h-0 border border-solid border-[#e9e9e9] rotate-90 flex-none order-1 self-stretch flex-grow-0 m-auto mwxxsm:hidden"></div>
            <div className="w-[180px] gap-3 flex flex-row items-center flex-none order-2 self-stretch flex-grow-0">
              <div className="flex items-center justify-center gap-[10px] w-9 h-9 bg-[#fafafa] border border-solid border-[#eceeed] rounded-[30px] cursor-pointer">
                <img className="w-4 h-4 text-[#404343]" src="./icons/twitter.svg" alt="" />
              </div>
              <div className="flex items-center justify-center gap-[10px] w-9 h-9 bg-[#fafafa] border border-solid border-[#eceeed] rounded-[30px] cursor-pointer">
                <img
                  className="w-4 h-4 text-[#404343]"
                  src="./icons/instgram.svg"
                  alt=""
                />
              </div>
              <div className="flex items-center justify-center gap-[10px] w-9 h-9 bg-[#fafafa] border border-solid border-[#eceeed] rounded-[30px] cursor-pointer">
                <img
                  className="w-4 h-4 text-[#404343]"
                  src="./icons/facebook.svg"
                  alt=""
                />
              </div>
              <div className="flex items-center justify-center gap-[10px] w-9 h-9 bg-[#fafafa] border border-solid border-[#eceeed] rounded-[30px] cursor-pointer">
                <img className="w-4 h-4 text-[#404343]" src="./icons/mail2.svg" alt="" />
              </div>
            </div>
          </div>
          <span className="font-normal text-sm leading-[21px] text-[#808686] mwsm4:order-2">
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
