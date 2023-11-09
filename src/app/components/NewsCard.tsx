import React from 'react';
import styles from '../Pages/news.module.css'

interface NewsItem {
    section: string;
    date: number;
    title: string;
}
const NewsCard: React.FC<NewsItem> = ({ title,date, section }) => {
    return (
        <div className={styles.block}>
            <h2>{title}</h2>
            <div>{date}</div>
            <div>{section}</div>
        </div>
    );
};

export default NewsCard;
