<template>
  <div>
    <h1>My User Table</h1>

    <table id="myTable">
      <tr>
        <th>ID</th>
        <th>Name</th>
        <th>Email</th>
        <th>City</th>
        <th>Country</th>
        <th>Address</th>
        <th>Contact</th>
      </tr>
      <tr v-for="user in users" :key="user.id" @click="showFormPopup(user)">
        <td>{{ user.id }}</td>
        <td>{{ user.name }}</td>
        <td>{{ user.email }}</td>
        <td>{{ user.city }}</td>
        <td>{{ user.country }}</td>
        <td>{{ user.address }}</td>
        <td>{{ user.contact }}</td>
      </tr>
    </table>

    <div v-if="showPopup" id="formPopup" class="showPopup">
      <form @submit="handleSubmit">
        <h2>Form Popup</h2>
        <label for="name">Name:</label>
        <input type="text" id="name" name="name" v-model="formData.name">
        <br>
        <label for="email">Email:</label>
        <input type="email" id="email" name="email" v-model="formData.email">
        <br>
        <label for="city">City:</label>
        <input type="text" id="city" name="city" v-model="formData.city">
        <br>
        <label for="country">Country:</label>
        <input type="text" id="country" name="country" v-model="formData.country">
        <br>
        <label for="address">Address:</label>
        <input type="text" id="address" name="address" v-model="formData.address">
        <br>
        <label for="contact">Contact:</label>
        <input type="tel" id="contact" name="contact" v-model="formData.contact">
        <br>
        <button type="submit">Submit</button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      users: [
        { id: 1, name: 'John Doe', email: 'johndoe@example.com', city: 'New York', country: 'USA', address: 'street 123', contact: '123344' },
        { id: 2, name: 'Jane Smith', email: 'janesmith@example.com', city: 'Sydney', country: 'Australia', address: 'Alfred Street.', contact: '###' },
        { id: 3, name: 'Ali', email: 'ali@example.com', city: 'Islamabad', country: 'Pakistan', address: 'street 123', contact: '03xxxx' }
        // Add more users as per  needed
      ],
      showPopup: false,
      formData: {
        id: null,
        name: '',
        email: ''
      }
    };
  },
  methods: {
    showFormPopup(user) {
      this.formData = {
        id: user.id,
        name: user.name,
        email: user.email,
        city: user.city,
        country: user.country,
        address: user.address,
        contact: user.contact
      };
      this.showPopup = true;
    },
    handleSubmit(event) {
      event.preventDefault();

      console.log('Form Submission:');
      console.log('ID:', this.formData.id);
      console.log('Name:', this.formData.name);
      console.log('Email:', this.formData.email);
      console.log('City:', this.formData.city);
      console.log('Country:', this.formData.country);
      console.log('Address:', this.formData.address);
      console.log('Contact:', this.formData.contact);
      // Optionally, you can reset the form inputs
      this.formData = {
        id: null,
        name: '',
        email: '',
        city: '',
        country: '',
        address: '',
        contact: ''
      };

      // Close the form popup
      this.showPopup = false;
    }
  }
};
</script>

<style scoped>
#myTable {
  width: 100%;
  border-collapse: collapse;
}

#myTable th,
#myTable td {
  padding: 8px;
  border: 1px solid #ddd;
}

#myTable th {
  background-color: #f2f2f2;
}

#formPopup {
  display: none;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #fff;
  padding: 20px;
  border: 1px solid #ccc;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

.showPopup {
  display: block !important;
}

#formPopup h2 {
  margin-top: 0;
}

#formPopup label {
  display: block;
  margin-bottom: 8px;
}

#formPopup input[type="text"],
#formPopup input[type="email"] {
  width: 100%;
  padding: 8px;
  margin-bottom: 12px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

#formPopup button[type="submit"] {
  padding: 8px 16px;
  background-color: #4caf50;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

#formPopup button[type="submit"]:hover {
  background-color: #45a049;
}
</style>
