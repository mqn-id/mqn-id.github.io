/* eslint-disable no-empty-function */
const NotFound = {
  async render() {
    return `
        <div class="content">
        <h2 class="content__heading">404 Hai Kak Halaman yang di cari Tidak Ada</h2>
        </div>
          `;
  },

  async afterRender() {
  },

};

export default NotFound;
