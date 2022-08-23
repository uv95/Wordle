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
  toggleLanguage,
} from "../store/modals/modals-actions";
import Button from "./Button";
import Languages from "./modal/languages/Languages";
import gb from "../img/gb.svg";
import ru from "../img/ru.svg";
import { languages } from "../config";

const HeaderWrapper = styled.header`
  display: flex;
  height: 6rem;
  justify-content: center;
  align-items: center;
  background-color: var(--color-bg);
  color: var(--color-text);
`;

const HeaderContainer = styled.div`
  width: 50%;
  display: flex;
  justify-content: space-between;
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
  const { language } = useSelector((state) => state.language);
  const theme = useSelector((state) => state.theme);

  useEffect(() => {
    document.body.setAttribute("data-theme", theme);
  }, [theme]);

  return (
    <HeaderWrapper>
      <HeaderContainer>
        <Button onClick={() => dispatch(toggleLanguage(true))}>
          <ImgContainer>
            <img src={language === "English" ? gb : ru} alt="country flag" />
          </ImgContainer>
          {languages[language.toLowerCase()].short}
        </Button>
        <Languages />
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
      </HeaderContainer>
    </HeaderWrapper>
  );
}

export default Header;
