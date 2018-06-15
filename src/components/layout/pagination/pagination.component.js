export default {
  name: 'pagination',
  components: {},
  props: {
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
    }
  },
  data () {
    return {
      totalPages: 0,
      pages: [],
      pageContentStart: 0,
      pageContentFinish: 0,
      currentPage: 0
    }
  },
  computed: {

  },
  mounted () {
    this.currentPage = this.page
    this.totalPages = parseInt(this.total / this.size)

    if (this.total % this.size > 0) {
      this.totalPages++
    }
    let i;
    for (i=1;i<=this.totalPages;i++) {
      this.pages.push(i);
    }
    this.setInfoPage()
  },
  methods: {
    setInfoPage() {
      this.pageContentStart = this.size * (this.currentPage - 1) + 1
      this.pageContentFinish = this.pageContentStart + this.size - 1
      if (this.pageContentFinish > this.total) {
        this.pageContentFinish = this.total
      }
    },
    setPage() {
      this.emit()
      this.setInfoPage()
    },
    previousPage() {
      this.currentPage--
      this.emit()
      this.setInfoPage()
    },
    nextPage() {
      this.currentPage++
      this.emit()
      this.setInfoPage()
    },
    emit() {
      this.$emit('changePage', this.currentPage)
    }
  },
  watch: {
    currentPage: function(event) {
      if(this.page !== this.currentPage){
        this.emit()
        this.setInfoPage()
      }
    }
  }
}
