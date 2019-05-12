<template>
    <div class="bg">
        <ul class="breadcrumb">
            <li><span class="current--menu">1</span>Delivery</li>
            <li><span>2</span>Payment</li>
            <li><span>3</span>Finish</li>
        </ul>
        <div class="row">
            <div class="col-75">
                <router-link to="/">
                    <div class="container">
                        <h6 class="back--home">
                            <span class="back"></span> Back to cart
                        </h6>
                    </div>
                </router-link>
            </div>
        </div>
        <form id="form-delivery" role="form">
            <div class="row">
                <div class="col-75">
                    <div class="container">
                        <div class="row">
                            <div class="col-50">
                                <h3>Delivery details</h3>
                            </div>
                            <div class="col-50">
                                <h6>
                                    <input type="checkbox" checked="checked" v-model="isChecked"> Send as dropshipper
                                </h6>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-50">
                                <input type="email" v-model="data.email" placeholder="Email" required />
                                <input type="text" v-model="data.phone_number" placeholder="Phone Number" maxlength="20" minlength="6" class="phone_number" v-on:keydown="checkPhone" required />
                                <textarea v-model="data.address" placeholder="Delivery Address... (limited to 120 characters)" :maxlength="max" required></textarea>
                                <h6 class="remaining"><span>Remaining characters: {{(max - data.address.length)}}</span></h6>
                            </div>

                            <div class="col-50">
                                <input type="text" :disabled="!isChecked" v-model="data.dropshipper_name" placeholder="Dropshipper Name" required />
                                <input type="text" :disabled="!isChecked" v-model="data.dropshipper_phone" placeholder="Dropshipper Phone Number" maxlength="20" minlength="6" class="phone_number" v-on:keydown="checkPhone" required />
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-25">
                    <div class="container summary__box">
                        <h4>Summary <span></span></h4>
                        <h6>{{data.quantity}} items purchased</h6>
                        <div class="detail-price">
                            <h6>Cost of goods <span class="price price--font">{{formatPrice(data.cost_of_goods)}}</span></h6>
                            <h6>Dropshipping Fee<span class="price price--font">{{formatPrice(dropshippingFee)}}</span></h6>
                            <h4>Total <span class="price price--total">{{formatPrice(totalPrice)}}</span></h4>
                            <button type="submit" @click="continueToPayment()" class="btn btn--checkout">Continue to Payment</button>
                        </div>
                    </div>
                </div>
            </div>
        </form>
    </div>
</template>
<script>
export default {
  name: 'Delivery',
  data () {
    return {
        data : {
            quantity: window.localStorage.getItem("quantity"),
            cost: 50000,
            dropshipping_fee: 0,
            total: 0,
            email: '',
            phone_number: '',
            address: '',
            dropshipper_name: '',
            dropshipper_phone: '',
            cost_of_goods:0,
            isCheckedData: false
        },
        isChecked : false,
        text: '',
        max : 120
    }
  },
  methods : {
      getTotal(){
          let vm = this;
          vm.data.cost_of_goods = vm.data.quantity * vm.data.cost;
      },
      getData(){
          
            let storage = JSON.parse(localStorage.getItem('data_user'));
            if(storage){
                this.data = storage;
                this.isChecked = storage.isCheckedData;
            }
        },
      checkPhone(){
        $('#form-delivery').on('keydown', '.phone_number', function (e) {
            -1 !== $.inArray(e.keyCode, [46, 8, 9, 27, 13, 110, 190]) || (/65|67|86|88/.test(e.keyCode) && (e.ctrlKey === true || e.metaKey === true)) && (!0 === e.ctrlKey || !0 === e.metaKey) || 35 <= e.keyCode && 40 >= e.keyCode || (e.shiftKey || 48 > e.keyCode || 57 < e.keyCode ) && (96 > e.keyCode || 105 < e.keyCode) && e.preventDefault()
        });
      },
      continueToPayment(){
          let vm = this;
          $("#form-delivery").submit(function(e) {
                e.preventDefault();
                vm.data.isCheckedData = vm.isChecked;
                localStorage.setItem("data_user", JSON.stringify(vm.data));
                vm.$router.push({name: 'Payment'});
          });
      },
      formatPrice(value) {
        let val = (value/1).toFixed(0).replace('.', ',')
        return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")
      }
  },
  computed: {
      dropshippingFee: function(){
          let vm = this;
          if(vm.isChecked){
              vm.data.dropshipping_fee = 5900;
              return vm.data.dropshipping_fee;
          } else{
              vm.data.dropshipping_fee = 0
              return vm.data.dropshipping_fee;
          }
      },
      totalPrice: function(){
          let vm = this;
          vm.data.total = vm.data.cost_of_goods + vm.data.dropshipping_fee;
          return vm.data.total;
      }
  },
  mounted() {
      let vm = this;
      vm.getTotal();
      vm.getData();
  }
}
</script>