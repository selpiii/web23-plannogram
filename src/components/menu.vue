<template>
    <div class="container">
        <div class="row">
            <div class="col center">
                <router-link to="/list-user"
                @click.native="handleClick('use')">
                    <div>
                        User<hr :class="{ 'uline-green': $store.state.activeMenu === 'use', 'uline-grey': $store.state.activeMenu !== 'use' }">
                    </div>
                </router-link>
            </div>
            <div class="col center">
                <router-link to="/list-product" @click.native="handleClick('pr')">
                    <div>
                        Product<hr :class="{ 'uline-green': $store.state.activeMenu === 'pr', 'uline-grey': $store.state.activeMenu !== 'pr' }">
                    </div>
                </router-link>
            </div>
            <div class="col center">
                <router-link to="/cart">
                    <div>
                        Voucher<hr class="uline-grey">
                    </div>
                </router-link>
            </div>
            <div class="col center">
                <router-link to="/cart">
                    <div>
                        Banner<hr class="uline-grey">
                    </div>
                </router-link>
            </div>
            <div class="col center">
                <router-link to="/list-plannogram"  @click.native="handleClick('vo')">
                    <div>
                        Plannogram<hr :class="{ 'uline-green': $store.state.activeMenu === 'vo', 'uline-grey': $store.state.activeMenu !== 'vo' }">
                    </div>
                </router-link>
            </div>
            <div class="col center">
                <router-link to="/cart">
                    <div>
                        Article<hr class="uline-grey">
                    </div>
                </router-link>
            </div>
            <div class="col center">
                <router-link to="/cart">
                    <div>
                        Notification<hr class="uline-grey">
                    </div>
                </router-link>
            </div>
            <div class="col center">
                <router-link to="/cart">
                    <div>
                        Delivery Method<hr class="uline-grey">
                    </div>
                </router-link>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        name: 'Menu',
        data(){
            return {
                klik: true,
            }
        },

        methods: {
            handleClick(menu) {
                this.$store.dispatch('setActiveMenu', menu);
                console.log(this.$store.state.activeMenu);
            },
            isActive(menu) {
                this.$store.commit('setActiveMenu', menu);
            },
        },
        computed: {
            activeMenu() {
                return this.$store.getters.activeMenu;
            },
        },
    }
</script>-*+