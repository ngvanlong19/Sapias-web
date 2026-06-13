import { Link } from 'react-router-dom';
import { coursesData } from '../data/coursesData';

const Home = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-bg">
          <img src="/hero.png" alt="Hero Background" />
          <div className="overlay"></div>
        </div>
        <div className="container hero-content glass-panel">
          <h1 className="hero-title">Chinh phục tiếng Nhật<br/><span className="text-highlight">Mở lối tương lai</span></h1>
          <p className="hero-desc">Ichiki đồng hành cùng bạn trên con đường học tập và khám phá văn hóa Nhật Bản. Lộ trình cá nhân hóa, phương pháp giảng dạy hiện đại và đội ngũ giáo viên tận tâm.</p>
          <div className="hero-buttons">
            <Link to="/courses" className="btn btn-primary btn-lg">Khám phá khóa học</Link>
            <Link to="/about" className="btn btn-outline btn-lg">Tìm hiểu thêm</Link>
          </div>
        </div>
      </section>

      {/* About Section Preview */}
      <section className="section about">
        <div className="container about-container">
          <div className="about-text">
            <span className="section-subtitle">VỀ CHÚNG TÔI</span>
            <h2 className="section-title">Tại sao chọn <span className="text-highlight">Ichiki?</span></h2>
            <p>Với sứ mệnh kết nối Việt Nam và Nhật Bản, chúng tôi mang đến môi trường học tập chất lượng cao, không chỉ dạy ngôn ngữ mà còn truyền cảm hứng về văn hóa, phong cách làm việc của người Nhật.</p>
            <ul className="feature-list">
              <li><i className="fas fa-check-circle"></i> Đội ngũ giáo viên bản xứ & Việt Nam giàu kinh nghiệm</li>
              <li><i className="fas fa-check-circle"></i> Giáo trình độc quyền, cập nhật liên tục theo JLPT</li>
              <li><i className="fas fa-check-circle"></i> Hỗ trợ hồ sơ du học trọn gói với tỉ lệ đỗ visa 99%</li>
            </ul>
            <div style={{marginTop: '30px'}}>
               <Link to="/about" className="btn btn-primary">Xem chi tiết về Ichiki</Link>
            </div>
          </div>
          <div className="about-image-wrapper">
            <div className="about-image glass-card">
              <div className="placeholder-img blue-gradient">
                <i className="fas fa-graduation-cap fa-5x text-white"></i>
              </div>
              <div className="floating-badge">
                <span className="badge-number">10+</span>
                <span className="badge-text">Năm<br/>Kinh nghiệm</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Courses Section Preview */}
      <section className="section courses bg-light">
        <div className="container">
          <div className="section-header text-center">
            <span className="section-subtitle">CHƯƠNG TRÌNH ĐÀO TẠO</span>
            <h2 className="section-title">Các khóa học nổi bật</h2>
            <p className="section-desc">Lộ trình học tập rõ ràng, phù hợp với mọi mục tiêu từ giao tiếp cơ bản đến chinh phục JLPT N1.</p>
          </div>
          
          <div className="grid courses-grid">
            {coursesData.slice(0, 3).map((course) => (
              <Link to={`/courses/${course.id}`} key={course.id} style={{ display: 'block' }}>
                <div className="course-card glass-card" style={{ height: '100%' }}>
                  <div className="course-img" style={{ 
                    height: '220px', 
                    backgroundImage: `url(${course.image})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                  }}></div>
                  <div className="course-content">
                    <div className="course-tag">{course.tag}</div>
                    <h3 className="course-title" style={{ transition: 'color 0.3s' }}>{course.title}</h3>
                    <p className="course-desc" style={{ display: '-webkit-box', WebkitLineClamp: 3, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>
                      {course.overview}
                    </p>
                    <div style={{ marginTop: '20px' }}>
                      <span className="btn-text">Xem chi tiết <i className="fas fa-arrow-right"></i></span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
          <div className="text-center" style={{ marginTop: '40px' }}>
            <Link to="/courses" className="btn btn-outline">Xem tất cả khóa học</Link>
          </div>
        </div>
      </section>

      {/* Call To Action */}
      <section className="section cta text-center">
        <div className="container glass-panel cta-panel">
          <h2 className="cta-title">Sẵn sàng bắt đầu hành trình của bạn?</h2>
          <p className="cta-desc">Để lại thông tin để nhận tư vấn lộ trình học miễn phí và ưu đãi học phí lên đến 30% trong tháng này.</p>
          <div style={{marginTop: '20px'}}>
             <Link to="/contact" className="btn btn-primary btn-lg" style={{background: 'var(--white)', color: 'var(--primary-color)'}}>Liên hệ nhận tư vấn</Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
