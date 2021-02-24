import React, { useState, useEffect } from 'react';
import TestNews from './data/TestNews';
import { categoryItem as items } from './data/categoryItem';
import { data } from './data/localdata';
import { Loading } from './components/Loading';

const news = new TestNews(items.business);
function TestApp() {
    const [response, setResponse] = useState([]);
    const [isLoading, setLoading] = useState(false);

    useEffect(() => {
        // setResponse(data);
        //   getting data from news api
        // news
        //     .getNews()
        //     .then((data) => {
        //         setResponse(data);
        //         setLoading(false);
        //     })
        //     .catch((e) => {
        //         errMsg(e);
        //     });
    }, []);

    const errMsg = (e) => {
        alert('Something Went Wrong ' + e);
        setLoading(false);
    };

    return (
        <div>
        {isLoading ? (
          <Loading />
        ) : (
            
            response.articles.map((art) => (
                <p> {art.title} </p>
                
            ))
            
        )}
        </div>
    );
}

export default TestApp;
