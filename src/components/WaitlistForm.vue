<script setup lang="ts">
import { ref } from 'vue';

// Importing Firestore Lite methods.
import { getFirestore, addDoc, collection } from 'firebase/firestore/lite';

const email = ref('');
const submitted = ref(false);
const error = ref('');

function validateEmail(email: string) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
}

async function handleSubmit() {
  error.value = '';

  if (!email.value) {
    error.value = 'Please enter your email address';
    return;
  }

  if (!validateEmail(email.value)) {
    error.value = 'Please enter a valid email address';
    return;
  }

  // In a real application, this would send the email to a backend service
  submitted.value = true;

  const db = getFirestore();

  try {
    await addDoc(collection(db, "waitlist"), {
      email: email.value,
    });

    submitted.value = true;
  } catch (error) {
    console.error('Failed to submit form:', error)
  }
  // finally {
  //   isSubmitting.value = false
  // }
}
</script>

<template>
  <div class="waitlist-form">
    <h2>Join the Waitlist</h2>
    <p class="description">
      Be the first to know when new features are released and get early access to upcoming tools.
    </p>

    <form @submit.prevent="handleSubmit" v-if="!submitted">
      <div class="input-group">
        <input type="email" v-model="email" placeholder="Enter your email address" :class="{ 'error': error }">
        <button type="submit">Join Waitlist</button>
      </div>
      <p class="error-message" v-if="error">{{ error }}</p>
    </form>

    <div class="success-message" v-else>
      <p>🎉 Thanks for joining! We'll keep you updated on our progress.</p>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.waitlist-form {
  background-color: #f8fafc;
  border-radius: 12px;
  padding: 2rem;
  text-align: center;
  max-width: 600px;
  margin: 0 auto;

  h2 {
    font-size: 1.5rem;
    font-weight: 600;
    margin-bottom: 1rem;
    color: #1e293b;
  }

  .description {
    color: #64748b;
    margin-bottom: 1.5rem;
  }

  .input-group {
    display: flex;
    gap: 0.5rem;
    margin-bottom: 0.5rem;

    input {
      flex: 1;
      padding: 0.75rem 1rem;
      border: 1px solid #e2e8f0;
      border-radius: 6px;
      font-size: 1rem;
      transition: all 0.2s ease;

      &:focus {
        outline: none;
        border-color: #6200ee;
        box-shadow: 0 0 0 3px rgba(98, 0, 238, 0.1);
      }

      &.error {
        border-color: #ef4444;
      }
    }

    button {
      padding: 0.75rem 1.5rem;
      background-color: #6200ee;
      color: white;
      border: none;
      border-radius: 6px;
      font-weight: 500;
      cursor: pointer;
      transition: all 0.2s ease;

      &:hover {
        background-color: #5000c9;
      }
    }
  }

  .error-message {
    color: #ef4444;
    font-size: 0.875rem;
    margin-top: 0.5rem;
  }

  .success-message {
    color: #059669;
    font-weight: 500;
    padding: 1rem;
    background-color: #ecfdf5;
    border-radius: 6px;
  }
}

:deep(.dark-mode) {
  .waitlist-form {
    background-color: #2d2d2d;

    h2 {
      color: #e2e8f0;
    }

    .description {
      color: #94a3b8;
    }

    .input-group {
      input {
        background-color: #1a1a1a;
        border-color: #4a5568;
        color: #e2e8f0;

        &:focus {
          border-color: #6200ee;
          box-shadow: 0 0 0 3px rgba(98, 0, 238, 0.2);
        }
      }
    }

    .success-message {
      background-color: #064e3b;
      color: #34d399;
    }
  }
}
</style>