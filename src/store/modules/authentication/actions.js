import axios from "axios";
export default {
  async login(context, payload) {
    console.log(payload);
    const responseToken = await axios.post(
      "https://localhost:7062/api/Authentication/login",
      {
        email: payload.email,
        password: payload.password,
        returnSecureToken: true,
      }
    );
    console.log(responseToken);
    let responseOK = responseToken.status === 200;

    if (
      responseOK &&
      (responseToken.data === "User not found." ||
        responseToken.data === "Wrong password.")
    ) {
      //  console.log(response);
      const error = new Error(
        "Authentification erronée! Merci de vérifier vos données"
      );
      throw error;
    }

    if (responseToken && responseOK) {
      var access_token = responseToken.data;
      localStorage.setItem("token", JSON.stringify(access_token));
      /* var decoded = jwt_decode(response.data)
        console.log('decoded', decoded)
            console.log(decoded); */

      const responseUserInfo = await axios.get(
        "https://localhost:7062/api/Authentication",
        {
          headers: { Authorization: `bearer ${access_token}` },
        }
      );
      localStorage.setItem(
        "userId",
        JSON.stringify(responseUserInfo.data.userId)
      );
      localStorage.setItem(
        "userEmail",
        JSON.stringify(responseUserInfo.data.email)
      );
      localStorage.setItem(
        "role",
        JSON.stringify(responseUserInfo.data.role)
      );

        context.commit("setUser", {
          token: access_token,
          userId: responseUserInfo.data.userId,
          userEmail: responseUserInfo.data.email,
          role: responseUserInfo.data.role,
        });
    }
  },
  logout({commit}) {
    commit("logout")
  }
};
