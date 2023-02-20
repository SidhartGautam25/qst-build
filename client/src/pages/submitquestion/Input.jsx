import React from "react";
import imagepc from "../../assets/image-pc.png";


const Input = () => {
  return (
    <>
      <div className="cover_rectangle2">
        <div className="section-1">
          <h1>Submit Your Question:</h1>

          <input
            className="section-2-1_inp"
            placeholder="Enter your Question here!"
          />
        </div>
        <div className="section-2">
          <div className="section-2-2">
            <input className="section-2-2_inp" type="file" />
            <label htmlFor="file">
              <i className="fa-regular fa-image"></i>
              &nbsp; Upload Here
            </label>
          </div>
          <div className="section-2-1">
            <img src={imagepc} className="pcimage" />
          </div>
          <div className="section-2-2_drop input-btn">
            <select className="select-input" name="cars" id="cars">
              <option value="Others">Others</option>
              <option value="JavaScript">JavaScript</option>
              <option value="C++">C++</option>
              <option value="Python">Python</option>
            </select>
          </div>
          <h2 className="sect-desc">
            Enter your Doubt in detail and select the topic the doubt is related
            to. You may also add an image related to that doubt.
          </h2>
          <button
            className=" submit gpt3__header-content__input-ask"
            type="button"
          >
            SUBMIT
          </button>
        </div>
      </div>
    </>
  );
};

export default Input;
