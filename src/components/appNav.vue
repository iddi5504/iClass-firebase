<template>
    <nav class="d-flex flex-row justify-content-between align-items-center">
        <div>
            <span @click="$router.back()"><i class="bi bi-arrow-left-circle"></i> </span>
        </div>
        <div class="username">Yakubu</div>
        <div><router-link to="/"><i class="bi bi-house"></i></router-link></div>
    </nav>
</template>

<script>
export default {

}
</script>

<style>
.username{
    font-size: 1.5rem;
    font-weight: 500;
}

.bi{
    font-size: 1.5rem;
    
}
</style>