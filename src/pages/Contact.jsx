const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Cảm ơn bạn! Thông tin đăng ký đã được ghi nhận. Sapias sẽ liên hệ với bạn trong thời gian sớm nhất.');
  };

  return (
    <div style={{ paddingTop: '80px', minHeight: '80vh' }}>
      <section className="section">
        <div className="container">
          <div className="text-center" style={{ marginBottom: '60px' }}>
            <span className="section-subtitle">LIÊN HỆ VỚI CHÚNG TÔI</span>
            <h1 className="section-title">Kết nối với Sapias</h1>
          </div>
          
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '50px', alignItems: 'start' }}>
            <div className="glass-card" style={{ padding: '40px' }}>
              <h3 style={{ marginBottom: '20px', color: 'var(--secondary-color)' }}>Để lại thông tin</h3>
              <p style={{ marginBottom: '30px', color: 'var(--text-muted)' }}>Nhận tư vấn lộ trình học miễn phí và ưu đãi học phí mới nhất.</p>
              
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                <div>
                  <input type="text" placeholder="Họ và tên *" required className="form-input" style={{ width: '100%', maxWidth: '100%', border: '1px solid #ddd' }} />
                </div>
                <div>
                  <input type="tel" placeholder="Số điện thoại *" required className="form-input" style={{ width: '100%', maxWidth: '100%', border: '1px solid #ddd' }} />
                </div>
                <div>
                  <select className="form-input" style={{ width: '100%', maxWidth: '100%', border: '1px solid #ddd' }}>
                    <option value="">-- Chọn khóa học quan tâm --</option>
                    <option value="n5">Tiếng Nhật Sơ Cấp N5-N4</option>
                    <option value="n3">Luyện thi JLPT N3-N2-N1</option>
                    <option value="kaiwa">Tiếng Nhật Giao Tiếp</option>
                    <option value="duhoc">Tư vấn Du học</option>
                  </select>
                </div>
                <div>
                  <textarea placeholder="Tin nhắn (tùy chọn)" rows="4" className="form-input" style={{ width: '100%', maxWidth: '100%', border: '1px solid #ddd', borderRadius: '20px', resize: 'vertical' }}></textarea>
                </div>
                <button type="submit" className="btn btn-primary btn-lg" style={{ width: '100%' }}>Gửi yêu cầu</button>
              </form>
            </div>
            
            <div>
              <h3 style={{ marginBottom: '20px', color: 'var(--secondary-color)' }}>Thông tin liên hệ</h3>
              <ul className="feature-list" style={{ marginTop: '0', marginBottom: '40px' }}>
                <li style={{ marginBottom: '20px' }}>
                  <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: 'rgba(230, 57, 70, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--primary-color)', flexShrink: 0 }}>
                    <i className="fas fa-map-marker-alt"></i>
                  </div>
                  <div>
                    <h4 style={{ margin: 0 }}>Địa chỉ</h4>
                    <p className="text-muted" style={{ margin: 0 }}>22 Lương Thế Vinh - Thanh Xuân - Hà Nội</p>
                  </div>
                </li>
                <li style={{ marginBottom: '20px' }}>
                  <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: 'rgba(230, 57, 70, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--primary-color)', flexShrink: 0 }}>
                    <i className="fas fa-phone"></i>
                  </div>
                  <div>
                    <h4 style={{ margin: 0 }}>Điện thoại</h4>
                    <p className="text-muted" style={{ margin: 0 }}>0967 522 522</p>
                  </div>
                </li>
                <li style={{ marginBottom: '20px' }}>
                  <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: 'rgba(230, 57, 70, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--primary-color)', flexShrink: 0 }}>
                    <i className="fas fa-envelope"></i>
                  </div>
                  <div>
                    <h4 style={{ margin: 0 }}>Email</h4>
                    <p className="text-muted" style={{ margin: 0 }}>info@sapias.io.vn</p>
                  </div>
                </li>
              </ul>
              
              <div className="glass-card" style={{ height: '300px', display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#e9ecef' }}>
                 <p className="text-muted"><i className="fas fa-map"></i> Bản đồ Google Maps (Placeholder)</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
