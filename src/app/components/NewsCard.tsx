import React from 'react';
import styles from '../Pages/news.module.css'

interface NewsItem {
    section: string;
    title: string;
}
const NewsCard: React.FC<NewsItem> = ({ title, section }) => {
    return (
        <div className={styles.block}>
            <h2>{title}</h2>
            <div className={styles.sectionName}>{section}</div>
        </div>
    );
};

export default NewsCard;
