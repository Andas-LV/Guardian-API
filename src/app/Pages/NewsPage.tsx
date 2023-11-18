"use client"
import React, { useState, useEffect } from 'react';
import NewsCard from '../components/NewsCard';
import { fetchNews } from '../api/route';
import LoadMore from "@/app/components/LoadMore";
import Back from "@/app/components/Back";
import Search from "@/app/components/Search";
import styles from './news.module.css';

const NewsPage: React.FC = () => {
    interface NewsItem {
        sectionName: string;
        webPublicationDate: number;
        webTitle: string;
        id: number;
    }

    const [news, setNews] = useState<NewsItem[]>([]);
    const [page, setPage] = useState(1);

    const handlePageChange = (newPage: number) => {
        setPage(newPage);
    }

    useEffect(() => {
        fetchNews(page)
            .then((data) => {
                if (page === 1) {
                    setNews(data);
                } else {
                    setNews(prev => [...prev, ...data]);
                }
            })
            .catch((error) => console.error(error));
    }, [page]);

    return (
        <div className={styles.container}>
            <Search news={news}/>

            <div className={styles.newsContainer}>
                {news.map((newsItem) => (
                    <NewsCard
                        key={newsItem.id}
                        title={newsItem.webTitle}
                        section={newsItem.sectionName}
                    />
                ))}
            </div>

            <div className={styles.btnGroup}>
                <LoadMore currentPage={page} onPageChange={handlePageChange}/>
                <Back currentPage={page} onPageChange={handlePageChange}/>
            </div>
        </div>
    );
}

export default NewsPage;
