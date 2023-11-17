"use client"
import React, { useState, useEffect } from 'react';
import NewsCard from '../components/NewsCard';
import { fetchNews } from '../api/route';
import LoadMore from "@/app/components/LoadMore";
import Search from "@/app/components/Search";
import styles from './news.module.css';
import Back from "@/app/components/Back";

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
    let gg = true;
    function toogle (data:any, prevNews:any){

        if(gg){
            console.log(data)
            console.log("prevnews")
            console.log(prevNews)
            gg=false
            return data
        }else{
            console.log("prevnews")
            console.log(prevNews)
            return [...data, ...prevNews]
        }

    }

    useEffect(() => {
        fetchNews(page)
            .then((data) => setNews(data))
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
                        date={newsItem.webPublicationDate}
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
