<template>
  <div class="row">
    <div class="col-12">
      <edit-profile-form> </edit-profile-form>
    </div>
  </div>
</template>
<script>
import EditProfileForm from "./UserProfile/EditProfileForm.vue";
import UserCard from "./UserProfile/UserCard.vue";
export default {
  components: {
    EditProfileForm,
    UserCard,
  },
};
</script>
<style></style>
