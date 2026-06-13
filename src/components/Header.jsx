import { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const closeMenu = () => setMobileMenuOpen(false);

  return (
    <header className="header" id="header">
      {/* Top Bar */}
      <div className="header-top">
        <div className="container top-bar-container">
          <ul className="top-nav-left">
            <li><NavLink to="/" end>Trang chủ</NavLink></li>
            <li><NavLink to="/about">Giới thiệu</NavLink></li>
          </ul>
          <div className="top-nav-right">
            <div className="search-box">
              <i className="fas fa-search"></i>
              <input type="text" placeholder="Search..." />
            </div>
            <div className="social-icons">
              <a href="#"><i className="fab fa-facebook-f"></i></a>
              <a href="#"><i className="fab fa-instagram"></i></a>
              <a href="#"><i className="fab fa-twitter"></i></a>
              <a href="#"><i className="fas fa-envelope"></i></a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header (Logo) */}
      <div className="header-main">
        <div className="container logo-center">
          <Link to="/" className="logo" onClick={closeMenu} style={{ textDecoration: 'none' }}>
            <h1 style={{ color: 'white', margin: 0, fontSize: '28px', fontWeight: 'bold', textShadow: '2px 2px 4px rgba(0,0,0,0.6)', padding: '20px 0' }}>
              TRUNG TÂM NHẬT NGỮ & DU HỌC ICHIKI
            </h1>
          </Link>
          <button className="mobile-toggle" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            <i className={`fas ${mobileMenuOpen ? 'fa-times' : 'fa-bars'}`}></i>
          </button>
        </div>
      </div>

      {/* Bottom Navigation */}
      <div className="header-bottom">
        <div className="container">
          <nav className={`navbar ${mobileMenuOpen ? 'active' : ''}`} id="navbar">
            <ul className="nav-list">
              <li><NavLink to="/" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`} onClick={closeMenu}>Trang Chủ</NavLink></li>
              <li><NavLink to="/about" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`} onClick={closeMenu}>Hội viên hiệp hội</NavLink></li>
              <li><NavLink to="/courses" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`} onClick={closeMenu}>Hợp tác đào tạo</NavLink></li>
              <li><NavLink to="/about" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`} onClick={closeMenu}>Hợp tác quốc tế</NavLink></li>
              <li><NavLink to="/about" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`} onClick={closeMenu}>Nghiên cứu khoa học</NavLink></li>
              <li><NavLink to="/courses" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`} onClick={closeMenu}>Bồi dưỡng ngắn hạn</NavLink></li>
              <li><NavLink to="/courses" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`} onClick={closeMenu}>Thông tin tuyển sinh</NavLink></li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
