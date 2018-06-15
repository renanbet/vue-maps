import LocationService from '../../shared/services/locations.service'

export default {
  components: {},
  props: {
    center: {
      type: Object,
      default: {
        lat: 0, lng: 0
      }
    },
    markers: {
      type: Array,
      default: () => []
    },
    zoom: {
      type: Number,
      default: 14
    }
  },
  data () {
    return {

    }
  },
  computed: {

  },
  async mounted () {

  },
  methods: {
    showLocation: function(m){
      console.log(m);
      this.center = m.position
    }
  }
}
