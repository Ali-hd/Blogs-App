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
        <section className="blog-comments-section">
          <div className="blog-comments-header">
            <h2>التعليقات ( {comments.length} )</h2>
            <div></div>
          </div>
          {comments.map((comment, i) => {
            return (
              <React.Fragment key={i}>
                <div className="blog-comment">
                  <div className="blog-comment-header">
                    <span>{comment.name}</span>
                    <div className="comment-date">
                      <span>منذ يوم</span>
                      <img src="./icons/clock.svg" alt="clock" />
                    </div>
                  </div>
                  <p>{comment.comment}</p>
                </div>
                <div className="blog-divider"></div>
              </React.Fragment>
            );
          })}
        </section>
      ) : (
        <div className="no-comments">لا توجد تعليقات </div>
      )}
      <div className="comment-form-wrap">
        {status != "loading" && comments.length < 1 ? (
          <div className="comment-form-header">
            <div></div>
            <h2>كن اول من يعلق</h2>
          </div>
        ) : null}
        <div className="comment-form">
          <form ref={commentFormRef} onSubmit={handleSubmitComment}>
            <div className="comment-input-container">
              <label htmlFor="comment">اكتب تعليقك</label>
              <textarea
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
                    <span key={"comment"} className="error-msg">
                      {err.msg}
                    </span>
                  );
                }
              })}
            </div>
            <div className="comment-user-container">
              <div className="comment-user-info">
                <label htmlFor="name">الاسم</label>
                <input
                  ref={nameRef}
                  type="text"
                  name="name"
                  placeholder="برجاء ادخال الاسم"
                />
                {errors.map((err) => {
                  if (err.field == "name") {
                    return (
                      <span key={"name"} className="error-msg">
                        {err.msg}
                      </span>
                    );
                  }
                })}
              </div>
              <div className="comment-user-info">
                <label htmlFor="email">البريد الالكترونى</label>
                <input
                  ref={emailRef}
                  type="text"
                  name="email"
                  placeholder="برجاء ادخال البريد الالكترونى"
                />
                {errors.map((err) => {
                  if (err.field == "email") {
                    return (
                      <span key={"email"} className="error-msg">
                        {err.msg}
                      </span>
                    );
                  }
                })}
              </div>
            </div>
            <div
              className="comment-submit-btn"
              style={
                errors.length > 0
                  ? { marginTop: "10px" }
                  : status == "loading"
                  ? { cursor: "not-allowed" }
                  : null
              }
            >
              <input
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
