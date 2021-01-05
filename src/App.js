import React,{useState,useEffect} from 'react'
import {Grid} from '@material-ui/core'
import Headbar from './components/Headbar';
import { CategoryList } from './components/CategoryList';
import { NewsList } from './components/NewsList';
import { Pagination } from './components/Pagination';
import { Search } from './components/Search';
import { useStyles} from './useStyles';
import { Loading } from './components/Loading';
import {categoryItem as items} from './data/categoryItem'
// import News from './data/News'
import axios from 'axios';


// const news = new News("Nahid");

function App() {
  const classes = useStyles();
  const [news,setNews] = useState([])
  const [cat_item_select,setCategory] = useState(items.general);
  const [totalNews,setTotalNews] = useState(0)
  const [searchTerm,setTerm] = useState('')

  useEffect(() => {
    const url = `${process.env.REACT_APP_NEWS_URL}?apiKey=${process.env.REACT_APP_NEWS_API}&category=${cat_item_select}&pageSize=10&q=${searchTerm}`

    axios.get(url)
        .then(res => {
          // console.log(res.data)
          setNews(res.data.articles)
          setTotalNews(res.data.totalResults)
        })
        .catch(err => console.log(err.response))
    // console.log(url)
  }, [cat_item_select,searchTerm])

  // change category
  const changeCategory = (category) => {
    setCategory(category)
  }
  const searchByTerm = term => setTerm(term)
  
	return (
		<Grid container className={classes.root}>
			<Grid className={classes.item}>
				<Headbar />
				<Search search={searchByTerm}/>
				<CategoryList cat_select={cat_item_select} changeCategory={changeCategory} totalNews={totalNews}/>
        {/* <Loading /> */}
				<NewsList articles={news}/>
				<Pagination />
			</Grid>
			
			
		</Grid>
	);
}

export default App;
// f27e790767464ed1ac580a01320b80ea