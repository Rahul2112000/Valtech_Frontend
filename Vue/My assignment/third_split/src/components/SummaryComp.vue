<template>
  <div>
    <h2>Summary – Who Owes Whom</h2>
    <div v-if="members.length && expenses.length">
      <p>Total Members: {{ members.length }}</p>
      <p>Total Expenses: ₹{{ totalAmount }}</p>
      <p>Per Person Share: ₹{{ perPersonShare }}</p>

      <h4>Balances</h4>
      <ul class="list-group mb-3">
        <li
          v-for="(balance, member) in balances"
          :key="member"
          class="list-group-item d-flex justify-content-between"
          :class="balance < 0 ? 'list-group-item-danger' : balance > 0 ? 'list-group-item-success' : ''"
        >
          {{ member }}
          <strong>
            {{ balance < 0 ? `owes ₹${Math.abs(balance)}` : balance > 0 ? `gets ₹${balance}` : 'settled' }}
          </strong>
        </li>
      </ul>

      <h4>Settlements</h4>
      <ul class="list-group">
        <li v-for="(line, index) in settlements" :key="index" class="list-group-item">
          {{ line }}
        </li>
      </ul>
    </div>

    <div v-else class="text-muted">
      No data available. Please add members and expenses first.
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, computed } from 'vue';

const members = ref([]);
const expenses = ref([]);
const balances = ref({});
const settlements = ref([]);

const totalAmount = computed(() => {
  return expenses.value.reduce((sum, e) => sum + e.amount, 0);
});

const perPersonShare = computed(() => {
  return members.value.length ? Math.round(totalAmount.value / members.value.length) : 0;
});

onMounted(() => {
  members.value = JSON.parse(localStorage.getItem('members') || '[]');
  expenses.value = JSON.parse(localStorage.getItem('expenses') || '[]');


  balances.value = {};
  members.value.forEach(member => {
    balances.value[member] = -perPersonShare.value;
  });


  expenses.value.forEach(exp => {
    balances.value[exp.payer] += exp.amount;
  });

  calculateSettlements();
});

function calculateSettlements() {
  let debtors = [];
  let creditors = [];

  for (const [member, balance] of Object.entries(balances.value)) {
    if (balance < 0) {
      debtors.push({ member, amount: -balance });
    } else if (balance > 0) {
      creditors.push({ member, amount: balance });
    }
  }

  settlements.value = [];

  for (const debtor of debtors) {
    let amountToPay = debtor.amount;

    for (const creditor of creditors) {
      if (amountToPay === 0) break;

      const payAmount = Math.min(amountToPay, creditor.amount);
      settlements.value.push(`${debtor.member} pays ₹${payAmount} to ${creditor.member}`);
      creditor.amount -= payAmount;
      amountToPay -= payAmount;
    }
  }
}
</script>
<style>
</style>
