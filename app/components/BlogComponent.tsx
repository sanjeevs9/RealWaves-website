import React from "react";

interface BlogCardProps {
  image: string;
  title: string;
  article: string;
  author: string;
  date: string;
  readTime: string;
}

const BlogComponent: React.FC<BlogCardProps> = ({
  image,
  title,
  article,
  author,
  date,
  readTime,
}) => {
  return (
    <div style={{
      borderRadius: "20px",
      overflow: "hidden",
      boxShadow: "0 4px 24px rgba(0,0,0,0.15)",
      background: "#fff",
      maxWidth: 350,
      margin: "auto",
      fontFamily: 'Inter, sans-serif',
    }}>
      <div style={{ height: 160, background: "#0a1a2f" }}>
        <img
          src={image}
          alt={title}
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
        />
      </div>
      <div style={{ padding: 24 }}>
        <div style={{ color: "#888", fontSize: 14, marginBottom: 8 }}>(TAGS)</div>
        <div style={{ fontWeight: 600, fontSize: 22, marginBottom: 12 }}>{title}</div>
        <div style={{ color: "#666", fontSize: 16, marginBottom: 28, lineHeight: 1.5 }}>{article}</div>
        <div style={{ display: "flex", alignItems: "center" }}>
          <div style={{
            width: 36,
            height: 36,
            borderRadius: "50%",
            background: "#eee",
            marginRight: 12,
          }} />
          <div>
            <div style={{ fontWeight: 600, fontSize: 16 }}>{author}</div>
            <div style={{ color: "#888", fontSize: 14 }}>{date} - {readTime} read</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogComponent;