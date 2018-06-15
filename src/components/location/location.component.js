import LocationService from '../../shared/services/locations.service'
import grid from '../layout/grid/index.vue'

export default {
  components: {
    grid
  },
  props: [],
  data () {
    return {
      name: '',
      resume: '',
      street: '',
      lat: '',
      lng: '',
      loading: false,
      locations: [],
      headers: [
      'ID',
      'Name',
      'Resume',
      'Street',
      'Latitude',
      'Longitude',
      ''
      ],
      size: 0,
      page: 1,
      total: 0,
      locationService: Object
    }
  },
  computed: {

  },
  async mounted () {
    this.getLocations();
  },
  methods: {
    async getLocations() {
      this.locationService = LocationService.getInstance();
      await this.locationService.get().then(res => {
        this.locations = res.data
        this.size = this.locations.length
        this.total = this.locations.length
      })
    },
    send() {
      let location = {
        name: this.name,
        resume: this.resume,
        street: this.street,
        lat: this.lat,
        lng: this.lng
      }
      this.locationService.post(location).then(res => {
        this.getLocations();
      })
    },
    changePage(currentPage) {
      this.page = currentPage;
    },
  }
}
