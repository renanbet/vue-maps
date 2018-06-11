import LocationService from '../../shared/services/locations.service'

export default {
  components: {},
  props: [],
  data () {
    return {
      center: {lat: -27.605275, lng: -48.466823},
      zoom: 14,
      markers: []
    }
  },
  computed: {

  },
  async mounted () {
    let locationService = new LocationService();
    await locationService.get().then(res => {
      res.data.forEach(item => {
        this.markers.push({
          name: item.name,
          position: {
            lat: item.lat,
            lng: item.lng
          }
        })
      })
    })

    navigator.geolocation.getCurrentPosition(position => {
      this.center = {
        lat: position.coords.latitude,
        lng: position.coords.longitude
      };
    });
  },
  methods: {
    showLocation: function(m){
      console.log(m);
      this.center = m.position
    }
  }
}
