# e-commerce

> this project to completed jackmall's test frontend

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev
```
```
Narasi project: 
Pada saat pertama kali project ini dijalankan, akan membuka halaman cart, dimana pada halaman ini,
user memilih berapa banyak quantity yang akan diorder: 
value dari quantity ini akan disimpan di localStorage.

Kemudian masuk kehalaman delivery. pada halaman ini, user akan mengisi form identitas dan dropshiper (jika dibutuhkan). pada halaman ini quantity akan diambil dari localStorage yang disimpan tadi untuk ditampilkan dan dgunakan dalam perhitungan harga.
Data yang diisi pada halaman ini, baik identitas ataupun perhitungan harga akan disimpan pada localStorage dalam bentuk array.

*pada input type phone number ada kendala dalam validasi +,-,(,). yang masih bisa adalah hanya untuk angka saja.

Kemudia dilanjutkan ke halaman payment.
disini user akan memilih shipment dan payment. pada halaman ini akan di load data dari localStorage untuk ditampilkan dibagian summary.
dan jika diback ke halaman delivery, form akan terisi dengan data yang diisi sebelumnya.

Kemudian lanjut ke fisnih. pada halaman ini akan di generate OrderID. dan menampilkan summary dari order user. 
```
For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
