<script setup>
import { ref, reactive, onMounted } from "vue";
import axios from "axios";
 
/* non reactive, reactive(ref, reactive) */
// import { ref } from "vue";
// import { reactive } from "vue";
 
/*
let hero = ref({
  title: "batman",
  firstname: "Brcue",
  lastname: "Wayne",
  power: 5,
  canfigth: true,
  canfly: false,
});
 */
/*
let title = ref("Batman");
let firstname = ref("Bruce");
let lastname = ref("Wayne");
let power = ref(5);
let canfigth = ref(true);
let canfly = ref(false);
let increasePower = () => {
  console.log(hero.value.power++);
};
*/
 
/*
    firstName: String,
    lastName: String,
    email: String,
*/
let hero = reactive({
  title: "",
  firstname: "",
  lastname: "",
  email: "",
  power: 0,
  canfigth: false,
  canfly: false,
});
let increasePower = () => {
  console.log(hero.power++);
};
let users = ref([]);
onMounted(() => {
  axios({
    url: "http://localhost:5050/data",
    method: "GET",
    responseType: "json",
  }).then((dbres) => {
    users.value = dbres.data;
    // console.log(users);
  });
});
let sendData = () => {
  let data2send = {
    firstName: hero.firstname,
    lastName: hero.lastname,
    email: hero.email,
  };
 
  axios({
    url: "http://localhost:5050/data",
    data: JSON.stringify(data2send),
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((serverres) => console.log(serverres))
    .catch((error) => console.log("Error ", error));
};
</script>
 
<template>
  <div class="container">
    <!-- <ul>
      <li>{{ hero.title }}</li>
      <li>{{ hero.firstname }}</li>
      <li>{{ hero.lastname }}</li>
      <li>{{ hero.power }}</li>
      <li>{{ hero.canfigth }}</li>
      <li>{{ hero.canfly }}</li>
    </ul>
    <button @click="increasePower()">Increase Power</button> -->
    <!-- <div class="mb-3">
      <label for="title" class="form-label">Title</label>
      <input
        type="text"
        class="form-control"
        id="title"
        placeholder="Your Title"
        v-model="hero.title"
      />
    </div>
    <div class="mb-3">
      <label for="firstname" class="form-label">First Name</label>
      <input
        type="text"
        class="form-control"
        id="firstname"
        placeholder="First Name"
        v-model="hero.firstname"
      />
    </div>
    <div class="mb-3">
      <label for="lastname" class="form-label">Last Name</label>
      <input
        type="text"
        class="form-control"
        id="lastname"
        placeholder="Your Last Name"
        v-model="hero.lastname"
      />
    </div>
    <div class="mb-3">
      <label for="power" class="form-label">Hero Power</label>
      <input
        type="range"
        min="0"
        max="10"
        class="form-control"
        id="power"
        placeholder="Your Title"
        v-model="hero.power"
      />
    </div>
    <div class="mb-3">
      <input
        type="checkbox"
        v-model="hero.canfigth"
        class="form-check-input me-2"
        id="fight"
      />
      <label for="fight" class="form-check-label">Can Fight</label>
    </div>
    <div class="mb-3">
      <input
        type="checkbox"
        v-model="hero.canfly"
        class="form-check-input me-2"
        id="fly"
      />
      <label for="fly" class="form-check-label">Can Fly</label>
    </div>
    <div class="mb-3">
      <input type="submit" class="btn btn-primary" />
    </div> 
    <hr />
    -->
    <pre> {{ hero }} </pre>
 
    <hr />
    <div class="mb-3">
      <label for="firstname" class="form-label">First Name</label>
      <input
        type="text"
        class="form-control"
        id="firstname"
        placeholder="First Name"
        v-model="hero.firstname"
      />
    </div>
    <div class="mb-3">
      <label for="lastname" class="form-label">Last Name</label>
      <input
        type="text"
        class="form-control"
        id="lastname"
        placeholder="Your Last Name"
        v-model="hero.lastname"
      />
    </div>
    <div class="mb-3">
      <label for="email" class="form-label">eMail</label>
      <input
        type="text"
        class="form-control"
        id="email"
        placeholder="Your Last Name"
        v-model="hero.email"
      />
    </div>
    <div class="mb-3">
      <input @click="sendData()" type="submit" class="btn btn-primary" />
    </div>
    <!--  <button @click="getData()">get data</button> -->
    <!--  <ul>
      <li v-cloak v-for="(user, idx) in users" :key="idx">
        {{ user.firstName }}
      </li>
    </ul> -->
    <table class="table table-responsive table-striped">
      <thead class="table-dark">
        <tr>
          <th>Sl #</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>eMail</th>
          <th>Edit</th>
          <th>Delete</th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="({ _id, firstName, lastName, email }, idx) in users"
          :key="_id"
        >
          <td>{{ idx + 1 }}</td>
          <td>{{ firstName }}</td>
          <td>{{ lastName }}</td>
          <td>{{ email }}</td>
          <td>
            <button :data-uid="_id" class="btn btn-warning">Edit</button>
          </td>
          <td>
            <button :data-uid="_id" class="btn btn-danger">Delete</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
 
<style scoped></style>
 
