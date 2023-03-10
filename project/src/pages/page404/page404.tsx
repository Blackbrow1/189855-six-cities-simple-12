import { Link } from 'react-router-dom';
import './page404.css';

export default function Page404() {
  return (
    <div className="not-found">
      <h1 className="not-found__title">Oooops, 404</h1>
      <p className="non-found__desription">this page not found</p>
      <Link className="not-found__link" to="/">go to main page</Link>
    </div>
  );
}
