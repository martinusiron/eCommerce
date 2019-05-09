<template>
    <div class="bg">
        <nav>
            <ol class="cd-breadcrumb">
                <li><a href="#0">Home</a></li>
                <li><a href="#0">Gallery</a></li>
                <li><a href="#0">Web</a></li>
                <li class="current"><em>Project</em></li>
            </ol>
        </nav>
        <div class="row">
            <div class="col-60">
                <div class="container">
                    <form>
                        <div class="row">
                            <div class="col-50">
                                <h3>Shipment</h3>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-20">
                                <button>
                                    <h5>GO-SEND<br>15.000</h5>
                                </button>
                            </div>

                            <div class="col-20">
                                <button>
                                    <h5>JNE<br>9.000</h5>
                                </button>
                            </div>
                            <div class="col-20">
                                <button>
                                    <h5>Personal Courier<br>29.000</h5>
                                </button>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-50">
                                <h3>Payment</h3>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-20">
                                <button>
                                    <h5>e-Wallet<br>1.500.000 left</h5>
                                </button>
                            </div>

                            <div class="col-20">
                                <button>
                                    <h5>Bank Transfer<br>15.000</h5>
                                </button>
                            </div>
                            <div class="col-20">
                                <button>
                                    <h5>Virtual Account<br>15.000</h5>
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
            <div class="col-15"></div>
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