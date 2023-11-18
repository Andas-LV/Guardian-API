import React from 'react';

interface NewsDetailProps {

    sectionName: string;
    webPublicationDate: number;
    title: string;
    id: number;

}

const NewsDetail: React.FC<NewsDetailProps> = ({ title }) => {
    return (
        <div>
            <h2>{title}</h2>
            
        </div>
    );
};

export default NewsDetail;
