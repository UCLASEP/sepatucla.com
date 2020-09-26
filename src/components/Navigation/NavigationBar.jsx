import React, {useState} from 'react';
import {Link} from 'gatsby';

import styled from 'styled-components';
import PropTypes from 'prop-types';

import {FaChevronUp, FaChevronDown} from 'react-icons/fa';
import Collapsible from 'react-collapsible';
import NavigationDropdown from './NavigationDropdown';
import NavigationLink from './NavigationLink';

import ROUTES from '../../routes';

import {MARGINS, BLACK, HOVER_GREEN, GREY70, GREY80} from '../../styles/global';

import Logo from '../../../assets/images/sep-logo-large.png';

import './Menu.css'; // Tell webpack that Button.js uses these styles

const NavigationLinkWrapper = ({activePage, linkText, to, options, slug}) => (
  <div>
    {options.length > 0 ? (
      <NavigationDropdown
        activePage={activePage}
        options={options}
        text={linkText}
      />
    ) : (
      <NavigationLink
        isActive={activePage === slug}
        to={to}
        linkText={linkText}
      />
    )}
  </div>
);

NavigationLinkWrapper.propTypes = {
  activePage: PropTypes.string.isRequired,
  linkText: PropTypes.string.isRequired,
  to: PropTypes.string,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      linkText: PropTypes.string.isRequired,
      slug: PropTypes.string.isRequired,
      to: PropTypes.string.isRequired,
    })
  ).isRequired,
  slug: PropTypes.string,
};

NavigationLinkWrapper.defaultProps = {
  to: null,
  slug: null,
};

const NavigationBar = ({activePage}) => (
  <Container>
    <Section>
      <Link
        style={{display: 'flex', 'text-decoration': 'none', color: `${BLACK}`}}
        to="/"
      >
        <LogoImg src={Logo} alt="SEP Logo" />
        <div>Sigma Eta Pi</div>
      </Link>
    </Section>
    <Section>
      {Object.entries(ROUTES).map(([key, linkObj]) => (
        <NavigationLinkWrapper
          key={key}
          activePage={activePage}
          to={linkObj.to}
          options={linkObj.options}
          linkText={linkObj.linkText}
          slug={linkObj.slug}
        />
      ))}
    </Section>
  </Container>
);

const MobileNavigationBar = () => {
  const [open, setOpen] = React.useState(false);
  const node = React.useRef();
  return (
    <MobileContainer>
      <Section>
        <Link
          style={{
            display: 'flex',
            'text-decoration': 'none',
            color: `${BLACK}`,
          }}
          to="/"
        >
          <LogoImg src={Logo} alt="SEP Logo" />
          <div>Sigma Eta Pi</div>
        </Link>
      </Section>
      <Section>
        <div ref={node}>
          <Menu open={open} setOpen={setOpen} />
          <Burger open={open} setOpen={setOpen} />
        </div>
      </Section>
    </MobileContainer>
  );
};

const Burger = ({open, setOpen}) => {
  return (
    <StyledBurger open={open} onClick={() => setOpen(!open)}>
      <div />
      <div />
      <div />
    </StyledBurger>
  );
};

Burger.propTypes = {
  open: PropTypes.string.isRequired,
  setOpen: PropTypes.string.isRequired,
};

function Menu({open}) {
  const [chevron, setChevron] = useState(false);

  const [entre, setEntre] = useState(false);

  function handleClick() {
    setChevron(prevState => !prevState);
    console.log('collapse');
  }

  function handleClick2() {
    setEntre(prevState => !prevState);
    console.log('test');
  }

  return (
    <StyledMenu open={open}>
      <SideBarContainer>
        <SidebarMenuItem>Home</SidebarMenuItem>
      </SideBarContainer>

      <Border />

      <SideBarContainer onClick={() => handleClick()}>
        <Chevron>{chevron ? <FaChevronUp /> : <FaChevronDown />}</Chevron>
        <Collapsible trigger="Members" transitionTime="300">
          <p style={{marginLeft: '-8px'}}>Executive Board</p>
          <p style={{marginLeft: '-8px'}}>Active Members</p>
          <p style={{marginLeft: '-8px'}}>Sister Chapters</p>
        </Collapsible>
      </SideBarContainer>

      <Border2 />

      <SideBarContainer onClick={() => handleClick2()}>
        <Chevron2>{entre ? <FaChevronUp /> : <FaChevronDown />}</Chevron2>
        <Collapsible trigger="Entrpreneurship" transitionTime="300">
          <a
            href="https://www.facebook.com/sigmaetapi/"
            rel="noopener noreferrer"
            target="_blank"
          >
            <p style={{marginLeft: '-8px'}}>Ventures</p>
          </a>
          <p style={{marginLeft: '-8px'}}>Careers</p>
          <p style={{marginLeft: '-8px'}}>BruinTank</p>
        </Collapsible>
      </SideBarContainer>

      <Border />

      <SideBarContainer>
        <SidebarMenuItem>Recruitment</SidebarMenuItem>
      </SideBarContainer>
    </StyledMenu>
  );
}

