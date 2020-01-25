import React from 'react';

const NotFound = () => (
  <>
    <h1>You seem lost...</h1>
    <p>The page you were looking for isn&apos;t here...</p>
    <p>
      <a href="/">Click here</a> to return to the home page.
    </p>
  </>
);

const Generic = ({ code }) => (
  <>
    <h1>An error occurred!</h1>
    <p>Status code: {code}</p>
  </>
);

const Error = ({ code }) => (
  <main>{code === 404 ? <NotFound /> : <Generic code={code} />}</main>
);

// eslint-disable-next-line fp/no-mutation
Error.getInitialProps = ({ res, err }) => ({
  code: res?.statusCode || err?.statusCode || 404
});

export default Error;
