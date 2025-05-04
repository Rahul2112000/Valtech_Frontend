<template>
  <div>
    <h2>Add Expense</h2>
    <input type="text" class="form-control mb-2" v-model="desc" placeholder="Expense description (e.g. Dinner)" />
    <input type="number" class="form-control mb-2" v-model.number="amount" placeholder="Total Amount (e.g. 1500)" />

    <label>Payer:</label>
    <select class="form-select mb-3" v-model="payer">
      <option disabled value="">-- Select payer --</option>
      <option v-for="member in members" :key="member">{{ member }}</option>
    </select>

    <button class="btn btn-primary mb-3" @click="addExpense">Add Expense</button>

    <ul class="list-group">
      <li v-for="(exp, idx) in expenses" :key="idx" class="list-group-item">
        {{ exp.desc }} - ₹{{ exp.amount }} (Paid by {{ exp.payer }})
      </li>
    </ul>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';

const members = ref([]);
const expenses = ref([]);
const desc = ref('');
const amount = ref(0);
const payer = ref('');

function addExpense() {
  if (desc.value && amount.value && payer.value) {
    expenses.value.push({ desc: desc.value, amount: amount.value, payer: payer.value });
    localStorage.setItem('expenses', JSON.stringify(expenses.value));
    desc.value = '';
    amount.value = 0;
    payer.value = '';
  }
}

onMounted(() => {
  members.value = JSON.parse(localStorage.getItem('members') || '[]');
  expenses.value = JSON.parse(localStorage.getItem('expenses') || '[]');
});
</script>
<style></style>
