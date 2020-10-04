import 'semantic-ui-css/semantic.css';

const MyApp = ({ Component, pageProps }) => (
  <div className="ui container">
    <Component {...pageProps} />
  </div>
);

export default MyApp;
