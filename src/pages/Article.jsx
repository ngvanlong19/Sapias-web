import { useParams, Link } from 'react-router-dom';
import { newsData } from '../data/newsData';

const Article = () => {
  const { slug } = useParams();
  const article = newsData.find(item => item.slug === slug);
  const latestPosts = newsData.slice(0, 5);

  if (!article) {
    return (
      <div className="container" style={{ padding: '100px 15px', textAlign: 'center', minHeight: '60vh' }}>
        <h2 style={{ color: 'var(--primary-color)' }}>Không tìm thấy bài viết</h2>
        <p style={{ marginTop: '20px' }}>Bài viết bạn yêu cầu không tồn tại hoặc đã bị xóa.</p>
        <Link to="/" className="btn btn-primary" style={{ marginTop: '30px' }}>Về trang chủ</Link>
      </div>
    );
  }

  return (
    <div className="section article-page" style={{ padding: '40px 0', backgroundColor: '#fff' }}>
      <div className="container">
        
        <div style={{ display: 'grid', gridTemplateColumns: '3fr 1fr', gap: '30px' }}>
          
          {/* Main Article Content */}
          <div className="main-content" style={{ paddingRight: '20px' }}>
            {/* Breadcrumb */}
            <div style={{ marginBottom: '20px', fontSize: '12px', color: '#666', textTransform: 'uppercase' }}>
              <Link to="/" style={{ color: '#666', textDecoration: 'none' }}>Trang chủ</Link> <span style={{ margin: '0 5px' }}>/</span> 
              <span style={{ color: '#666' }}>{article.category}</span>
            </div>

            <h1 style={{ fontSize: '28px', color: '#333', marginBottom: '25px', lineHeight: '1.3' }}>
              {article.title}
            </h1>

            <div 
              className="article-content" 
              style={{ fontSize: '16px', lineHeight: '1.8', color: '#333', textAlign: 'justify' }}
              dangerouslySetInnerHTML={{ __html: article.content }} 
            />
          </div>

          {/* Sidebar */}
          <div className="sidebar" style={{ display: 'flex', flexDirection: 'column' }}>
            
            {/* Search Box */}
            <div style={{ marginBottom: '30px', display: 'flex' }}>
              <input type="text" placeholder="Search..." style={{ flex: 1, padding: '10px 15px', border: '1px solid #ddd', borderRight: 'none', outline: 'none' }} />
              <button style={{ backgroundColor: 'var(--primary-color)', color: '#fff', border: 'none', padding: '0 15px', cursor: 'pointer' }}>Q</button>
            </div>

            {/* DANH MỤC */}
            <div style={{ marginBottom: '40px' }}>
              <h3 style={{ color: '#1e73be', fontSize: '14px', textTransform: 'uppercase', marginBottom: '15px', fontWeight: 'bold' }}>
                DANH MỤC
              </h3>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                <li style={{ padding: '10px 0', borderBottom: '1px solid #eee' }}><Link to="#" style={{ color: '#1e73be', fontSize: '14px', textDecoration: 'none' }}>Bản tin 24/7 (31)</Link></li>
                <li style={{ padding: '10px 0', borderBottom: '1px solid #eee' }}><Link to="#" style={{ color: '#1e73be', fontSize: '14px', textDecoration: 'none' }}>Bồi dưỡng ngắn hạn (4)</Link></li>
                <li style={{ padding: '10px 0', borderBottom: '1px solid #eee' }}><Link to="#" style={{ color: '#1e73be', fontSize: '14px', textDecoration: 'none', fontWeight: 'bold' }}>Hội viên hiệp hội (4)</Link></li>
                <li style={{ padding: '10px 0', borderBottom: '1px solid #eee' }}><Link to="#" style={{ color: '#1e73be', fontSize: '14px', textDecoration: 'none' }}>Hợp tác đào tạo (10)</Link></li>
                <li style={{ padding: '10px 0', borderBottom: '1px solid #eee' }}><Link to="#" style={{ color: '#1e73be', fontSize: '14px', textDecoration: 'none' }}>Hợp tác quốc tế (2)</Link></li>
                <li style={{ padding: '10px 0', borderBottom: '1px solid #eee' }}><Link to="#" style={{ color: '#1e73be', fontSize: '14px', textDecoration: 'none' }}>Nghiên cứu khoa học (1)</Link></li>
                <li style={{ padding: '10px 0', borderBottom: '1px solid #eee' }}><Link to="#" style={{ color: '#1e73be', fontSize: '14px', textDecoration: 'none' }}>Thông tin tuyển sinh (8)</Link></li>
                <li style={{ padding: '10px 0', borderBottom: '1px solid #eee' }}><Link to="#" style={{ color: '#1e73be', fontSize: '14px', textDecoration: 'none' }}>Tuyển dụng (1)</Link></li>
              </ul>
            </div>
            
            {/* BÀI VIẾT MỚI */}
            <div>
              <h3 style={{ color: '#1e73be', fontSize: '14px', textTransform: 'uppercase', marginBottom: '15px', fontWeight: 'bold' }}>
                BÀI VIẾT MỚI
              </h3>
              <div style={{ display: 'flex', flexDirection: 'column' }}>
                {latestPosts.map((post) => (
                  <div key={post.id} style={{ padding: '10px 0', borderBottom: '1px solid #eee' }}>
                    <Link to={`/tin-tuc/${post.slug}`} style={{ fontSize: '13px', color: '#666', lineHeight: '1.5', display: 'block', textDecoration: 'none' }}
                          onMouseOver={(e) => e.target.style.color = 'var(--primary-color)'}
                          onMouseOut={(e) => e.target.style.color = '#666'}>
                      {post.title}
                    </Link>
                  </div>
                ))}
              </div>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
};

export default Article;
