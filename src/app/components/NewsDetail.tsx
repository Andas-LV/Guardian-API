import React from 'react';

interface NewsDetailProps {
    title: string;
}

const NewsDetail: React.FC<NewsDetailProps> = ({ title }) => {
    return (
        <div>
            <h2>{title}</h2>
            
        </div>
    );
};

export default NewsDetail;
