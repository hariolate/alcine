<template>
    <div>
        <div>
            <b-navbar
                    type="light"
                    variant="light"
                    id="nav">
                <b-navbar-nav>
                    <b-nav-item>Mso1a <b-badge variant="info">1500</b-badge></b-nav-item>
                </b-navbar-nav>
                <b-navbar-nav class="ml-auto" >
                    <b-nav-item href="/">Sign out</b-nav-item>
                </b-navbar-nav>
            </b-navbar>
        </div>
        <b-img
                center
                :src="logoImg"
                alt="UNO Online"
                id="logo"
        ></b-img>
        <b-button
                variant="success"
                id="start"
                v-on:click="findGame">
            <strong>Find a game</strong>
        </b-button>
        <h1 class="title">Recent Games</h1>
        <b-table
                striped
                hover
                :items="recently"
                id="recently"
        ></b-table>
        <h1 class="title">Rankings</h1>
        <b-table
                striped
                hover
                :items="rankings"
                id="ranking"
        ></b-table>
    </div>
</template>

<script>
    import common from "../common";

    export default {
        name: "Lobby",
        data() {
            return {
                logoImg: common.logoImgSrc,
                recently: [
                    { Rank: '1500', Status: 'Win', Time: '5 minutes ago'},
                    { Rank: '1450', Status: 'Win', Time: '15 minutes ago'},
                ],
                rankings: [
                    { ID: 'Mso1a', Score: '11234', WinRate: '0.74'},
                    { ID: 'Mso1a', Score: '11234', WinRate: '0.74'},
                    { ID: 'Mso1a', Score: '11234', WinRate: '0.74'},
                ]
            }
        },
        methods: {
            findGame() {
                this.$router.push('/game');
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
    #start {
        margin-left: 50%;
        margin-top: 4vh;
        transform: translateX(-50%);
    }
    #recently, #ranking {
        width: 70%;
        max-width: 700px;
        margin-left: 50%;
        margin-top: 3vh;
        transform: translateX(-50%);
        text-align: center;
    }
    .title {
        text-align: center;
        margin-top: 4vh;
    }
</style>