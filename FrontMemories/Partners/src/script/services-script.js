import { PaperTable } from "@/components";
import Service from "../services/services-request";
//afficher les images d une api en vue js dans une balise imag
const tableColumnsTour = [
  "Id",
  "Nom",
  "Categorie",
  "Langues",
  "Adresse",
  "Descriptions",
  "Prix",
  "Note",
];
const tableColumnsResto = [
  "Id",
  "Nom",
  "Categorie",
  "Adresse",
  "Descriptions",
  "Prix",
  "image",
  "Note",
];
const tableColumnsHotel = [
  "Id",
  "Chambres",
  "Adresse",
  "Categories",
  "Descriptions",
  "Image",
  "Note",
];
const tableColumnsCar = ["Id", "Nom", "Prix", "Marque", "image"];
export default {
  components: {
    PaperTable,
  },
  data() {
    return {
      tableDataTour: [],
      tableDataHotel: [],
      tableDataResto: [],
      tableDataCar: [],
      table1: {},
      table2: {},
      table3: {},
      table4: {},
    };
  },
  methods: {
    serviceInfo() {
      Service.tourService(sessionStorage.getItem("partnerId")).then(
        (response) => {
          var tours = response.data["data"];
          var counter = 1;
          for (var index in tours) {
            this.tableDataTour.push({
              id: counter,
              nom: tours[index].name,
              categorie: tours[index].category.type,
              langues: tours[index].languages,
              adresse: tours[index].address,
              descriptions: tours[index].description,
              prix: tours[index].price,
              image: tours[index].picture,
              note: tours[index].score,
              identifier: tours[index].id,
            });
            counter++;
          }
          this.table1 = {
            title: "Sites Touristiques",
            subTitle: "",
            columns: [...tableColumnsTour],
            data: this.tableDataTour,
          };
        }
      );
      Service.hotelService(sessionStorage.getItem("partnerId")).then(
        (response) => {
          var hotels = response.data["data"];
          var counter = 1;
          var numberOfRooms = 0;
          var numberOfRoomsCategories = 0;
          //get the number of rooms
          for (var index = 0; index < hotels.length; index++) {
            for (
              var indexa = 0;
              indexa < hotels[index].room_categories.length;
              indexa++
            ) {
              numberOfRooms +=
                hotels[index].room_categories[indexa].rooms.length;
            }
          }
          //get the number of categorires of rooms

          for (var index = 0; index < hotels.length; index++) {
            numberOfRoomsCategories += hotels[index].room_categories.length;
          }

          for (var index in hotels) {
            this.tableDataHotel.push({
              id: counter,
              nom: hotels[index].name,
              chambres: numberOfRooms,
              categories: numberOfRoomsCategories,
              adresse: hotels[index].address,
              descriptions: hotels[index].description,
              image: hotels[index].picture,
              note: hotels[index].note,
              identifier: hotels[index].id,
            });
            counter++;
          }
          this.table3 = {
            title: "Hotels",
            subTitle: "",
            columns: [...tableColumnsHotel],
            data: this.tableDataHotel,
          };
        }
      );
      Service.restoService(sessionStorage.getItem("partnerId")).then(
        (response) => {
          var resto = response.data["data"];
          var counter = 1;

          for (var index in resto) {
            this.tableDataResto.push({
              id: counter,
              nom: resto[index].name,
              categorie: resto[index].category.name,
              adresse: resto[index].address,
              descriptions: resto[index].description,
              prix: resto[index].table_price,
              image: resto[index].picture,
              note: resto[index].note,
              identifier: resto[index].id,
            });
            counter++;
          }

          this.table2 = {
            title: "Restaurants",
            subTitle: "",
            columns: [...tableColumnsResto],
            data: this.tableDataResto,
          };
        }
      );
      Service.carService(sessionStorage.getItem("partnerId")).then(
        (response) => {
          "Id", "Nom", "Prix", "Marque", "image";
          console.log(response.data["data"]);
          var car = response.data["data"];
          var counter = 1;
          for (var index in car) {
            this.tableDataCar.push({
              id: counter,
              nom: car[index].name,
              prix: car[index].price,
              marque: car[index].brand,
              image: car[index].picture1,
              identifier: car[index].id,
            });
            counter++;
          }
          this.table4 = {
            title: "Voitures",
            subTitle: "",
            columns: [...tableColumnsCar],
            data: this.tableDataCar,
          };
        }
      );
    },
  },
  mounted() {
    this.serviceInfo();
  },
};
