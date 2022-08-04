<template>
<div class="visits-viewer">
    <h3>Liste des visits  </h3>
    <visits-list></visits-list>
  </div></template>

<script>
import VisitsList from "../../components/Visits/VisitsList.vue";

export default {
  components: {
    VisitsList,
  },
};
</script>

<style lang="scss" >
.visits-viewer {
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
