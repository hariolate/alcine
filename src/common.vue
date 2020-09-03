<script>
    const apiUrl = {
        signUp: '/api/user/signup',
        login: '/api/user/login',
        signOut: '/api/user/logout',
    };
    const logoImgSrc = require('./assets/uno_cards.png');
    export default {
        name: "common",
        apiUrl,
        logoImgSrc,
    }
</script>