// import React, {useState} from "react";
import React from "react";

export default function About(props) {
  let myStyle = {
    color: props.mode === "dark" ? "white" : " #1c3556",
    backgroundColor: props.mode === "dark" ? " #030824" : "white",
    border: "1px solid",
    borderColor: props.mode === "dark" ? "white" : " #030824",
  };

  // const [myStyle,setMyStyle]=useState({
  // color: "black",
  // backgroundColor: "white",
  // })
  // const [btnText, setBtnText] = useState("Enable Dark Mode")

  // const toggleStyle= ()=>{
  //     if(myStyle.color === 'black'){
  //       setMyStyle(
  //           {
  //               color:'white',
  //               backgroundColor:'black',
  //               border: '0.5px solid white'
  //           }
  //       )
  //       setBtnText("Enable Light Mode");
  //     }
  //     else{
  //       setMyStyle(
  //         {
  //             color:'black',
  //             backgroundColor:'white'
  //         }
  //         )
  //      setBtnText("Enable Dark Mode");
  //     }

  // }
  // #1c3556

  return (
    <div
      className="container"
      style={{ color: props.mode === "dark" ? "white" : " black" }}
    >
      <h1 className="my-3">About</h1>
      <div className="accordion" id="accordionExample">
        <div className="accordion-item" style={myStyle}>
          <h2 className="accordion-header" id="headingOne">
            <button
              className="accordion-button"
              style={myStyle}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              Analze your text
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse show"
            aria-labelledby="headingOne"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              <strong>This is the first item's accordion body.</strong> It is
              shown by default, until the collapse plugin adds the appropriate
              classes that we use to style each element. These classes control
            </div>
          </div>
        </div>
        <div className="accordion-item" style={myStyle}>
          <h2 className="accordion-header" id="headingTwo">
            <button
              className="accordion-button collapsed"
              style={myStyle}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
            >
              Free To Use
            </button>
          </h2>
          <div
            id="collapseTwo"
            className="accordion-collapse collapse"
            aria-labelledby="headingTwo"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              <strong>This is the second item's accordion body.</strong> It is
              hidden by default, until the collapse plugin adds the appropriate
              classes that we use to style each element. These classes control
            </div>
          </div>
        </div>
        <div className="accordion-item" style={myStyle}>
          <h2 className="accordion-header" id="headingThree">
            <button
              className="accordion-button collapsed"
              style={myStyle}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
            >
              Browser Compatible
            </button>
          </h2>
          <div
            id="collapseThree"
            className="accordion-collapse collapse"
            aria-labelledby="headingThree"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              <strong>This is the third item's accordion body.</strong> It is
              hidden by default, until the collapse plugin adds the appropriate
              classes that we use to style each element. These classes control
              the overall appearance, as well as the showing and hiding via CSS
            </div>
          </div>
        </div>
      </div>
      {/* <div className="container">
        <button onClick={toggleStyle}  type="button" className="btn btn-primary my-3">
          {btnText}
        </button>
      </div> */}
    </div>
  );
}
