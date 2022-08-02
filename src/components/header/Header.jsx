import React from "react";
import styled from "styled-components";
import { FiSettings } from "react-icons/fi";
import { FiBarChart2 } from "react-icons/fi";
import { FiHelpCircle } from "react-icons/fi";
import { useSelector, useDispatch } from "react-redux";
import {
  toggleSetting,
  toggleStats,
  toggleInfo,
} from "../../store/modals/modals-actions";

const HeaderEl = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  width: 50%;
  margin: 0 auto;
  background-color: var(--color-bg);
  color: var(--color-text);
`;

const FlexContainer = styled.div`
  display: flex;
  gap: 2rem;
`;

const Button = styled.header`
  border-radius: 30%;
  height: 4rem;
  min-weight: 4rem;
  font-size: 2rem;
  background-color: var(--color-btn);
  padding: 0.8rem;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

function Header() {
  const dispatch = useDispatch();

  return (
    <HeaderEl>
      <div>
        <Button>EN</Button>
      </div>
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
