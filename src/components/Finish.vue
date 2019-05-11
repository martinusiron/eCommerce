<template>
    <div class="bg">
        <nav>
            <ul class="breadcrumb">
                <li><span class="current--menu">1</span>Delivery</li>
                <li><span class="current--menu">2</span>Payment</li>
                <li><span class="current--menu">3</span>Finish</li>
            </ul>
        </nav>
        <div class="row">
            <div class="col-75 thank-you">
                <h3>Thank you</h3>
                <h5>Order ID: {{order_id}} </h5>
                <h5>Your order will be delivered {{data_user.delivery_estimate}}</h5>
                <router-link to="/">
                    <h6 class="back--home">
                        <span class="back"></span> Back to homepage
                    </h6>
                </router-link>
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
                        <h6>Cost of goods <span class="price price--font">{{data_user.cost_of_goods}}</span></h6>
                        <h6>Dropshipping Fee<span class="price price--font">{{data_user.dropshipping_fee}}</span></h6>
                        <h6>{{data_user.shipment_type}} shipment<span class="price price--font">{{data_user.shipment_cost}}</span></h6>
                        <h4>Total <span class="price price--total">{{data_user.total}}</span></h4>
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
        data_user : {},
        order_id : this.generateOrderId(5)
    }
  },
  methods: {
    getData(){
        this.data_user = JSON.parse(localStorage.getItem('data_user'));
    },
    generateOrderId(length){
        var result           = '';
        var characters       = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789';
        var charactersLength = characters.length;
        for ( var i = 0; i < length; i++ ) {
            result += characters.charAt(Math.floor(Math.random() * charactersLength));
        }
        return result;
    }
  },
  mounted(){
      this.getData();
      this.generateOrderId(5);
  }
  
}
</script>