import NewsList from '@/components/news-list/news-list.component';

const NewsPage = async () => {
  const response = await fetch('http://localhost:8080/news');
  const news = await response.json();

  console.log({ news });

  return (
    <div>
      <h1>News Page</h1>
      <NewsList news={news} />
    </div>
  );
};

export default NewsPage;
