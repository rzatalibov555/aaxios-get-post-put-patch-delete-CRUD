
import './App.css';
import axios from 'axios';
import { useEffect } from 'react';

const BASE_URL = "http://localhost:3005"

function App() {

  const getAllUsers = async() => {
    const response = await axios.get(`${BASE_URL}/users`)
    console.log(response.data)
  }

  const get_single_user = async(user_id) => {
    const response = await axios.get(`${BASE_URL}/users/${user_id}`)
    console.log(response.data)
  }

  const add_user = async(new_user) => {
    const response = await axios.post(`${BASE_URL}/users`,new_user)
    console.log(response)
  }

  const update_user = async(user_id, user_data) => {
    const response = await axios.put(`${BASE_URL}/users/${user_id}`, user_data)
    console.log(response)
  }

  const update_user_patch = async(user_id, user_data) => {
    const response = await axios.patch(`${BASE_URL}/users/${user_id}`, user_data)
    console.log(response)
  }


  const delete_user = async(user_id) => {
    await axios.delete(`${BASE_URL}/users/${user_id}`)
  }


  useEffect(()=>{

    // ======================= GET ============================
    // getAllUsers()

    // ======================= GET BY ID ============================
    // get_single_user(2)

    // ======================= INSERT DATA  V1 - post ============================
    // INSERT DATA  V1             //// post
    // add_user({
    //   "username": "Ayxan",
    //   "password": "111"
    // })

    // ======================= INSERT DATA  V2 - post ============================
    // const new_user = {
    //     "username": "Telebe",
    //     "password": "Muellimov",
    //     "post_id": Math.floor(Math.random() * 10)
    // }

    // add_user(new_user)

    // ======================== UPDATE DATA ===========================
    // const user_data = {
    //   "username": "Elmeddin007",
    //   "password": "Ateshovov022"
    // }
    // update_user(5, user_data) // PUT: update zamani Elave etmediyin deyeri silir


    // ======================== UPDATE DATA ===========================
    // const user_data = {
    //   "username": "Elmeddin007",
    //   "password": "Ateshovov022"
    // }
    // update_user_patch(5, user_data) // Patch: Movcud deyerleri saxlayir, yenilenmiw deyerleri yenileyir
    

    // ======================== DELETE DATA ===========================
    // delete_user(10)


  },[])





  const get_user_id = async(user_id) => {
    const response = await axios.get(`${BASE_URL}/users/${user_id}`)
    // console.log(response)
    return response.data.post_id
  }


  const get_post_id = async(post_id) => {
    const response = await axios.get("https://jsonplaceholder.typicode.com/posts/"+post_id)
    return response.data
  }



  const get_post = async() => {
      const get_user_post_id = await get_user_id(37)

      const post_data = await get_post_id(get_user_post_id)
      console.log(post_data)
  }

  useEffect(()=>{
    get_post()
    // get_user_id(1)
  },[])








  return (
    <div>

    </div>
  );
}

export default App;
