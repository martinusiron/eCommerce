<template>
    <div class="bg">
        <div class="row">
            <div class="cart">
                <h1>Cart</h1>
            </div>
        </div>
        <div class="row">
            <div class="cart cart--icon"></div>
        </div>
        <form id="form-cart" role="form">
            <div class="row">
                <div class="cart quantity buttons_added">
                    <h4>Quantity</h4>
                    <button v-on:click.prevent="decrement" class="minus">-</button>
                    <span class="minus">{{quantity}}</span>
                    <button v-on:click.prevent="increment" class="plus">+</button>
                </div>
            </div>
            <div class="row">
                <button type="submit" class="cart btn btn--continue" @click="checkout()">Continue</button>
            </div>
        </form>
    </div>
</template>
<script>
export default {
  name: 'Cart',
  data () {
    return {
        quantity : 1
    }
  },
  methods : {
      decrement(){
        if(this.quantity > 0){
            this.quantity--;
        }
      },
      increment(){
          this.quantity++;
      },
      checkout(){
          let vm = this;
          $("#form-cart").submit(function(e){
              window.localStorage.setItem("quantity", vm.quantity);
              vm.$router.push({name: 'Delivery'});
          })
      },
      getData(){
          let quantity = JSON.parse(localStorage.getItem('quantity'));
          if(quantity){
             this.quantity = quantity; 
          }
      }
    },
    mounted(){
        this.getData();
    }

}
</script>