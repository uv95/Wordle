import React, { useState } from "react";
import ButtonDiv from "./ButtonDiv";

function Button({ children, onClick }) {
  const [hover, setHover] = useState(false);
  return (
    <ButtonDiv
      hover={hover}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      onClick={onClick}
    >
      {children}
    </ButtonDiv>
  );
}

export default Button;
