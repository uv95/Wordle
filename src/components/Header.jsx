import React, { useEffect } from "react";
import styled from "styled-components";
import { FiSettings } from "react-icons/fi";
import { FiBarChart2 } from "react-icons/fi";
import { FiHelpCircle } from "react-icons/fi";
import { useSelector, useDispatch } from "react-redux";
import {
  toggleSetting,
  toggleStats,
  toggleInfo,
} from "../store/modals/modals-actions";
import { toggleLanguage } from "../store/language/language-actions";
import Button from "./Button";
import Languages from "./languages/Languages";
import gb from "../img/gb.svg";
import ru from "../img/ru.svg";
import { languages } from "../config";

const HeaderEl = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 25rem;
  margin: 0 auto;
  background-color: var(--color-bg);
  color: var(--color-text);
`;

const FlexContainer = styled.div`
  display: flex;
  gap: 2rem;
`;

const ImgContainer = styled.div`
  width: 2rem;
`;

function Header() {
  const dispatch = useDispatch();
  const { language, languagesOpen } = useSelector((state) => state.language);
  const theme = useSelector((state) => state.theme);

  useEffect(() => {
    document.body.setAttribute("data-theme", theme);
  }, [theme]);

  const openLanguagesModal = () => dispatch(toggleLanguage(true));

  return (
    <HeaderEl>
      <Button onClick={openLanguagesModal}>
        <ImgContainer>
          <img src={language === "English" ? gb : ru} alt="country flag" />
        </ImgContainer>
        {languages[language.toLowerCase()].short}
      </Button>
      {languagesOpen && <Languages />}
      <FlexContainer>
        <Button>
          <FiSettings onClick={() => dispatch(toggleSetting(true))} />
        </Button>
        <Button>
          <FiBarChart2 onClick={() => dispatch(toggleStats(true))} />
        </Button>
        <Button>
          <FiHelpCircle onClick={() => dispatch(toggleInfo(true))} />
        </Button>
      </FlexContainer>
    </HeaderEl>
  );
}

export default Header;
