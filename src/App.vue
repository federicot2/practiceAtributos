<template>
  <!--SELECT DE MOVILIDAD-->
  <div class="row">
    <div class="col-md-4">
      <label>
        Seleccione Movilidad:
        <select v-model="datos[0].movilidad" class="form-select">
          <option value="">Seleccione</option>
          <option value="entrada">Entrada</option>
          <option value="salida">Salida</option>
        </select>
      </label>
    </div>
  </div>




  <!--DIV CON INPUTS-->
  <!--<div class="row">
    <div class="col-md-4" v-for="input in inputs" :key="input.model">

      <div v-if="input.filtro.includes(datos[0].programa)">

        <label>
          {{ input.label }}
          <input :type="input.type" v-model="datos[0][input.model]" class="form-control" />
        </label>
      </div>
    </div>
  </div>-->




  <!--SELECT-->
  <div class="row">
    <div class="col-md-4" v-for="select in selects" :key="select.model">
      <div v-if="select.filtro.includes(datos[0].movilidad)">
        <label>{{ select.label }}</label>
        <select class="form-select" v-model="datos[0][select.model]">
          <option v-for="option in select.options" :value="option.id" :key="option.id">{{ option.texto }}</option>
        </select>
      </div>
    </div>
  </div>


  <!--INPUTS-->
  <div class="row">
    <div class="col-md-4" v-for="input in getInputs()" :key="input.model">
      <div>
        <label>
          {{ input.label }}
          <input :type="input.type" v-model="datos[0][input.model]" class="form-control" />
        </label>
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
  <div>
    <p>{{ datos }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      inputs: [
        {
          type: 'text',
          model: 'cedula',
          label: 'Cédula:',
          filtro:'1'
        },
        {
          type: 'text',
          model: 'nombre',
          label: 'Nombre:',
          filtro:'2'
        },
        {
          type: 'text',
          model: 'pasaporte',
          label: 'Pasaporte:',
          filtro:'3'
        },
        {
          type: 'text',
          model: 'apellido',
          label: 'Apellido:',
          filtro:'4'
        },
        {
          type: 'text',
          model: 'telefono',
          label: 'Telefono:',
          filtro:'5'
        }
      ],
      selects: [
        {
          model: 'programa',
          label: 'Programa Entrada:',
          filtro: ["entrada"],
          options: [
            {
              id: 'erasmus',
              texto: "Erasmus Entrada",
              inputs: ['2', '4']
            },
            {
              id: 'ditic',
              texto: "DITIC Entrada",
              inputs: ['1', '3', '5']
            }
          ],
        },
        {
          model: 'programa',
          label: 'Programa Salida:',
          filtro: ["salida"],
          options: [
            {
              id: 'proSalida1',
              texto: "programaSalida",
              inputs: ['1', '3', '5']
            },
            {
              id: 'proSalida2',
              texto: "programaSalida",
              inputs: ['2', '4']
            }
          ],
        }

      ],
      datos: [
        {
          movilidad: '',
          cedula: '',
          nombre: '',
          apellido: '',
          pasaporte: '',
          programa: ''
        }
      ]
    }
  },
  methods: {
    
    getInputs() {
      const programa = this.datos[0].programa;

      const select = this.selects.find(s => s.model === 'programa');
      const inputs = select.options.find(o => o.id === programa)?.inputs || [];
      return this.inputs.filter(input => inputs.includes(input.filtro));
      
    }
  }

}
</script>
