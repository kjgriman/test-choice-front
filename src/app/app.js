// Import the ErrorBoundary component
import ErrorBoundary from './errorBoundary';
 
function MyApp({ Component, pageProps }) {
  return (
    // Wrap the Component prop with ErrorBoundary component
    <ErrorBoundary>
      <Component {...pageProps} />
    </ErrorBoundary>
  );
}
 
export default MyApp;