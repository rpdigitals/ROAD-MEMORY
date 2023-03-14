import { PaperTable } from "@/components";
import Service from "../services/services-request";
//afficher les images d une api en vue js dans une balise imag
const tableColumnsTour = [
  "Id",
  "Nom",
  "Partenaire",
  "Categorie",
  "Adresse",
  "Descriptions",
  "Prix",
  "Contacts",
];
const tableColumnsResto = [
  "Id",
  "Nom",
  "Partenaire",
  "Categorie",
  "Adresse",
  "Descriptions",
  "Prix",
  "Contacts",
];
const tableColumnsHotel = [
  "Id",
  "Nom",
  "Partenaire",
  "Adresse",
  "Descriptions",
  "Contacts",
];
const tableColumnsCar = [
  "Id",
  "Nom",
  "partenaire",
  "Contacts",
  "Prix",
  "Marque",
];
export default {
  components: {
    PaperTable,
  },
  data() {
    return {
      heading: {
        Sites: 0,
        Hotels: 2,
        Resto: 3,
        Voitures: 4,
      },
      headTitle: "Sites",
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
    show(head) {
      var one = 1;
      var two = 2;
      var tree = 3;
      var four = 4;

      switch (head) {
        case this.heading.Sites:
          one = 0;
          this.headTitle = "Sites";
          break;
        case this.heading.Hotels:
          two = 0;
          this.headTitle = "Hotels";
          break;
        case this.heading.Resto:
          tree = 0;
          this.headTitle = "Resto";
          break;
        case this.heading.Voitures:
          four = 0;
          this.headTitle = "Voitures";
          break;
      }
      this.heading = {
        Sites: one,
        Hotels: two,
        Resto: tree,
        Voitures: four,
      };
    },
    serviceInfo() {
      Service.allTour().then((response) => {
        let tours = response.data["data"];

        let counter = 1;
        for (let index in tours) {
          this.tableDataTour.push({
            id: counter,
            idBD: tours[index].id,
            nom: tours[index].name,
            categorie: tours[index].category.type,
            partenaire:
              tours[index].partner.society_name +
              " - \n" +
              tours[index].partner.ceo_name,
            adresse: tours[index].address,
            descriptions: tours[index].description,
            prix: tours[index].price,
            image: tours[index].picture,
            contacts:
              tours[index].partner.first_telephone +
              " - \n" +
              tours[index].partner.first_telephone,
            identifier: tours[index].id,
            site: "tour",
          });

          counter++;
        }

        this.table1 = {
          title: "Sites Touristiques",
          subTitle: "",
          columns: [...tableColumnsTour],
          data: this.tableDataTour,
        };
      });
      Service.allHotel().then((response) => {
        let hotels = response.data["data"];
        let counter = 1;
        let numberOfRooms = 0;
        let numberOfRoomsCategories = 0;
        //get the number of rooms
        for (var index = 0; index < hotels.length; index++) {
          for (
            let indexa = 0;
            indexa < hotels[index].room_categories.length;
            indexa++
          ) {
            numberOfRooms += hotels[index].room_categories[indexa].rooms.length;
          }
        }
        //get the number of categorires of rooms

        for (let index = 0; index < hotels.length; index++) {
          numberOfRoomsCategories += hotels[index].room_categories.length;
        }

        for (index in hotels) {
          this.tableDataHotel.push({
            id: counter,
            nom: hotels[index].name,
            partenaire:
              hotels[index].partner.society_name +
              " - \n" +
              hotels[index].partner.ceo_name,
            adresse: hotels[index].address,
            descriptions: hotels[index].description,

            contacts:
              hotels[index].partner.first_telephone +
              " - \n" +
              hotels[index].partner.second_telephone,
            identifier: hotels[index].id,
            site: "hotel",
            idBD: hotels[index].id,
          });
          counter++;
        }
        this.table3 = {
          title: "Hotels",
          subTitle: "",
          columns: [...tableColumnsHotel],
          data: this.tableDataHotel,
        };
      });
      Service.allResto().then((response) => {
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
            contacts:
              resto[index].partner.first_telephone +
              " - \n" +
              resto[index].partner.second_telephone,
            partenaire:
              resto[index].partner.society_name +
              " - \n" +
              resto[index].partner.ceo_name,
            identifier: resto[index].id,
            site: "resto",
            idBD: resto[index].id,
          });
          counter++;
        }

        this.table2 = {
          title: "Restaurants",
          subTitle: "",
          columns: [...tableColumnsResto],
          data: this.tableDataResto,
        };
      });
      Service.allCar().then((response) => {
        "Id", "Nom", "Partenaire", "Prix", "Marque", "Contacts";

        var car = response.data["data"];
        var counter = 1;
        for (var index in car) {
          this.tableDataCar.push({
            id: counter,
            nom: car[index].name,
            partenaire:
              car[index].partner.society_name +
              " - \n" +
              car[index].partner.ceo_name,
            contacts:
              car[index].partner.first_telephone +
              " - \n" +
              car[index].partner.second_telephone,
            prix: car[index].price,
            marque: car[index].brand,
            identifier: car[index].id,
            site: "car",
            idBD: car[index].id,
          });
          counter++;
        }
        this.table4 = {
          title: "Voitures",
          subTitle: "",
          columns: [...tableColumnsCar],
          data: this.tableDataCar,
        };
      });
    },
  },
  mounted() {
    this.serviceInfo();
  },
};
