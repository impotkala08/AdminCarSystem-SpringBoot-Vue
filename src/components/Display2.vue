<template>
  <div class="about2">
    <div class="row">
      <div class="col-12">
        <ModalAlert :msg="msgAlert" />
        <div>
          <b-modal id="bv-modal-Edit" size="xl" hide-footer hide-header-close>
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
                      :max="maxDate"
                      :min="minDate"
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
                <div class="row">
                  <div class="col-6">
                    <div class="d-grid col-12 col-md-8 mx-auto">
                      <button
                        class="btn btn-success"
                        type="button"
                        style="font-family: RSU_BOLD; color: white"
                        @click="confirmEditData()"
                        :disabled="checkEmptyForm()"
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
                          @click="deleteData(selectNumberDelete)"
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
      </div>
      <div class="col-1"></div>
      <div class="col-10">
        <div
          class="row"
          style="
            background-color: rgb(0, 0, 0, 0.1);
            padding: 10px;
            margin-bottom: 20px;
          "
        >
          <div class="col-12">
            <h2 style="font-family: RSU_BOLD">ค้นหาข้อมูล</h2>
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
            <select class="form-select" v-model="selectedBrandSearch">
              <option :value="notSelectForm">ไม่ระบุ</option>
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
              v-model="modelSearch"
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
            <select class="form-select" v-model="selectedGradeSearch">
              <option :value="notSelectForm">ไม่ระบุ</option>
              <option v-for="item in grades" :key="item.length">
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
              v-model="measureSearch"
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
              v-model="speakerSearch"
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
              v-model="sideMirrorSearch"
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
              v-model="dateSearch"
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
              v-model="priceSearch"
              @keypress="validateNumber($event)"
              min="0"
            />
          </div>
          <div class="col-12">
            <div class="row">
              <div class="col-12 col-md-4 mx-auto" style="margin-bottom: 10px">
                <div class="d-grid col-12 col-md-12">
                  <button
                    class="btn btn-primary"
                    type="button"
                    style="font-family: RSU_BOLD; color: white"
                    @click="getAllData('Search')"
                  >
                    ค้นหา
                  </button>
                </div>
              </div>
              <div class="col-12 col-md-4 mx-auto" style="margin-bottom: 10px">
                <div class="d-grid col-12 col-md-12">
                  <button
                    class="btn btn-danger"
                    type="button"
                    style="font-family: RSU_BOLD; color: white"
                    @click="clearForm()"
                  >
                    ล้างฟอร์ม
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-1"></div>
      <div class="col-1"></div>
      <div class="col-10" style="">
        <div class="row" style="background-color: rgb(0, 0, 0, 0.1)">
          <div class="col-12" style="padding: 10px">
            <h2 style="font-family: RSU_BOLD">
              รายการรถยนต์ที่อยู่ในระบบทั้งหมด
            </h2>
          </div>
          <div class="col-12">
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
                  <tr v-for="(item, index) in allData" :key="item.length">
                    <th>{{ allData[index].brand }}</th>
                    <th>{{ allData[index].model }}</th>
                    <th>{{ allData[index].grade }}</th>
                    <th>{{ allData[index].measure }}</th>
                    <th>{{ allData[index].speaker }}</th>
                    <th>{{ allData[index].sideMirror }}</th>
                    <th>{{ allData[index].date }}</th>
                    <th>{{ allData[index].price }}</th>
                    <th>
                      <div class="d-grid col-12 col-md-12 mx-auto">
                        <button
                          class="btn btn-warning"
                          type="button"
                          style="font-family: RSU_BOLD; color: white"
                          @click="modalEditDataShow(allData[index])"
                        >
                          แก้ไขข้อมูล
                        </button>
                      </div>
                    </th>
                    <th>
                      <div class="d-grid col-12 col-md-12 mx-auto">
                        <button
                          class="btn btn-danger"
                          type="button"
                          style="font-family: RSU_BOLD; color: white"
                          @click="modalDeleteDataShow(allData[index].id)"
                        >
                          ลบข้อมูล
                        </button>
                      </div>
                    </th>
                  </tr>
                </tbody>
              </table>
            </div>
            <div class="row" style="margin-bottom: 10px">
              <div class="col-12 col-md-3" style="margin-bottom: 10px">
                <div class="d-grid col-12 col-md-12">
                  <button
                    class="btn btn-success"
                    type="button"
                    style="font-family: RSU_BOLD; color: white"
                    @click="goHome()"
                  >
                    เพิ่มรายการ
                  </button>
                </div>
              </div>
              <div class="col-md-5">
                <h5>
                  แสดง {{ pageAll == 0 ? 0 : pageStart + 1 }} ถึง
                  {{ computedPageEnd }} จากทั้งหมด
                  {{ pageAll }}
                </h5>
              </div>
              <div class="col-md-2"></div>
              <div class="col-12 col-md-2">
                <button
                  type="button"
                  class="btn btn-light"
                  @click="back()"
                  :disabled="pageStart == 0 ? true : false"
                >
                  <span>&laquo;</span>
                </button>
                <button
                  type="button"
                  class="btn btn-light"
                  @click="next()"
                  :disabled="
                    countPage == pageStop
                      ? true
                      : false || pageAll == 0
                      ? true
                      : false
                  "
                >
                  <span>&raquo;</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-1"></div>
    </div>
  </div>
