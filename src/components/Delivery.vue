<template>
    <div class="bg">
        <ul class="breadcrumb">
            <li><router-link to="/delivery">Delivery</router-link></li>
            <li><router-link to="/payment">Payment</router-link></li>
            <li><router-link to="/finish">Finish</router-link></li>
        </ul>
        <div class="row">
            <div class="col-75">
                <div class="container">
                    <form>
                        <div class="row">
                            <div class="col-50">
                                <h3>Delivery details</h3>
                            </div>
                            <div class="col-50">
                                <h6>
                                    <input type="checkbox" checked="checked" name="sameadr"> Send as dropshipper
                                </h6>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-50">
                                <input type="text" id="fname" name="name" placeholder="Name" />
                                <input type="text" id="email" name="phone_number" placeholder="Phone Number" />
                                <textarea id="adr" name="address" placeholder="Delivery Address"></textarea>
                            </div>

                            <div class="col-50">
                                <input type="text" id="dropshipper_name" name="dropshipper_name" placeholder="Dropshipper Name" />
                                <input type="text" id="dropshipper_phone" name="dropshipper_phone" placeholder="Dropshipper Phone Number" />
                            </div>
                        </div>
                    </form>
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