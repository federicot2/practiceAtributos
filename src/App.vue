<template>
  <div class="col-md-4" v-for="input in inputs" :key="input.model">
    <label>
      {{ input.model }}:
      <input type="text" v-model="identificadoresSalida[input.model]" class="form-control" />
    </label>
  </div>
</template>

<script>
export default {
  data() {
    return {
      inputs: [
        {
          type: 'text',
          model: 'cedula'
        },
        {
          type: 'text',
          model: 'nombre'
        },
        {
          type: 'text',
          model: 'apellido'
        }
      ],
      identificadoresSalida: {
        cedula: '',
        nombre: '',
        apellido: ''
      }
    }
  }
}
</script>
