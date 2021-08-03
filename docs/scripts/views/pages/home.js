import TheRestaurantDbSource from '../../data/therestaurantdb-source';
import { createRestaurantItemTemplate } from '../templates/template-creator';

const Home = {
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
    <div class="hero">
    <div class="hero__inner">
        <h1 class="hero__title">Cita rasa menjadi prioritas setiap sajian terbaik kami</h1>
        <p class="hero__tagline">Pengalaman anda adalah semangat kami menyajikan makanan dengan bahan berkualitas tinggi dan bersih.</p>
    </div>
  </div>
    <div class="content">
    <h2 class="content__heading">Lokasi Kami</h2>
    <div id="restaurants" class="restaurants">

    </div>
    </div>
    `;
  },

  async afterRender() {
    const restaurants = await TheRestaurantDbSource.listRestaurants();
    const restaurantsContainer = document.querySelector('#restaurants');
    restaurants.forEach((restaurant) => {
      restaurantsContainer.innerHTML += createRestaurantItemTemplate(restaurant);
    });
  },
};

export default Home;
