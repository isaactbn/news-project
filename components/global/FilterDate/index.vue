<template>
  <v-form ref="form" v-model="form.valid" lazy-validation>
    <div>
      <v-row class="d-flex justify-end">
        <v-col cols="12" sm="2">
          <v-dialog
            ref="dialogStartDate"
            v-model="form.modalStartDate"
            :return-value.sync="form.startDate"
            persistent
            width="290px"
          >
            <template v-slot:activator="{ on, attrs }">
              <v-text-field
                v-model="form.startDate"
                label="From"
                readonly
                v-bind="attrs"
                v-on="on"
              />
            </template>
            <v-date-picker
              v-model="form.startDate"
              min="1950-01-01"
              :max="form.endDate ? form.endDate : new Date().toISOString().substr(0, 10)"
              show-adjacent-months
              scrollable
            >
              <v-spacer />
              <v-btn
                text
                color="primary"
                @click="form.modalStartDate = false"
              >
                Cancel
              </v-btn>
              <v-btn
                text
                color="primary"
                @click="$refs.dialogStartDate.save(form.startDate)"
              >
                OK
              </v-btn>
            </v-date-picker>
          </v-dialog>
        </v-col>
        <v-col cols="12" sm="2">
          <v-dialog
            ref="dialogEndDate"
            v-model="form.modalEndDate"
            :return-value.sync="form.endDate"
            persistent
            width="290px"
          >
            <template v-slot:activator="{ on, attrs }">
              <v-text-field
                v-model="form.endDate"
                label="To"
                readonly
                v-bind="attrs"
                v-on="on"
              />
            </template>
            <v-date-picker
              v-model="form.endDate"
              :min="form.startDate"
              :max="new Date().toISOString().substr(0, 10)"
              show-adjacent-months
              scrollable
            >
              <v-spacer />
              <v-btn
                text
                color="primary"
                @click="form.modalEndDate = false"
              >
                Cancel
              </v-btn>
              <v-btn
                text
                color="primary"
                @click="$refs.dialogEndDate.save(form.endDate)"
              >
                OK
              </v-btn>
            </v-date-picker>
          </v-dialog>
        </v-col>
        <v-col cols="12" sm="2" class="d-flex justify-center align-center">
          <v-btn class="clear-filter" @click="filterData([form.startDate, form.endDate], 'startdate-enddate', $refs.form.validate())">
            Filter Date
          </v-btn>
        </v-col>
        <v-col cols="12" sm="2" class="d-flex justify-center align-center">
          <v-btn class="clear-filter" @click="clearDate('clear-date', $refs.form.reset())">
            Clear Date
          </v-btn>
        </v-col>
      </v-row>
    </div>
  </v-form>
</template>

<script>

export default {
  props: {
    filterData: {
      required: true,
      type: Function
    },
    clearDate: {
      required: true,
      type: Function
    }
  },
  data () {
    return {
      form: {
        valid: true,
        startDate: null,
        endDate: null,
        modalStartDate: false,
        modalEndDate: false,
        startDateRules: [
          v => !!v || 'Tanggal wajib diisi'
        ],
        endDateRules: [
          v => !!v || 'Tanggal wajib diisi'
        ]
      }
    }
  },
  watch: {
    'form.startDate' (val) {
      this.form.startDate = val || null
    },
    'form.endDate' (val) {
      this.form.endDate = val || null
    }
  }
}
</script>

<style scoped>
.title {
  color: #00b1b1;
  font-size: 24px;
}
.clear-filter {
  width: 130px;
}
</style>
