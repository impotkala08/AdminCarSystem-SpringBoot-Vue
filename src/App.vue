<template>
  <div id="app">
  

    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container-fluid">
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarTogglerDemo03"
          aria-controls="navbarTogglerDemo03"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <a class="navbar-brand" href="/about2">ArmSystem</a>
        <div class="collapse navbar-collapse" id="navbarTogglerDemo03">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="about2">หน้าหลัก</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/">เพิ่มรายการ</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    <router-view />
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  font-family: "RSU_light";
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

@font-face {
  font-family: "RSU_BOLD";
  src: local("RSU_BOLD"), url(./assets/fonts/RSU_BOLD.ttf) format("truetype");
}

@font-face {
  font-family: "RSU_light";
  src: local("RSU_light"), url(./assets/fonts/RSU_light.ttf) format("truetype");
}
</style>
