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
            <h3>VIỆN PHÁT TRIỂN GIÁO DỤC NGHỀ NGHIỆP SAPIAS</h3>
            <p>Điện thoại : 0967 522 522</p>
            <p>Email : info@sapias.io.vn</p>
            <p>Địa chỉ : 22 Lương Thế Vinh - Thanh Xuân - Hà Nội</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
