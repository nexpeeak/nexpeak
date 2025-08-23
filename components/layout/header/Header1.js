import Link from 'next/link';
import Menu from '../Menu';
import MobileMenu from '../MobileMenu';

export default function Header1({
  scroll,
  isMobileMenu,
  handleMobileMenu,
  isSidebar,
  handlePopup,
  handleSidebar,
}) {
  return (
    <header
      className={`main-header main-header-one ${scroll ? 'fixed-header' : ''}`}
    >
      <div className={`sticky-header menu-area ${scroll ? 'sticky-menu' : ''}`}>
        <div className="auto-container">
          <div className="menu-area__inner">
            <div className="mobile-nav-toggler" onClick={handleMobileMenu}>
              <i className="fas fa-bars" />
            </div>
            <div className="menu-wrap">
              <nav className="menu-nav">
                <div className="main-header-one__inner">
                  <div className="main-header-one__left">
                    <div className="logo-box-one">
                      <Link href="/">
                        <img
                          src="/images/logo.png"
                          alt="Logo"
                          style={{ height: '70px', width: '185px' }}
                        />
                      </Link>
                    </div>

                    <div className="navbar-wrap main-menu">
                      <Menu />
                    </div>
                  </div>

                  <div className="main-header-one__right">
                    
                    <div className="btn-box">
                      <Link href="/contact" className="thm-btn">
                        Get a Appointment
                        <span className="thm-btn__icon">
                          <i className="icon-icon-8"></i>
                        </span>
                        <span className="thm-btn__hover-group">
                          <span className="thm-btn__hover thm-btn__hover--1"></span>
                          <span className="thm-btn__hover thm-btn__hover--2"></span>
                          <span className="thm-btn__hover thm-btn__hover--3"></span>
                          <span className="thm-btn__hover thm-btn__hover--4"></span>
                        </span>
                      </Link>
                    </div>
                  </div>
                </div>
              </nav>
            </div>
          </div>

          <MobileMenu
            handleMobileMenu={handleMobileMenu}
            handleSidebar={handleSidebar}
            isSidebar={isSidebar}
          />
        </div>
      </div>
    </header>
  );
}
