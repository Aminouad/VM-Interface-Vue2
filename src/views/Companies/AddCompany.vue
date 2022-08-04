<template>
  <div class="add-company">
    <h3>Nouvelle entreprise</h3>
    <h4>Merci de bien remplir ce formulaire</h4>

    <company-form @save-data="saveData"></company-form>
  </div>
</template>
<script>
import CompanyForm from "../../components/Companies/CompanyForm.vue";
export default {
  components: {
    CompanyForm,
  },
  methods: {
    saveData(data) {
      console.log(data);
      this.$store.dispatch("companies/addCompany", data).finally(() => {
        this.$store.dispatch("companies/loadCompanies");

        this.$router.replace("/companies");
      });
    },
  },
};
</script>

<style scoped>
.add-company {
  margin-top: 2%;
    display: flex;
    margin-inline: 1em;
    flex-direction: column;
    align-items: center;
}
</style>
