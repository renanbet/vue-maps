import LocationService from '../../shared/services/locations.service'
import locations from '../locations/index.vue'

export default {
  components: {
    'locations': locations
  },
  props: [],
  data () {
    return {
      name: '',
      resume: '',
      street: '',
      lat: '',
      lng: '',
      loading: false
    }
  },
  computed: {

  },
  mounted () {

  },
  methods: {
    send: function() {
      let locationService = new LocationService();
      let location = {
        name: this.name,
        resume: this.resume,
        street: this.street,
        lat: this.lat,
        lng: this.lng
      }
      locationService.post(location).then(res => {
        console.log(res);
      })

    }
  }
}
