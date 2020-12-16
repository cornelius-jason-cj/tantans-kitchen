<template>

  <v-form>
    <v-container>
      <v-row>
        <v-col
          cols="12"
        sm="4"
        >
          <v-menu
            v-model="menuTanggalPesan"
            :close-on-content-click="false"
            max-width="290"
          >
            <template v-slot:activator="{ on, attrs }">
              <v-text-field
                :value="computedtanggalPesanFormattedMomentjs"
                clearable
                label="Tanggal Pesan"
                readonly
                v-bind="attrs"
                v-on="on"
                color="teal"
                @click:clear="dataPesanan.tanggalPesan = null"
              ></v-text-field>
            </template>
            <v-date-picker
              v-model="dataPesanan.tanggalPesan"
              color="teal"
              @change="menuTanggalPesan = false"
            ></v-date-picker>
          </v-menu>
        </v-col>

        <v-col
          cols="12"
        sm="4"
        >
          <v-menu
            v-model="menuTanggalKirim"
            :close-on-content-click="false"
            max-width="290"
          >
            <template v-slot:activator="{ on, attrs }">
              <v-text-field
                :value="computedtanggalKirimFormattedMomentjs"
                clearable
                label="Tanggal Kirim"
                readonly
                v-bind="attrs"
                v-on="on"
                color="teal"
                @click:clear="dataPesanan.tanggalKirim = null"
              ></v-text-field>
            </template>
            <v-date-picker
              v-model="dataPesanan.tanggalKirim"
              color="teal"
              @change="menuTanggalKirim = false"
            ></v-date-picker>
          </v-menu>
        </v-col>

        <v-col
          cols="12"
        sm="4"
        >
          <v-menu
            v-model="menuJamKirim"
            :close-on-content-click="false"
            max-width="290"
          >
            <template v-slot:activator="{ on, attrs }">
              <v-text-field
                :value="dataPesanan.jamKirim"
                clearable
                label="Jam Kirim"
                readonly
                v-bind="attrs"
                v-on="on"
                color="teal"
                @click:clear="dataPesanan.jamKirim = null"
              ></v-text-field>
            </template>
            <v-time-picker
              format="ampm"
              full-width
              color="teal"
              v-model="dataPesanan.jamKirim"
            ></v-time-picker>
          </v-menu>
        </v-col>
      </v-row>

      <v-row>
        <v-col
          cols="12"
        sm="6"
        >
          <v-text-field
            v-model="dataPesanan.nama"
            color="teal"
            label="Nama"
            required
          ></v-text-field>
        </v-col>
        
        <v-col
          cols="12"
        sm="6"
        >
          <v-text-field
            v-model="dataPesanan.alamat"
            color="teal"
            label="Nomor HP"
            required
          ></v-text-field>
        </v-col>
      </v-row>

      <v-row>
        <v-col
          cols="12"
        sm="6"
        >
          <v-text-field
            v-model="dataPesanan.nama"
            color="teal"
            label="Alamat"
            required
          ></v-text-field>
        </v-col>
        
        <v-col
          cols="12"
        sm="6"
        >
          <v-text-field
            v-model="dataPesanan.alamat"
            color="teal"
            label="Alamat Gojek / Grab"
            required
          ></v-text-field>
        </v-col>
      </v-row>

      <v-row justify="space-between">
        <v-col
          cols="12"
          sm="6"
        >
        Order List : 
        </v-col>

        <v-col
          cols="12"
          sm="6"
        >
          <v-btn
            color="teal"
            dark
            @click="addNewRow"
          >
            Tambah
          </v-btn>
        </v-col>
      </v-row>

      <v-row
      v-for="(value, index) in dataPesanan.order"
      :key="value.indexOf"
      >
        <v-col
          cols="12"
          sm="4"
        >
          <v-select
            v-model="dataPesanan.order.nama"
            :key="index"
            :items="namaProduk"
            label="Nama Makanan"
            solo
            @change="getVariant($event)"
          ></v-select>
        </v-col>
        
        <v-col
          cols="12"
          sm="4"
        >
          <v-select
            v-model="dataPesanan.order.variant"
            :items="variantProduk"
            label="Variant"
            solo
          ></v-select>
        </v-col>
        
        <v-col
          cols="12"
          sm="2"
        >
          <v-text-field
            v-model="dataPesanan.order.jumlah"
            label="Jumlah"
            color="teal"
            required
          ></v-text-field>
        </v-col>

        <v-col
          cols="12"
          sm="2"
        >
          <v-btn
            color="teal"
            dark
            @click="deleteRow(index)"
          >
            Hapus
          </v-btn>
        </v-col>
      </v-row>


    </v-container>
  </v-form>
</template>

<script>
  import moment from 'moment'

  export default {
    data: () => ({
      checkbox: false,
      menuTanggalPesan: false,
      menuTanggalKirim: false,
      menuJamKirim: false,
      dataPesanan:{
        tanggalPesan:'',
        tanggalKirim:'',
        jamKirim:'',
        nama:'',
        alamat:'',
        hp:'',
        order:[]
      },
      namaProduk:['Choipan', 'Lemper', 'Siomay', 'Risol', 'Kue Sus', 'Kroket', 'KuePutih', 'Kuotie', 'Bakcang Nasi', 'Bakcang Ketan', ' Ayam Saus Wijen'],
      variantProduk:[],
      produk:[
        {
          id: 1,
          name: 'Choipan',
          variant: ['Bengkuang', 'Ebi', 'Kucai']
        },
        {
          id: 2,
          name: 'Lemper',
          variant: ['Ayam', 'Ebi']
        },
        {
          id: 3,
          name: 'Siomay',
          variant: ['Ayam']
        },
        {
          id: 4,
          name: 'Risol',
          variant: ['Rogut', 'Sayur', 'Mayo']
        },
        {
          id: 5,
          name: 'Kue Sus',
          variant: ['Rum', 'Tanpa Rum']
        },
        {
          id: 6,
          name: 'Kroket',
          variant: '-'
        },
        {
          id: 7,
          name: 'Kue Putih',
          variant: '-'
        },
        {
          id: 8,
          name: 'Kuotie',
          variant: ['Ayam Udang ', 'Babi']
        },
        {
          id: 9,
          name: 'Bakcang Nasi',
          variant: ['Ayam', 'Babi']
        },
        {
          id: 10,
          name: 'Bakcang Ketan',
          variant: ['Ayam', 'Babi']
        },
        {
          id: 10,
          name: 'Ayam Saus Wijen',
          variant: '-'
        },
      ],
    }),
    computed: {
      computedtanggalPesanFormattedMomentjs () {
        let date = this.dataPesanan.tanggalPesan;
        return date ? moment(date).format('dddd, MMMM Do YYYY') : ''
      },
      computedtanggalKirimFormattedMomentjs () {
        let date = this.dataPesanan.tanggalKirim;
        return date ? moment(date).format('dddd, MMMM Do YYYY') : ''
      },
    },
    methods: {
      getVariant (name) {
        console.log(name)
        let data = this.produk.filter(produk => { return produk.name === name} )
        this.variantProduk = data[0].variant
      },
      addNewRow () {
        let emptyData = {
          name:'',
          variant:'',
          jumlah:''
        }
        this.dataPesanan.order.push(emptyData)
      },
      deleteRow (index) {
        this.dataPesanan.order.splice(index,1)
      }
    },
  }
</script>