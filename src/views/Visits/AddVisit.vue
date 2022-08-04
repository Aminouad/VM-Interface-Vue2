<template>
  <div class="add-visit">
    <h3>Nouvelle visite</h3>
    <h4>Merci de bien remplir ce formulaire</h4>

    <visit-form @save-data="saveData"></visit-form>
  </div>
</template>
<script>
import VisitForm from "../../components/Visits/VisitForm.vue";
export default {
  components: {
    VisitForm,
  },
  methods: {
    saveData(data) {
      console.log(data);
      this.$store.dispatch("visits/addVisit", data).finally(() => {
        this.$store.dispatch("visits/loadVisits");
        this.$router.replace("/visits");
      });
    },
  },
};
</script>

<style scoped>
.add-visit {
  margin-top: 2%;
    display: flex;
    margin-inline: 1em;
    flex-direction: column;
    align-items: center;
}
</style>
