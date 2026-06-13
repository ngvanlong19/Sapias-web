import { Link } from 'react-router-dom';
import { coursesData } from '../data/coursesData';

const Courses = () => {
  return (
    <div style={{ paddingTop: '80px', minHeight: '80vh' }}>
      <section className="section bg-light">
        <div className="container">
          <div className="text-center" style={{ marginBottom: '60px' }}>
            <span className="section-subtitle">CHƯƠNG TRÌNH ĐÀO TẠO</span>
            <h1 className="section-title">Khóa học & Dịch vụ</h1>
          </div>
          
          <div className="grid courses-grid">
            {coursesData.map((course) => (
              <Link to={`/courses/${course.id}`} key={course.id} style={{ display: 'block' }}>
                <div className="course-card glass-card" style={{ height: '100%' }}>
                  <div className="course-img" style={{ 
                    height: '220px', 
                    backgroundImage: `url(${course.image})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    position: 'relative'
                  }}>
                    {/* Optional overlay to make text pop if needed, but here it's just the image */}
                  </div>
                  <div className="course-content">
                    <div className="course-tag">{course.tag}</div>
                    <h3 className="course-title" style={{ transition: 'color 0.3s' }}>{course.title}</h3>
                    <p className="course-desc" style={{ display: '-webkit-box', WebkitLineClamp: 3, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>
                      {course.overview}
                    </p>
                    <div style={{ marginTop: '15px', color: 'var(--primary-color)', fontWeight: 'bold' }}>
                      Thời lượng: {course.duration}
                    </div>
                    <div style={{ marginTop: '20px' }}>
                      <span className="btn-text">Xem chi tiết bài viết <i className="fas fa-arrow-right"></i></span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Courses;
