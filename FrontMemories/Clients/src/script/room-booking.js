import { RouterLink, RouterView } from "vue-router";
import { ref, onMounted } from "vue";
import Rooms from "../services/hotel/room-request.js";

export default {
  data() {
    return {
      room: "",
      children: "",
      date: "",
      numberOfNigth: 1,
      total_price: "",
      hasBooked: false,
    };
  },
  methods: {
    singleRoom(roomId) {
      // console.log(roomId);
      Rooms.singleRoom(roomId).then((Response) => {
        //    console.log(Response.data);
        this.room = Response.data;
        //this.total_price = this.numberOfNigth * this.room.price;
      });
    },
    roomBooking(roomId) {
      this.$router.push(`/book-room/${roomId}`);
    },
    bookHotel() {
      this.hasBooked = true;
      Rooms.bookHotel({
        room_id: this.room.id,
        hotel_id: sessionStorage.getItem("hotelId"),
        customer_id: sessionStorage.getItem("customerId"),
        date: this.date,
        total_price: this.room.price * this.numberOfNigth,
        number_of_nigth: this.numberOfNigth,
        number_of_nigth: this.numberOfNigth,
      }).then((Response) => {
        console.log(Response);
      });
    },
  },
  mounted() {
    this.singleRoom(this.$route.params.id);
  },
};
