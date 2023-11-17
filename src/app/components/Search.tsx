import React, {useState} from 'react';
import styles from './components.module.css'
interface SearchComponent {
    news: any[];
}

const Search:React.FC<SearchComponent> = ({ news }) => {
    const [query, setQuery] = useState<string>('');
    const [results, setResults] = useState<any[]>([]);

    const handleSearch = () => {
        const filteredResults = news.filter((newsItem) =>
            newsItem.webTitle.toLowerCase().includes(query.toLowerCase())
        );
        setResults(filteredResults);
    };

    return (
        <div>
            <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Enter your search query"
                className={styles.searchInput}
            />
            <button onClick={handleSearch} className={styles.searchBtn}>Search</button>

            <ul className={styles.searchResult}>
                {results.map((result) => (
                    <li key={result.id}>{result.webTitle}</li>
                ))}
            </ul>
        </div>
    );
};

export default Search;
