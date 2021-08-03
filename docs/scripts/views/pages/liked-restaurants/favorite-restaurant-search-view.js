import { createRestaurantItemTemplate } from '../../templates/template-creator';

class FavoriteRestaurantSearchView {
  getTemplate() {
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
       <div class="content">
       <input id="query" type="text">
       <h2 class="content__heading">Your Favorite Restaurant</h2>
           <div id="restaurants" class="restaurants">
                      
           </div>
       </div>
   `;
  }

  runWhenUserIsSearching(callback) {
    document.getElementById('query').addEventListener('change', (event) => {
      callback(event.target.value);
    });
  }

  showRestaurants(restaurants) {
    this.showFavoriteRestaurants(restaurants);
  }

  showFavoriteRestaurants(restaurants = []) {
    let html;
    if (restaurants.length) {
      html = restaurants.reduce((carry, restaurant) => carry.concat(createRestaurantItemTemplate(restaurant)), '');
    } else {
      html = this._getEmptyRestaurantTemplate();
    }

    document.getElementById('restaurants').innerHTML = html;

    document.getElementById('restaurants').dispatchEvent(new Event('restaurants:updated'));
  }

  _getEmptyRestaurantTemplate() {
    return '<div class="restaurant-item__not__found restaurants__not__found">Tidak ada resto untuk ditampilkan</div>';
  }
}

export default FavoriteRestaurantSearchView;
