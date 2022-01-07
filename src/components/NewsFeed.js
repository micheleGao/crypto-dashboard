import { useEffect, useState} from "react";
import axios from "axios";

const articles = [
        {
            title:"Crypto 2022",
            url:"https://cryptonews.com/tags/crypto-2022",
            source:"cryptonews",
        },
        {
            title:"Bitcoin News",
            url:"https://cryptonews.com/news/bitcoin-news/",
            source:"cryptonews"
        },
        {
            title:"Ethereum News",
            url:"https://cryptonews.com/news/ethereum-news/",
            source:"cryptonews"
        },
        {
            title:"Cryptonews Deals",
            url:"https://cryptonews.com/news/cryptonews-deals/",
            source:"cryptonews",
        },
        {
            title:"People In Crypto",
            url:"https://cryptonews.com/exclusives/people/",
            source:"cryptonews",
        },
        {
            title:"Bitcoin Videos",
            url:"https://cryptonews.com/videos/bitcoin/",
            source:"cryptonews",
        },
        {
            title:"Ethereum Videos",
            url:"https://cryptonews.com/videos/ethereum/",
            source:"cryptonews",
        },
        {
            title:"Bitcoin",
            url:"https://cryptonews.com/guides/bitcoin/",
            source:"cryptonews",
        },
        {
            title:"Ethereum",
            url:"https://cryptonews.com/guides/ethereum/",
            source:"cryptonews",
        },
        {
            title:"Cryptocurrency",
            url:"https://cryptonews.com/guides/cryptocurrency/",
            source:"cryptonews",
        },
        {
            title:" Crypto 2022 ",
            url:"https://cryptonews.com/tags/crypto-2022",
            source:"cryptonews",
        },

]



const NewsFeed = () => {
//     const [articles, setArticles]= useState(null)
//     useEffect(() => {
//     const options = {
//       method: "GET",
//       url: "https://crypto-news-live.p.rapidapi.com/news",
//       headers: {
//         'x-rapidapi-host': 'crypto-news-live.p.rapidapi.com',
//         'x-rapidapi-key': process.env.REACT_APP_RAPID_API_KEY
//       },
//     };

//     axios
//       .request(options)
//       .then((response)=>{
//         console.log(response.data)
//         setArticles(response.data)
//       }).catch((error)=> {
//         console.error(error)
//       });
//   });

  console.log(articles)
  console.log(articles[0].title)

//   const first7Articles = articles?.slice(0,7)
    return (
        // <div className="news-feed">
        //     <h2>NewsFeed</h2>
        //     {first7Articles?.map((article, indx)=>(
        //         <div key={indx}>
        //             <a href={article.url}><p>{article.title}</p></a>     
        //         </div>))}
        // </div>
        <div className="news-feed">
            <h2>News Feed</h2>
            {articles?.map((article, indx)=>(
                <div key={indx}>
                    <a href={article.url}><p>{article.title}</p></a>
                </div>
            ))}

        </div>
    )

};
export default NewsFeed;
