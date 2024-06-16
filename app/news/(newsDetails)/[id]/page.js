const NewsDetailsPage = ({ params }) => {
  const newsId = params?.id;

  return (
    <div>
      <h1>News Details Page</h1>
      <p>NewsId = {newsId}</p>
    </div>
  );
};

export default NewsDetailsPage;
