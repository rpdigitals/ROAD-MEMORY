import Tour from "../services/tour-request.js";

export default {
    data() {
        return {
            name: '',
            price: 0,
            visitHour: '',
            longitude: '',
            latitude: '',
            picture: '',
            description: '',
            address: '',
            languages: [],
            openDaysHours: [],
            partnerId: 0,
            tourCategoryId: 0,
            monSt: '',
            tueSt: '',
            wedSt: '',
            turSt: '',
            friSt: '',
            satSt: '',
            sunSt: '',
            monEn: '',
            tueEn: '',
            wedEn: '',
            turEn: '',
            friEn: '',
            satEn: '',
            sunEn: '',
            tourCategoryFromBd: '',
        }
    },
    methods: {
        addTour() {


            var openDaysHours = {
                monSt: this.monSt,
                tueSt: this.tueSt,
                wedSt: this.wedSt,
                turSt: this.turSt,
                friSt: this.friSt,
                satSt: this.satSt,
                sunSt: this.sunSt,
                monEn: this.monEn,
                tueEn: this.tueEn,
                wedEn: this.wedEn,
                turEn: this.turEn,
                friEn: this.friEn,
                satEn: this.satEn,
                sunEn: this.sunEn,
            };
            Tour.addTour({
                name: this.name,
                price: this.price,
                visit_hour: this.visitHour,
                longitude: this.longitude,
                latitude: this.latitude,
                tour_category_id: this.tourCategoryId,
                picture: this.picture,
                description: this.description,
                address: this.address,
                languages: this.languages.toString(),
                open_days_hours: JSON.stringify(openDaysHours),
                partner_id: sessionStorage.getItem('partnerId'),
            });
        },
        getTourCategoryFromBd() {
            Tour.getTourCategories().then(response => {
                // console.log(response.data);
                this.tourCategoryFromBd = response.data;
            });
        }
    },
    mounted() {
        this.getTourCategoryFromBd()
    },
};