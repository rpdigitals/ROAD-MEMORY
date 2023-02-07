import { RouterLink, RouterView } from "vue-router";
import { ref, onMounted } from "vue";
import RoomsCategory from "../services/hotel/category-request.js";

$(function () {
  $("#mdb-lightbox-ui").load("mdb-addons/mdb-lightbox-ui.html");
});

export default {
  data() {
    return {
      rooms: "",
    };
  },
  methods: {
    roomsOfCategory(id) {
      RoomsCategory.roomsOfCategory(id).then((Response) => {
        this.rooms = Response.data;
      });
    },
    bookRoom(roomId) {
      this.$router.push(`/book-room/${roomId}`);
    },
  },
  mounted() {
    this.roomsOfCategory(this.$route.params.id);
  },
};
