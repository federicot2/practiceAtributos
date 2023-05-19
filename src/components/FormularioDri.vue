<template>
  <!--SELECT DE MOVILIDAD-->
  <form id="uploadForm" enctype="multipart/form-data">
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

        <label v-if="input.type == 'text'" class="d-block">
          {{ input.label }}
          <input :type="input.type" v-model="datos[input.model]" class="form-control" />
        </label>

        <label v-else-if="input.type == 'file'" class="d-block">
          {{ input.label }}
          <input :type="input.type" name="contenido" id="contenido" class="form-control" />
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
      {{ this.$refs.archivo }}
      <p>{{ datos }}</p>
    </div>
  </form>
</template>
  
<script>
import Formulario from "../services/FormularioDri";

export default {
  ...Formulario,
};
</script>
  