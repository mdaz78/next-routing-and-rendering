import NotFound from '@/components/error-page/not-found/not-found.component';

const NotFoundPage = () => {
  return (
    <NotFound
      title='Page Not Found'
      description='The requested page could not be found'
    />
  );
};

export default NotFoundPage;
