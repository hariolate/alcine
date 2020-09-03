<template>
    <div>
        <div>
            <b-navbar
                    type="light"
                    variant="light"
                    id="nav">
                <b-navbar-nav class="ml-auto" >
                    <b-nav-item href="#/login">Login</b-nav-item>
                    <b-nav-item href="#/signup">Sign Up</b-nav-item>
                </b-navbar-nav>
            </b-navbar>
        </div>
        <b-img
                center
                :src="logoImg"
                alt="UNO Online"
                id="logo"
        ></b-img>
        <b-table
            striped
            hover
            :items="items"
            id="ranking"
        ></b-table>
    </div>
</template>

<script>
    import common from "../common";

    export default {
        name: "Home",
        data() {
            return {
                logoImg: common.logoImgSrc,
                items: [
                    { ID: 'Mso1a', Score: '11234', WinRate: '0.74'},
                    { ID: 'Mso1a', Score: '11234', WinRate: '0.74'},
                    { ID: 'Mso1a', Score: '11234', WinRate: '0.74'},
                ]
            }
        }
    }
</script>

<style scoped>
    #nav {
        border-bottom: solid lightgray 1px;
    }
    #logo {
        margin-top: 2vh;
        max-height: 300px;
    }
    #ranking {
        width: 70%;
        max-width: 700px;
        margin-left: 50%;
        margin-top: 3vh;
        transform: translateX(-50%);
        text-align: center;
    }
</style>