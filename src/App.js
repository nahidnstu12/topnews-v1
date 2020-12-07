import React,{useState} from 'react'
import {Grid} from '@material-ui/core'
import Headbar from './components/Headbar';
import { CategoryList } from './components/CategoryList';
import { NewsList } from './components/NewsList';
import { Pagination } from './components/Pagination';
import { Search } from './components/Search';
import { useStyles} from './useStyles';
import { Loading } from './components/Loading';
import {categoryList as list} from './data/lists'

const data = [
  {
    author: "MSNBC",
    title: "Trump admin debates labelling Yemen's Houthis terrorists — aid groups warn thousands face famine",
    description: "Trump administration are considering labeling Houthi rebels in Yemen a terrorist organization, a move aid groups say could trigger humanitarian disaster",
    url: "https://www.nbcnews.com/news/world/trump-admin-debates-labelling-yemen-s-houthis-terrorists-aid-groups-n1250137",
    urlToImage: "https://media1.s-nbcnews.com/j/newscms/2020_49/3433654/201206_ps_yemen_terrorism_0745_b8de3d1f6205be1ab9ec151ec186a5ca.nbcnews-fp-1200-630.jpg",
    publishedAt: "2020-12-06T13:16:21Z",
    content: "Trump administration officials are locked in an internal debate about whether to label Houthi rebels in Yemen as a terrorist organization, as aid groups and U.N. officials warn that the move could tr… [+6557 chars]"
  },
  {
    author: "MSNBC",
    title: "Trump admin debates labelling Yemen's Houthis terrorists — aid groups warn thousands face famine",
    description: "Trump administration are considering labeling Houthi rebels in Yemen a terrorist organization, a move aid groups say could trigger humanitarian disaster",
    url: "https://www.nbcnews.com/news/world/trump-admin-debates-labelling-yemen-s-houthis-terrorists-aid-groups-n1250137",
    urlToImage: "https://media1.s-nbcnews.com/j/newscms/2020_49/3433654/201206_ps_yemen_terrorism_0745_b8de3d1f6205be1ab9ec151ec186a5ca.nbcnews-fp-1200-630.jpg",
    publishedAt: "2020-12-06T13:16:21Z",
    content: "Trump administration officials are locked in an internal debate about whether to label Houthi rebels in Yemen as a terrorist organization, as aid groups and U.N. officials warn that the move could tr… [+6557 chars]"
  },
  {author: "Meghan Moravcik Walbert on Offspring, shared by Meghan Moravcik Walbert to Lifehacker",
  title: "Don't Make Fat Jokes Ever—Especially Not in Front of Your Kids",
  description: "This pandemic has gifted each of us our own cornucopia of physical and mental garbage: anxiety, isolation, depression, inertia, and insomnia, to name a few. For some, it also led to the more frequent consumption of less healthy (read: comfort) foods. And that…",
  url: "https://offspring.lifehacker.com/dont-make-fat-jokes-ever-especially-not-in-front-of-you-1845622489",
  urlToImage: "https://i.kinja-img.com/gawker-media/image/upload/c_fill,f_auto,fl_progressive,g_center,h_675,pg_1,q_80,w_1200/wxef6swxytpzq6gv4mq1.jpg",
  publishedAt: "2020-11-10T16:00:00Z",
  content: "This pandemic has gifted each of us our own cornucopia of physical and mental garbage: anxiety, isolation, depression, inertia, and insomnia, to name a few. For some, it also led to the more frequent… [+2952 chars]"
},
{
    author: "MSNBC",
    title: "Trump admin debates labelling Yemen's Houthis terrorists — aid groups warn thousands face famine",
    description: "Trump administration are considering labeling Houthi rebels in Yemen a terrorist organization, a move aid groups say could trigger humanitarian disaster",
    url: "https://www.nbcnews.com/news/world/trump-admin-debates-labelling-yemen-s-houthis-terrorists-aid-groups-n1250137",
    urlToImage: "https://media1.s-nbcnews.com/j/newscms/2020_49/3433654/201206_ps_yemen_terrorism_0745_b8de3d1f6205be1ab9ec151ec186a5ca.nbcnews-fp-1200-630.jpg",
    publishedAt: "2020-12-06T13:16:21Z",
    content: "Trump administration officials are locked in an internal debate about whether to label Houthi rebels in Yemen as a terrorist organization, as aid groups and U.N. officials warn that the move could tr… [+6557 chars]"
  },
  {
    author: "MSNBC",
    title: "Trump admin debates labelling Yemen's Houthis terrorists — aid groups warn thousands face famine",
    description: "Trump administration are considering labeling Houthi rebels in Yemen a terrorist organization, a move aid groups say could trigger humanitarian disaster",
    url: "https://www.nbcnews.com/news/world/trump-admin-debates-labelling-yemen-s-houthis-terrorists-aid-groups-n1250137",
    urlToImage: "https://media1.s-nbcnews.com/j/newscms/2020_49/3433654/201206_ps_yemen_terrorism_0745_b8de3d1f6205be1ab9ec151ec186a5ca.nbcnews-fp-1200-630.jpg",
    publishedAt: "2020-12-06T13:16:21Z",
    content: "Trump administration officials are locked in an internal debate about whether to label Houthi rebels in Yemen as a terrorist organization, as aid groups and U.N. officials warn that the move could tr… [+6557 chars]"
  },
  {author: "Meghan Moravcik Walbert on Offspring, shared by Meghan Moravcik Walbert to Lifehacker",
  title: "Don't Make Fat Jokes Ever—Especially Not in Front of Your Kids",
  description: "This pandemic has gifted each of us our own cornucopia of physical and mental garbage: anxiety, isolation, depression, inertia, and insomnia, to name a few. For some, it also led to the more frequent consumption of less healthy (read: comfort) foods. And that…",
  url: "https://offspring.lifehacker.com/dont-make-fat-jokes-ever-especially-not-in-front-of-you-1845622489",
  urlToImage: "https://i.kinja-img.com/gawker-media/image/upload/c_fill,f_auto,fl_progressive,g_center,h_675,pg_1,q_80,w_1200/wxef6swxytpzq6gv4mq1.jpg",
  publishedAt: "2020-11-10T16:00:00Z",
  content: "This pandemic has gifted each of us our own cornucopia of physical and mental garbage: anxiety, isolation, depression, inertia, and insomnia, to name a few. For some, it also led to the more frequent… [+2952 chars]"
},
]

function App() {
  const classes = useStyles();
  const [selected,setSelected] = useState(list.stockMarket);
	return (
		<Grid container className={classes.root}>
			<Grid className={classes.item}>
				<Headbar />
				<Search />
				<CategoryList selected={selected}/>
        {/* <Loading /> */}
				<NewsList data={data}/>
				<Pagination />
			</Grid>
			
			
		</Grid>
	);
}

export default App;
// f27e790767464ed1ac580a01320b80ea