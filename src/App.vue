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
      <div v-if="input.filtro.includes(parseInt(opcion))">
        <label>
          {{ input.label }}
          <input :type="input.type" v-model="datos[0][input.model]" class="form-control" />
        </label>
      </div>
    </div>
  </div>
  
  <!--SELECT-->
  <div class="row">
    <div class="col-md-4" v-for="select in selects" :key="select.model">
      <div v-if="select.filtro.includes(parseInt(opcion))">
        <label>{{select.label}}</label>
        <select class="form-select" v-model="datos[0][select.model]">
          <option v-for="option in select.options" :value="option.id">{{option.texto}}</option>
        </select>
      </div>
    </div>
  </div>

  <!--BOTON-->
  <div class="row">
    <div class="col-md-12">
      <br />
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
          label: 'Cédula:',
          filtro: [1]
        },
        {
          type: 'text',
          model: 'nombre',
          label: 'Nombre:',
          filtro: [0]
        },
        {
          type: 'text',
          model: 'pasaporte',
          label: 'Pasaporte:',
          filtro: [0]
        },
        {
          type: 'text',
          model: 'apellido',
          label: 'Apellido:',
          filtro: [1]
        },
        {
          type: 'text',
          model: 'telefono',
          label: 'Telefono:',
          filtro: [3]
        }
      ],
      selects:[
        {
          model: 'programa',
          label: 'Programa:',
          filtro:[1],
          options:[
            {
              id:3,
              texto:"Erasmus"
            },
            {
              id:4,
              texto:"DITIC"
            }
          ],
        }
      ],
      datos: [
        {
          cedula: '',
          nombre: '',
          apellido: '',
          pasaporte:'',
          programa:''
        }
      ]
    }
  }
}
</script>
