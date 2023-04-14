<template>
  <!--SELECT DE MOVILIDAD-->
  <div class="row">
    <div class="col-sm-6">
      <label>
        Seleccione Movilidad:
        <select v-model="datos[0].movilidad" class="form-select">
          <option value="">Seleccione</option>
          <option value="entrada">Entrada</option>
          <option value="salida">Salida</option>
        </select>
      </label>

      <!--SELECT-->
      <div class="col-sm-6" v-for="select in selects" :key="select.model">
        <div class="form-group" v-if="select.filtro.includes(datos[0].movilidad)">
          <label>{{ select.label }}</label>
          <select class="form-select" v-model="datos[0].programa">
            <option v-for="option in select.options" :value="option.id" :key="option.id">
              {{ option.texto }}
            </option>
          </select>
        </div>
      </div>
    </div>
  </div>

  <!--INPUTS-->
  <div class="row">
    <div class="col-sm-6" v-for="input in getInputs()" :key="input.model">
      <div>
        <label v-if="input.type !== 'select'">
          {{ input.label }}
          <input :type="input.type" v-model="datos[0][input.model]" class="form-control" />
        </label>
        <label v-else>
          {{ input.label }}
          <select v-model="datos[0][input.model]" class="form-select">
            <option v-for="option in input.options" :value="option" :key="option.id">
              {{ option }}
            </option>
          </select>
        </label>
      </div>
    </div>
  </div>

  <div class="row">
    <div class="col-md-12">
      <br />
      <div class="form-check">
        <input class="form-check-input" type="checkbox" id="aceptarTerminos" required />
        <label class="form-check-label" for="aceptarTerminos">
          Aceptar Términos y Condiciones
        </label>
      </div>
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
          type: 'date',
          model: 'fechaNacimiento',
          label: 'Fecha de nacimiento:',
          filtro: '0'
        },
        {
          type: 'text',
          model: 'nacionalidad',
          label: 'Nacionalidad:',
          filtro: '1'
        },
        {
          type: 'text',
          model: 'nombre',
          label: 'Nombre:',
          filtro: '2'
        },
        {
          type: 'text',
          model: 'apellido',
          label: 'Apellido:',
          filtro: '3'
        },
        {
          type: 'text',
          model: 'id',
          label: 'id/cedula:',
          filtro: '4'
        },
        {
          type: 'text',
          model: 'pasaporte',
          label: 'pasaporte:',
          filtro: '5'
        },
        {
          type: 'file',
          model: 'pasaportePdf',
          label: 'PDF DE IMG. PASAPORTE:',
          filtro: '5.1'
        },
        {
          type: 'select',
          model: 'origen',
          label: 'Origen:',
          filtro: '6',
          options: ['Panamá', 'Rep.Chiriqui']
        },
        {
          type: 'select',
          model: 'destino',
          label: 'Destino:',
          filtro: '7',
          options: ['Panamá', 'Rep.Chiriqui']
        },

        {
          type: 'select',
          model: 'continente',
          label: 'Continente:',
          filtro: '8',
          options: ['America', 'Asia', 'Africa', 'Oceania', 'Europa']
        },
        {
          type: 'select',
          model: 'nivelAcademico',
          label: 'Nivel Academico',
          filtro: '9',
          options: ['1', '2', '3', '4', '5']
        },
        {
          type: 'select',
          model: 'añoAcademico',
          label: 'Año Academico:',
          filtro: '10',
          options: ['1', '2', '3', '4', '5']
        },
        {
          type: 'select',
          model: 'modalidad',
          label: 'Modalidad:',
          filtro: '11',
          options: ['Presencial', 'Virtual']
        },
        {
          type: 'select',
          model: 'programa1',
          label: 'Programa:',
          filtro: '12',
          options: ['1', '2']
        },
        {
          type: 'select',
          model: 'semestreUtp',
          label: 'Semestre UTP:',
          filtro: '13',
          options: ['1', '2']
        },
        {
          type: 'select',
          model: 'sedeUtp',
          label: 'Sede UTP:',
          filtro: '14',
          options: ['Central', 'Cocle']
        },
        {
          type: 'select',
          model: 'facultad',
          label: 'Facultad UTP:',
          filtro: '15',
          options: ['Sistema', 'Industrial', 'Civil', 'etc']
        },
        {
          type: 'select',
          model: 'carreraUtp',
          label: 'Carrera UTP:',
          filtro: '16',
          options: ['Lic.Desarrollo de software', '2', '3', '4', '5']
        },
        {
          type: 'date',
          model: 'fInicio',
          label: 'Fecha de Inicio:',
          filtro: '17'
        },
        {
          type: 'date',
          model: 'fFinal',
          label: 'Fecha Final:',
          filtro: '18'
        },
        {
          type: 'text',
          model: 'cPersonal',
          label: 'Contacto Personal:',
          filtro: '19'
        },
        {
          type: 'text',
          model: 'cEmergencia',
          label: 'Contacto de Emergencia:',
          filtro: '20'
        },
        {
          type: 'text',
          model: 'cDri',
          label: 'Contacto de Dri:',
          filtro: '21'
        },
        {
          type: 'text',
          model: 'instDestino',
          label: 'Institucion de Destino:',
          filtro: '22'
        },
        {
          type: 'text',
          model: 'cInternacional',
          label: 'Contacto Internacional:',
          filtro: '110'
        }
      ],
      selects: [
        {
          model: 'programaEntrada',
          label: 'Programa Entrada:',
          filtro: ['entrada'],
          options: [
            {
              id: 'iaste',
              texto: 'IASTE Entrada',
              inputs: [
                '0',
                '1',
                '2',
                '3',
                '4',
                '5',
                '5.1',
                '6',
                '7',
                '8',
                '9',
                '11',
                '12',
                '16',
                '17',
                '18',
                '20',
                '21',
                '22',
                '110'
              ]
            },
            {
              id: 'sAcademico',
              texto: 'Semestre Academico Entrada',
              inputs: [
                '0',
                '1',
                '2',
                '3',
                '4',
                '5',
                '5.1',
                '6',
                '7',
                '8',
                '9',
                '11',
                '12',
                '16',
                '17',
                '18',
                '20',
                '21',
                '110'
              ]
            },
            {
              id: 'investigacion',
              texto: 'Investigación Entrada',
              inputs: [
                '1',
                '2',
                '3',
                '4',
                '5',
                '5.1',
                '6',
                '7',
                '8',
                '9',
                '11',
                '12',
                '14',
                '17',
                '18',
                '19',
                '20',
                '22',
                '110'
              ]
            },
            {
              id: 'estanciaCorta',
              texto: 'Estancias Cortas Entrada',
              inputs: [
                '1',
                '2',
                '3',
                '4',
                '5',
                '5.1',
                '6',
                '7',
                '8',
                '11',
                '12',
                '14',
                '15',
                '17',
                '18',
                '19',
                '20',
                '21',
                '22',
                '110'
              ]
            }
          ]
        },
        {
          model: 'programaSalida',
          label: 'Programa Salida:',
          filtro: ['salida'],
          options: [
            {
              id: 'iaste',
              texto: 'IASTE Salida',
              inputs: [
                '0',
                '1',
                '2',
                '3',
                '4',
                '5',
                '5.1',
                '6',
                '7',
                '8',
                '9',
                '11',
                '12',
                '16',
                '17',
                '18',
                '20',
                '21',
                '22'
              ]
            },
            {
              id: 'sAcademico',
              texto: 'Semestre Academico Salida',
              inputs: [
                '0',
                '1',
                '2',
                '3',
                '4',
                '5',
                '6',
                '7',
                '8',
                '9',
                '10',
                '11',
                '12',
                '13',
                '14',
                '15',
                '16',
                '17',
                '18',
                '19',
                '20',
                '21'
              ]
            },
            {
              id: 'investigacion',
              texto: 'Investigación Salida',
              inputs: [
                '1',
                '2',
                '3',
                '4',
                '5',
                '5.1',
                '6',
                '7',
                '8',
                '9',
                '11',
                '12',
                '14',
                '17',
                '18',
                '19',
                '20',
                '21'
              ]
            },
            {
              id: 'estanciaCorta',
              texto: 'Estancias Cortas Salida',
              inputs: [
                '1',
                '2',
                '3',
                '4',
                '5',
                '5.1',
                '6',
                '7',
                '8',
                '11',
                '12',
                '14',
                '15',
                '17',
                '18',
                '19',
                '20',
                '21',
                '110'
              ]
            }
          ]
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
      const programa = this.datos[0].programa

      const modeloSelect =
        this.datos[0].movilidad === 'entrada' ? 'programaEntrada' : 'programaSalida'
      const select = this.selects.find((s) => s.model === modeloSelect)

      const inputs = select.options.find((o) => o.id === programa)?.inputs || []
      return this.inputs.filter((input) => inputs.includes(input.filtro))
    }
  }
}
</script>
