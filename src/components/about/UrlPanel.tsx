import "../../App.css";

export const UrlPanel: React.FC = () => (
  <div className="url-panel">
    <div className="url-item">
      <strong>永久链接：</strong>
      <a
        href="https://liudanpashui.github.io"
        target="_blank"
        rel="noopener noreferrer"
      >
        liudanpashui.github.io
      </a>
    </div>
    <div className="url-item">
      <strong>镜像1：</strong>
      <a
        href="https://shaosong.netlify.app"
        target="_blank"
        rel="noopener noreferrer"
      >
        shaosong.netlify.app
      </a>
    </div>
    <div className="url-item">
      <strong>镜像2：</strong>
      <a
        href="https://shaosong.577599.xyz"
        target="_blank"
        rel="noopener noreferrer"
      >
        shaosong.577599.xyz
      </a>
    </div>
  </div>
);
