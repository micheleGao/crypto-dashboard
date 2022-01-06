import { useEffect, useState} from "react";
import axios from "axios";

const NewsFeed = () => {
    const [articles, setArticles]= useState(null)
    useEffect(() => {
    const options = {
      method: "GET",
      url: "https://crypto-news-live.p.rapidapi.com/news",
      headers: {
        "x-rapidapi-host": "crypto-news-live.p.rapidapi.com",
        "x-rapidapi-key": "595af1f6d7mshf66a8305552d06cp1d7db8jsn1d1ea069a6dc",
      },
    };

    axios
      .request(options)
      .then((response)=>{
        console.log(response.data)
        setArticles(response.data)
      }).catch((error)=> {
        console.error(error)
      });
  });

  console.log(articles)

  const first7Articles = articles?.slice(0,7)
    return (
        <div className="news-feed">
            <h2>NewsFeed</h2>
            {first7Articles?.map((article, indx)=>(
                <div key={indx}>
                    <a href={article.url}><p>{article.title}</p></a>     
                </div>))}
        </div>
    );

};
export default NewsFeed;
