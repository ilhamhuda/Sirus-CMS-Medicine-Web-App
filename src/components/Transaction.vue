<template>
    <div class="body">
    <v-card style="padding: 50px;margin: 20px">
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
        <td>{{ props.item.totalprice }}</td>
        <td>{{ props.item.date }}</td>
        <td><v-btn color="error"  @click="btnhapus(props.item.id)" type="submit"  >Hapus</v-btn></td>
        
      </template>
      
      <v-alert slot="no-results" :value="true" color="error" icon="warning">
        Your search for "{{ search }}" found no results.
      </v-alert>
    </v-data-table>
  </v-card>
    
 
  </div>
  
</template>

<script>
  import moment from 'moment'
  import {HTTP} from '../views/httpcommon.js'
  export default {
    data: () => ({
      drawer: null,
      testclick: function () {
      },
      search: '',
      dialog: false,
      totalProduk: 0,
      alert3: false,
      notifikasi: '',
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
      namaProduk: 'Pilih Produk',
      quantityProduk: 'Pilih Kuantiti',
      headers: [
        {
          text: 'No',
          align: 'left',
          sortable: false,
          value: 'no'
        },
        { text: 'Total Price', value: 'price' },
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
      var me = this
      HTTP.get(`transaksi/lists`)
        .then(response => {
          me.product = response.data.data
          console.log('produk', me.product, me.produk)
        })
    },
    methods: {
      doLogout (event) {
        console.log('logout', event)
      },
      btnhapus: function (dataid) {
        console.log('terhapus', dataid)
        HTTP.post('transaksi/delete/' + dataid)
          .then(res => {
            this.alert3 = true
            this.notifikasi = 'Data Produk dengan ID   ' + dataid + '    telah dihapus'
            var me = this
            HTTP.get(`transaksi/lists`)
              .then(response => {
                me.product = response.data.data
                console.log('produk', me.product, me.produk)
              })
          })
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