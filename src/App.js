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
import News from './data/News'


const news = new News(items.general);

function App() {
  const classes = useStyles();

  const [response,setResponse] = useState([])
  const [isLoading,setLoading] = useState(true)
 
  const errMsg = (e) => {
    alert("Something Went Wrong "+ e);
    setLoading(false)
  }
  useEffect(() => {
     news.getNews().then(data => {

       setResponse(data)  
       setLoading(false)
     
     })
     .catch(e => {
       errMsg(e)
     })
    
  }, [])

  // change category
  const changeCategory = (category) => {
    setLoading(true)
    news.changeCategory(category)
    .then(data => {
      setResponse(data)
      setLoading(false)
    })
    .catch(e => {
      errMsg(e)
    })
  }
  // handleSearch
  const searchByTerm = term => {
    setLoading(true)
    news.search(term)
    .then(data => {
      setResponse(data)
      setLoading(false)
    })
    .catch(e => {
      errMsg(e)
    })
  }
  // pagination handles
  const next = () => {
    if(response.isNext){
    setLoading(true)
    }
    news.next()
    .then(data => {
      setResponse(data)
      setLoading(false)
    })
    .catch(e => {
      errMsg(e)
    })
  }
  const prev = () => {
    if(response.isPrev){
      setLoading(true)
      }
    news.prev()
    .then(data => {
      setResponse(data)
      setLoading(false)
    })
    .catch(e => {
      errMsg(e)
    })
  }
  const handlePageNumber = number => {

  }
  const gotoPage = (pageNumb) =>{
    
      setLoading(true)
    
    news.setCurrentPage(pageNumb)
    .then(data => {
      setResponse(data)
      setLoading(false)
    })
    .catch(e => {
      errMsg(e)
    })
  }

	return (
    
		<Grid container className={classes.root}>
			<Grid className={classes.item}>
				<Headbar />
				<Search search={searchByTerm} />
				<CategoryList cat_select={response.category} changeCategory={changeCategory}  />
        {isLoading ? (
          <Loading /> 
        ) : (
        <>
          <NewsList articles={response.articles} totalNews={response.totalResults}/>
				  <Pagination next={next} prev={prev} 
            isNext={response.isNext} isPrev={response.isPrev}
            currentPage={response.currentPage} gotoPage={gotoPage}
            totalPage={response.totalPages}
         />
        </>
          
        )}
				
			</Grid>
		</Grid>
	);
}

export default App;