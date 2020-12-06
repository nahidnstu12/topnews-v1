import React from 'react'
import {Grid} from '@material-ui/core'
import Headbar from './components/Headbar';
import { CategoryList } from './components/CategoryList';
import { NewsList } from './components/NewsList';
import { Pagination } from './components/Pagination';
import { Search } from './components/Search';
import { News } from './components/News';
import { useStyles} from './useStyles';

const data = [
  {
    author: "MSNBC",
    title: "Trump admin debates labelling Yemen's Houthis terrorists — aid groups warn thousands face famine",
    "description": "Trump administration are considering labeling Houthi rebels in Yemen a terrorist organization, a move aid groups say could trigger humanitarian disaster",
    url: "https://www.nbcnews.com/news/world/trump-admin-debates-labelling-yemen-s-houthis-terrorists-aid-groups-n1250137",
    urlToImage: "https://media1.s-nbcnews.com/j/newscms/2020_49/3433654/201206_ps_yemen_terrorism_0745_b8de3d1f6205be1ab9ec151ec186a5ca.nbcnews-fp-1200-630.jpg",
    publishedAt: "2020-12-06T13:16:21Z",
    content: "Trump administration officials are locked in an internal debate about whether to label Houthi rebels in Yemen as a terrorist organization, as aid groups and U.N. officials warn that the move could tr… [+6557 chars]"
  },
  {
    author: "MSNBC",
    title: "Trump admin debates labelling Yemen's Houthis terrorists — aid groups warn thousands face famine",
    "description": "Trump administration are considering labeling Houthi rebels in Yemen a terrorist organization, a move aid groups say could trigger humanitarian disaster",
    url: "https://www.nbcnews.com/news/world/trump-admin-debates-labelling-yemen-s-houthis-terrorists-aid-groups-n1250137",
    urlToImage: "https://media1.s-nbcnews.com/j/newscms/2020_49/3433654/201206_ps_yemen_terrorism_0745_b8de3d1f6205be1ab9ec151ec186a5ca.nbcnews-fp-1200-630.jpg",
    publishedAt: "2020-12-06T13:16:21Z",
    content: "Trump administration officials are locked in an internal debate about whether to label Houthi rebels in Yemen as a terrorist organization, as aid groups and U.N. officials warn that the move could tr… [+6557 chars]"
  }
]

function App() {
	const classes = useStyles();
	return (
		<Grid container className={classes.root}>
			<Grid className={classes.item}>
				<Headbar />
				<Search />
				<CategoryList />
				<NewsList />
				<News />
				<Pagination />
			</Grid>
			
			
		</Grid>
	);
}

export default App;
// f27e790767464ed1ac580a01320b80ea