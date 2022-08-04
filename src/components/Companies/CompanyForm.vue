<template>
  <div class="container" @submit.prevent="submitForm">
    <form>
      <div class="row">
        <h4>Nouvelle entreprise</h4>
        <div class="input-group input-group-icon">
          <input
            type="text"
            placeholder="Nom de la société"
            v-model.trim="name"
          />
          <div class="input-icon"><i class="fa-solid fa-building"></i></div>
        </div>
        <div class="input-group input-group-icon">
          <input
            type="email"
            placeholder="Adresse Email"
            v-model.trim="email"
          />
          <div class="input-icon"><i class="fa fa-envelope"></i></div>
        </div>
        <div class="input-group input-group-icon">
          <input
            type="text"
            placeholder="Numéro de Téléphone"
            v-model.trim="phone"
          />
          <div class="input-icon"><i class="fa-solid fa-phone"></i></div>
        </div>
        <div class="input-group input-group-icon">
          <input type="text" placeholder="Adresse" v-model="address" />
          <div class="input-icon"><i class="fa-solid fa-map-pin"></i></div>
        </div>
        <div class="input-group input-group-icon">
          <input
            type="password"
            placeholder="Mot de passe"
            v-model.trim="password"
          />
          <div class="input-icon"><i class="fa fa-key"></i></div>
        </div>
      </div>

      <div class="button">
        <base-button>Enregistrer</base-button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  emits: ["save-data"],

  data() {
    return {
      name: "",
      email: "",
      phone: "",
      password: "",
      address: "",
      date: "",
      etat: "activé",
    };
  },
  methods: {
    submitForm() {
      var today = new Date();
      var dateNow =
        today.getDate() +
        "/" +
        (today.getMonth() + 1) +
        "/" +
        today.getFullYear();

      const formData = {
        name: this.name,
        email: this.email,
        phone: this.phone,
        address: this.address,
        password: this.password,
        date: dateNow,
        Actif: "True",
      };
      this.$emit("save-data", formData);
      // with replace we can't go back to previous page
    },
  },
};
</script>
<style scoped>
.button {
  margin-top: 1rem;
  margin-bottom: 0.5rem;
  display: flex;
  justify-content: end;
}

*,
*:before,
*:after {
  box-sizing: border-box;
}
body {
  padding: 1em;
  font-family: "Open Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;
  font-size: 15px;
  color: #b9b9b9;
  background-color: #e3e3e3;
}
h4 {
  color: #f0a500;
}
input,
input[type="radio"] + label,
input[type="checkbox"] + label:before,
select option,
select {
  width: 100%;
  padding: 1em;
  line-height: 1.4;
  background-color: #f9f9f9;
  border: 1px solid #e5e5e5;
  border-radius: 3px;
  -webkit-transition: 0.35s ease-in-out;
  -moz-transition: 0.35s ease-in-out;
  -o-transition: 0.35s ease-in-out;
  transition: 0.35s ease-in-out;
  transition: all 0.35s ease-in-out;
}
input:focus {
  outline: 0;
  border-color: #bd8200;
}
input:focus + .input-icon i {
  color: #f0a500;
}
input:focus + .input-icon:after {
  border-right-color: #f0a500;
}
input[type="radio"] {
  display: none;
}
input[type="radio"] + label,
select {
  display: inline-block;
  width: 50%;
  text-align: center;
  float: left;
  border-radius: 0;
}
input[type="radio"] + label:first-of-type {
  border-top-left-radius: 3px;
  border-bottom-left-radius: 3px;
}
input[type="radio"] + label:last-of-type {
  border-top-right-radius: 3px;
  border-bottom-right-radius: 3px;
}
input[type="radio"] + label i {
  padding-right: 0.4em;
}
input[type="radio"]:checked + label,
input:checked + label:before,
select:focus,
select:active {
  background-color: #f0a500;
  color: #fff;
  border-color: #bd8200;
}
input[type="checkbox"] {
  display: none;
}
input[type="checkbox"] + label {
  position: relative;
  display: block;
  padding-left: 1.6em;
}
input[type="checkbox"] + label:before {
  position: absolute;
  top: 0.2em;
  left: 0;
  display: block;
  width: 1em;
  height: 1em;
  padding: 0;
  content: "";
}
input[type="checkbox"] + label:after {
  position: absolute;
  top: 0.45em;
  left: 0.2em;
  font-size: 0.8em;
  color: #fff;
  opacity: 0;
  font-family: FontAwesome;
  content: "\f00c";
}
input:checked + label:after {
  opacity: 1;
}
select {
  height: 3.4em;
  line-height: 2;
}
select:first-of-type {
  border-top-left-radius: 3px;
  border-bottom-left-radius: 3px;
}
select:last-of-type {
  border-top-right-radius: 3px;
  border-bottom-right-radius: 3px;
}
select:focus,
select:active {
  outline: 0;
}
select option {
  background-color: #f0a500;
  color: #fff;
}
.input-group {
  margin-bottom: 1em;
  zoom: 1;
}
.input-group:before,
.input-group:after {
  content: "";
  display: table;
}
.input-group:after {
  clear: both;
}
.input-group-icon {
  position: relative;
}
.input-group-icon input {
  padding-left: 4.4em;
}
.input-group-icon .input-icon {
  position: absolute;
  top: 0;
  left: 0;
  width: 3.4em;
  height: 3.4em;
  line-height: 3.4em;
  text-align: center;
  pointer-events: none;
}
.input-group-icon .input-icon:after {
  position: absolute;
  top: 0.6em;
  bottom: 0.6em;
  left: 3.4em;
  display: block;
  border-right: 1px solid #e5e5e5;
  content: "";
  -webkit-transition: 0.35s ease-in-out;
  -moz-transition: 0.35s ease-in-out;
  -o-transition: 0.35s ease-in-out;
  transition: 0.35s ease-in-out;
  transition: all 0.35s ease-in-out;
}
.input-group-icon .input-icon i {
  -webkit-transition: 0.35s ease-in-out;
  -moz-transition: 0.35s ease-in-out;
  -o-transition: 0.35s ease-in-out;
  transition: 0.35s ease-in-out;
  transition: all 0.35s ease-in-out;
}
.container {
  width: 48%;
  padding: 1em 3em 2em 3em;
  margin: 0em auto;
  background-color: #fff;
  border-radius: 4.2px;
  box-shadow: 0px 3px 10px -2px rgba(0, 0, 0, 0.2);
}
.row {
  zoom: 1;
}
.row:before,
.row:after {
  content: "";
  display: table;
}
.row:after {
  clear: both;
}
.col-half {
  padding-right: 10px;
  float: left;
  width: 50%;
}
.col-half:last-of-type {
  padding-right: 0;
}
.col-third {
  padding-right: 10px;
  float: left;
  width: 33.33333333%;
}
.col-third:last-of-type {
  padding-right: 0;
}
@media only screen and (max-width: 540px) {
  .col-half {
    width: 100%;
    padding-right: 0;
  }
}
</style>
