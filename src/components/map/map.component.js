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
        this.markers.push({position: {
          lat: item.lat,
          lng: item.lng
          }
        })
      })
    })
  },
  methods: {

  }
}
