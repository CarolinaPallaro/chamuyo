// import { ButtonExit } from "../buttons"



const ModalsTxt = ({ toggleModal, text, paragraphs }) => {
    const close = "/imgs/close.svg";
  
    return (
        <div className="modal">
        {text && <h2>{text}</h2>}
        {paragraphs && paragraphs.map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
        
        <img
          className="exit-button"
          onClick={toggleModal}
          src={close}
          alt="close"
        />
      </div>
    );
  };
  
  export { ModalsTxt };


