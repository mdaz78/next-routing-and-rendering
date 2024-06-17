'use client';

import CustomError from '@/components/error-page/custom-error/custom-error.component';

const Error = ({ error }) => {
  return (
    <CustomError
      title='Invalid filter'
      description='The filter you provided is invalid.'
      message={error.message}
    />
  );
};

export default Error;
