"use client"
import React, { useState, useEffect } from 'react';
import NewsCard from '../components/NewsCard';
import { fetchNews } from '../api/route';
import axios from 'axios';
import styles from './news.module.css'

const NewsPage: React.FC = () => {
    interface NewsItem {
        sectionName: string;
        webPublicationDate: number;
        webTitle: string;
        id: number;
    }
    const [news, setNews] = useState<NewsItem[]>([]);
    const [offset, setOffset] = useState(0);

    const apiKey = 'd2517a83-dcf2-4056-b008-77f82bf2e097';
    const apiUrl = 'https://content.guardianapis.com/search';

    useEffect(() => {
        const fetchNews = async () => {
            const response = await axios.get(apiUrl, {
                params: {
                    'api-key': apiKey,
                },
            });
            const data = response.data.response.results;
            setNews((prevNews) => [...prevNews, ...data]);
        };

        fetchNews();
    }, [offset]);

    const loadMore = () => {
        setOffset(offset + 10);
    };


    useEffect(() => {
        fetchNews()
            .then((data) => setNews(data))
            .catch((error) => console.error(error));
    }, []);

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
            <button onClick={loadMore} className={styles.loadMoreBtn}>
                Загрузить еще
            </button>
        </div>
    );
};

export default NewsPage;
