import { useState } from "react";
import Modal from "./Modal";
import Backdrop from "./Backdrop";

function Todo(props) {
  const [modalIsOpen, setModalIsOpen] = useState(false); //since initially we want the modal to be close
  function deleteHandler() {
    setModalIsOpen(true);
  }

  function closeModalHandler() {
    setModalIsOpen(false);
  }
  return (
    <div className="card">
      <h2>{props.text}</h2>
      <div className="actions">
        <button className="btn" onClick={deleteHandler}>
          Delete
        </button>
      </div>
      {modalIsOpen ? (
        <Modal onCancel={closeModalHandler} onConfirm={closeModalHandler} />
      ) : null}
      {modalIsOpen && <Backdrop onClick={closeModalHandler} />}
    </div>
  );
}

export default Todo;

//name of the component should start with capital letter
//props for passing parameter in components as we do in function
//props is an object where all the attributes are present as key value pair
//that means whatever parameters we pass while using components
//so for props.text not be treated as plain text we can put it into
//{} braces we can only have single line expression here
//{modalIsOpen ? <Modal /> : null} shortcut of this {modalIsOpen &&<Modal/>}
//we can't add onClick to our own component they don't have such event listeners
//although we don't have onClick but we can have out own customised event listener which we can pass as components
//here we can name onClick as onCancel also
//this is how we can pass a function to another function and also to another components using props
