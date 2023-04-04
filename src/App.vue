<template>
  <!--SELECT DE MOVILIDAD-->
  <div class="row">
    <div class="col-md-4">
      <label>
        Seleccione Movilidad:
        <select v-model="opcion" class="form-select">
          <option value="">Seleccione</option>
          <option value="1">Entrada</option>
          <option value="0">Salida</option>
        </select>
      </label>
    </div>
  </div>
  <!--DIV CON INPUTS-->
  <div class="row">
    <div class="col-md-4" v-for="input in inputs" :key="input.model">
      <label>
        {{ input.label }}
        <input :type="input.type" :value="datos[0][input.model]" class="form-control" />
      </label>
    </div>
  </div>


  <!--BOTON-->
  <div class="row">
    <div class="col-md-12">
      <br>
      <button type="submit" class="btn btn-primary">Enviar</button>
    </div>
  </div>

</template>
<script>

export default {
  data() {
    return {
      opcion: '',
      inputs: [
        {
          type: 'text',
          model: 'cedula',
          label: 'Cédula:'
        },
        {
          type: 'text',
          model: 'nombre',
          label: 'Nombre:'
        },
        {
          type: 'text',
          model: 'apellido',
          label: 'Apellido:'
        }
      ],
      datos: [
        {
          cedula: '',
          nombre: '',
          apellido: ''
        }
      ]
    }
  }
}

</script>