</template>
//
<script>
import axios from "axios";
import ModalAlert from "../components/ModalAlert.vue";
import _ from "lodash";
export default {
  name: "Display2",
  data() {
    return {
      newDate: new Date(),
      allData: [],
      pageStart: 0,
      pageEnd: 5,
      pageAll: 0,
      pageStop: 0,
      countPage: 1,
      selectNumberDelete: 0,
      selectNumberEdit: 0,
      id: null,
      model: null,
      measure: null,
      speaker: null,
      sideMirror: null,
      date: null,
      price: null,
      brand: {},
      grade: {},
      brands: {},
      grades: {},
      modelSearch: null,
      measureSearch: null,
      speakerSearch: null,
      sideMirrorSearch: null,
      dateSearch: null,
      priceSearch: null,
      selectedGradeSearch: null,
      selectedBrandSearch: null,
      notSelectForm: null,
      searchNextState: null,
      searchBackState: null,
      msgAlert: "",
      maxDate: null,
      minDate: null,
    };
  },
  computed: {
    computedPageEnd() {
      var response = 0;
      console.log(this.countPage);
      console.log(this.pageStop);
      if (this.countPage == this.pageStop) {
        response = this.pageAll;
      } else if (this.pageAll == 0) {
        response = 0;
      } else {
        response = this.pageEnd;
      }
      return response;
    },
  },
  methods: {
    clearForm() {
      this.modelSearch = null;
      this.measureSearch = null;
      this.speakerSearch = null;
      this.sideMirrorSearch = null;
      this.dateSearch = null;
      this.priceSearch = null;
      this.selectedGradeSearch = null;
      this.selectedBrandSearch = null;
    },
    next() {
      this.pageStart = this.pageStart + 5;
      this.pageEnd = this.pageEnd + 5;
      var data = {
        rowStart: this.pageStart,
      };
      this.getAllData("Next", data, "");
      //this.countPage += 1;
    },
    back() {
      this.pageStart = this.pageStart - 5;
      this.pageEnd = this.pageEnd - 5;
      var data = {
        rowStart: this.pageStart,
      };
      this.getAllData("Back", "", data);
      //this.countPage -= 1;
    },
    goHome() {
      this.$router.push("/");
    },
    getAllData(type, next, back) {
      var data = {
        numberOfRow: 5,
        rowStart: 0,
        brand: this.selectedBrandSearch,
        grade: this.selectedGradeSearch,
        model: this.modelSearch,
        date: this.dateSearch,
        measure: this.measureSearch,
        price: this.priceSearch,
        sideMirror: this.sideMirrorSearch,
        speaker: this.speakerSearch,
      };
      if (type === "Search") {
        this.searchNextState = data;
        this.searchBackState = data;
      } else if (!_.isEmpty(next) && type === "Next") {
        console.log("Next");
        var oldNextData = this.searchNextState;
        if (!_.isEmpty(oldNextData)) {
          oldNextData.rowStart = next.rowStart;
          data = oldNextData;
        } else {
          data = {
            numberOfRow: 5,
            rowStart: next.rowStart,
          };
        }
      } else if (!_.isEmpty(back) && type === "Back") {
        console.log("Back");
        var oldBackData = this.searchBackState;
        if (!_.isEmpty(oldBackData)) {
          oldBackData.rowStart = back.rowStart;
          data = oldBackData;
        } else {
          data = {
            numberOfRow: 5,
            rowStart: back.rowStart,
          };
        }
      } else if (type === "Edit" || type === "Delete") {
        data = {
          numberOfRow: 5,
          rowStart: 0,
        };
        this.searchNextState = null;
        this.searchBackState = null;
        this.clearForm();
      }
      axios
        .post("http://localhost:8085/getAllDisplay", data, {
          timeout: 5000,
          timeoutErrorMessage: "TIMEOUT",
        })
        .then((response) => {
          if (!_.isEmpty(next) && type === "Next") {
            this.allData = response.data.response;
            this.pageAll = response.data.allRow;
            this.pageStop = Math.ceil(this.pageAll / 5);
            console.log("pageStop = " + this.pageStop);
            this.countPage += 1;
          } else if (!_.isEmpty(back) && type === "Back") {
            this.allData = response.data.response;
            this.pageAll = response.data.allRow;
            this.pageStop = Math.ceil(this.pageAll / 5);
            console.log("pageStop = " + this.pageStop);
            this.countPage -= 1;
          } else {
            this.allData = response.data.response;
            this.pageAll = response.data.allRow;
            var pageAll = this.pageAll;
            this.pageStop = Math.ceil(pageAll / 5);
            this.pageStart = 0;
            this.pageEnd = 5;
            this.countPage = 1;
          }
        })
        .catch((error) => {
          this.allData = [];
          this.countPage = 1;
          this.pageAll = 0;
          this.pageStart = 0;
          this.pageEnd = 5;
          if (error.message == "TIMEOUT") {
            this.msgAlert = "การเชื่อมต่อมีปัญหา กรุณาลองใหม่ภายหลัง!";
            this.$bvModal.show("bv-modal-alert");
          } else {
            this.msgAlert = "ไม่สามารถค้นหาข้อมูลได้! กรุณาติดต่อเจ้าหน้าที่";
            this.$bvModal.show("bv-modal-alert");
          }
        });
    },
    modalDeleteDataShow(number) {
      this.$bvModal.show("bv-modal");
      this.selectNumberDelete = number;
    },
    async modalEditDataShow(data) {
      this.editData(data);
    },
    deleteData(number) {
      console.log(number);
      let data = {
        id: number,
      };
      axios
        .post("http://localhost:8085/deleteDisplay", data, {
          timeout: 5000,
          timeoutErrorMessage: "TIMEOUT",
        })
        .then((response) => {
          console.log(response);
          this.$bvModal.hide("bv-modal");
          this.getAllData("Delete");
          if (response.status == "200") {
            this.msgAlert = "ลบข้อมูลสำเร็จ!";
            this.$bvModal.show("bv-modal-alert");
          }
        })
        .catch((error) => {
          console.log(error.message)
          this.$bvModal.hide("bv-modal");
          this.allData = [];
          this.countPage = 1;
          this.pageAll = 0;
          this.pageStart = 0;
          this.pageEnd = 5;
          if (error.message == "TIMEOUT") {
            this.msgAlert = "การเชื่อมต่อมีปัญหา กรุณาลองใหม่ภายหลัง!";
            this.$bvModal.show("bv-modal-alert");
          } else {
            this.msgAlert = "ไม่สามารถลบข้อมูลได้! กรุณาติดต่อเจ้าหน้าที่";
            this.$bvModal.show("bv-modal-alert");
          }
        });
    },
    editData(data) {
      // this.getAllBrands();
      // this.getAllGrades();
      // console.log(data);
      //this.selectNumberEdit = data;
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
    confirmEditData() {
      var data = {
        id: this.id,
        brand: this.brand,
        grade: this.grade,
        model: this.model,
        date: this.date,
        measure: this.measure,
        price: this.price,
        sideMirror: this.sideMirror,
        speaker: this.speaker,
      };
      axios
        .post("http://localhost:8085/editDisplay", data)
        .then((response) => {
          console.log(response);
          this.getAllData("Edit");
          this.$bvModal.hide("bv-modal-Edit");
          if (response.status == "200") {
            this.msgAlert = "แก้ไขข้อมูลสำเร็จ!";
            this.$bvModal.show("bv-modal-alert");
          }
        })
        .catch((error) => {
          this.$bvModal.hide("bv-modal-Edit");
          this.allData = [];
          this.countPage = 1;
          this.pageAll = 0;
          this.pageStart = 0;
          this.pageEnd = 5;
          if (error.message == "TIMEOUT") {
            this.msgAlert = "การเชื่อมต่อมีปัญหา กรุณาลองใหม่ภายหลัง!";
            this.$bvModal.show("bv-modal-alert");
          } else {
            this.msgAlert = "ไม่สามารถแก้ไขข้อมูลได้! กรุณาติดต่อเจ้าหน้าที่";
            this.$bvModal.show("bv-modal-alert");
          }
        });
      //console.log(data);
    },
    getAllBrands() {
      axios
        .get(
          "http://localhost:8085/getAllBrands",
          {},
          { timeout: 5000, timeoutErrorMessage: "TIMEOUT" }
        )
        .then((response) => {
          this.brands = response.data.response;
        })
        .catch((error) => {
          this.allData = [];
          this.countPage = 1;
          this.pageAll = 0;
          this.pageStart = 0;
          this.pageEnd = 5;
          console.log(error.message);
        });
    },
    getAllGrades() {
      axios
        .get(
          "http://localhost:8085/getAllGrades",
          {},
          { timeout: 5000, timeoutErrorMessage: "TIMEOUT" }
        )
        .then((response) => {
          this.grades = response.data.response;
        })
        .catch((error) => {
          this.allData = [];
          this.countPage = 1;
          this.pageAll = 0;
          this.pageStart = 0;
          this.pageEnd = 5;
          console.log(error.message);
        });
    },
    validateNumber(event) {
      if (!this.checkIsNumber(event.key)) {
        event.preventDefault();
      }
    },
    checkIsNumber(str) {
      return /^[0-9]$/.test(str);
    },
    checkEmptyForm() {
      var obj = {
        brand: this.brand,
        grade: this.grade,
        model: this.model,
        date: this.date,
        measure: this.measure,
        price: this.price,
        sideMirror: this.sideMirror,
        speaker: this.speaker,
      };
      var arrayCheck = [];
      for (const [key, value] of Object.entries(obj)) {
        if (key) console.log("checkEmptyForm");
        if (_.isEmpty(value)) {
          arrayCheck.push(true);
        }
      }
      if (arrayCheck.length == 0) return false;
      else return true;
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
  },
  watch: {
    date(value) {
      if (!_.isEmpty(value)) {
        var checkdate = new Date(value);
        var dateNow = new Date();
        if (checkdate > dateNow == 1) {
          console.log(value);
          this.date = this.maxDate;
        }
      }
    },
    speakerSearch(value) {
      console.log(value);
      var text = value;
      if (!_.isEmpty(text)) {
        if (text.length != 0) {
          if (text[0] == "0") {
            this.speakerSearch = "1";
          }
        }
      }
    },
    priceSearch(value) {
      console.log(value);
      var text = value;
      if (!_.isEmpty(text)) {
        if (text.length != 0) {
          if (text[0] == "0") {
            this.priceSearch = "1";
          }
        }
      }
    },
    speaker(value) {
      console.log(value);
      var text = value;
      if (text.length != 0) {
        if (text[0] == "0") {
          this.speaker = "1";
        }
      }
    },
    price(value) {
      console.log(value);
      var text = value;
      if (text.length != 0) {
        if (text[0] == "0") {
          this.price = "1";
        }
      }
    },
  },
  mounted() {
    this.calculateDate();
    this.getAllData("Search");
    this.getAllBrands();
    this.getAllGrades();
  },
  props: {
    msg: String,
  },
  components: {
    ModalAlert,
  },
};
</script>

<style scoped>
.leftItem {
  margin-bottom: 10px;
  font-family: "RSU_light";
}
.about2 {
  margin-top: 20px;
  font-family: RSU_BOLD;
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
h5 {
  text-align: left;
}
@media all and (max-width: 767px) {
  h5 {
    text-align: center;
  }
}

input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
</style>
