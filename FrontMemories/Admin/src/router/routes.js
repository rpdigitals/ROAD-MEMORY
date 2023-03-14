import DashboardLayout from "@/layout/dashboard/DashboardLayout.vue";
// GeneralViews
import NotFound from "@/pages/NotFoundPage.vue";

// Admin pages
import Dashboard from "@/pages/Dashboard.vue";
import UserProfile from "@/pages/UserProfile.vue";
import PartnerInscription from "@/pages/PartnerInscription.vue";
import News from "@/pages/News.vue";
import Subscription from "@/pages/Subscription.vue";
import Services from "@/pages/Services.vue";
import Notifications from "@/pages/Notifications.vue";
import Icons from "@/pages/Icons.vue";
import Maps from "@/pages/Maps.vue";
import Payements from "@/pages/Payements.vue";
import Typography from "@/pages/Typography.vue";
import Reservations from "@/pages/Reservations.vue";
import AddService from "@/pages/AddService.vue";
import AddRoom from "@/pages/AddRoom.vue";
import EditService from "@/pages/EditService.vue";

const routes = [
  {
    path: "/",
    component: DashboardLayout,
    redirect: "/dashboard",
    children: [
      // {
      //   path: "/:partnerId",
      //   name: "Tableau de bord Un",
      //   component: DashboardOne,
      // },
      {
        path: "dashboard",
        name: "Tableau de bord",
        component: Dashboard,
      },
      {
        path: "profil",
        name: "Profil",
        component: UserProfile,
      },
      {
        path: "partner-inscription",
        name: "Inscription",
        component: PartnerInscription,
      },
      {
        path: "news",
        name: "News",
        component: News,
      },
      {
        path: "subscription",
        name: "Abonnements",
        component: Subscription,
      },
      {
        path: "services",
        name: "Services",
        component: Services,
      },

      {
        path: "notifications",
        name: "Notifications",
        component: Notifications,
      },
      {
        path: "icons",
        name: "icons",
        component: Icons,
      },
      {
        path: "maps",
        name: "maps",
        component: Maps,
      },
      {
        path: "payments",
        name: "Payements",
        component: Payements,
      },
      {
        path: "typography",
        name: "typography",
        component: Typography,
      },
      {
        path: "booking",
        name: "Reservations",
        component: Reservations,
      },
      {
        path: "/add-service/:service",
        name: "Ajouter un service",
        component: AddService,
      },
      {
        path: "/add-room/:id",
        name: "Ajouter une chambre",
        component: AddRoom,
      },
      {
        path: "/edit-service/:service/:site",
        name: "Mise à jour",
        component: EditService,
      },
    ],
  },
  { path: "*", component: NotFound },
];

/**
 * Asynchronously load view (Webpack Lazy loading compatible)
 * The specified component must be inside the Views folder
 * @param  {string} name  the filename (basename) of the view to load.
function view(name) {
   var res= require('../components/Dashboard/Views/' + name + '.vue');
   return res;
};**/

export default routes;
