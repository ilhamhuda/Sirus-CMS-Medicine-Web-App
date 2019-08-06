<template>
    <div class="body">
    <v-card style="padding: 50px;margin: 20px">
         <v-btn color="success"  @click="dialog = true" type="submit"  >Tambah Produk</v-btn>
         <v-alert
      :value="alert3"
      type="success"
      transition="scale-transition"
    >
      {{ notifikasi }}
    </v-alert>
    <v-card-title>
      List of Transaction
      <v-spacer></v-spacer>
      <v-text-field
        v-model="search"
        append-icon="search"
        label="Search"
        single-line
        hide-details
      ></v-text-field>
    </v-card-title>
    <v-data-table
      :headers="headers"
      :items="product"
      :search="search"
    >
     <template slot="items" slot-scope="props">
        <td>{{ props.item.id }}</td>
        <td>{{ props.item.name }}</td>
        <td>{{ props.item.quantity }}</td>
        <td>{{ props.item.price }}</td>
        <td><v-btn color="error"  @click="btnhapus(props.item.id)" type="submit"  >Hapus</v-btn></td>
        
      </template>
      
      <v-alert slot="no-results" :value="true" color="error" icon="warning">
        Your search for "{{ search }}" found no results.
      </v-alert>
    </v-data-table>
  </v-card>
    
 <v-dialog v-model="dialog" persistent max-width="600px">
    <v-card>
        <v-card-title>
          <span class="headline">Tambah Produk</span>
        </v-card-title>
        <v-card-text>
          <v-container grid-list-md>
            <v-layout wrap>
            <v-flex xs12 sm6>
               <span>Product Name*</span>
                <input  required 
                v-model="namaProduk"
                type="text" class="drop"
                 />
              </v-flex>
              <v-flex xs12 sm6>
                <span>Quantity*</span>
               <input  required 
                v-model="quantityProduk"
                type="text" class="drop"
                 />
              </v-flex>
               <v-flex xs12 sm6>
                <span>Date*</span>
                <input  required 
                v-model="tanggalProduk"
                type="text" class="drop"
                 disabled/>
                 
                 </v-flex>
               <v-flex xs12 sm6>
               <span>Price*</span>
                 <input  required 
                 v-model="totalProduk"
                type="text" class="drop" 
                 />
              </v-flex>

            </v-layout>
          </v-container>
            <v-alert
      :value="alert"
      type="error"
      transition="scale-transition"
    >
      {{ notifikasi }}
    </v-alert>
      <v-alert
      :value="alert2"
      type="success"
      transition="scale-transition"
    >
      {{ notifikasi }}
    </v-alert>
          <small>*Harus diisi</small>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="error"  @click="btncancel()">Batal</v-btn>
          <v-btn color="success"  @click="btnsubmit()" type="submit"  >Simpan</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
  
</template>
<script src="base64.js"></script>
<script>
  import moment from 'moment'
  import Vue from 'vue'
  import axios from 'axios'
  import VueAxios from 'vue-axios'
  import {HTTP} from '../views/httpcommon.js'
  Vue.use(VueAxios, axios)
  
  export default {
    data: () => ({
      drawer: null,
      testclick: function () {
      },
      search: '',
      alert3: false,
      dialog: false,
      alert: false,
      totalProduk: 0,
      product: [],
      hargaProduk: 0,
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
      namaProduk: '',
      quantityProduk: '',
      headers: [
        {
          text: 'No',
          align: 'left',
          sortable: false,
          value: 'no'
        },
        { text: 'Product Name', value: 'name' },
        { text: 'Quantity', value: 'quantity' },
        { text: 'Price', value: 'price' },
        { text: 'Date', value: 'date' }
      ]
    }),
    props: {
      appTitle: {
        type: String,
        default: '',
        description: 'Application Title'
      }
    },
    created () {
      console.log(axios, HTTP)
      var me = this
      HTTP.get(`produk/lists`)
        .then(response => {
          me.product = response.data.data
          console.log('produk', me.product, me.produk)
        })
    },
    methods: {
      doLogout (event) {
        console.log('logout', event)
      },
      hitungjumlah: function (event) {
        this.hargaProduk = event.target.value
      },
      hitungquantity: function (event) {
        this.totalProduk = (this.hargaProduk) * event.target.value
      },
      btnhapus: function (dataid) {
        console.log('terhapus', dataid)
        HTTP.post('produk/delete/' + dataid)
          .then(res => {
            this.alert3 = true
            this.notifikasi = 'Data Produk dengan ID   ' + dataid + '    telah dihapus'
            var me = this
            HTTP.get(`produk/lists`)
              .then(response => {
                me.product = response.data.data
                console.log('produk', me.product, me.produk)
              })
          })
      },
      btnsubmit () {
        this.alert = false
        this.alert2 = false
        this.alert3 = false
        if (this.namaProduk !== '' && this.quantityProduk !== '' && this.hargaProduk !== '') {
          const formData = {
            name: this.namaProduk,
            price: this.totalProduk * 1,
            quantity: this.quantityProduk * 1
          }
          HTTP.post('produk/insert', formData)
            .then(res => {
              this.totalProduk = 0
              this.hargaProduk = 0
              this.quantityProduk = 0
              this.namaProduk = ''
              this.alert2 = true
              this.notifikasi = 'Data telah terupdate'
            })
            .catch(error => {
              this.postnotif = error.response.data
              this.alert = true
              this.notifikasi = 'gagal'
            })
        } else {
          this.alert = true
          this.notifikasi = 'Data yang anda isi belum lengkap'
        }
      },
      btncancel () {
        this.alert = false
        this.alert2 = false
        this.alert3 = false
        this.dialog = false
        this.totalProduk = 0
        this.hargaProduk = 0
        this.quantityProduk = 0
        this.namaProduk = ''
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
</style>