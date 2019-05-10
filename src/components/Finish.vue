<template>
    <div class="bg">
        <nav>
            <ul class="breadcrumb">
                <li><router-link to="/delivery">Delivery</router-link></li>
                <li><router-link to="/payment">Payment</router-link></li>
                <li><router-link to="/finish">Finish</router-link></li>
            </ul>
        </nav>
        <div class="row">
            <div class="col-75">
                <div class="container">
                    <div class="row">
                        <h3>Thank you</h3>
                    </div>
                </div>
            </div>
            <div class="col-25">
                <div class="container summary__box">
                    <h4>Summary</h4>
                    <h6>{{data_user.quantity}} items purchased</h6>
                    <hr />
                    <h5>Delivery estimation</h5>
                    <h5 style="color:#1BD97B;">{{data_user.delivery_estimate}}</h5>
                    <hr />
                    <h5>Payment Method</h5>
                    <h5 style="color:#1BD97B;">{{data_user.payment_method}}</h5>
                    <div class="detail-price">
                        <h6>Cost of goods <span class="price">{{data_user.cost_of_goods}}</span></h6>
                        <h6>Dropshipping Fee<span class="price">{{data_user.dropshipping_fee}}</span></h6>
                        <h6>{{data_user.shipment_type}} shipment<span class="price">{{data_user.shipment_cost}}</span></h6>
                        <h4>Total <span class="price price--total">{{data_user.total}}</span></h4>
                        <button type="submit" class="btn btn--checkout" @click="finish()">Pay with {{data_user.payment_method}} </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
  name: 'Finish',
  data () {
    return {
    }
  },
  methods: {
    getData(){
        this.data_user = JSON.parse(localStorage.getItem('data_user'));
    },
  },
  mounted(){
      this.getData();
  }
  
}
</script>