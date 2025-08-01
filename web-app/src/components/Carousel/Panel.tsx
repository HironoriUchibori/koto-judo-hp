import React from 'react';
import './Panel.css';

// Panelコンポーネントが受け取るpropsの型を定義します
interface PanelProps {
  image: string;
  text: string;
}

export const Panel: React.FC<PanelProps> = ({ image, text }) => {
  return (
    <div className="panel-container"> {/* 親要素としてコンテナを追加 */}
      <img src={image} alt={text} className="panel-image" /> {/* 画像にクラスを追加 */}
      <div className="panel-overlay-text"> {/* テキストを囲むdivを追加 */}
        <h3>{text}</h3>
      </div>
    </div>
  );
};