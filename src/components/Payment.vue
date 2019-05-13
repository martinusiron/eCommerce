<template>
    <div class="bg">
        <nav>
            <ul class="breadcrumb">
                <li><span class="current--menu">1</span>Delivery</li>
                <li><span class="current--menu">2</span>Payment</li>
                <li><span>3</span>Finish</li>
            </ul>
        </nav>
        <div class="row">
            <div class="col-75">
                <router-link to="/delivery">
                    <div class="container">
                        <h6 class="back--home">
                            <span class="back"></span> Back to delivery
                        </h6>
                    </div>
                </router-link>
            </div>
        </div>
        <form id="form-payment" role="form">
            <div class="row">
                <div class="col-75">
                    <div class="container">
                        <form>
                            <div class="row">
                                <div class="col-50">
                                    <h3>Shipment</h3>
                                </div>
                            </div>
                            <div class="row">
                                <ul class="shipment-payment">
                                    <li 
                                        v-for="(shipment, index) in shipments" 
                                        :class="{ 'active':activeIndexShipment === index }"
                                        :key="shipment.id"
                                        @click="setActiveShipment(shipment, index)"
                                    >
                                        {{shipment.shipment_type}} <br/>
                                        {{shipment.shipment_price}}
                                    </li>
                                </ul>
                            </div>
                            <div class="row">
                                <div class="col-50">
                                    <h3>Payment</h3>
                                </div>
                            </div>
                            <div class="row">
                                <ul class="shipment-payment">
                                    <li 
                                        v-for="(payment, index) in payments"
                                        :class="{ 'active':activeIndexPayment === index }"
                                        :key="payment.id"
                                        @click="setActivePayment(payment, index)"
                                    >
                                        {{payment.payment_type}}
                                    </li>
                                </ul>
                            </div>
                        </form>
                    </div>
                </div>
                <div class="col-25">
                    <div class="container summary__box">
                        <h4>Summary</h4>
                        <h6>{{data_user.quantity}} items purchased</h6>
                        <hr />
                        <h5>Delivery estimation</h5>
                        <h5 style="color:#1BD97B;">{{delivery_estimate}}</h5>
                        <hr />
                        <h5>Payment Method</h5>
                        <h5 style="color:#1BD97B;">{{payment_method}}</h5>
                        <div class="detail-price">
                            <h6>Cost of goods <span class="price price--font">{{formatPrice(data_user.cost_of_goods)}}</span></h6>
                            <h6>Dropshipping Fee<span class="price price--font">{{formatPrice(data_user.dropshipping_fee)}}</span></h6>
                            <h6>{{shipment_type}} shipment<span class="price price--font">{{formatPrice(shipment_cost)}}</span></h6>
                            <h4>Total <span class="price price--total">{{formatPrice(totalPrice)}}</span></h4>
                            <input type="hidden" v-model="shipment_type" />
                            <input type="hidden" v-model="payment_method" />
                            <span v-if="errors.length">
                                <h5 v-for="error in errors">
                                    <span class="error">{{ error }} <br /></span>
                                </h5>
                            </span>
                            <button type="submit" class="btn btn--checkout" @click="finish()">Pay with {{payment_method}} </button>
                        </div>
                    </div>
                </div>
            </div>
        </form>
    </div>
</template>
<script>
export default {
  name: 'Payment',
  data () {
    return {
        shipments : [
            {id:1, shipment_type: "GO-SEND", shipment_price: 15000, estimate: "today"},
            {id:2, shipment_type: "JNE", shipment_price: 9000, estimate: "2 days"},
            {id:3, shipment_type: "Personal Courier", shipment_price: 29000, estimate: "1 day"}
        ],
        payments : [
            {id: 1,payment_type: "e-Wallet"},
            {id: 2,payment_type: "Bank Transfer"},
            {id: 3, payment_type: "Virtual Account"}
        ],
        activeIndexShipment: undefined,
        activeIndexPayment: undefined,
        data_user : {
            
        },
        delivery_estimate: "",
        shipment_cost: 0,
        shipment_type: null,
        payment_method: null,
        errors: []
    }
  },
  methods: {
        setActiveShipment(shipment, index) { 
            this.activeIndexShipment = index;
            this.delivery_estimate = shipment.estimate + " by "+shipment.shipment_type;
            this.shipment_cost = shipment.shipment_price;
            this.shipment_type = shipment.shipment_type;
        },
        setActivePayment(payment, index) { 
            this.activeIndexPayment = index;
            this.payment_method = payment.payment_type;
        },
        getData(){
            this.data_user = JSON.parse(localStorage.getItem('data_user'));
        },
        finish(){
            let vm = this;
            $("#form-payment").submit(function(e){
                vm.errors = [];
                if(vm.shipment_type && vm.payment_method){
                    vm.data_user.delivery_estimate = vm.delivery_estimate;
                    vm.data_user.shipment_cost = vm.shipment_cost;
                    vm.data_user.shipment_type = vm.shipment_type;
                    vm.data_user.payment_method = vm.payment_method;
                    localStorage.setItem("data_user", JSON.stringify(vm.data_user));
                    vm.$router.push({name: "Finish"});
                }
                else{
                    if(!vm.shipment_type)
                        vm.errors.push("Choose Shipment");
                    if(!vm.payment_method)
                        vm.errors.push("Choose Payment");
                    return false;
                }
                e.preventDefault();
                
            });
        },
        formatPrice(value) {
            let val = (value/1).toFixed(0).replace('.', ',')
            return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")
        }
    },
    computed:{
        totalPrice: function(){
            let vm = this;
            vm.data_user.total = vm.data_user.cost_of_goods + vm.data_user.dropshipping_fee + vm.shipment_cost;
            return vm.data_user.total;
        }
    },
    mounted() {
        let vm = this;
        vm.getData();
    }
}
</script>