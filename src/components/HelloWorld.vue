<template>
  <div class="hello">
    <div class="row">
      <div class="col-1"></div>
      <div class="col-10">
        <ModalAlert :msg="msgAlert" />
        <div
          class="row"
          style="background-color: rgb(0, 0, 0, 0.1); padding: 10px"
        >
          <div class="col-12">
            <h2 style="font-family: RSU_BOLD">เพิ่มรายการรถยนต์</h2>
          </div>
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
            <select class="form-select" v-model="selectedBrand">
              <option v-for="item in brands" :key="item.length">
                {{ item.brand }}
              </option>
            </select>
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
            <select class="form-select" v-model="selectedGrade">
              <option v-for="item in grade" :key="item.length">
                {{ item.grade }}
              </option>
            </select>
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
              >จำนวนลำโพง (ตัวเลขเท่านั้น)</label
            >
            <input
              type="number"
              class="form-control"
              id="exampleFormControlInput1"
              placeholder="กรุณาระบุจำนวนลำโพง"
              v-model="speaker"
              @keypress="validateNumber($event)"
              min="0"
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
              required
              :min="minDate"
              :max="maxDate"
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
              >ราคา (ตัวเลขเท่านั้น)</label
            >
            <input
              type="number"
              class="form-control"
              id="exampleFormControlInput1"
              placeholder="กรุณาระบุราคา"
              v-model="price"
              @keypress="validateNumber($event)"
              min="0"
            />
          </div>
        </div>
      </div>
      <div class="col-1"></div>
    </div>
    <div class="row">
      <div class="col-1"></div>
      <div class="col-10">
        <div
          class="row"
          style="background-color: rgb(0, 0, 0, 0.1); padding: 10px"
        >
          <div class="d-grid col-12 col-md-3 mx-auto">
            <button
            :disabled="checkEmptyForm()"
              class="btn btn-success"
              type="button"
              @click="add()"
              style="margin-bottom: 10px"
            >
              เพิ่มข้อมูล
            </button>
          </div>
          <div class="d-grid col-12 col-md-3 mx-auto">
            <button
              class="btn btn-danger"
              type="button"
              @click="resetForm"
              style="margin-bottom: 10px"
            >
              ยกเลิก
            </button>
          </div>
        </div>
      </div>
      <div class="col-1"></div>
    </div>
    <div class="row" style="margin-top: 10px">
      <div class="col-1"></div>
      <div
        class="col-10"
        style="padding: 10px; background-color: rgb(0, 0, 0, 0.1)"
      >
        <div class="col-12">
          <h2 style="font-family: RSU_BOLD">รายการที่เพิ่มล่าสุด</h2>
        </div>
        <div class="table-responsive">
          <table class="table">
            <thead>
              <tr>
                <th>ยี่ห้อ</th>
                <th>ชื่อรุ่น</th>
                <th>เกรด</th>
                <th>มาตราวัด</th>
                <th>จำนวนลำโพง</th>
                <th>กระจกมองข้าง</th>
                <th>วันที่เริ่มประกาศ</th>
                <th>ราคา</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="allData in allData" :key="allData.length">
                <th>{{ allData.brand }}</th>
                <th>{{ allData.model }}</th>
                <th>{{ allData.grade }}</th>
                <th>{{ allData.measure }}</th>
                <th>{{ allData.speaker }}</th>
                <th>{{ allData.sideMirror }}</th>
                <th>{{ allData.date }}</th>
                <th>{{ allData.price }}</th>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div class="col-1"></div>
    </div>

    <div class="row">
      <div class="col-1"></div>
      <div
        class="col-10"
        style="padding: 10px; background-color: rgb(0, 0, 0, 0.1)"
      >
        <div class="row">
          <div class="d-grid col-12 col-md-4 mx-auto">
            <button
              :disabled="stateSave == 0 ? true : false"
              class="btn btn-primary"
              type="button"
              @click="save()"
              style="margin-bottom: 10px"
            >
              บันทึก
            </button>
          </div>
          <div class="d-grid col-12 col-md-4 mx-auto">
            <button
              class="btn btn-danger"
              type="button"
              @click="deleteAll()"
              style="margin-bottom: 10px"
            >
              ล้างข้อมูลทั้งหมด
            </button>
          </div>
        </div>
      </div>
      <div class="col-1"></div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import ModalAlert from "../components/ModalAlert.vue";
