<template>
  <div class="sidebar">
    <div class="topSideBar">
      <div class="logoStyle"><img src="../assets/logo_Vm.png" /></div>
      <div class="userContent">
        <div class="title">
          <h3>Bienvenue</h3>
        </div>
        <div class="userInfo1">
          <div class="userLogo">
            <i class="fa-solid fa-circle-user"></i>
          </div>
          <p>{{ getUserEmail }}</p>
        </div>
        <div class="userInfo2">
          <div class="userLogo">
            <i class="fa-solid fa-shield"></i>
          </div>
          <p>{{ getRole }}</p>
        </div>
      </div>
    </div>
    <div class="menu-items">
      <router-link
        to="/"
        active-class="active"
        tag="button"
        exact
        class="side-btn"
      >
        <div class="buttonSection"></div>
        <div class="link-container">
          <i class="fa-solid fa-house-chimney"></i> Accueil
        </div>
      </router-link>
      <router-link
        v-if="isAdmin"
        to="/companies"
        active-class="active"
        tag="button"
        exact
        class="side-btn"
      >
        <div class="link-container">
          <i class="fa-solid fa-building"></i> Espace entreprises
        </div>
      </router-link>
      <router-link
        v-if="isAdmin"
        to="/profile"
        active-class="active"
        tag="button"
        exact
        class="side-btn"
      >
        <div class="link-container">
          <i class="fa-solid fa-unlock"></i> Espace sécurité
        </div>
      </router-link>
      <router-link
        v-if="isAdminCompany"
        to="/visits"
        active-class="active"
        tag="button"
        exact
        class="side-btn"
      >
        <div class="link-container">
          <i class="fa-solid fa-users-viewfinder"></i> Espace visites
        </div>
      </router-link>
      <router-link
        v-if="isAdminCompany"
        to="/profile"
        active-class="active"
        tag="button"
        exact
        class="side-btn"
      >
        <div class="link-container">
          <i class="fa-solid fa-id-card"></i> Espace personnels
        </div>
      </router-link>
      <router-link
        to="/profile"
        active-class="active"
        tag="button"
        exact
        class="side-btn"
      >
        <div class="link-container">
          <i class="fa-solid fa-circle-info"></i> À Propos
        </div>
      </router-link>
      <router-link
        to="/authentication"
        active-class="active"
        tag="button"
        exact
        class="side-btn"
      >
        <div @click="logout" class="link-container">
          <i class="fa-solid fa-arrow-right-from-bracket"></i> Se déconnecter
        </div>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    getRole() {
      return JSON.parse(localStorage.getItem("role"));
    },
    isAdmin() {
         if (this.getRole === "Admin")
        return true;
      else return false;
    },
    isAdminCompany() {
      if (this.getRole.includes("Admin") && this.getRole !== "Admin")
        return true;
      else return false;
    },
    getUserEmail() {
      return JSON.parse(localStorage.getItem("userEmail"));
    },
  },
  methods: {
    logout() {
      console.log("logout page");
      return this.$store.dispatch("logout");
    },
  },
};
</script>

<style scoped lang="scss">
.sidebar {
  .topSideBar {
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    color: #154c79;
    font-size: 15px;
    margin-top: -8%;

    .logoStyle {
      width: 100%;
    }
    .title {
      margin-left: -15%;
      margin-bottom: -5%;
    }
    .userContent {
      display: flex;
      flex-direction: column;
      margin-left: 10%;
      margin-top: -10%;

      .userInfo1 {
        display: flex;
        flex-direction: row;
        margin-bottom: -5%;
      }
      .userInfo2 {
        display: flex;
        flex-direction: row;
      }
      .userLogo {
        margin-top: -5px;

        padding-top: 8%;
        margin-left: 5%;
        margin-right: 5%;
      }
    }
  }
  .menu-items {
    display: flex;
    flex-direction: column;
    margin-top: -10%;
  }
  .buttonSection {
    display: flex;
    flex-direction: row;
  }
  .menu-items > * {
    margin-top: 60px;
  }
  .side-btn {
    border: none;
    padding: 16px 0px;
    cursor: pointer;
    font-size: 16px;
    font-weight: 500;
    margin-bottom: -15%;
    color: white;
    background-color: transparent;
  }
  .side-btn:focus {
    outline: none;
  }
  .side-btn.active {
    position: relative;
    background-color: white;
    color: #1291e0;
    font-weight: 600;
    margin-left: 3%;

    border-radius: 2% 0 0 2%;
  }

  .side-btn.active::before {
    top: -5%;
  }
  .side-btn.active::after {
    bottom: -30px;
  }
  .link-container {
    margin-left: 10%;
    margin-right: 10%;
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
  }
  .side-btn.active::before,
  .side-btn.active::after {
    position: absolute;
    content: "";
    right: 0;
    height: 10%;
    width: 10%;
  }
  .side-btn.active .link-container::before {
    top: -60px;
  }
  .side-btn.active .link-container::after {
    bottom: -60px;
    z-index: 99;
  }
  .side-btn.active .link-container::before,
  .side-btn.active .link-container::after {
    position: absolute;
    content: "";
    right: 0%;
    height: 0;
    width: 0;
    background-color: #53bdff00;
  }
}
</style>
