<template>
    <div>
        <div>
            <b-navbar
                    type="light"
                    variant="light"
                    id="nav">
                <b-navbar-nav class="ml-auto" >
                    <b-nav-item href="#/">Home</b-nav-item>
                    <b-nav-item href="#/login">Login</b-nav-item>
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
                Sign up
            </b-button>
        </b-form>
        <b-alert
                v-model="fail"
                variant="danger"
                dismissible
                class="alert">
            Sign up failed.
        </b-alert>
        <b-alert
                v-model="success"
                variant="success"
                dismissible
                class="alert">
            Sign up success.
        </b-alert>
    </div>
</template>

<script>
    import common from "../common";
    import axios from "axios"

    export default {
        name: "Signup",
        data() {
            return {
                logoImg: common.logoImgSrc,
                form: {
                    email: '',
                    password: '',
                },
                success: false,
                fail: false,
            }
        },
        methods:{
            onSubmit(evt) {
                evt.preventDefault();
                axios.post(common.apiUrl.signUp, JSON.stringify({
                    email: this.form.email,
                    password: this.form.password,
                })).then(() => {
                    this.success = true;
                    this.fail = false;
                }).catch(() => {
                    this.success = false;
                    this.fail = true;
                });
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