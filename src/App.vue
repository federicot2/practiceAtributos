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


  <!--SELECT-->
  <div class="row">
    <div class="col-md-4" v-for="select in selects" :key="select.model">
      <div v-if="select.filtro.includes(datos[0].movilidad)">
        <label>{{ select.label }}</label>
        <select class="form-select" v-model="datos[0].programa">
          <option v-for="option in select.options" :value="option.id" :key="option.id">{{ option.texto }}</option>
        </select>
      </div>
    </div>
  </div>


  <!--INPUTS
  <div class="row">
    <div class="col-md-4" v-for="input in getInputs()" :key="input.model">
      <div>
        <label>
          {{ input.label }}
          <input :type="input.type" v-model="datos[0][input.model]" class="form-control" />
        </label>
      </div>
    </div>
  </div>-->
<!--INPUTS-->
<div class="row">
  <div class="col-md-4" v-for="input in getInputs()" :key="input.model">
    <div>
      <label v-if="input.type !== 'select'">
        {{ input.label }}
        <input :type="input.type" v-model="datos[0][input.model]" class="form-control" />
      </label>
      <label v-else>
        {{ input.label }}
        <select v-model="datos[0][input.model]" class="form-control">
          <option v-for="option in input.options" :value="option" :key="option">{{ option }}</option>
        </select>
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
</template>

<script>
export default {
  data() {
    return {
      inputs: [
        {
          type: 'text',
          model: 'nombre',
          label: 'Nombre:',
          filtro: '1'
        },
        {
          type: 'text',
          model: 'apellido',
          label: 'Apellido:',
          filtro: '2'
        },
        {
          type: 'text',
          model: 'id',
          label: 'id/cedula:',
          filtro: '3'
        },
        {
          type: 'text',
          model: 'origen',
          label: 'origen:',
          filtro: '4'
        },
        {
          type: 'date',
          model: 'date',
          label: 'fecha:',
          filtro: '5'
        },
        {
          type: 'file',
          model: 'file',
          label: 'pdf:',
          filtro: '6'
        },
        {
          type: 'select',
          model: 'color',
          label: 'Color Favorito:',
          filtro:'7',
          options: ['rojo', 'azul', 'verde']
        }

      ],
      selects: [
        {
          model: 'programaEntrada',
          label: 'Programa Entrada:',
          filtro: ["entrada"],
          options: [
            {
              id: 'iaste',
              texto: "IASTE Entrada",
              inputs: ['2', '4', '6','7']
            },
            {
              id: 'sAcademico',
              texto: "Semestre Academico Entrada",
              inputs: ['1', '3', '5']
            },
            {
              id: 'investigacion',
              texto: "Investigación Entrada",
              inputs: ['1', '3', '5']
            },
            {
              id: 'estanciaCorta',
              texto: "Estancias Cortas Entrada",
              inputs: ['1', '3', '5']
            }
          ],
        },
        {
          model: 'programaSalida',
          label: 'Programa Salida:',
          filtro: ["salida"],
          options: [
            {
              id: 'iaste',
              texto: "IASTE Salida",
              inputs: ['1', '3', '5']
            },
            {
              id: 'sAcademico',
              texto: "Semestre Academico Salida",
              inputs: ['2', '4', '6']
            },
            {
              id: 'investigacion',
              texto: "Investigación Salida",
              inputs: ['1', '3', '5']
            },
            {
              id: 'estanciaCorta',
              texto: "Estancias Cortas Salida",
              inputs: ['1', '3', '5']
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

      const modeloSelect = this.datos[0].movilidad === 'entrada' ? 'programaEntrada' : 'programaSalida';
      const select = this.selects.find(s => s.model === modeloSelect);

      const inputs = select.options.find(o => o.id === programa)?.inputs || [];
      return this.inputs.filter(input => inputs.includes(input.filtro));

    }
  }

}
</script>
