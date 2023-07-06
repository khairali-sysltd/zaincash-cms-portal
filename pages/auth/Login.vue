<script setup>
import { useLayout } from '@/layouts/composables/layout';
import { ref, computed } from 'vue';
import { useRouter } from 'vue-router';
import AppConfig from '@/layouts/AppConfig.vue';

const router = useRouter();
const { layoutConfig } = useLayout();
const email = ref('test@gmail.com');
const password = ref('');
const checked = ref(false);

const logoUrl = computed(() => {
    return `/layout/images/${layoutConfig.darkTheme.value ? 'logo-white' : 'logo-dark'}.svg`;
});

definePageMeta({
    layout: false
});

const data = {
    "MTI": "4051",
    "applicationInfo": {
        "appVersion": "1.0.1",
        "applicationLanguage": "en"
    },
    "deviceInfo": {
        "deviceID": "8fa3d2d0a86817c8",
        "operatingSystem": "ANDROID"
    },
    "macIn": "d0fu/DpRgOL+NUOLXDuNqfEIKaM+upw7UYDeEZDDeu3b8sc0EJzvLzaN1soc+aQLP1RFqu2YvUNaZMNoyNypaW42vDxuspDdYjReG3XY9JbgJfTvs5W3IedT6wEsuAPWpWqa/2hMhtRqd6gvN1/U5B/zvhVt0YwkuOr+mcQ/qA54gNRwotWD0KVUm8JI/rcokXE9PDacoYDqaf/mKvvilnuz0XLb8AyxM2qaV687i8TkgoHijrp6gxhaIFZBrJ0CeR8EY9/nxsiwK4tC5Q/LdkUfHCQ7Yyscv453ngTT5Z7CCFbGmUFXPWoTQOuvZBdIPiHsMTMfEioEuRMuklYowA==",
    "requestBody": "eyJlbWFpbCI6ImFkbWluQGdtYWlsLmNvbSIsInBhc3N3b3JkIjoiMTIzNDUifQ==",
    "requestID": "dfce0ee6-a1a2-4e60-a970-81306a847ce9",
    "requestTime": "202305021952124",
    "senderChannel": "MOBILEAPP",
    "sessionId": 0
};


const onLogin = (event)=>{
    router.push('/dashboard');
// const { onFetchResponse, onFetchError  } =  useFetch('http://localhost:8084/api/auth/login',{
//     method:'POST',
//     body:JSON.stringify(data)
// });
// onFetchResponse((response) => {
//   console.log(response.status)
// })

    // console.log(response);
}

</script>

<template>
    <div class="surface-ground flex align-items-center justify-content-center min-h-screen min-w-screen overflow-hidden">
        <div class="flex flex-column align-items-center justify-content-center">
            <img :src="logoUrl" alt="Sakai logo" class="mb-5 w-6rem flex-shrink-0" />
            <div style="border-radius: 56px; padding: 0.3rem; background: linear-gradient(180deg, var(--primary-color) 10%, rgba(33, 150, 243, 0) 30%)">
                <div class="w-full surface-card py-8 px-5 sm:px-8" style="border-radius: 53px">
                    <div class="text-center mb-5">
                        <img src="/demo/images/login/avatar.png" alt="Image" height="50" class="mb-3" />
                        <div class="text-900 text-3xl font-medium mb-3">Zaincash!</div>
                        <span class="text-600 font-medium">Sign in to continue</span>
                        Page visits: 
                    </div>

                    <div>
                        <label for="email1" class="block text-900 text-xl font-medium mb-2">Email</label>
                        <InputText id="email1" v-model="email" type="text" placeholder="Email address" class="w-full md:w-30rem mb-5" style="padding: 1rem" />

                        <label for="password1" class="block text-900 font-medium text-xl mb-2">Password</label>
                        <Password id="password1" v-model="password" placeholder="Password" :toggleMask="true" class="w-full mb-3" inputClass="w-full" :inputStyle="{ padding: '1rem' }"></Password>

                        <div class="flex align-items-center justify-content-between mb-5 gap-5">
                            <div class="flex align-items-center">
                                <Checkbox id="rememberme1" v-model="checked" binary class="mr-2"></Checkbox>
                                <label for="rememberme1">Remember me</label>
                            </div>
                            <a class="font-medium no-underline ml-2 text-right cursor-pointer" style="color: var(--primary-color)">Forgot password?</a>
                        </div>
                        <Button label="Sign In" class="w-full p-3 text-xl" @click="onLogin($event)" ></Button>
                    </div>
                </div>
            </div>
        </div>
    </div>

</template>

<style scoped>
.pi-eye {
    transform: scale(1.6);
    margin-right: 1rem;
}
.pi-eye-slash {
    transform: scale(1.6);
    margin-right: 1rem;
}
</style>
