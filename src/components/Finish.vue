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
                    <h4>Summary <span></span></h4>
                    <h6>10 items purchased</h6>
                    <div class="detail-price">
                        <h6>Cost of goods <span class="price">$15</span></h6>
                        <h6>Dropshipping Fee<span class="price">$5</span></h6>
                        <h4>Total <span class="price">$20</span></h4>
                        <input type="submit" value="Continue to Payment" class="btn">
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
  name: 'Delivery',
  data () {
    return {
    }
  }
}
</script>