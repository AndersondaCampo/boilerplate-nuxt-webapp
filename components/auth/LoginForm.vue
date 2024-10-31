<template>
  <v-form @submit.prevent="submit" fast-fail validate-on="submit">
    <v-text-field
      v-model="email.value.value"
      :error-messages="email.errorMessage.value"
      prepend-inner-icon="mdi-email"
      placeholder="Digite seu email"
      label="Email"
    ></v-text-field>
    <div class="flex justify-center">
      <v-btn type="submit" prepend-icon="mdi-email" :loading="loading" :disabled="loading">
        Link mágico
      </v-btn>
    </div>
  </v-form>
</template>

<script lang="ts" setup>
import { useField, useForm } from 'vee-validate'
import { toTypedSchema } from '@vee-validate/zod';
import { z } from 'zod'

const loading = ref(false);

const authStore = useAuthStore();
const emailSchema = toTypedSchema(z.string().min(1, 'Email obrigatório').email('Email inválido'));

const { handleSubmit } = useForm({
  validationSchema: {
    email: emailSchema
  },
  initialValues: {
    email: 'andercampo12@gmail.com'
  }
});

const email = useField('email');
const submit = handleSubmit(async ({ email }) => {
  loading.value = false;
  try {
    await authStore.sendMagicLink({ email });
  } finally {
    loading.value = false;
  }
});

</script>

<style>

</style>