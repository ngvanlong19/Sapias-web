const About = () => {
  return (
    <div style={{ paddingTop: '80px', minHeight: '80vh' }}>
      <section className="section about">
        <div className="container">
          <div className="text-center" style={{ marginBottom: '60px' }}>
            <span className="section-subtitle">TỔNG QUAN VỀ ICHIKI</span>
            <h2 className="section-title" style={{ fontSize: '36px', marginBottom: '30px' }}>
              Nơi khởi nguồn<br />những ước mơ
            </h2>
            <div style={{ color: 'var(--text-muted)', fontSize: '18px', lineHeight: '1.8' }}>
              <p style={{ marginBottom: '20px' }}>Trung tâm Nhật ngữ & Du học ICHIKI được thành lập với mục tiêu cung cấp các chương trình đào tạo tiếng Nhật chất lượng cao và tư vấn du học uy tín.</p>
              <p>Chúng tôi tự hào sở hữu đội ngũ giảng viên chuyên nghiệp, chương trình học được thiết kế sát với thực tế, giúp học viên trang bị đầy đủ kiến thức và kỹ năng để tự tin bước vào môi trường làm việc thực tế.</p>
            </div>
            <div className="about-image glass-card">
              <div className="placeholder-img navy-gradient" style={{ height: '400px' }}>
                <i className="fas fa-users fa-5x text-white"></i>
              </div>
            </div>
          </div>
          
          <div className="grid courses-grid" style={{ marginTop: '80px' }}>
            <div className="glass-card text-center" style={{ padding: '40px' }}>
              <i className="fas fa-chalkboard-teacher fa-3x" style={{ color: 'var(--primary-color)', marginBottom: '20px' }}></i>
              <h3>Giáo viên tận tâm</h3>
              <p className="text-muted" style={{ marginTop: '10px' }}>Đội ngũ giảng viên giàu kinh nghiệm thực tiễn.</p>
            </div>
            <div className="glass-card text-center" style={{ padding: '40px' }}>
              <i className="fas fa-building fa-3x" style={{ color: 'var(--primary-color)', marginBottom: '20px' }}></i>
              <h3>Cơ sở hiện đại</h3>
              <p className="text-muted" style={{ marginTop: '10px' }}>Hệ thống phòng học khang trang, đạt tiêu chuẩn đào tạo nghề.</p>
            </div>
            <div className="glass-card text-center" style={{ padding: '40px' }}>
              <i className="fas fa-globe-asia fa-3x" style={{ color: 'var(--primary-color)', marginBottom: '20px' }}></i>
              <h3>Mạng lưới rộng lớn</h3>
              <p className="text-muted" style={{ marginTop: '10px' }}>Liên kết với nhiều doanh nghiệp và chuyên gia hàng đầu trong ngành.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
