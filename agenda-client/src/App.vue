<template>
  <v-app>
    <v-app-bar app>
      <v-toolbar-title class="headline text-uppercase">
        <span>Mon Agenda</span>
      </v-toolbar-title>
    </v-app-bar>

    <v-content>
      <v-row>
        <v-col>
          <v-btn fab outlined small absolute left color="primary" @click="$refs.calendar.prev()">
            <v-icon dark>mdi-chevron-left</v-icon>
          </v-btn>
          <v-btn fab outlined small absolute right color="primary" @click="$refs.calendar.next()">
            <v-icon dark>mdi-chevron-right</v-icon>
          </v-btn>
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <v-calendar ref="calendar" type="day" start="2019-10-03" end="2019-10-30"></v-calendar>
        </v-col>
      </v-row>
    </v-content>
  </v-app>
</template>

<script>
export default {
  name: "App",
  components: {},
  data: () => ({
    //
  })
};
</script>
