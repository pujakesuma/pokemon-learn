<template>
<div>
    <h3>This is user children</h3>
    <p>Params : {{ $route.params.user }}</p>
    <p v-if="$route.query.locale"> Query: {{ $route.query.locale }}</p>
    <div id="footer">
        <p>FOOTER</p>
    </div>
</div>
</template>

<script>

const UserChildren = {
    name: 'UserChildren'
}

export default UserChildren;
</script>

<style scoped>
#footer {
    height: 700px;
    display: flex;
    align-items: flex-end;
}
</style>