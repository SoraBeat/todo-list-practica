import axios from "axios";

const loginApi = async(email,password)=>{
    const res = await axios.post(process.env.REACT_APP_ENDPOINT_LOGIN,{email,password})
    return await res.data.token
}

export default loginApi