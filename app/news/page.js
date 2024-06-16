import NewsList from '@/components/news-list/news-list.component';
import { DUMMY_NEWS } from '@/data/dummy-news';

const NewsPage = () => {
  return (
    <div>
      <h1>News Page</h1>
      <NewsList news={DUMMY_NEWS} />
    </div>
  );
};

export default NewsPage;
