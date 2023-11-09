import React, { useEffect, useState } from "react";
import { fetchNews } from "@/app/api/route";
import styles from '../Pages/news.module.css'

interface NewsItem {
    sectionName: string;
    webPublicationDate: number;
    webTitle: string;
    id: number;
}
interface LoadMoreProps {
    updateNews: (additionalNews: NewsItem[]) => void;
}

const LoadMore: React.FC<LoadMoreProps> = ({ updateNews }) => {
    const [offset, setOffset] = useState(0);

    useEffect(() => {
        fetchNews()
            .then((data) => updateNews(data))
            .catch((error) => console.error(error));
    }, [offset]);

    const Plus = () => {
        setOffset(offset + 10);
    };


    return (
        <button onClick={Plus} className={styles.loadMoreBtn}>
            Загрузить еще
        </button>

    );
};

export default LoadMore;
