import React from "react";

function Modal({ setOpenModal }) {
  function villages(answer){
    if(answer = "Owner"){
      document.getElementById('village').style.display="none";
    }
  }
  return (
    <div className="modalBackground">
      <div className="modalContainer">
        <div className="titleCloseBtn">
          <button
            onClick={() => {
              setOpenModal(false);
            }}
          >
            X
          </button>
        </div>
        <div className="title">
          <h1>Sign-in</h1>
        </div>
        <form>
          <label for= "id">Id number: </label>
          <input type="text" id="id" name="id"></input><br/><br/>
          <label for= "password">Password: </label>
          <input type="password" id="password" name="password"></input><br/><br/>
          <label for= "id">Role: </label>
          <input name="ROLE" placeholder="Select" list="roles" onchange="villages(this.value)"/>
          <datalist id="roles">
          <option value="Owner"></option>
          <option value="Admin"></option>
          <option value="User"></option>
          </datalist><br/><br/>
          <div id="village"><label for= "village name">Village Name: </label>
          <input type="text" id="village" name="village"></input></div>
          <br/><br/><br/>
          <button>Submit</button>




        </form>
      </div>
    </div>
  );
}

export default Modal;
