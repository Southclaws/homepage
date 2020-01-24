const NotFound = () => (
  <>
    <h1>You seem lost...</h1>
    <p>The page you were looking for isn't here...</p>
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

Error.getInitialProps = ({ res, err }) => ({
  code: res ? res.statusCode : err ? err.statusCode : 404
});

export default Error;
