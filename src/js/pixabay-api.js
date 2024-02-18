export class imgPix {
  constructor() {
    this.BASE_URL = 'https://pixabay.com';
    this.END_POINT = '/api/';
    this.API_KEY = '?key=42433869-1e5be4b754d1019adc877ba0e';
  }

  getImage(keyWord) {
    const url = this.BASE_URL + this.END_POINT + this.API_KEY + `&q=${keyWord}`;

    const options = {
      method: 'GET',
      image_type: 'photo',
      orientation: 'horizontal',
      safesearch: 'true',
    };

    return fetch(url, options).then(res => res.json());
  }
}
