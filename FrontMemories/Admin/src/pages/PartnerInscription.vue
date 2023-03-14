<template>
  <div class="row">
    <div class="col-12">
      <create-profile-form> </create-profile-form>
    </div>
  </div>
</template>
<script>
import CreateProfileForm from "./UserProfile/CreateProfilForm.vue";
import UserCard from "./UserProfile/UserCard.vue";
export default {
  components: {
    CreateProfileForm,
    UserCard,
  },
};
</script>
<style></style>
