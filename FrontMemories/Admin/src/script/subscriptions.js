import Subscriptions from "../services/subscription-request.js";
export default {
  data() {
    return {
      substypes: {},
      subsInfo: "",
    };
  },
  methods: {
    substype() {
      Subscriptions.substype().then((response) => {
        //console.log(response.data);
        this.substypes = response.data;
      });
    },
    subscriptionOfPartner() {
      let id = sessionStorage.getItem("partnerId");
      Subscriptions.subscription(id).then((response) => {
        this.subsInfo = response.data.subs_info;
        // console.log(response.data.subs_info);
      });
    },
    changeSubscription(newSubsId) {
      Subscriptions.changePlan(this.subsInfo.subscription.id, {
        subs_type_id: newSubsId,
        partner_id: sessionStorage.getItem("partnerId"),
      }).then((response) => {
        this.substype();
        this.subscriptionOfPartner();
      });
    },
  },
  mounted() {
    this.substype();
    this.subscriptionOfPartner();
  },
};
