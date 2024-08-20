import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Slider from 'react-slick';


const News = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await axios.get('https://api.currentsapi.services/v1/latest-news', {
          params: {
            category: 'technology',
            language: 'au',
            apiKey: 'piAdGkJtkNYF4gdmz5kx6Mw0EBmZmHqKIfMShVvyNKJRfdhW' // Reemplaza con tu clave API
          }
        });
        console.log(response.data.articles); // Verifica la estructura de los datos aquí
        setArticles(response.data.articles);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchNews();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error fetching news.</p>;

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  return (
    <div>
      <h1>Technology News</h1>
      <Slider {...settings}>
        {articles.map((article, index) => (
          <div key={index} className="news-slide">
            {article.image && (
              <img src={article.image} alt={article.title} className="news-image" />
            )}
            <h2>{article.title}</h2>
            <p>{article.description || 'No description available'}</p>
            <a href={article.url} target="_blank" rel="noopener noreferrer">Read more</a>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default News;
