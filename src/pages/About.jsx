const About = () => {
  return (
    <div style={{ paddingTop: '80px', minHeight: '80vh' }}>
      <section className="section about">
        <div className="container">
          <div className="text-center" style={{ marginBottom: '60px' }}>
            <span className="section-subtitle">TỔNG QUAN VỀ ICHIKI</span>
            <h1 className="section-title">Câu chuyện của chúng tôi</h1>
          </div>
          
          <div className="about-container">
            <div className="about-text">
              <h3 style={{ fontSize: '1.8rem', marginBottom: '15px', color: 'var(--primary-color)' }}>Tầm nhìn & Sứ mệnh</h3>
              <p style={{ marginBottom: '20px' }}>Khởi nguồn từ tình yêu với văn hóa và ngôn ngữ Nhật Bản, Ichiki được thành lập với mục tiêu trở thành chiếc cầu nối vững chắc nhất đưa học sinh Việt Nam vươn xa ra đấu trường quốc tế.</p>
              <p>Chúng tôi không chỉ là một trung tâm dạy ngoại ngữ, mà là một cộng đồng chia sẻ tri thức, nơi bạn được rèn luyện tác phong làm việc chuyên nghiệp, ý chí kỷ luật và sự tỉ mỉ đặc trưng của con người Nhật Bản.</p>
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
              <p className="text-muted" style={{ marginTop: '10px' }}>100% giáo viên đạt chứng chỉ N1/N2 và nghiệp vụ sư phạm quốc tế.</p>
            </div>
            <div className="glass-card text-center" style={{ padding: '40px' }}>
              <i className="fas fa-building fa-3x" style={{ color: 'var(--primary-color)', marginBottom: '20px' }}></i>
              <h3>Cơ sở hiện đại</h3>
              <p className="text-muted" style={{ marginTop: '10px' }}>Phòng học tiêu chuẩn Nhật Bản, thư viện tài liệu đa dạng.</p>
            </div>
            <div className="glass-card text-center" style={{ padding: '40px' }}>
              <i className="fas fa-globe-asia fa-3x" style={{ color: 'var(--primary-color)', marginBottom: '20px' }}></i>
              <h3>Mạng lưới rộng lớn</h3>
              <p className="text-muted" style={{ marginTop: '10px' }}>Liên kết với hơn 50+ trường Nhật ngữ, Đại học lớn tại Nhật.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