export default {
  name: "HelloWorld",
  data() {
    return {
      minDate: null,
      maxDate: null,
      selectedBrand: null,
      selectedGrade: null,
      brands: {},
      model: null,
      grade: null,
      measure: null,
      speaker: null,
      sideMirror: null,
      date: null,
      price: null,
      allData: [],
      stateSave: this.$store.state.allData.length,
      msgAlert: "",
    };
  },
  methods: {
    validateNumber(event) {
      if (!this.checkIsNumber(event.key)) {
        event.preventDefault();
      }
    },
    checkIsNumber(str) {
      return /^[0-9]$/.test(str);
    },
    calculateDate() {
      const date = new Date();
      var month = date.getMonth() + 1;
      var year = date.getFullYear();
      var day = date.getDate();
      if (day <= 9) {
        day = "0" + day;
      }
      if (month <= 9) {
        month = "0" + month;
      }
      this.minDate = year + "-" + month + "-" + "01";
      this.maxDate = year + "-" + month + "-" + day;
    },
    add() {
      var obj = {
        brand: this.selectedBrand,
        model: this.model,
        grade: this.selectedGrade,
        measure: this.measure,
        speaker: this.speaker,
        sideMirror: this.sideMirror,
        date: this.date,
        price: this.price,
      };
      var oldData = this.allData;
      oldData.push(obj);
      this.allData = oldData;
      this.$store.commit("setAllData", this.allData);
      this.stateSave = this.$store.state.allData.length;
      this.resetForm();
    },
    save() {
      // this.$store.commit("setAllData", this.allData);
      console.log(this.$store.state.allData);
      axios
        .post("http://localhost:8085/saveDisplay", this.$store.state.allData, {
          timeout: 5000,
          timeoutErrorMessage: "TIMEOUT",
        })
        .then((response) => {
          if (response.status == "200") {
            this.msgAlert = "บันทึกข้อมูลสำเร็จ!";
            console.log(response.data);
            this.$bvModal.show("bv-modal-alert");
            this.deleteAll();
          } else {
            this.msgAlert = "บันทึกข้อมูลไม่สำเร็จ!";
            //console.log(response.data);
            this.$bvModal.show("bv-modal-alert");
            // this.deleteAll();
          }
        })
        .catch((error) => {
          console.log(error.message);
          if (error.message == "TIMEOUT") {
            console.log("TIMEOUT");
            this.msgAlert = "การเชื่อมต่อมีปัญหา กรุณาลองใหม่ภายหลัง!";
            this.$bvModal.show("bv-modal-alert");
          } else {
            this.msgAlert = "บันทึกข้อมูลไม่สำเร็จ! กรุณาติดต่อเจ้าหน้าที่";
            this.$bvModal.show("bv-modal-alert");
          }
        });
    },
    deleteAll() {
      this.$store.commit("setAllData", []);
      this.allData = [];
      console.log(this.$store.state.allData);
      this.stateSave = this.$store.state.allData.length;
    },
    getAllBrands() {
      axios
        .get("http://localhost:8085/getAllBrands", {
          timeout: 5000,
          timeoutErrorMessage: "TIMEOUT",
        })
        .then((response) => {
          this.brands = response.data.response;
          //console.log(response.data[0]);
          this.selectedBrand = response.data.response[0].brand;
        })
        .catch((error) => {
          console.log(error);
          if (error.message == "TIMEOUT") {
            this.msgAlert = "การเชื่อมต่อมีปัญหา กรุณาลองใหม่ภายหลัง!";
            this.$bvModal.show("bv-modal-alert");
          }
        });
    },
    getAllGrades() {
      axios
        .get("http://localhost:8085/getAllGrades", {
          timeout: 5000,
          timeoutErrorMessage: "TIMEOUT",
        })
        .then((response) => {
          this.grade = response.data.response;
          //console.log(response.data);
          this.selectedGrade = response.data.response[0].grade;
        })
        .catch((error) => {
          console.log(error);
          if (error.message == "TIMEOUT") {
            this.msgAlert = "การเชื่อมต่อมีปัญหา กรุณาลองใหม่ภายหลัง!";
            this.$bvModal.show("bv-modal-alert");
          }
        });
    },
    checkEmptyForm() {
      var obj = {
        brand: this.selectedBrand,
        model: this.model,
        grade: this.selectedGrade,
        measure: this.measure,
        speaker: this.speaker,
        sideMirror: this.sideMirror,
        date: this.date,
        price: this.price,
      };
      var arrayCheck = [];
      for (const [key, value] of Object.entries(obj)) {
        if (key) console.log("checkEmptyForm");
        if (this.$isEmpty(value)) {
          arrayCheck.push(true);
        }
      }
      if (arrayCheck.length == 0) return false;
      else return true;
    },
    resetForm() {
      this.model = null;
      this.measure = null;
      this.speaker = null;
      this.sideMirror = null;
      this.price = null;
      this.date = null;
    },
  },
  watch: {
    speaker(value) {
      console.log(value);
      var text = value;
      if (text != null) {
        if (text.length != 0) {
          if (text[0] == "0") {
            this.speaker = "1";
          }
        }
      }
    },
    price(value) {
      console.log(value);
      var text = value;
      if (text != null) {
        if (text.length != 0) {
          if (text[0] == "0") {
            this.price = "1";
          }
        }
      }
    },
    date(value) {
      if (!this.$isEmpty(value)) {
        var checkdate = new Date(value);
        var dateNow = new Date();
        if (checkdate > dateNow == 1) {
          console.log(value);
          this.date = this.maxDate;
        }
      }
    },
  },
  mounted() {
    this.calculateDate();
    this.getAllBrands();
    this.getAllGrades();
  },
  // props: {
  //   msg: String,
  // },
  components: {
    ModalAlert,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.blockImg {
  height: 100%;
  /* border-style: solid;
  border-color: black; */
  align-items: center;
  justify-content: center;
  display: flex;
  margin: 20px;
}
.blockImgInside {
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
}

.hello {
  margin-top: 20px;
  font-family: "RSU_light";
}

.leftItem {
  margin-bottom: 10px;
  /* display: flex; */
  align-items: flex-end;
  justify-content: flex-start;
}

input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
</style>
