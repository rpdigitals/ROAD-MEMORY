import { PaperTable } from "@/components";
import Service from "../services/services-request";
const tableColumnsTour = [
  "Id",
  "Nom",
  "Categorie",
  "Langues",
  "Adresse",
  "Descriptions",
  "Prix",
  "image",
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
  "Nom",
  "Categories",
  "Adresse",
  "Descriptions",
  "image",
  "Note",
];
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
            title: "Sites",
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
          for (var index in hotels) {
            this.tableDataHotel.push({
              id: counter,
              nom: hotels[index].name,
              categories: hotels[index].room_categories.length,
              adresse: hotels[index].address,
              descriptions: hotels[index].description,
              image: hotels[index].picture,
              note: hotels[index].note,
              identifier: hotels[index].id,
            });
            counter++;
          }
          this.table2 = {
            title: "Hotels",
            subTitle: "Hotels",
            columns: [...tableColumnsHotel],
            data: this.tableDataHotel,
          };
        }
      );
      Service.restoService(sessionStorage.getItem("partnerId")).then(
        (response) =>   {
          var resto = response.data["data"];
          var counter = 1;
          console.log(resto);
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
          //   this.table3 = {
          //     title: "Hotels",
          //     subTitle: "Hotels",
          //     columns: [...tableColumnsHotel],
          //     data: this.tableDataHotel,
          //   };
          this.table3 = {
            title: "Restaurants",
            subTitle: "resto",
            columns: [...tableColumnsHotel],
            data: this.tableDataHotel,
          };
        }
      );
      //   Service.carService(sessionStorage.getItem("partnerId")).then(
      //     (response) => {
      //       console.log(response.data["data"]);
      //     }
      //   );
    },
  },
  mounted() {
    this.serviceInfo();
  },
};
