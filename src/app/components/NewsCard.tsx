import React from 'react';
import styles from '../Pages/news.module.css'
interface NewsCardProps {
    title: string;
    date :number;
    section: string;
}

const NewsCard: React.FC<NewsCardProps> = ({ title,date, section }) => {
    return (
        <div className={styles.block}>
            <h2>{title}</h2>
            <div>{date}</div>
            <div>{section}</div>
        </div>
    );
};

export default NewsCard;
