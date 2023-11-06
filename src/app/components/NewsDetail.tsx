// NewsDetail.tsx
import React from 'react';

interface NewsDetailProps {
    title: string;
    // Другие свойства новости
}

const NewsDetail: React.FC<NewsDetailProps> = ({ title }) => {
    return (
        <div>
            <h2>{title}</h2>
            {/* Добавьте другие свойства новости для отображения полной информации. */}
        </div>
    );
};

export default NewsDetail;
