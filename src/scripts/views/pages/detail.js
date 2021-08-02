import UrlParser from '../../routes/url-parser';
import TheRestaurantDbSource from '../../data/therestaurantdb-source';
import { createRestaurantDetailTemplate } from '../templates/template-creator';
import LikeButtonPresenter from '../../utils/like-button-presenter';
import FavoriteRestaurantIdb from '../../data/favorite-restaurant-idb';

const Detail = {
  async render() {
    return `
    <div class="preloader">
      <div class="loading">
      <video autoplay loop muted playsinline>
        <source src="./images/load.webm" type="video/webm">
        <source src="./images/load.mp4" type="video/mp4">
      </video>
        <p>Harap Tunggu</p>
      </div>
    </div>
    <div id="restaurant"></div>
    <div id="likeButtonContainer"></div>
    `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const restaurant = await TheRestaurantDbSource.detailRestaurant(url.id);
    const restaurantContainer = document.querySelector('#restaurant');
    restaurantContainer.innerHTML = createRestaurantDetailTemplate(restaurant.restaurant);

    const restaurantItem = restaurant.restaurant;
    await LikeButtonPresenter.init({
      likeButtonContainer: document.querySelector('#likeButtonContainer'),
      favoriteRestaurants: FavoriteRestaurantIdb,
      restaurant: {
        id: restaurantItem.id,
        name: restaurantItem.name,
        city: restaurantItem.city,
        description: restaurantItem.description,
        pictureId: restaurantItem.pictureId,
        rating: restaurantItem.rating,
      },
    });

    this._giveEventUlasanPelanggan();
  },

  _giveEventUlasanPelanggan() {
    document.getElementById('best-menu').addEventListener('click', () => {
      // disesuaikan
      document.getElementById('tab1').classList.add('active');

      document.getElementById('tab2').classList.remove('active');
    });

    document.getElementById('review-users').addEventListener('click', () => {
      // disesuaikan

      document.getElementById('tab2').classList.add('active');

      document.getElementById('tab1').classList.remove('active');
    });
  },
};

export default Detail;
