import React, { useEffect, useState} from "react";
import axios from "axios";


const Giphy = () => {
    const [data, setData] = useState([]);
    const [search, setSearch] = useState("");
    const [isError, setIsError] = useState(false);
    const [offset, setOffset] = useState(1);

    useEffect(() => {
        fetchData("trending");
    }, []);

    useEffect(() => {
        window.addEventListener('scroll', () => {
            const bottom = Math.ceil(window.innerHeight + window.scrollY) >= document.documentElement.scrollHeight;
            if (bottom) { setOffset(prev => prev + 1); }
        }, true);
        return () => {
            window.removeEventListener('scroll', () => {
                const bottom = Math.ceil(window.innerHeight + window.scrollY) >= document.documentElement.scrollHeight;
                if (bottom) { setOffset(prev => prev + 1); }
            }, true);
        };
    }, []);

    useEffect( () => {
        const fetchData = async () => {
            try {
                const results = await axios("https://api.giphy.com/v1/gifs/search", {
                    params: {
                        api_key: "L4txBCOMWC9EzIGEZRHoqHikDBkj4eCd",
                        q: search,
                        limit: 20,
                        offset: offset*20
                    }
                });
                setData((current) => [...current, ...results.data.data]);
                } catch (err) {
                    setIsError(true);
                    setTimeout(() => setIsError(false), 4000);
                }
        };

        fetchData();
    }, [offset]);

    const renderGifs = () => {
        return data.map((el) => {
            return (
                <div key={el.id} className="gif">
                    <img src={el.images.fixed_height.url} />
                </div>
            );
        });
    };

    const renderError = () => {
        if (isError) {
        return (
            <div
            className="alert alert-danger alert-dismissible fade show"
            role="alert"
            >
            Unable to get Gifs, please try again in a few minutes
            </div>
        );
        }
    };

    const handleSearchChange = event => {
        setSearch(event.target.value);
    };

    const handleSubmit = async event => {
        event.preventDefault();
        setIsError(false);
        setOffset(1);
        try {
        const results = await axios("https://api.giphy.com/v1/gifs/search", {
            params: {
                api_key: "L4txBCOMWC9EzIGEZRHoqHikDBkj4eCd",
                q: search,
                limit: 20
            }
        });
        setData(results.data.data);
        } catch (err) {
            setIsError(true);
            setTimeout(() => setIsError(false), 4000);
        }
    };

    const fetchData = async (URL) => {
        setIsError(false);
        try {
            const results = await axios(`https://api.giphy.com/v1/gifs/${URL}`, { params: {
                api_key: "L4txBCOMWC9EzIGEZRHoqHikDBkj4eCd",
            }});
            setData(results.data.data);
        } catch (err) {
            setIsError(true);
            setTimeout(() => setIsError(false), 4000);
        }
    };

    return (
        <div className="m-2">
        {renderError()}
        <div className="inputform">
            <input
                value={search}
                onChange={handleSearchChange}
                type="text"
                placeholder="search"
                className="searchbar"
            />
            <div className="button-container">
                <button 
                    className="button trendingbtn"
                    type="submit"
                    onClick={handleSubmit}
                >Search</button>

            </div>
        </div>
                <div className="container gifs">{renderGifs()}</div>
            <p className="ToTop"><a href="#top">Back to Top</a></p>
        </div>
    );
};

export default Giphy;
