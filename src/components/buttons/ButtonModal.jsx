import React, { useState } from 'react';
import { ModalsTxt } from '../modals/ModalsTxt';

const ButtonModal = ({text, paragraphs, image}) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="button-modal">
      <img
        className="brillo-svg"
        onClick={toggleModal}
        src="/imgs/brillo.svg"
        alt="brillos"
      />
      {isOpen &&
       <ModalsTxt
        toggleModal={toggleModal}
        text={text}
        paragraphs={paragraphs}
        image={image}
       />
      }
       
    </div>
  );
};
export { ButtonModal };


