import NotFound from '@/components/error-page/not-found/not-found.component';

const NewsNotFoundPage = () => {
  return (
    <NotFound
      title='News Not Found'
      description='Unfortunately, the requested news could not be found.'
    />
  );
};

export default NewsNotFoundPage;