Menu.propTypes = {
  open: PropTypes.string.isRequired,
};

const MyComponent = ({activePage}) => {
  const [width, setWidth] = React.useState(window.innerWidth);
  const breakpoint = 768;

  React.useEffect(() => {
    const handleWindowResize = () => setWidth(window.innerWidth);
    window.addEventListener('resize', handleWindowResize);

    // Return a function from the effect that removes the event listener
    return () => window.removeEventListener('resize', handleWindowResize);
  }, []);

  return width < breakpoint ? (
    <MobileNavigationBar />
  ) : (
    <NavigationBar activePage={activePage} />
  );
};

MyComponent.propTypes = {
  activePage: PropTypes.string.isRequired,
};

NavigationBar.propTypes = {
  activePage: PropTypes.string.isRequired,
};

const Container = styled.div`
  margin: ${MARGINS.m} ${MARGINS.l};
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const SideBarContainer = styled.div``;
const MobileContainer = styled.div`
  margin: ${MARGINS.ms} ${MARGINS.s};
  margin-bottom: ${MARGINS.s};
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const SidebarMenuItem = styled.li`
  padding-left: ${MARGINS.s};
  color: ${GREY80};
  display: flex;
  height: 20px;
  width: 100%;
  align-items: center;
  &:hover {
    color: ${HOVER_GREEN};
    cursor: pointer;
  }
`;
const Chevron = styled.div`
  color: ${GREY70};
  padding-right: 30px;
  position: absolute;
  top: 10;
  right: 0;
`;

const Chevron2 = styled.div`
  color: ${GREY70};
  padding-right: 30px;
  position: absolute;
  top: 19;
  right: 0;
`;

const Border = styled.div`
  height: 2.5px;
  width: 250%;
  background-color: #f2f2f2;
`;

const Border2 = styled.div`
  height: 3.5px;
  width: 250%;
  background-color: #f2f2f2;
`;

const Section = styled.div`
  display: flex;
  align-items: center;

  * {
    margin: 8px;
  }
  @media (max-width: 768px) {
    margin-right: 8px;
    margin-top: 8px;
  }
`;

const LogoImg = styled.img`
  width: 50px;
  height: 31px;
`;

const StyledBurger = styled.button`
  justify-content: space-around;
  width: 2rem;
  height: 2rem;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 10;

  &:focus {
    outline: none;
  }

  div {
    width: 2rem;
    height: 0.25rem;
    background: ${({open}) => (open ? '#828282' : '#828282')};
    border-radius: 10px;
    transition: all 0.3s linear;
    position: relative;
    transform-origin: -0.85px;

    :first-child {
      transform: ${({open}) => (open ? 'rotate(45deg)' : 'rotate(0)')};
    }

    :nth-child(2) {
      opacity: ${({open}) => (open ? '0' : '1')};
      transform: ${({open}) => (open ? 'translateX(20px)' : 'translateX(0)')};
    }

    :nth-child(3) {
      transform: ${({open}) => (open ? 'rotate(-45deg)' : 'rotate(0)')};
    }
  }
`;

const StyledMenu = styled.nav`
  display: flex;
  flex-direction: column;
  background: #fff;
  transform: translateX(100px);
  transform: ${({open}) => (open ? 'translateX(0%)' : 'translateX(100%)')};
  height: 100%;
  padding-right: 4rem;
  padding-top: 5rem;
  position: absolute;
  top: -10px;
  right: -10px;
  transition: transform 0.3s ease-in-out;
`;

export default MyComponent;
