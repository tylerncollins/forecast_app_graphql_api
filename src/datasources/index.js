import ForecastAPI from './forecast';
import ResortsAPI from './resorts';

export default () => ({
  forecastAPI: new ForecastAPI(),
  resortsAPI: new ResortsAPI()
});
