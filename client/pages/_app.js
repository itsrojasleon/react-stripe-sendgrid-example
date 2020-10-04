import 'semantic-ui-css/semantic.css';
import Header from '../components/header';

const MyApp = ({ Component, pageProps }) => (
  <div className="ui container">
    <Header />
    <Component {...pageProps} />
  </div>
);

export default MyApp;
