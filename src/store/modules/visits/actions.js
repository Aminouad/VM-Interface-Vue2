import axios from "axios";
export default {
  async addVisit(context, data) {
    var masterEmail = JSON.parse(localStorage.getItem("userEmail"));
    console.log(masterEmail);

    const visitData = {
      visitorName: data.visitorName,
      cin: data.cin,
      dateIn: data.dateIn,
      dateOut: data.dateOut,
      companyEmail: masterEmail,      
    };
    console.log(visitData);
    var access_token = JSON.parse(localStorage.getItem("token"));
    await axios.post(
      "https://localhost:7062/api/Visit/register",
      visitData,
      {
        headers: { Authorization: `bearer ${access_token}` },
      }
    );
    context.commit("addVisit", visitData);
  },
  async deleteVisit({ dispatch }, data) {
    console.log("delete",data);
    var access_token = JSON.parse(localStorage.getItem("token"));
    await axios
      .delete("https://localhost:7062/api/Visit/" + data, {
        headers: { Authorization: `bearer ${access_token}` },
      })
      .then(() => {
        dispatch("loadVisits");
      });
  },
  async loadVisits({ commit }) {
    var access_token = JSON.parse(localStorage.getItem("token"));
    const response = await axios.get("https://localhost:7062/api/Visit/GetAllVisits", {
      headers: { Authorization: `bearer ${access_token}` },
    });
    const responseData = response.data;
    let responseOK = response.status === 200;
    
    if (!responseOK) {
      const error = new Error(responseData.message || "Erreur de serveur!");
      throw error;
    }
    const visits = [];
    for (const key in responseData) {
      const visit = {
        id: responseData[key].Id,
        visitorName: responseData[key].VisitorName,
        cin: responseData[key].Cin,
        dateIn: responseData[key].DateIn,
        dateOut: responseData[key].DateOut,
        companyName: responseData[key].Company.Name,

      };
      console.log(visit);
      visits.push(visit);
    }
    commit("setVisits", visits);
  },
};
