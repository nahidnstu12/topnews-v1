import React from 'react'
import {Grid} from '@material-ui/core'
import {News} from  './NewsItem'

export const NewsList = ({data}) => {
    // console.log(data)
    return (
        <Grid>
            {data.map((it,ind)=> 
            <News key={ind} img={it.urlToImage} title={it.title} url={it.url} description={it.description} published={it.publishedAt} content={it.content} author={it.author}/>)}
        </Grid>
    )
}
