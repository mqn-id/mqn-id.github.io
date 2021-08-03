/* eslint-disable array-callback-return */
import CONFIG from '../../globals/config';

const createRestaurantDetailTemplate = (restaurant) => {
  let drinkComponent = '';
  let foodComponent = '';
  let reviewComponent = '';

  restaurant.menus.foods.map((food) => {
    foodComponent += `<div class="col-xs-3">
    <div><img src="../foods.png" alt="food Icon">
    </div>
    <div>${food.name}
    </div>
  </div>
  `;
  });

  restaurant.menus.drinks.map((drink) => {
    drinkComponent += ` <div class="col-xs-3">
    <div><img src="../drinks.png" alt="food Icon">
    </div>
    <div>${drink.name}
    </div>
  </div>`;
  });

  restaurant.customerReviews.map((review) => {
    reviewComponent += `
  <div class="col-xs-4">
  <h4>${review.name} on ${review.date}</h4>
  <p>${review.review}</p></div>`;
  });

  const componentResult = ` 
  <div class="content__detail">
    <div class ="content__detail__info">
      <img class="content__detail__gambar" alt="${restaurant.name}"
      src="${restaurant.pictureId ? CONFIG.BASE_IMAGE_URL_MEDIUM + restaurant.pictureId : 'https://picsum.photos/id/666/800/450?grayscale'}">
    </div>
    <div class ="content__detail__info">
      <h2 class="restaurant__name">${restaurant.name}</h2>
      <p>Rating:</p>
      <h3>${restaurant.rating}</h3>
      <p>Alamat:</p>
      <h3><i class="fa fa-map-marker" aria-hidden="true"></i>  ${restaurant.address}, ${restaurant.city}</h3>
      <p>Kategori:</p>
      <h3>${restaurant.categories.map((cat) => cat.name)}</h3>
      <p>Tentang:</p>
      <p>${restaurant.description}</p>
    </div>
  </div>
  <div class="tabs">
  <ul class="tabs-list">
     <li class="active"><button id="best-menu">Menu Terbaik</button></li>
     <li ><button id='review-users'>Ulasan Pelanggan</button></li>
  </ul>

  <div id="tab1" class="tab active">
      <div class="content__menus">
      ${foodComponent}${drinkComponent}
      </div>
  </div>
  <div id="tab2" class="tab">
      <div class="content__reviews">
      ${reviewComponent}
      </div>
  </div>

</div>
`;
  return componentResult;
};

const createRestaurantItemTemplate = (restaurant) => `
<div class="restaurant-item">
<div class="restaurant-item__header">
    <img class="restaurant-item__header__poster" alt="${restaurant.name}"
        src="${restaurant.pictureId ? CONFIG.BASE_IMAGE_URL_SMALL + restaurant.pictureId : 'https://picsum.photos/id/666/800/450?grayscale'}">
    <div class="restaurant-item__header__city">
        <p>${restaurant.city}</p>
    </div>
</div>
<div class="restaurant-item__content">
    <h3><a href="${`/#/detail/${restaurant.id}`}" class="restaurant__name">${restaurant.name}</a> (⭐️<span class="restaurant-item__header__rating__score">${restaurant.rating}</span>)</h3>
    <p>${restaurant.description}</p>
</div>
</div>
 `;

const createLikeRestaurantButtonTemplate = () => `
  <button aria-label="like this restaurant" id="likeButton" class="like">
     <i class="fa fa-heart-o" aria-hidden="true"></i>
  </button>
`;

const createUnlikeRestaurantButtonTemplate = () => `
  <button aria-label="unlike this restaurant" id="likeButton" class="like">
    <i class="fa fa-heart" aria-hidden="true"></i>
  </button>
`;

export {
  createRestaurantItemTemplate,
  createRestaurantDetailTemplate,
  createLikeRestaurantButtonTemplate,
  createUnlikeRestaurantButtonTemplate,
};
