
export default {
  components: {},
  props: {
    items: {
      type: Array,
      default: () => []
    }
  },
  data () {
    return {
    }
  },
  computed: {

  },
  mounted () {

  },
  methods: {
    setPosition: function(item) {
      this.$emit('click', item)
    }
  }
}
