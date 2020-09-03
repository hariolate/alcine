<template>
    <h1>Game</h1>
</template>

<script>
    import SockJS from 'sockjs-client'

    export default {
        name: "Game",
        mounted() {
            // WebSocket test
            const sock = new SockJS('https://baidu.com');
            sock.onopen = function () {
                sock.send('test');
            };
            sock.onmessage = function (e) {
                console.log('message', e.data);
                sock.close();
            };
            sock.onclose = function () {
                console.log('close');
            };
        }
    }
</script>

<style scoped>

</style>