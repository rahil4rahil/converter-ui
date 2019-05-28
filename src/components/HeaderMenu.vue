<template>
    <v-layout row wrap>
        <v-flex xs12 class="header-container">
            <v-layout align-center row wrap px-5>
                <v-flex xs12 sm4 md3 lg4 class="text-xs-left">
                    <p class="custom-logo ma-0">File Convert</p>
                </v-flex>
                <v-flex xs12 sm8 md9 lg8 class="text-xs-right header-menu-item-wrapper">
                    <ul>
                        <li><a>PDF to Image</a></li>
                        <li><a>Image to PDF</a></li>
                        <li><a>Word to PDF</a></li>
                        <li><a>PDF to Word</a></li>
                        <li><a>Home</a></li>
                    </ul>
                </v-flex>
                <v-flex xs12 class="hover-list-wrapper">

                </v-flex>
            </v-layout>
        </v-flex>
    </v-layout>
</template>

<script>
export default {

}
</script>

<style>
.hover-list-wrapper {
}
.logo-image-wrapper {
    max-width: 110px;
}
.header-menu-item-wrapper ul {
    list-style-type: none;
}
.header-menu-item-wrapper ul li {
    padding: 0 20px;
    float: right;
    cursor: pointer;
}
.header-menu-item-wrapper ul li a {
    text-decoration: none;
    font-family: 'Allerta Stencil', sans-serif;
    font-weight: 700;
    color: #85dcb0
}
.header-menu-item-wrapper ul li:hover {
    background-color: #85dcb0;
}
.header-menu-item-wrapper ul li:hover a{
    color: #41b3a3;
}
.header-container {
    width: 100%;
    height: 60px;
    line-height: 60px;
    background-color: #41b3a3;
}
.custom-logo {
    font-family: 'Monoton', cursive;
    font-size: 45px;
    color: #85dcb0
}

</style>
