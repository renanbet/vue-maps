import LocationService from '../../shared/services/locations.service'

export default {
  components: {},
  props: [],
  data () {
    return {
      locations: []
    }
  },
  computed: {

  },
  async mounted () {
    let locationService = new LocationService();
    await locationService.get().then(res => {
      this.locations = res.data;
    })
  },
  methods: {
    setPosition: function(location) {
      let position = {lat: location.lat, lng: location.lng}
    }
  }
}
