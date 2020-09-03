<template>
    <div>
        <div>
            <b-navbar
                    type="light"
                    variant="light"
                    id="nav">
                <b-navbar-nav class="ml-auto" >
                    <b-nav-item href="#/">Home</b-nav-item>
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
        <b-form
                @submit="onSubmit"
                id="form">
            <b-form-group
                    id="emailInputGroup"
                    label="Email address:"
                    label-for="emailInput">
                <b-form-input
                        id="emailInput"
                        v-model="form.email"
                        type="email"
                        required
                        placeholder="Enter email"
                ></b-form-input>
            </b-form-group>
            <b-form-group
                    id="passwordInputGroup"
                    label="Password:"
                    label-for="passwordInput">
                <b-form-input
                        id="passwordInput"
                        v-model="form.password"
                        type="password"
                        required
                        placeholder="Enter password"
                ></b-form-input>
            </b-form-group>
            <b-button
                    type="submit"
                    variant="primary"
                    id="button">
                Login
            </b-button>
        </b-form>
        <b-alert
                show
                variant="danger"
                dismissible
                class="alert">
            Login failed.
        </b-alert>
    </div>
</template>

<script>
    import common from "../common";

    export default {
        name: "Login",
        data() {
            return {
                logoImg: common.logoImgSrc,
                form: {
                    email: '',
                    password: '',
                }
            }
        },
        methods: {
            onSubmit(evt) {
              evt.preventDefault();
              this.$router.push('/lobby')
            },
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
    #form {
        width: 50%;
        max-width: 600px;
        margin-left: 50%;
        transform: translateX(-50%);
        margin-top: 3vh;
    }
    #button {
        width: 80%;
        margin-left: 10%;
        margin-top: 1vh;
    }
    .alert {
        width: 50%;
        max-width: 600px;
        margin-left: 50%;
        margin-top: 2vh;
        transform: translateX(-50%);
    }
</style>