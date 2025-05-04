<template>
  <div class="bg-container">
    <h2>Group Members</h2>
    <div class="input-group mb-3">
      <input v-model="newMember" type="text" class="form-control" placeholder="Enter member name" />
      <button class="btn btn-success" @click="addMember">Add</button>
    </div>

    <ul class="list-group" v-if="members.length > 0">
      <li v-for="(member, index) in members" :key="index" class="list-group-item d-flex justify-content-between">
        {{ member }}
        <button class="btn btn-danger btn-sm" @click="removeMember(index)">Remove</button>
      </li>
    </ul>

    <p v-else class="text-muted">No members added yet.</p>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';

const members = ref([]);
const newMember = ref('');

function addMember() {
  if (newMember.value.trim()) {
    members.value.push(newMember.value.trim());
    localStorage.setItem('members', JSON.stringify(members.value));
    newMember.value = '';
  }
}

function removeMember(index) {
  members.value.splice(index, 1);
  localStorage.setItem('members', JSON.stringify(members.value));
}

onMounted(() => {
  const saved = JSON.parse(localStorage.getItem('members') || '[]');
  members.value = saved;
});
</script>


<style></style>