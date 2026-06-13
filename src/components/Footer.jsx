import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div className="footer-col">
          <Link to="/" className="logo footer-logo">
            <span className="logo-text text-white">ICHIKI</span>
          </Link>
          <p className="footer-desc">Trung tâm đào tạo ngôn ngữ và tư vấn du học Nhật Bản uy tín hàng đầu, là cầu nối vững chắc cho tương lai của bạn.</p>
          <div className="social-links">
            <a href="#"><i className="fab fa-facebook-f"></i></a>
            <a href="#"><i className="fab fa-tiktok"></i></a>
            <a href="#"><i className="fab fa-youtube"></i></a>
          </div>
        </div>
        
        <div className="footer-col">
          <h4 className="footer-heading">Liên kết nhanh</h4>
          <ul className="footer-links">
            <li><Link to="/">Trang chủ</Link></li>
            <li><Link to="/about">Về chúng tôi</Link></li>
            <li><Link to="/courses">Khóa học</Link></li>
            <li><Link to="/contact">Liên hệ</Link></li>
          </ul>
        </div>
        
        <div className="footer-col">
          <h4 className="footer-heading">Khóa học</h4>
          <ul className="footer-links">
            <li><Link to="/courses">Tiếng Nhật N5-N4</Link></li>
            <li><Link to="/courses">Luyện thi JLPT</Link></li>
            <li><Link to="/courses">Tiếng Nhật giao tiếp</Link></li>
            <li><Link to="/courses">Du học Nhật Bản</Link></li>
          </ul>
        </div>
        
        <div className="footer-col">
          <h4 className="footer-heading">Liên hệ</h4>
          <ul className="footer-contact">
            <li><i className="fas fa-map-marker-alt"></i> 25 Tân Định, Hồ Chí Minh, Việt Nam</li>
            <li><i className="fas fa-phone"></i> 0905688845</li>
            <li><i className="fas fa-envelope"></i> contact@ichiki.io.vn</li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="container">
          <p>&copy; {new Date().getFullYear()} Ichiki Education. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
