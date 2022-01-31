<template>
  <div class="modalAlert">
    <div>
      <b-modal id="bv-modal-alert" hide-footer hide-header-close hide-header>
        <div class="row">
          <div class="col-12">
            <h4>{{msg}}</h4>
          </div>
        </div>
      </b-modal>
    </div>
  </div>
</template>
<script>
export default {
  name: "ModalAlert",
  data() {
    return {
        msgAlert:""
    };
  },
  methods: {},
  mounted() {
  },
  props: {
    msg: String,
  },
};
</script>

<style scoped>
.modalAlert {
  font-family: "RSU_light";
}
h4 {
  font-family: "RSU_light";
  text-align: center;
}
</style>
