import axios from "axios";

export const sendMail = async (formData) => {
  try {
    let request = await axios
      .post("/api/email", {
        name: formData.name,
        email: formData.email,
        rating: formData.rating,
        comment: formData.comment,
        
      })
      .then((res) => {
        return res;
      });
    return request.status === 200 ? true : false;;
  } catch (err) {
    console.error(err);
  }
};