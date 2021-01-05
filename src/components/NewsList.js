import React from 'react'
import {Grid} from '@material-ui/core'
import {News} from  './NewsItem'

export const NewsList = ({articles}) => {
    // console.log(data)
    return (
        (<Grid>
            {articles.map((newsItem,index)=> 
            <News key={index} 
                img={newsItem.urlToImage ? newsItem.urlToImage : '' } 
                title={newsItem.title} 
                url={newsItem.url} 
                description={newsItem.description} 
                published={newsItem.publishedAt} 
                content={newsItem.content} 
                author={newsItem.author ? newsItem.author : 'Unknown'}

            />)}
        </Grid>
    ))
}
