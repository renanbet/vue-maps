import LocationService from '../../shared/services/locations.service'

export default {
  name: 'locations',
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

  }
}
