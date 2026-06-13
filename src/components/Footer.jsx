import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="footer" style={{ padding: 0 }}>
      {/* 3 colored banners */}
      <div className="footer-banners">
        <div className="footer-banner blue">TT KIỂM ĐỊNH CHẤT LƯỢNG GIÁO DỤC NGHỀ NGHIỆP</div>
        <div className="footer-banner green">TRUNG TÂM TIN HỌC VÀ NGOẠI NGỮ</div>
        <div className="footer-banner orange">TT DỰ BÁO VÀ CUNG ỨNG NGUỒN NHÂN LỰC</div>
      </div>

      <div className="footer-content-custom">
        <div className="container footer-columns">
          <div className="footer-col-left">
            <h3>VIỆN PHÁT TRIỂN GIÁO DỤC NGHỀ NGHIỆP ICHIKI</h3>
            <p>Điện thoại : 0905 010 815</p>
            <p>Email : info@ichiki.io.vn</p>
            <p>Địa chỉ : 43 Nguyễn Văn Tuyết - Đống Đa - Hà Nội</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
