import axios from "axios";

export default {
  async addPersonnel(context, data) {
    var masterEmail = JSON.parse(localStorage.getItem("userEmail"));

    const personnelData = {
      name: data.name,
      password: data.password,
      email: data.email,
      position: data.position,
      date: data.date,
      master: masterEmail,
    };

    var access_token = JSON.parse(localStorage.getItem("token"));
    await axios.post(
      "https://localhost:7043/api/Personnel/register",
      personnelData,
      {
        headers: { Authorization: `bearer ${access_token}` },
      }
    );
    context.commit("addPersonnel", personnelData);
  },
     async loadPersonnels({ commit }) {
    var access_token = JSON.parse(localStorage.getItem("token"));
    var user = JSON.parse(localStorage.getItem("userEmail"));
    const personnel = {
      userEmail:user
    }
    
    const response = await axios.post(
      "https://localhost:7043/api/Personnel/GetPersonnelByUser/",personnel ,
      {
        headers: { Authorization: `bearer ${access_token}` },
      
      }
    );
    const responseData = response.data;
    let responseOK = response.status === 200;

    if (!responseOK) {
      const error = new Error(responseData.message || "Erreur de serveur!");
      throw error;
    }
    const personnels = [];
    console.log(responseData);
    for (const key in responseData) {
      const personel = {
        id: responseData[key].Id,
        name: responseData[key].Name,
        email: responseData[key].Email,
        Position: responseData[key].Position,
        date: responseData[key].Date,
        master: responseData[key].User.Email,
      };
      personnels.push(personel);
    }
    commit("setPersonnel", personnels);

},
async deletePersonal({ dispatch }, data) {
  var access_token = JSON.parse(localStorage.getItem("token"));
  await axios
    .delete("https://localhost:7043/api/Personnel/" + data, {
      headers: { Authorization: `bearer ${access_token}` },
    })
    .then(() => {
      dispatch("loadPersonnels");
    });
},
  
  };
