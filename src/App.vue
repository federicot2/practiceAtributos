<template>
  <!--SELECT DE MOVILIDAD-->
  <div class="row">
    <div class="col-sm-6">
      <label>Seleccione Movilidad:</label>
      <select v-model="datos.movilidad" class="form-select">
        <option value="">Seleccione</option>
        <option value="entrada">Entrada</option>
        <option value="salida">Salida</option>
      </select>
    </div>

    <div class="col-sm-6">
      <template v-for="select in selects">
        <div class="form-group" v-if="select.filtro.includes(datos.movilidad)" :key="select.label">
          <label>{{ select.label }}</label>
          <select class="form-select" v-model="datos.programa">
            <option v-for="option in select.options" :value="option.id" :key="option.id">
              {{ option.texto }}
            </option>
          </select>
        </div>
      </template>
    </div>
  </div>

  <!--INPUTS-->
  <div class="row">
    <div class="col-sm-6" v-for="input in getInputs()" :key="input.model">
      <label v-if="input.type !== 'select'" class="d-block">
        {{ input.label }}
        <input :type="input.type" v-model="datos[input.model]" class="form-control" />
      </label>
      <label v-else class="d-block">
        {{ input.label }}
        <select v-model="datos[input.model]" class="form-select">
          <option v-for="option in input.options" :value="option" :key="option.id">
            {{ option }}
          </option>
        </select>
      </label>
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
      <button type="button" class="btn btn-primary" @click="enviarDatos">Enviar</button>
    </div>
  </div>

  <div>
    <p>{{ datos }}</p>
  </div>
</template>

<script>
import axios from 'axios'
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
          type: 'select',
          model: 'nacionalidad',
          label: 'Nacionalidad:',
          options: [
            'Argentina',
            'Brasil',
            'Canadá',
            'Chile',
            'Colombia',
            'Costa Rica',
            'Cuba',
            'España',
            'Estados Unidos',
            'Francia',
            'Italia',
            'México',
            'Perú',
            'Uruguay',
            'Venezuela',
            'Australia',
            'Ecuador',
            'Reino Unido',
            'Alemania',
            'Suiza',
            'Israel',
            'Japón',
            'Corea del Sur',
            'Países Bajos',
            'China'
          ],
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
          model: 'di',
          label: 'Documento de Identificación:',
          filtro: '4'
        },
        {
          type: 'text',
          model: 'numeroPasaporte',
          label: 'Numero de Pasaporte:',
          filtro: '5'
        },
        {
          type: 'file',
          model: 'pasaportePdf',
          label: 'PDF DE IMG. PASAPORTE:',
          filtro: '5.1'
        },
        {
          type: 'date',
          model: 'expiracionPasaporte',
          label: 'Fecha de Expiracion de Pasaporte:',
          filtro: '5.2'
        },
        {
          type: 'select',
          model: 'origen',
          label: ' Pais de Origen:',
          filtro: '6',
          options: [
            'Argentina',
            'Brasil',
            'Canadá',
            'Chile',
            'Colombia',
            'Costa Rica',
            'Cuba',
            'España',
            'Estados Unidos',
            'Francia',
            'Italia',
            'México',
            'Perú',
            'Uruguay',
            'Venezuela',
            'Australia',
            'Ecuador',
            'Reino Unido',
            'Alemania',
            'Suiza',
            'Israel',
            'Japón',
            'Corea del Sur',
            'Países Bajos',
            'China'
          ]
        },
        {
          type: 'select',
          model: 'destino',
          label: 'Pais de Destino:',
          filtro: '7',
          options: [
            'Argentina',
            'Brasil',
            'Canadá',
            'Chile',
            'Colombia',
            'Costa Rica',
            'Cuba',
            'España',
            'Estados Unidos',
            'Francia',
            'Italia',
            'México',
            'Perú',
            'Uruguay',
            'Venezuela',
            'Australia',
            'Ecuador',
            'Reino Unido',
            'Alemania',
            'Suiza',
            'Israel',
            'Japón',
            'Corea del Sur',
            'Países Bajos',
            'China'
          ]
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
          options: ['pregado', 'postgrado']
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
          options: ['PAME', 'Convenio Bilateral', 'SMILE', 'eMOVIES', 'IAESTE', 'ERASMUS', 'otros']
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
          options: ['campus central', 'sede Tocumen', 'sede Howard', 'centro regional']
        },
        {
          type: 'select',
          model: 'unidad',
          label: 'Unidad UTP:',
          filtro: '15',
          options: ['Facultad', 'Centro Regional', 'Centro de Investigación']
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
          model: 'nombreDri',
          label: 'Nombre Contacto Dri:',
          filtro: '21'
        },
        {
          type: 'text',
          model: 'apellidoDri',
          label: 'Apellido Contacto Dri:',
          filtro: '21.1'
        },
        {
          type: 'text',
          model: 'correoDri',
          label: 'Correo Contacto Dri:',
          filtro: '21.2'
        },
        {
          type: 'text',
          model: 'numeroDri',
          label: 'Numero Contacto Dri:',
          filtro: '21.3'
        },
        {
          type: 'text',
          model: 'parentescoDri',
          label: 'Parentesco Contacto Dri:',
          filtro: '21.4'
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
                '10',
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
      datos: {
        movilidad: '',
        cedula: '',
        nombre: '',
        apellido: '',
        pasaporte: '',
        programa: ''
      }
    }
  },
  methods: {
    getInputs() {
      const programa = this.datos.programa

      const modeloSelect =
        this.datos.movilidad === 'entrada' ? 'programaEntrada' : 'programaSalida'
      const select = this.selects.find((s) => s.model === modeloSelect)

      const inputs = select.options.find((o) => o.id === programa)?.inputs || []
      return this.inputs.filter((input) => inputs.includes(input.filtro))
    },
    enviarDatos() {
      axios.post('http://127.0.0.1:5000/usuarios', this.datos)
        .then(response => {
          console.log(response.data);
        })
        .catch(error => {
          console.log(error);
        });
    }
  }
}
</script>
