<template>
    <div class="invoice-box">
  <table cellpadding="0" cellspacing="0">
    <tr class="top">
      <td colspan="4">
        <table>
          <tr>
            <td class="title">
              <img src="https://sirus.io/images/sirus.svg" style="width:100%; max-width:300px;">
            </td>

            <td>
              Invoice #: 123<br> Created: {{tanggalProduk}}<br>
            </td>
          </tr>
        </table>
      </td>
    </tr>

<v-data-table
      :headers="headers"
      :items="transaksi"
      :search="search"
      ref="printTable"
      id="printMe"
    >
     <template slot="items" slot-scope="props">
        <!-- <td>{{ props.item.id }}</td> -->
        <td>{{ props.item.namaProduk }}</td>
        <td>{{ props.item.jumlahProduk }}</td>
        <td>{{ props.item.hargaProduk }}</td>
        <td> <v-btn style="background:red;" class="ma-2" tile outlined @click="deleteData(props.item)" color="error">
      <v-icon left dark style="width:30px;">delete</v-icon> Delete
    </v-btn></td>
        
      </template>
      
      <v-alert slot="no-results" :value="true" color="error" icon="warning">
        Your search for "{{ search }}" found no results.
      </v-alert>
    
    </v-data-table>
    
    <tr>
      <td colspan="4">
        <!-- <v-btn class="ma-2" tile outlined color="warning" @click="printData()" v-if="visiblebtn = true">
      <v-icon left>print</v-icon> Print
    </v-btn> -->
      </td>
    </tr>

    <tr class="total">
      <td colspan="3"></td>
      <td>Total: Rp.{{ totalProduk }}</td>
    </tr>
  </table>
</div>
</template>
<script src="https://cdnjs.cloudflare.com/ajax/libs/vue/2.5.17-beta.0/vue.js"></script>
<script>
  import moment from 'moment'
  import Vue from 'vue'
  import { EventBus } from './event-bus.js'
  import Print from 'vue-print-nb'
  Vue.use(Print)

  export default {
    data: () => ({
      drawer: null,
      testclick: function () {
      },
      search: '',
      dialog: false,
      totalProduk: 0,
      printObj:
      {
        id: 'printMe',
        popTitle: 'good print',
        extraCss: 'https://www.google.com,https://www.google.com',
        extraHead: '<meta http-equiv="Content-Language"content="zh-cn"/>'
      },
      hargaProduk: 0,
      visiblebtn: true,
      tanggalProduk: moment().format('YYYY-MM-DD'),
      produk: [
        {
          id: '1',
          namaProduk: 'Obat Tidur',
          hargaProduk: 37000,
          jumlahProduk: 20
        },
        {
          id: '2',
          namaProduk: 'Obat Sakit Perut',
          hargaProduk: 38000,
          jumlahProduk: 20
        }
      ],
      quantitybelanja: [
        {
          no: '1'
        },
        {
          no: '2'
        },
        {
          no: '3'
        },
        {
          no: '4'
        },
        {
          no: '5'
        },
        {
          no: '6'
        },
        {
          no: '7'
        },
        {
          no: '8'
        },
        {
          no: '9'
        },
        {
          no: '10'
        }
      ],
      namaProduk: 'Pilih Produk',
      quantityProduk: 'Pilih Kuantiti',
      transaksi: [],
      headers: [
        {
          text: 'No',
          align: 'left',
          sortable: false,
          value: 'no'
        },
        { text: 'Product Name', value: 'name' },
        { text: 'Quantity', value: 'quantity' },
        { text: 'Total Price', value: 'price' },
        { text: 'Edit', value: 'edit' }
      ]
    }),
    props: {
      appTitle: {
        type: String,
        default: '',
        description: 'Application Title'
      }
    },
    mounted () {
      EventBus.$on('changeValue', function (val) {
        this.transaksi = val
        window.print()
        console.log('triggered')
      })
    },
    created () {
      // console.log('invoice Data 1', localStorage.invoice)
      // this.transaksi = this.$localStorage.get('someBoolean')
      // console.log('invoice Data', this.transaksi)
      // EventBus.$on('changeValue', function (val) {
      //   this.transaksi = val
      //   console.log('triggered')
      // })
    },
    methods: {
      doLogout (event) {
        console.log('logout', event)
      }
    }
  }
</script>

<style scoped>
body {
  padding: 90px;
  margin: 50px;
}
h1, h2 {
  font-weight: normal;
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
.drop {
    display: block;
    width: 100%;
    height: 34px;
    padding: 6px 12px;
    font-size: 14px;
    line-height: 1.428571429;
    color: #999;
    background-color: #ffffff;
    border: 1px solid #cccccc;
}
.invoice-box {
  max-width: 800px;
  margin: auto;
  padding: 30px;
  font-size: 16px;
  line-height: 24px;
  font-family: "Helvetica Neue", "Helvetica", Helvetica, Arial, sans-serif;
  color: #555;
}

.invoice-box table {
  width: 100%;
  line-height: inherit;
  text-align: left;
}

.invoice-box table td {
  padding: 5px;
  vertical-align: top;
}

.invoice-box table tr td:nth-child(n + 2) {
  text-align: right;
}

.invoice-box table tr.top table td {
  padding-bottom: 20px;
}

.invoice-box table tr.top table td.title {
  font-size: 45px;
  line-height: 45px;
  color: #333;
}

.invoice-box table tr.information table td {
  padding-bottom: 40px;
}

.invoice-box table tr.heading td {
  background: #eee;
  border-bottom: 1px solid #ddd;
  font-weight: bold;
}

.invoice-box table tr.details td {
  padding-bottom: 20px;
}

.invoice-box table tr.item td {
  border-bottom: 1px solid #eee;
}

.invoice-box table tr.item.last td {
  border-bottom: none;
}

.invoice-box table tr.item input {
  padding-left: 5px;
}

.invoice-box table tr.item td:first-child input {
  margin-left: -5px;
  width: 100%;
}

.invoice-box table tr.total td:nth-child(2) {
  border-top: 2px solid #eee;
  font-weight: bold;
}

.invoice-box input[type="number"] {
  width: 60px;
}

@media only screen and (max-width: 600px) {
  .invoice-box table tr.top table td {
    width: 100%;
    display: block;
    text-align: center;
  }

  .invoice-box table tr.information table td {
    width: 100%;
    display: block;
    text-align: center;
  }
}

/** RTL **/
.rtl {
  direction: rtl;
  font-family: Tahoma, "Helvetica Neue", "Helvetica", Helvetica, Arial,
    sans-serif;
}

.rtl table {
  text-align: right;
}

.rtl table tr td:nth-child(2) {
  text-align: left;
}

</style>