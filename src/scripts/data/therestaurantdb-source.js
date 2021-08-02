/* eslint-disable no-undef */
import API_ENDPOINT from '../globals/api-endpoint';

class TheRestaurantDbSource {
  static async listRestaurants() {
    try {
      const response = await fetch(API_ENDPOINT.LIST);
      const responseJson = await response.json();
      return responseJson.restaurants;
    } catch (error) {
      console.log(error);
      return {};
    }
  }

  static async detailRestaurant(id) {
    try {
      const response = await fetch(API_ENDPOINT.DETAIL(id));
      return response.json();
    } catch (error) {
      return {};
    }
  }

  static async reviewRestaurants(review) {
    const response = await fetch(API_ENDPOINT.REVIEW, {
      method: 'POST',
      headers: {
        'X-Auth-Token': CONFIG.API_TOKEN,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(review),
    });
    return response.json();
  }
}

export default TheRestaurantDbSource;
