import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    '/assets/vienatec/slide1.jpg',
    '/assets/vienatec/slide2.jpg',
    '/assets/vienatec/slide3.jpg'
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const tinTucList = [
    { id: 1, title: 'THÔNG BÁO TỔ CHỨC KỲ THI CHỨNG CHỈ MÔI GIỚI BẤT ĐỘNG SẢN 2024', image: 'https://vienatec.edu.vn/wp-content/uploads/2024/04/94df02b8-e98e-4f7c-8d45-ae98731e1e21-150x150.jpg', date: '13/12/2023', day: '01', month: 'Th6', slug: 'thong-bao-to-chuc-ky-thi' },
    { id: 2, title: 'Học chứng chỉ môi giới bất động sản ở đâu? Hướng dẫn tìm địa điểm học tốt nhất', image: 'https://vienatec.edu.vn/wp-content/uploads/2022/04/ccbds-150x150.jpg', date: '13/12/2023', day: '01', month: 'Th6', slug: 'hoc-chung-chi-moi-gioi' },
    { id: 3, title: 'THÔNG BÁO TUYỂN SINH CÁC LỚP BỒI DƯỠNG VÀ THI CẤP CHỨNG CHỈ TIẾNG DÂN TỘC THIỂU SỐ', image: 'https://vienatec.edu.vn/wp-content/uploads/2023/12/tieng-tay-150x150.jpg', date: '13/12/2023', day: '01', month: 'Th6', slug: 'thong-bao-tuyen-sinh-cac-lop' },
    { id: 4, title: 'Kết quả thi sát hạch cấp chứng chỉ hành nghề môi giới bất động sản đợt 01', image: 'https://vienatec.edu.vn/wp-content/uploads/2024/05/a3a32047f4263f246ad9385d4ffffa9btb-diem-thi-150x150.jpg', date: '13/12/2023', day: '01', month: 'Th6', slug: 'ket-qua-thi-sat-hach' },
    { id: 5, title: 'Lễ trao bằng tốt nghiệp cho học viên khóa 2022-2023', image: '/assets/vienatec/thumb1.jpg', date: '15/12/2023', day: '15', month: 'Th12', slug: 'le-trao-bang-tot-nghiep' },
    { id: 6, title: 'Hội thảo định hướng nghề nghiệp và cơ hội việc làm tại Nhật Bản', image: '/assets/vienatec/thumb1.jpg', date: '20/12/2023', day: '20', month: 'Th12', slug: 'hoi-thao-dinh-huong-nghe-nghiep' }
  ];

  const hiepHoilist = [
    { id: 1, title: 'Hội nghị tổng kết năm 2020 và Tọa đàm: "Chương trình hành động của Hiệp hội 2021 - 2023, Chia sẻ tài nguyên các cơ sở GDNN SAPIAS"', image: 'https://vienatec.edu.vn/wp-content/uploads/2021/04/h-300x225.jpg', date: '29/04/2021', day: '29', month: 'Th4', slug: 'hoi-nghi-tong-ket' },
    { id: 2, title: 'Đào tạo trực tuyến - Giải pháp công nghệ giáo dục thời 4.0', image: 'https://vienatec.edu.vn/wp-content/uploads/2019/12/c357633a1cbbe5e5bcaa-1024x768.jpg', date: '26/10/2020', day: '22', month: 'Th6', slug: 'dao-tao-truc-tuyen' },
    { id: 3, title: 'Lễ ký kết hợp tác giữa hiệp hội SAPIAS và đối tác Anh Quốc', image: 'https://vienatec.edu.vn/wp-content/uploads/2020/06/yHZ-yuV6rt9zIhTGRlo-QAp5z2zWM3E0sfnLO4Ygsj8Us2iqKZZZ2ei9yRMVMtv9-300x200.jpg', date: '01/06/2024', day: '25', month: 'Th12', slug: 'le-ky-ket-hop-tac' },
    { id: 4, title: 'Các hoạt động năm 2019', image: 'https://vienatec.edu.vn/wp-content/uploads/2019/12/5c9a816dffec06b25ffd-300x222.jpg', date: '01/06/2024', day: '01', month: 'Th6', slug: 'cac-hoat-dong-nam-2019' }
  ];

  const partnerList = [
    { title: "Trường ĐH Nội Vụ Hà Nội", image: "https://vienatec.edu.vn/wp-content/uploads/2020/06/DHNV_151.png", type: "Liên kết đào tạo" },
    { title: "CĐ Sư Phạm Thái Nguyên", image: "https://vienatec.edu.vn/wp-content/uploads/2020/07/cdsp.png", type: "Liên kết đào tạo" },
    { title: "Trường CĐ Y Tế Thái Nguyên", image: "https://vienatec.edu.vn/wp-content/uploads/2020/06/tải-xuống-1-1.jpg", type: "Liên kết đào tạo" },
    { title: "ĐH KT & QTKD Thái Nguyên", image: "https://vienatec.edu.vn/wp-content/uploads/2020/06/unnamed.jpg", type: "Liên kết đào tạo" },
    { title: "Đại Học Khoa Học Thái Nguyên", image: "https://vienatec.edu.vn/wp-content/uploads/2020/06/tải-xuống-2.jpg", type: "Liên kết đào tạo" },
    { title: "Trường TC NN & PTNT Quảng Trị", image: "https://vienatec.edu.vn/wp-content/uploads/2020/06/chu.png", type: "Liên kết đào tạo" },
    { title: "Trường ĐH Sao Đỏ", image: "https://vienatec.edu.vn/wp-content/uploads/2020/06/Logo_dhsaodo_moi.png", type: "Liên kết đào tạo" },
    { title: "Trường Đại Học Hùng Vương", image: "https://vienatec.edu.vn/wp-content/uploads/2020/06/trung-vuong.jpg", type: "Liên kết đào tạo" },
    { title: "Trường CĐ Nghề Hà Giang", image: "https://vienatec.edu.vn/wp-content/uploads/2020/06/tải-xuống-6.jpg", type: "Liên kết đào tạo" },
    { title: "Trường CĐ Nghề Số 1 – Bộ QP", image: "https://vienatec.edu.vn/wp-content/uploads/2020/06/Logo_Quân_khu_1.png", type: "Liên kết đào tạo" },
    { title: "Trường ĐH Quốc Gia Hà Nội", image: "https://vienatec.edu.vn/wp-content/uploads/2020/06/Logo-VNU-1995.png", type: "Liên kết đào tạo" },
    { title: "Trường Cao Đẳng Quảng Ngãi", image: "https://vienatec.edu.vn/wp-content/uploads/2020/06/LOGO2.png", type: "Liên kết đào tạo" },
    { title: "Trường CĐ KTKT Vĩnh Phúc", image: "https://vienatec.edu.vn/wp-content/uploads/2020/06/tải-xuống-5.jpg", type: "Liên kết đào tạo" },
    { title: "Đại Học Nguyễn Tất Thành", image: "https://vienatec.edu.vn/wp-content/uploads/2020/06/tải-xuống-4.jpg", type: "Liên kết đào tạo" },
    { title: "Trường CĐ Cộng Đồng Hà Nội", image: "https://vienatec.edu.vn/wp-content/uploads/2020/06/logo.png", type: "Liên kết đào tạo" },
    { title: "CĐ Công Nghệ Y Dược Việt Nam", image: "https://vienatec.edu.vn/wp-content/uploads/2020/06/cdcn-y-duoc-vn-logo-01-400x400-1.jpg", type: "Liên kết đào tạo" },
    { title: "Trường CĐ KTTC Thái Nguyên", image: "https://vienatec.edu.vn/wp-content/uploads/2020/06/unnamed-2.png", type: "Liên kết đào tạo" },
    { title: "Trường CĐ KTKT Điện Biên", image: "https://vienatec.edu.vn/wp-content/uploads/2020/06/tải-xuống-1.jpg", type: "Liên kết đào tạo" },
    { title: "Trường CĐ KTKT Lâm Đồng", image: "https://vienatec.edu.vn/wp-content/uploads/2020/06/tải-xuống.jpg", type: "Liên kết đào tạo" },
    { title: "Trường CĐ KTKT Bạc Liêu", image: "https://vienatec.edu.vn/wp-content/uploads/2020/06/unnamed-1.png", type: "Liên kết đào tạo" },
    { title: "Trường CĐ KTKT Quảng nam", image: "https://vienatec.edu.vn/wp-content/uploads/2020/06/logo_1566375285.png", type: "Liên kết đào tạo" },
    { title: "Trường CĐ Kinh Tế TP HCM", image: "https://vienatec.edu.vn/wp-content/uploads/2020/06/unnamed-e1592452667362.png", type: "Liên kết đào tạo" },
    { title: "Trường ĐH Sư Phạm Hà Nội 2", image: "https://vienatec.edu.vn/wp-content/uploads/2020/06/Su_pham_HN2.jpg", type: "Liên kết đào tạo" },
    { title: "Trường ĐH Kinh Tế – Luật", image: "https://vienatec.edu.vn/wp-content/uploads/2020/06/Logo_Đại_học_Kinh_Tế_-_Luật.png", type: "Liên kết đào tạo" }
  ];

  const [expandedCourse, setExpandedCourse] = useState(null);

  const coursesList = [
    { title: 'Bồi dưỡng lãnh đạo, quản lý cấp phòng', details: { dangKy: 'tại website', hoSo: 'Tải hồ sơ tại đây', hocPhi: '3.000.000 đ đã bao gồm tài liệu', khaiGiang: 'trung tuần tháng 6/2020', diaDiem: 'Tầng 3 nhà A, ĐH Việt Bắc', lienHe: '0383 289 186 – 0965 363 999', formId: 2 } },
    { title: 'Lớp Cử nhân Luật', details: { dangKy: 'tại website', hoSo: 'Tải hồ sơ tại đây', hocPhi: 'Đang cập nhật', khaiGiang: 'Liên tục hàng tháng', diaDiem: 'Tầng 3 nhà A, ĐH Việt Bắc', lienHe: '0383 289 186 – 0965 363 999', formId: 3 } },
    { title: 'Lớp Bồi dưỡng kiến thức QLNN', details: { dangKy: 'tại website', hoSo: 'Tải hồ sơ tại đây', hocPhi: '3.000.000 đ đã bao gồm tài liệu', khaiGiang: 'trung tuần tháng 6/2020', diaDiem: 'Tầng 3 nhà A, ĐH Việt Bắc', lienHe: '0383 289 186 – 0965 363 999', formId: 3 } },
    { title: 'Lớp chứng chỉ ngoại ngữ', details: { dangKy: 'tại website', hoSo: 'Tải hồ sơ tại đây', hocPhi: '1.700.000 đ', khaiGiang: 'Hàng tuần', diaDiem: 'Tầng 3 nhà A, ĐH Việt Bắc', lienHe: '0383 289 186 – 0965 363 999', formId: 5 } },
    { title: 'Lớp chứng chỉ tin học', details: { dangKy: 'tại website', hoSo: 'Tải hồ sơ tại đây', hocPhi: '300.000 đ', khaiGiang: 'Hàng tuần', diaDiem: 'Tầng 3 nhà A, ĐH Việt Bắc', lienHe: '0383 289 186 – 0965 363 999', formId: 6 } },
    { title: 'Lớp chứng chỉ tin học', details: { dangKy: 'tại website', hoSo: 'Tải hồ sơ tại đây', hocPhi: '300.000 đ', khaiGiang: 'Hàng tuần', diaDiem: 'Tầng 3 nhà A, ĐH Việt Bắc', lienHe: '0383 289 186 – 0965 363 999', formId: 6 } }
  ];

  const toggleCourse = (index) => {
    setExpandedCourse(prev => prev === index ? null : index);
  };

  return (
    <div className="section" style={{ padding: '20px 0', backgroundColor: '#fff' }}>
      <div className="container">
        
        {/* Top Section: Slider + Latest News */}
        <div className="home-top-section">
          {/* Slider */}
          <div className="slider-container">
            {slides.map((slide, index) => (
              <div key={index} className={`slide-item ${index === currentSlide ? 'active' : ''}`}>
                <img src={slide} alt={`Slide ${index + 1}`} className="slide-image" />
              </div>
            ))}
            <div style={{ position: 'absolute', bottom: '15px', width: '100%', textAlign: 'center', zIndex: 10 }}>
              {slides.map((_, index) => (
                <span 
                  key={index} 
                  style={{ 
                    display: 'inline-block', 
                    width: '10px', 
                    height: '10px', 
                    margin: '0 5px', 
                    borderRadius: '50%', 
                    backgroundColor: index === currentSlide ? '#fff' : 'rgba(255,255,255,0.5)',
                    cursor: 'pointer'
                  }}
                  onClick={() => setCurrentSlide(index)}
                />
              ))}
            </div>
          </div>

          {/* Latest News Sidebar */}
          <div className="news-sidebar" style={{ border: '1px solid #ddd', padding: '15px' }}>
            <h3 style={{ borderBottom: '2px solid var(--primary-color)', paddingBottom: '10px', marginBottom: '15px', color: 'var(--secondary-color)', fontSize: '18px', textTransform: 'uppercase' }}>
              Tin tức mới nhất
            </h3>
            <div className="news-list" style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
              {tinTucList.slice(0, 4).map(news => (
                <div key={news.id} style={{ display: 'flex', gap: '10px', borderBottom: '1px dashed #eee', paddingBottom: '15px' }}>
                  <img src={news.image} alt={news.title} style={{ width: '80px', height: '60px', objectFit: 'cover' }} />
                  <div>
                    <Link to={`/tin-tuc/${news.slug}`} style={{ fontSize: '14px', fontWeight: '600', color: '#333', lineHeight: '1.4', display: 'block', textDecoration: 'none' }}>
                      {news.title}
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* 3 colored banners */}
        <div className="footer-banners" style={{ marginBottom: '40px' }}>
          <div className="footer-banner blue">TT KIỂM ĐỊNH CHẤT LƯỢNG GIÁO DỤC NGHỀ NGHIỆP</div>
          <div className="footer-banner green">TRUNG TÂM TIN HỌC VÀ NGOẠI NGỮ</div>
          <div className="footer-banner orange">TT DỰ BÁO VÀ CUNG ỨNG NGUỒN NHÂN LỰC</div>
        </div>

        {/* BẢN TIN 24/7 Section */}
        <div style={{ marginBottom: '40px' }}>
          <h2 className="section-title">BẢN TIN 24/7</h2>
          <div className="post-grid-2">
            {tinTucList.slice(0, 4).map(news => (
              <div className="post-card" key={news.id}>
                <div className="post-card-img-wrapper">
                  {news.day && news.month && (
                    <div className="date-badge">
                      <span className="day">{news.day}</span>
                      <span className="month">{news.month}</span>
                    </div>
                  )}
                  <Link to={`/tin-tuc/${news.slug}`} style={{ display: 'block', height: '100%' }}>
                    <img src={news.image} alt={news.title} />
                  </Link>
                </div>
                <div className="post-card-content">
                  <Link to={`/tin-tuc/${news.slug}`} className="post-card-title">{news.title}</Link>
                  <div className="post-date-small">13/12/2023</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ĐĂNG KÝ CÁC KHÓA HỌC */}
        <div className="courses-block">
          <div className="container">
            <h2 className="section-title">ĐĂNG KÝ CÁC KHÓA HỌC</h2>
            <div className="courses-list">
              {coursesList.map((course, i) => (
                <div className={`course-item ${expandedCourse === i ? 'expanded' : ''}`} key={i}>
                  <div className="course-title-btn" onClick={() => toggleCourse(i)}>
                    <span className="course-title-icon">v</span>
                    {course.title}
                  </div>
                  {expandedCourse === i && course.details && (
                    <div className="course-details" style={{ marginTop: '15px', paddingLeft: '25px', fontSize: '14px', lineHeight: '1.8' }}>
                      <ul style={{ listStyleType: 'disc', paddingLeft: '20px', marginBottom: '15px' }}>
                        <li><strong>Đăng ký học:</strong> {course.details.dangKy}</li>
                        <li><strong>Hồ sơ:</strong> {course.details.hoSo}</li>
                        <li><strong>Học phí:</strong> {course.details.hocPhi}</li>
                        <li><strong>Khai giảng:</strong> {course.details.khaiGiang}</li>
                        <li><strong>Địa điểm học:</strong> {course.details.diaDiem}</li>
                        <li><strong>Liên hệ:</strong> {course.details.lienHe}</li>
                      </ul>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* THÔNG TIN CÁC THÀNH VIÊN HIỆP HỘI */}
        {/* THÔNG TIN CÁC THÀNH VIÊN HIỆP HỘI */}
        <div style={{ marginBottom: '40px' }}>
          <h2 className="section-title">THÔNG TIN CÁC THÀNH VIÊN HIỆP HỘI</h2>
          <div className="post-grid-4">
            {hiepHoilist.slice(0, 4).map((news, i) => (
              <div className="post-card post-card-vertical" key={news.id}>
                <div className="post-card-img-wrapper">
                  {news.day && news.month && (
                    <div className="date-badge">
                      <span className="day">{news.day}</span>
                      <span className="month">{news.month}</span>
                    </div>
                  )}
                  <Link to={`/tin-tuc/${news.slug}`} style={{ display: 'block', aspectRatio: '16/9' }}>
                    {news.image && <img src={news.image} alt={news.title} />}
                  </Link>
                </div>
                <div className="post-card-content" style={{ textAlign: 'center', padding: '15px 10px' }}>
                  <Link to={`/tin-tuc/${news.slug}`} className="post-card-title" style={{ fontSize: '14px', fontWeight: '400', display: 'block', marginBottom: '5px' }}>
                    {news.title}
                  </Link>
                  <div className="post-date-small" style={{ color: '#1e73be' }}>{news.day}/{news.month}/2024</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ĐỐI TÁC LIÊN KẾT */}
        <div style={{ textAlign: 'center', marginBottom: '30px' }}>
          <h2 className="section-title" style={{ fontSize: '20px' }}>ĐỐI TÁC LIÊN KẾT</h2>
          <p style={{ color: '#1e73be', fontSize: '14px', lineHeight: '1.8', maxWidth: '900px', margin: '0 auto', fontWeight: '300' }}>
            SAPIAS luôn tìm kiếm cơ hội được hợp tác với các đối tác tin cậy để triển khai các hoạt động đào tạo ngoại ngữ, tư vấn du học, hợp tác quốc tế, hướng nghiệp.<br/>
            Thi cấp chứng chỉ ngoại ngữ, Tư vấn các chương trình du học, việc làm trong và ngoài nước.
          </p>
          <h3 className="section-title" style={{ fontSize: '20px', marginTop: '30px' }}>CÁC ĐỐI TÁC VÀ CÁC CHƯƠNG TRÌNH ĐÃ VÀ ĐANG HOẠT ĐỘNG</h3>
        </div>

        <div className="partners-grid" style={{ marginBottom: '50px' }}>
          {partnerList.map((partner, i) => (
            <div className="partner-item" key={i} style={{ textAlign: 'center' }}>
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textDecoration: 'none' }}>
                <img src={partner.image} alt={partner.title} style={{ width: '120px', height: '120px', objectFit: 'contain', marginBottom: '15px' }} />
                <h4 style={{ fontSize: '13px', color: '#333', marginBottom: '5px', fontWeight: '600', lineHeight: '1.4', textAlign: 'center' }}>{partner.title}</h4>
                <p style={{ fontSize: '12px', color: '#1e73be', margin: 0, fontWeight: '300', textAlign: 'center' }}>Liên kết đào tạo</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default Home;
