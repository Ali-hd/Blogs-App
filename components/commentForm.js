import React, { useRef, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getComments, submitComment } from "../redux/middleware/blogThunk";
import Loading from "./loading";
import validateCommentForm from "../utils/validator";

const CommentForm = () => {
  const { comments, status } = useSelector((state) => state.commentReducer);
  const dispatch = useDispatch();
  const commentRef = useRef("");
  const nameRef = useRef("");
  const emailRef = useRef("");
  const commentFormRef = useRef();
  const [errors, setErrors] = useState([]);

  useEffect(() => {
    dispatch(getComments());
  }, []);

  const handleSubmitComment = (e) => {
    e.preventDefault();

    const payload = {
      comment: commentRef.current.value,
      name: nameRef.current.value,
      email: emailRef.current.value,
    };

    const checkErrors = validateCommentForm(payload, []);

    setErrors(checkErrors);
    if (checkErrors.length < 1 && status != "loading") {
      dispatch(submitComment(payload));
      commentFormRef.current.reset();
    }
  };

  return (
    <>
      {status == "loading" ? (
        <Loading spinnerSize={25} />
      ) : comments.length > 0 ? (
        <section className="flex flex-col items-end p-0 gap-5 max-w-[1050px] w-full mwlg:px-[15px] mwlg:w-[95%]">
          <div className="flex items-center p-0 gap-2 max-w-[1050px] h-[30px]">
            <h2 className="font-normal text-[20px] leading-[30px] text-black m-0">التعليقات ( {comments.length} )</h2>
            <div className="h-[21px] w-[3px] bg-[#5dd5c4] border border-solid border-[#5dd5c4]"></div>
          </div>
          {comments.map((comment, i) => {
            return (
              <React.Fragment key={i}>
                <div className="flex flex-col items-end gap-2 w-full max-w-[1050px]">
                  <div className="flex flex-row-reverse justify-between items-center w-full gap-4 h-[27px]">
                    <span className="font-normal text-lg leading-[27px] text-right">{comment.name}</span>
                    <div className="flex justify-center items-center p-0 gap-1 text-[#a0a8a7]">
                      <span className="text-sm leading-[21px]">منذ يوم</span>
                      <img src="./icons/clock.svg" alt="clock" />
                    </div>
                  </div>
                  <p className="font-normal text-sm leading-[21px] text-right text-[#606564]">{comment.comment}</p>
                </div>
                <div className="max-w-[1050px] w-full h-0 border border-solid border-[#eeeeee]"></div>
              </React.Fragment>
            );
          })}
        </section>
      ) : (
        <div className="text-right w-full text-[15px] leading-[21px] text-[#202221]">لا توجد تعليقات </div>
      )}
      <div className="w-full flex flex-col gap-5 max-h-[400px]">
        {status != "loading" && comments.length < 1 ? (
          <div className="flex items-center gap-2 flex-row-reverse">
            <div className="w-[3px] h-[21px] bg-[#5dd5c4]"></div>
            <h2 className="font-normal text-xl leading-[30px] text-right text-black">كن اول من يعلق</h2>
          </div>
        ) : null}
        <div className="relative mwlg:px-[15px]">
          <form className="flex flex-col gap-5" ref={commentFormRef} onSubmit={handleSubmitComment}>
            <div className="flex flex-col gap-[10px] w-full h-[155px] text-right">
              <label className="text-sm leading-[21px] text-[#202221]" htmlFor="comment">اكتب تعليقك</label>
              <textarea
              style={{'direction': 'rtl'}}
              className="font-mono p-3 border border-solid border-[#e9e9e9] rounded outline-none placeholder:font-normal placeholder:text-xs placeholder:leading-[18px] placeholder:text-[#b3b9b9]"
                ref={commentRef}
                name="comment"
                id=""
                cols="30"
                rows="10"
                placeholder="برجاء كتابة التعليق الخاص بك"
              ></textarea>
              {errors.map((err) => {
                if (err.field == "comment") {
                  return (
                    <span key={"comment"} className="font-normal text-sm text-right text-error mt-[-10px] mb-[10px]">
                      {err.msg}
                    </span>
                  );
                }
              })}
            </div>
            <div className="flex flex-row-reverse gap-[15px] h-[73px] mwsm1:flex-col mwsm1:items-center mwsm1:h-auto">
              <div className="flex flex-col gap-[10px] min-w-[300px] w-full text-right">
                <label className="text-sm leading-[21px] text-[#202221]" htmlFor="name">الاسم</label>
                <input
                  style={{'direction':'rtl'}}
                  className="font-mono p-3 border border-solid border-[#e9e9e9] rounded outline-none placeholder:font-normal placeholder:text-xs placeholder:leading-[18px] placeholder:text-[#b3b9b9]"
                  ref={nameRef}
                  type="text"
                  name="name"
                  placeholder="برجاء ادخال الاسم"
                />
                {errors.map((err) => {
                  if (err.field == "name") {
                    return (
                      <span key={"name"} className="font-normal text-sm text-right text-error mt-[-10px] mb-[10px]">
                        {err.msg}
                      </span>
                    );
                  }
                })}
              </div>
              <div className="flex flex-col gap-[10px] min-w-[300px] w-full text-right">
                <label className="text-sm leading-[21px] text-[#202221]" htmlFor="email">البريد الالكترونى</label>
                <input
                  style={{'direction':'rtl'}}
                  className="font-mono p-3 border border-solid border-[#e9e9e9] rounded outline-none placeholder:font-normal placeholder:text-xs placeholder:leading-[18px] placeholder:text-[#b3b9b9]"
                  ref={emailRef}
                  type="text"
                  name="email"
                  placeholder="برجاء ادخال البريد الالكترونى"
                />
                {errors.map((err) => {
                  if (err.field == "email") {
                    return (
                      <span key={"email"} className="font-normal text-sm text-right text-error mt-[-10px] mb-[10px]">
                        {err.msg}
                      </span>
                    );
                  }
                })}
              </div>
            </div>
            <div
              className="flex flex-row-reverse items-start"
              style={
                errors.length > 0
                  ? { marginTop: "10px" }
                  : status == "loading"
                  ? { cursor: "not-allowed" }
                  : null
              }
            >
              <input
              className="px-[64px] bg-[#5DD5C4] rounded outline-none max-w-[242px] min-w-[189px] h-[42px] border-2 border-solid border-[#5DD5C4] font-normal text-sm leading-[21px] text-white cursor-pointer"
                type="submit"
                value={status == "submittingComment" ? " " : "أضف تعليقك"}
              />
            </div>
          </form>
          {status == "submittingComment" ? (
            <Loading
              style={{ position: "absolute", right: "80px", bottom: "7px" }}
              spinnerSize={19}
            />
          ) : null}
        </div>
      </div>
    </>
  );
};

export default CommentForm;

// position: absolute;
// right: 80px;
// bottom: 5px;
// }
