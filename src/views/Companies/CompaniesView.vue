<template>
  <div class="companies-viewer">
    <h3>Liste des entreprises  </h3>
    <companies-list></companies-list>
  </div>
</template>

<script>
import CompaniesList from "../../components/Companies/CompaniesList.vue";

export default {
  

  components: {
    CompaniesList,
  },
};
</script>

<style lang="scss" scoped>
.companies-viewer {
  display: flex;
  flex-direction: column;

h3 {
  display: flex;
  justify-content: start;
  color: #3d81e3;
  margin-left: 2%;
}
}
</style>
