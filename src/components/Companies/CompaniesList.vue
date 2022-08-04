<template>
  <div>
    <section>
      <base-dialog
        :show="!!error"
        title="An error occurred!"
        @close="handleError"
      >
        <p>{{ error }}</p>
      </base-dialog>
      <base-dialog :show="isLoading" title="" fixed>
        <base-spinner></base-spinner>
      </base-dialog>
    </section>
    <div class="list-company">
      <div class="controls">
        <base-button class="button" mode="outline" @click="loadComapnies()"
          >Refresh</base-button
        >
        <div class="search">
          <input
            type="text"
            class="search-input"
            v-model="search"
            placeholder="Filtrez vos recherches..."
          />
          <br />
        </div>
        <base-button mode="outline" class="button" link to="/addCompany"
          >Ajouter une entreprise</base-button
        >
      </div>
      <table id="table">
        <thead>
          <tr class="table-hader">
            <th><i class="fa-solid fa-building-user"></i> Nom</th>
            <th><i class="fa-solid fa-address-book"></i> Email</th>
            <th><i class="fa-solid fa-phone"></i> Téléphone</th>
            <th><i class="fa-solid fa-location-dot"></i> Address</th>
            <th><i class="fa-solid fa-clock-rotate-left"></i> Date d'ajout</th>
            <th class="actions-field">
              <i class="fa-solid fa-sliders"></i> Actions
            </th>
          </tr>
        </thead>
        <tbody>
          <tr
            class="row"
            v-for="company in filteredCompanies"
            :key="company.id"
          >
            <td>{{ company.name }}</td>
            <td>{{ company.contact }}</td>
            <td>{{ company.phone }}</td>
            <td>{{ company.address }}</td>
            <td>{{ company.date }}</td>
            <td class="actions">
              <base-button
                @click="toggleDeleteModal(company.id)"
                class="deleteButton"
              >
                <i class="fa-solid fa-trash"></i>
              </base-button>
            </td>
          </tr>
        </tbody>
        <div>
          <base-dialog
            title="Suppression de document..."
            :show="showDeletePopUp"
            :confirm="true"
            @close="toggleDeleteModal"
            @actionTask="deleteCompany()"
          >
            <div>
              <p style="color: #ff130d; display: flex; justify-content: center">
                Etes-vous sûr de vouloir supprimer ce document ?
              </p>
            </div>
          </base-dialog>
        </div>
      </table>

      <ul v-if="hasCompanies"></ul>
      <h3 v-else>Aucune entreprise trouvé</h3>
    </div>
  </div>
</template>

<script>
import SearchMixins from "@/components/mixins/searchMixin";
export default {
  mixins: [SearchMixins],
  data() {
    return {
      search: "",
      error: null,
      isLoading: false,
      showDeletePopUp: false,
      id: "",
    };
  },
  created() {
    console.log("test");
    this.loadCompanies();
  },
  computed: {
    filteredCompanies() {
      return this.filterData(this.$store.getters["companies/companies"]);
      /*
      return this.$store.getters["companies/companies"].filter((p) => {
        return (
          Object.values(p)
            .join("")
            .toLowerCase()
            .indexOf(this.search.toLowerCase()) != -1
        );
      });
      */
    },
    hasCompanies() {
      return this.$store.getters["companies/hasCompanies"];
    },
  },
  methods: {
    async loadCompanies() {
      this.isLoading = true;
      try {
        await this.$store.dispatch("companies/loadCompanies");
      } catch (error) {
        this.error = error.message || "Une erreur s'est produite";
      }
      this.isLoading = false;
      console.log(this.$store.dispatch("companies/loadCompanies"));
    },
    handleError() {
      this.error = null;
    },
    deleteCompany() {
      this.$store.dispatch("companies/deleteCompany", this.id);
      this.showDeletePopUp = !this.showDeletePopUp;
    },
    toggleDeleteModal(data) {
      this.id = data;
      console.log(data);
      this.showDeletePopUp = !this.showDeletePopUp;
    },
  },
};
</script>

<style lang="scss" scoped>
.button {
  size-adjust: auto;
}

.list-company {
  margin-inline: 1em;
  border-radius: 1px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.059);
}
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
.search {
  margin-left: auto;
  margin-right: auto;
  margin-bottom: -10%;
  background-color: #f3f8f9;
  color: #696969;
  height: 100%;
  border: none;
  margin: 0;
  padding: 0.3rem;
  display: flex;
  box-sizing: border-box;
  border-radius: 4px;
  width: 30rem;
}
.search-input {
  background-color: transparent;
  color: #696969;
  border: none;
  width: 100%;
}
.controls {
  display: flex;
  justify-content: space-between;
  margin-bottom: 0.9rem;
}

input:focus {
  outline: none !important;
  border-color: #3d81e3;
}
#table {
  font-family: Arial, Helvetica, sans-serif;
  border-collapse: collapse;
  width: 100%;
}

#table th {
  border: 1px solid #ddd;
  padding: 0.4rem;
}

#table tr:nth-child(odd) {
  background-color: #f2f2f2;
}

#table tr:hover {
  background-color: #ddd;
}

#table th {
  text-align: left;
  border: #00b1b2;
  background-color: #3d81e3;
  color: white;
}
.row td {
  padding: 0.8rem;
}
.deleteButton {
  color: rgba(255, 255, 255, 0);
  border: rgba(255, 255, 255, 0);
  background-color: rgba(255, 255, 255, 0);
}
.actions {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
}

.fa-trash {
  color: #ff6e40;
  cursor: pointer;
  opacity: 1;
}
</style>
