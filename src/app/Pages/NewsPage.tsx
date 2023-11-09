"use client"
import React, { useState, useEffect } from 'react';
import NewsCard from '../components/NewsCard';
import { fetchNews } from '../api/route';
import LoadMore from "@/app/components/LoadMore";
import styles from './news.module.css'

const NewsPage: React.FC = () => {
    interface NewsItem {
        sectionName: string;
        webPublicationDate: number;
        webTitle: string;
        id: number;
    }
    const [news, setNews] = useState<NewsItem[]>([]);

    useEffect(() => {
        fetchNews()
            .then((data) => setNews(data))
            .catch((error) => console.error(error));
    }, []);

    const updateNews = (additionalNews: NewsItem[]) => {
        setNews((prevNews) => [...prevNews, ...additionalNews]);
    };

    return (
        <div className={styles.newsContainer}>
            {news.map((newsItem) => (
                <NewsCard
                    key={newsItem.id}
                    title={newsItem.webTitle}
                    date={newsItem.webPublicationDate}
                    section={newsItem.sectionName}
                />
            ))}
            <LoadMore updateNews={updateNews} />
        </div>
    );
};

export default NewsPage;
