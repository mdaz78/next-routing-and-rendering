import { DUMMY_NEWS } from '@/data/dummy-news';
import { notFound } from 'next/navigation';

const ImagePage = ({ params }) => {
  const newsSlug = params?.slug;
  const newsItem = DUMMY_NEWS.find((news) => news.slug === newsSlug);

  if (!newsItem) {
    notFound();
  }

  return (
    <div className='fullscreen-image'>
      <img src={`/images/news/${newsItem.image}`} alt={newsItem.title} />
    </div>
  );
};

export default ImagePage;
