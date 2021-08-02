const assert = require('assert');

Feature('Liking Restaurants');

Before(({ I }) => {
  I.amOnPage('/#/like');
});

Scenario('showing empty liked restaurants', ({ I }) => {
  I.see('Tidak ada restaurant untuk ditampilkan', '.restaurant-item__not__found');
});

Scenario('liking one restaurant', async ({ I }) => {
  I.see('Tidak ada restaurant untuk ditampilkan', '.restaurant-item__not__found');

  I.amOnPage('/');

  const firstRestaurantCard = locate('.restaurant__title').first();
  const firstRestaurantName = await I.grabTextFrom(firstRestaurantCard);

  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/like');
  I.waitForElement('restaurant-item', 2);
  const likedRestaurantCard = locate('.restaurant__title').first();
  const likedRestaurant = await I.grabTextFrom(likedRestaurantCard);

  assert.strictEqual(likedRestaurant, firstRestaurantName);
});

Scenario('Remove Liked restaurants', async (I) => {
  I.see('#likeButton');
  I.seeElement('#likeButton');
  I.click('#likeButton');
  I.dontSeeElement('#likeButton');
});
