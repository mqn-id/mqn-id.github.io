import Home from '../views/pages/home';
import Review from '../views/pages/review';
import Detail from '../views/pages/detail';
import Like from '../views/pages/like';
// eslint-disable-next-line import/extensions
import notFound from '../views/pages/404';

const routes = {
  '/': Home, // default page
  '/home': Home,
  '/review': Review,
  '/detail/:id': Detail,
  '/like': Like,
  '/404': notFound,
};

export default routes;
