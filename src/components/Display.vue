<template>
  <div class="about">
    <div class="row">
      <div class="col-1"></div>
      <div class="col-10">
        <div class="row">
          <div>
            <b-modal id="bv-modal" hide-footer hide-header-close hide-header>
              <div class="modalBlock">
                <h3>ท่านต้องการลบข้อมูลใช่หรือไม่?</h3>
                <div class="row">
                  <div class="col-2"></div>
                  <div class="col-8">
                    <div class="row">
                      <div class="col-6">
                        <div class="d-grid col-12 col-md-12 mx-auto">
                          <button
                            class="btn btn-success"
                            type="button"
                            style="font-family: RSU_BOLD; color: white"
                            @click="
                              deleteData(selectNumberDelete);
                              $bvModal.hide('bv-modal');
                            "
                          >
                            ยืนยัน
                          </button>
                        </div>
                      </div>
                      <div class="col-6">
                        <div class="d-grid col-12 col-md-12 mx-auto">
                          <button
                            class="btn btn-danger"
                            type="button"
                            style="font-family: RSU_BOLD; color: white"
                            @click="$bvModal.hide('bv-modal')"
                          >
                            ยกเลิก
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-2"></div>
                </div>
              </div>
            </b-modal>
          </div>

          <div>
            <b-modal
              id="bv-modal-Edit"
              size="xl"
              hide-footer
              hide-header-close
            >
              <div class="row">
                <div class="col-1"></div>
                <div class="col-10">
                  <div class="row">
                    <div class="col-12 col-md-4 leftItem">
                      <label
                        style="
                          align-items: flex-end;
                          justify-content: flex-start;
                          display: flex;
                        "
                        for="exampleFormControlInput1"
                        >ยี่ห้อ</label
                      >
                      <div v-if="brand == null">
                        <select class="form-select" v-model="brand">
                          <option v-for="brands in brands" :key="brands.length">
                            {{ brands.brand }}
                          </option>
                        </select>
                      </div>
                      <div v-else>
                        <select class="form-select" v-model="brand">
                          <option v-for="brands in brands" :key="brands.length">
                            {{ brands.brand }}
                          </option>
                        </select>
                      </div>
                    </div>
                    <div class="col-12 col-md-4 leftItem">
                      <label
                        style="
                          align-items: flex-end;
                          justify-content: flex-start;
                          display: flex;
                        "
                        for="exampleFormControlInput1"
                        >ชื่อรุ่น</label
                      >
                      <input
                        type="text"
                        class="form-control"
                        id="exampleFormControlInput1"
                        placeholder="กรุณาระบุชื่อรุ่น"
                        v-model="model"
                      />
                    </div>
                    <div class="col-12 col-md-4 leftItem">
                      <label
                        style="
                          align-items: flex-end;
                          justify-content: flex-start;
                          display: flex;
                        "
                        for="exampleFormControlInput1"
                        >เกรด</label
                      >
                      <div v-if="grade == null">
                        <select class="form-select" v-model="grade">
                          <option v-for="grades in grades" :key="grades.length">
                            {{ grades.grade }}
                          </option>
                        </select>
                      </div>
                      <div v-else>
                        <select class="form-select" v-model="grade">
                          <option v-for="grades in grades" :key="grades.length">
                            {{ grades.grade }}
                          </option>
                        </select>
                      </div>
                    </div>

                    <div class="col-12 col-md-4 leftItem">
                      <label
                        style="
                          align-items: flex-end;
                          justify-content: flex-start;
                          display: flex;
                        "
                        for="exampleFormControlInput1"
                        >มาตราวัด</label
                      >
                      <input
                        type="text"
                        class="form-control"
                        id="exampleFormControlInput1"
                        placeholder="มาตราวัด"
                        v-model="measure"
                      />
                    </div>
                    <div class="col-12 col-md-4 leftItem">
                      <label
                        style="
                          align-items: flex-end;
                          justify-content: flex-start;
                          display: flex;
                        "
                        for="exampleFormControlInput1"
                        >จำนวนลำโพง</label
                      >
                      <input
                        type="number"
                        class="form-control"
                        id="exampleFormControlInput1"
                        placeholder="กรุณาระบุจำนวนลำโพง"
                        v-model="speaker"
                      />
                    </div>
                    <div class="col-12 col-md-4 leftItem">
                      <label
                        style="
                          align-items: flex-end;
                          justify-content: flex-start;
                          display: flex;
                        "
                        for="exampleFormControlInput1"
                        >กระจกมองข้าง</label
                      >
                      <input
                        type="text"
                        class="form-control"
                        id="exampleFormControlInput1"
                        placeholder="กรุณาระบุกระจกมองข้าง"
                        v-model="sideMirror"
                      />
                    </div>
                    <div class="col-12 col-md-4 leftItem">
                      <label
                        style="
                          align-items: flex-end;
                          justify-content: flex-start;
                          display: flex;
                        "
                        for="exampleFormControlInput1"
                        >วันที่เริ่มประกาศ</label
                      >
                      <input
                        type="date"
                        class="form-control"
                        id="exampleFormControlInput1"
                        v-model="date"
                      />
                    </div>
                    <div class="col-12 col-md-4 leftItem">
                      <label
                        style="
                          align-items: flex-end;
                          justify-content: flex-start;
                          display: flex;
                        "
                        for="exampleFormControlInput1"
                        >ราคา</label
                      >
                      <input
                        type="number"
                        class="form-control"
                        id="exampleFormControlInput1"
                        placeholder="กรุณาระบุราคา"
                        v-model="price"
                      />
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-6">
                      <div class="d-grid col-12 col-md-8 mx-auto">
                        <button
                          class="btn btn-success"
                          type="button"
                          style="font-family: RSU_BOLD; color: white"
                          @click="confirmEditData()"
                        >
                          ยืนยัน
                        </button>
                      </div>
                    </div>
                    <div class="col-6">
                      <div class="d-grid col-12 col-md-8 mx-auto">
                        <button
                          class="btn btn-danger"
                          type="button"
                          style="font-family: RSU_BOLD; color: white"
                          @click="$bvModal.hide('bv-modal-Edit')"
                        >
                          ยกเลิก
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-1"></div>
              </div>
            </b-modal>
          </div>

          <div
            class="col-12 col-md-6"
            style="padding-left: 20px; padding-right: 20px"
            v-for="data in data"
            :key="data.id"
          >
            <div class="row">
              <div class="col-12 block">
                <div class="row">
                  <div class="col-12" style="text-align: left">
                    <div class="row">
                      <h2>{{ data.brand }}, {{ data.model }}</h2>
                    </div>
                  </div>
                  <div class="col-12" style="text-align: left">
                    <h4>
                      {{ data.grade }}, มาตราวัด {{ data.measure }}, จำนวนลำโพง
                      {{ data.speaker }} ตำแหน่ง, กระจกมองข้าง
                      {{ data.sideMirror }}
                    </h4>
                  </div>
                  <div class="col-6" style="">
                    <h4>วันที่ประกาศ 14 มกราคม 2542</h4>
                  </div>
                  <div class="col-6" style="">
                    <h4>ราคา {{ data.price }}</h4>
                  </div>
                  <div
                    class="col-6"
                    style="background-color: rgb(0, 0, 0, 0.1); padding: 10px"
                  >
                    <div class="d-grid col-12 col-md-8 mx-auto">
                      <button
                        class="btn btn-warning"
                        type="button"
                        style="font-family: RSU_BOLD; color: white"
                        @click="editData(data)"
                      >
                        แก้ไขข้อมูล
                      </button>
                    </div>
                  </div>
                  <div
                    class="col-6"
                    style="background-color: rgb(0, 0, 0, 0.1); padding: 10px"
                  >
                    <div class="d-grid col-12 col-md-8 mx-auto">
                      <button
                        class="btn btn-danger"
                        type="button"
                        style="font-family: RSU_BOLD"
                        @click="
                          $bvModal.show('bv-modal');
                          setselectNumberDelete(data.id);
                        "
                      >
                        ลบข้อมูล
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            class="col-12 col-md-6"
            style="padding-left: 20px; padding-right: 20px"
          >
            <div class="row">
              <div class="col-12 block">
                <div class="row">
                  <button
                    class="col-12"
                    style="border-style: none"
                    @click="goHome()"
                  >
                    <div class="row">
                      <div class="col-12" style="height: 50px"></div>
                      <div class="col-12" style="height: 50px">
                        <h2>เพิ่มข้อมูล</h2>
                      </div>
                      <div class="col-12" style="height: 50px"></div>
                    </div>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-1"></div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "Display",
  data() {
    return {
      data: null,
      selectNumberDelete: 0,
      selectNumberEdit: null,
      brand: {},
      id: null,
      model: null,
      grade: {},
      measure: null,
      speaker: null,
      sideMirror: null,
      date: null,
      price: null,
      brands: {},
      grades: {},
    };
  },
  methods: {
    goHome() {
      this.$router.push("/");
    },
    getAllData() {
      axios.get("http://localhost:8085/getAllDisplay").then((response) => {
        console.log(response.data);
        this.data = response.data;
      });
    },
    setselectNumberDelete(number) {
      this.selectNumberDelete = number;
    },
    deleteData(number) {
      console.log(number);
      // this.$bvModal.show('bv-modal');
      let data = {
        id: number,
      };
      axios.post("http://localhost:8085/deleteDisplay", data).then((response) => {
        console.log(response);
        this.getAllData();
      });
    },
    test() {
      console.log(this.model);
    },
    editData(data) {
      this.getAllBrands();
      this.getAllGrades();
      console.log(data);
      this.selectNumberEdit = data;
      this.brand = data.brand;
      this.grade = data.grade;
      this.model = data.model;
      this.date = data.date;
      this.measure = data.measure;
      this.price = data.price;
      this.sideMirror = data.sideMirror;
      this.speaker = data.speaker;
      this.id = data.id;
      this.$bvModal.show("bv-modal-Edit");
    },
    confirmEditData(){
      var data = {
        id : this.id,
        brand : this.brand,
        grade : this.grade,
        model : this.model,
        date : this.date,
        measure : this.measure,
        price : this.price,
        sideMirror : this.sideMirror,
        speaker : this.speaker
      }
      axios.post("http://localhost:8085/editDisplay", data).then((response) => {
        console.log(response)
        this.getAllData();
        this.$bvModal.hide("bv-modal-Edit");
      });
      console.log(data)
    },
    getAllBrands() {
      axios.get("http://localhost:8085/getAllBrands", {}).then((response) => {
        this.brands = response.data;
      });
    },
    getAllGrades() {
      axios.get("http://localhost:8085/getAllGrades", {}).then((response) => {
        this.grades = response.data;
      });
    },
  },
  mounted() {
    this.getAllData();
  },
};
</script>

<style scoped>
.leftItem{
  margin-bottom: 10px;
  font-family: "RSU_light";
}
.about {
  margin-top: 20px;
}
.modalBlock {
  text-align: center;
}
.block {
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  margin-bottom: 15px;
}
h2 {
  /* //font-family: "RSU_light"; */
  font-family: "RSU_BOLD";
}
h3 {
  /* //font-family: "RSU_light"; */
  font-family: "RSU_BOLD";
}
h4 {
  font-family: "RSU_light";
  /* font-family: "RSU_BOLD"; */
}
</style>
