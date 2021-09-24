import React , {useState , useEffect} from 'react'
import axios from 'axios'

import {
  Grid,
  Typography,
  Container,
  Card,
  CardMedia,
  CardContent,
  Box
 
} from "@material-ui/core";
import { BackTop } from 'antd';

import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';


export default function Business() {
  
  const style = {
    height: 40,
    width: 40,
    lineHeight: '40px',
    borderRadius: 50,
    backgroundColor: '#ee220e',
    color: '#fff',
    textAlign: 'center',
    fontSize: 14,
  };

  const [news , setnews] = useState([])

  const topNews = async()=>{
    try {
      const res = await axios.get(`https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=30d6271c41a148ebbc8ae887904ea0f5`)
      setnews(res.data.articles);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    topNews()
  }, [])

  return (
    <div>
       <main className="content">
         <Container>
        
     
     <div className="home_main">
     <Typography variant="h4" Align="center">Business News</Typography>

     
     <Grid container spacing={2}>
  <Grid item md={12} rowSpacing={4}>
    {
      news.map(n=>(
        <Card sx={{ display: 'flex' }} className="CArd">
        
     <div className="img">
     <CardMedia
        component="img"
        className="CardMedia"
        sx={{ width: 100 }}
        image={n.urlToImage}
        alt="Live from space album cover"
      />
     </div>

     <div className="body">
     <CardContent sx={{ flex: '1 0 auto' }}>
          <Typography component="div" variant="h5">
            {n.title}
          </Typography>

          <Typography component="div" variant="subtitle1" className="source">
            Source:  <span>{n.source.name}</span> / By: <span>{n.author}</span> / At: <span>{n.publishedAt}</span>
          </Typography>

          <hr />

          <Typography component="div" paragraph={true} >
           {n.description}
          </Typography>

          <a href={n.url} target="_blank" without rel="noreferrer">
                                   <button class="uk-button uk-button-text">Read More</button>
                                   </a>

          

        </CardContent>

     </div>
        </Card>
      ))
    }
  </Grid>
  </Grid>
 
     </div>
        </Container>

        <BackTop>
      <div style={style}><KeyboardArrowUpIcon /></div>
    </BackTop>
      </main>
    </div>
  )
}
