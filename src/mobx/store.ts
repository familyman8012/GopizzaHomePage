const { observable } = require("mobx");

export const findStore = observable({
  latitude: null,
  longitude: null,
  getPosition() {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        this.latitude = position.coords.latitude;
        this.longitude = position.coords.longitude;
      },
      (err) => {
        console.log(err);
      }
    );
  },
});
