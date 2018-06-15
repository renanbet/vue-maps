import googlemaps from '../map/index.vue'
import list from '../layout/list/index.vue'
import LocationService from '../../shared/services/locations.service'

export default {
  components: {
    googlemaps,
    list
  },
  props: [],
  data () {
    return {
      locationService: Object,
      items: [],
      center: {
        lat: 0,
        lng: 0
      },
      markers: [],
      zoom: 14
    }
  },
  computed: {

  },
  async mounted () {
    this.locationService = LocationService.getInstance();
    await this.locationService.get().then(res => {
      this.items = res.data

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
    setPosition(item) {
      this.center = {
        lat: item.lat,
        lng: item.lng
      }
    }
  }
}
