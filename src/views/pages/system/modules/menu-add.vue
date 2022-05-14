<template>
  <v-card>
    <v-card-title>
      <span class="text-h5">新增菜单</span>
    </v-card-title>
    <v-card-text class="pt-4">
      <v-container>
        <v-row>
          <v-col cols="12" sm="6" md="4" class="py-0">
            <v-text-field label="Legal first name*" required outlined dense class="py-0"></v-text-field>
          </v-col>
          <v-col cols="12" sm="6" md="4" class="py-0">
            <v-text-field label="Legal middle name" outlined dense class="py-0"></v-text-field>
          </v-col>
          <v-col cols="12" sm="6" md="4" class="py-0">
            <v-text-field label="Legal last name*" required outlined dense class="py-0"></v-text-field>
          </v-col>
          <v-col cols="12" class="py-0">
            <v-text-field label="Email*" required outlined dense></v-text-field>
          </v-col>
          <v-col cols="12" class="py-0">
            <v-text-field label="Password*" required outlined dense></v-text-field>
          </v-col>
          <v-col cols="12" sm="6" class="py-0">
            <v-select :items="['0-17', '18-29', '30-54', '54+']" label="Age*" required outlined dense></v-select>
          </v-col>
          <v-col cols="12" sm="6" class="py-0">
            <v-autocomplete outlined :items="['Skiing', 'Ice hockey', 'Soccer', 'Basketball', 'Hockey', 'Reading', 'Writing', 'Coding', 'Basejump']" label="Interests" multiple dense></v-autocomplete>
          </v-col>
        </v-row>
      </v-container>
    </v-card-text>
    <v-card-actions>
      <v-spacer></v-spacer>
      <v-btn color="blue darken-1" text @click="$emit('close-dialog')"> 取消 </v-btn>
      <v-btn color="blue darken-1" text @click="dialog = false"> 提交 </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {};
</script>

<style></style>
