import pagination from '../pagination/index.vue';

export default {
  name: 'grid',
  components: { pagination },
  props: {
    headers: {
      type: Array,
      default: () => []
    },
    items: {
      type: Array,
      default: () => []
    },
    changePage: {
      type: Function,
      default: undefined
    },
    size: {
      type: Number,
      default: 0
    },
    page: {
      type: Number,
      default: 0
    },
    total: {
      type: Number,
      default: 0
    },
    hasPagination: {
      type: Boolean,
      default: true
    },
    hasEditable: {
      type: Boolean,
      default: true
    },
  },
  data() {
    return {};
  },
  computed: {},
  mounted() {},
  methods: {}
};
