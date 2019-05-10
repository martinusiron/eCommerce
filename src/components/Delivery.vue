<template>
    <div class="bg">
        <ul class="breadcrumb">
            <li><router-link to="/delivery">Delivery</router-link></li>
            <li><router-link to="/payment">Payment</router-link></li>
            <li><router-link to="/finish">Finish</router-link></li>
        </ul>
        <div class="row">
            <div class="col-75">
                <div class="container" @click="backPage">
                    <span class="back"></span> Back to chart
                </div>
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
                                <input type="text" v-model="data.address" placeholder="Delivery Address" :maxlength="max" required />
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
                            <h6>Cost of goods <span class="price">{{data.cost_of_goods}}</span></h6>
                            <h6>Dropshipping Fee<span class="price">{{dropshippingFee}}</span></h6>
                            <h4>Total <span class="price price--total">{{totalPrice}}</span></h4>
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
            cost_of_goods:0
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
      backPage(){
          this.$router.push({name: 'Cart'});
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
                localStorage.setItem("data_user", JSON.stringify(vm.data));
                vm.$router.push({name: 'Payment'});
          });
      }
  },
  computed: {
      dropshippingFee: function(){
          let vm = this;
          if(this.isChecked){
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
  }
}
</script>