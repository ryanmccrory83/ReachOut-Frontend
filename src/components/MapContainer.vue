<template>
  <div class="map-container">
    <gmap-map
      :center="center"
      :zoom="10"
      style="width:100%;  height: 40vh;"
      class="gmap"
    >
      <gmap-marker
        :key="index"
        v-for="(m, index) in markers"
        :position="m.position"
        @click="center=m.position"
      ></gmap-marker>
    </gmap-map>
    <br>
    <div>
      <label>
        <gmap-autocomplete
          @place_changed="setPlace">
        </gmap-autocomplete>
        <button @click="addMarker" class="marker-button">Add Marker</button>
      </label>
      <br/>

    </div>
  </div>
</template>

<script>
export default {
  name: "MapContainer",
  data() {
    return {
      // default to Montreal to keep it simple
      // change this to whatever makes sense
      center: { lat: 39.7392, lng: -104.9903 },
      markers: [],
      places: [],
      currentPlace: null
    };
  },

  mounted() {
    this.geolocate();
    this.setPlace(this.geolocate());
  },

  methods: {
    // receives a place object via the autocomplete component
    setPlace(place) {
      this.currentPlace = place;
    },
    addMarker() {
      if (this.currentPlace) {
        const marker = {
          lat: this.currentPlace.geometry.location.lat(),
          lng: this.currentPlace.geometry.location.lng()
        };
        this.markers.push({ position: marker });
        this.places.push(this.currentPlace);
        this.center = marker;
        this.currentPlace = null;
      }
    },
    geolocate: function() {
      navigator.geolocation.getCurrentPosition(position => {
        this.center = {
          lat: position.coords.latitude,
          lng: position.coords.longitude
        };
      });
    }
  }
};
</script>

<style>
.map-container {
    display: flex;
    flex-flow: column wrap;
    align-items: center;
}
.gmap {
    justify-content: center;
}
.marker-button {
  margin-top: 2vh;
}
</style>
