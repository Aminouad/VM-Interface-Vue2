import axios from "axios";
export default {
  async addCompany(context, data) {
    var masterEmail = JSON.parse(localStorage.getItem("userEmail"));
    console.log(masterEmail);
    var role = "Admin" + data.name;

    const comapanyData = {
      Email: data.email,
      Name: data.name,
      Role: role,
      Phone: data.phone,
      Address: data.address,
      Actif: data.Actif,
      date: data.date,
      Password: data.password,
    };

    var access_token = JSON.parse(localStorage.getItem("token"));
    await axios.post(
      "https://localhost:7062/api/company/register",
      comapanyData,
      {
        headers: { Authorization: `bearer ${access_token}` },
      }
    );
    context.commit("addCompany", comapanyData);
  },
  async deleteCompany({ dispatch }, data) {
    var access_token = JSON.parse(localStorage.getItem("token"));
    await axios
      .delete("https://localhost:7062/api/Company/" + data, {
        headers: { Authorization: `bearer ${access_token}` },
      })
      .then(() => {
        dispatch("loadCompanies");
      });
  },
  async loadCompanies({ commit }) {
    var access_token = JSON.parse(localStorage.getItem("token"));
    const response = await axios.get("https://localhost:7062/api/Company/", {
      headers: { Authorization: `bearer ${access_token}` },
    });
    const responseData = response.data;
    let responseOK = response.status === 200;
    
    if (!responseOK) {
      const error = new Error(responseData.message || "Erreur de serveur!");
      throw error;
    }
    console.log(responseData);
    const companies = [];
    for (const key in responseData) {
      const company = {
        id: responseData[key].CompanyId,
        name: responseData[key].Name,
        contact: responseData[key].Email,
        phone: responseData[key].Phone,
        address: responseData[key].Address,
        etats: [responseData[key].Etat],
        date: responseData[key].Date,
      };

      console.log(companies);
      companies.push(company);
    }
    commit("setCompanies", companies);
  },
};
