import React, {useEffect} from 'react';

import styled, {css} from 'styled-components';
import PropTypes from 'prop-types';

import {Link} from 'gatsby';
import NavigationDropdown from './NavigationDropdown';
import NavigationLink from './NavigationLink';

import ROUTES from '../../routes';

import {MARGINS, BLACK, GREY80} from '../../styles/global';

import Logo from '../../../assets/images/sep-logo-large.png';

import './Menu.css';

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
        style={{display: 'flex', textDecoration: 'none', color: `${BLACK}`}}
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

  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden';
      document.body.style.position = 'relative';
      document.documentElement.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  });

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
  return (
    <StyledMenu open={open}>
      <SideBarContainer>
        <Link to="/" style={{textDecoration: 'none'}}>
          <div className="Home">Home</div>
        </Link>
      </SideBarContainer>

      <Border />

      <SideBarContainer>
        <SidebarMenuItemCover>Members</SidebarMenuItemCover>
        <Link to="/exec" style={{textDecoration: 'none'}}>
          <div className="Subtext">Executive Board</div>
        </Link>

        <Link to="/members" style={{textDecoration: 'none'}}>
          <div className="Subtext">Active Members</div>
        </Link>

        <Link to="/sister-chapters" style={{textDecoration: 'none'}}>
          <div className="Bottom">Sister Chapters</div>
        </Link>
      </SideBarContainer>

      <Border2 />

      <SideBarContainer>
        <SidebarMenuItemCover>Entrepreneurship</SidebarMenuItemCover>

        <Link to="/ventures" style={{textDecoration: 'none'}}>
          <div className="Subtext">Ventures</div>
        </Link>

        <Link to="/careers" style={{textDecoration: 'none'}}>
          <div className="Subtext">Careers</div>
        </Link>

        <Link to="http://bruintank.com/" style={{textDecoration: 'none'}}>
          <div className="Bottom">Bruin Tank</div>
        </Link>
      </SideBarContainer>

      <Border />

      <SideBarContainer>
        <Link to="/recruitment" style={{textDecoration: 'none'}}>
          <div className="Recruitment">Recruitment</div>
        </Link>
      </SideBarContainer>
    </StyledMenu>
  );
}

Menu.propTypes = {
  open: PropTypes.string.isRequired,
};

const MyComponent = ({activePage}) => {
  const [width, setWidth] = React.useState(window.innerWidth);
  const breakpoint = 1024;

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

const SideBarContainer = styled.div`
  margin: 0;
`;
const MobileContainer = styled.div`
  margin: ${MARGINS.ms} ${MARGINS.s};
  margin-bottom: ${MARGINS.s};
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const SidebarMenuItemCover = styled.li`
  padding-left: ${MARGINS.s};
  color: ${GREY80};
  display: flex;
  height: 20px;
  width: 100%;
  align-items: center;
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
  padding-right: 6rem;
  padding-top: 5rem;
  position: absolute;
  top: -10px;
  right: -10px;
  transition: transform 0.3s ease-in-out;
  box-shadow: ${({open}) => (open ? '-10px 0px 10px 1px #aaaaaa' : '')};

  ${props =>
    props.open &&
    css`
      * {
        overflow: hidden;
      }
    `}
`;

export default MyComponent;
