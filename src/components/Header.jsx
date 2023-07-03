import React, { useEffect } from 'react';
import styled from 'styled-components';
import { FiSettings } from 'react-icons/fi';
import { FiBarChart2 } from 'react-icons/fi';
import { FiHelpCircle } from 'react-icons/fi';
import { useSelector, useDispatch } from 'react-redux';
import {
  toggleSetting,
  toggleStats,
  toggleInfo,
  toggleLanguage,
} from '../store/modals/modals-actions';
import Languages from './modal/languages/Languages';
import gb from '../img/gb.svg';
import ru from '../img/ru.svg';
import { Button } from './style-components/Button';
import { useTranslation } from 'react-i18next';

const HeaderWrapper = styled.header`
  display: flex;
  height: 6rem;
  justify-content: center;
  align-items: center;
  background-color: var(--color-bg);
  color: var(--color-text);
  width: 100%;
`;

const HeaderContainer = styled.div`
  width: 60%;
  display: flex;
  justify-content: space-between;

  @media (max-width: 33em) {
    width: 80%;
  }
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
  const theme = useSelector((state) => state.theme);
  const { t, i18n } = useTranslation();

  useEffect(() => {
    document.body.setAttribute('data-theme', theme);
  }, [theme]);

  return (
    <HeaderWrapper>
      <HeaderContainer>
        <Button onClick={() => dispatch(toggleLanguage(true))}>
          <ImgContainer>
            <img src={i18n.language === 'ru' ? ru : gb} alt="country flag" />
          </ImgContainer>
          {t('lang')}
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
