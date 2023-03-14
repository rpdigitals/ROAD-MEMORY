import News from "../services/news-request";

export default {
  data() {
    return {
      showModal: false,
      showEditModal: false,
      title: "",
      titleUpdated: "",
      content: "",
      contentUpdated: "",
      news: [],
    };
  },
  methods: {
    showNewsModal() {
      this.showModal = true;
    },
    showEditNewsModal(id) {
      this.showEditModal = true;
      this.newsToEditId = id;
    },
    addNews() {
      this.showEditModal = false;

      let partnerId = sessionStorage.getItem("partnerId");
      News.createNews({
        title: this.title,
        content: this.content,
        partner_id: partnerId,
      }).then((response) => {
        console.log(response.data);
        this.showModal = false;
        this.$swal.fire({
          position: "top-end",
          icon: "success",
          title: "News publié avec succès",
          showConfirmButton: false,
          timer: 1500,
        });
        this.allNews();
      });
    },
    editNews() {
      this.showEditModal = false;
      let partnerId = sessionStorage.getItem("partnerId");

      News.updateNews(
        {
          title: this.titleUpdated,
          content: this.contentUpdated,
        },
        this.newsToEditId
      ).then((response) => {
        console.log(response.data);
        this.showModal = false;
        this.$swal.fire({
          position: "top-end",
          icon: "success",
          title: "News modifiée avec succès",
          showConfirmButton: false,
          timer: 1500,
        });
        this.allNews();
      });
    },
    deleteNews(id) {
      console.log("id");
      const swalWithBootstrapButtons = this.$swal.mixin({
        customClass: {
          confirmButton: "btn btn-success",
          cancelButton: "btn btn-danger",
        },
        buttonsStyling: false,
      });

      swalWithBootstrapButtons
        .fire({
          title: "Êtes vous sûres ?",
          text: "Cet action sera irreversible!",
          icon: "warning",
          showCancelButton: true,
          confirmButtonText: "OUI, Supprimer!",
          cancelButtonText: "Non, Annuler!",
          reverseButtons: true,
        })
        .then((result) => {
          if (result.isConfirmed) {
            News.deleteNews(id).then((response) => {
              swalWithBootstrapButtons.fire(
                "Supprimé!",
                "Ce news a été suprimé.",
                "success"
              );
              this.allNews();
            });
          } else if (
            /* Read more about handling dismissals below */
            result.dismiss === Swal.DismissReason.cancel
          ) {
            swalWithBootstrapButtons.fire(
              "Cancelled",
              "Your imaginary file is safe :)",
              "error"
            );
          }
        });
    },
    allNews() {
      News.allNews(sessionStorage.getItem("partnerId")).then((response) => {
        this.news = response.data;
      });
    },
  },
  mounted() {
    this.allNews();
  },
};
