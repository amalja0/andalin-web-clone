<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <div>
        <label>Country</label>
        <select v-model="country">
            <option v-for="country in countries" :key="country.countryCode">
                {{ country.countryName }}
            </option>
        </select>
    </div>
    <div>
        <label>City</label>
        <select>
            <option v-for="city in cities" :key="city.cityName">
                {{ cityChoices }}
            </option>
        </select>
    </div>
    <div>
        {{ country }}
    </div>
</template>
<script>
export default {
    data() {
        return {
            country: [],
            countries: [
                {
                    "countryName": "Malaysia",
                    "countryCode": "MYS"
                },
                {
                    "countryName": "Singapore",
                    "countryCode": "SIN"
                },
                {
                    "countryName": "Indonesia",
                    "countryCode": "IDN"
                },
                {
                    "countryName": "India",
                    "countryCode": "NDI"
                }
            ],
            cities: [
                {
                    "cityName": "Kuala Lumpur",
                    "cityCode": "KLU",
                    "countryCode": "MYS"
                },
                {
                    "cityName": "Jaipur",
                    "cityCode": "JIP",
                    "countryCode": "NDI"
                },
                {
                    "cityName": "Jakarta",
                    "cityCode": "JKT",
                    "countryCode": "IDN"
                },
                {
                    "cityName": "Penang",
                    "cityCode": "PEN",
                    "countryCode": "MYS"
                },
                {
                    "cityName": "Bandung",
                    "cityCode": "BDO",
                    "countryCode": "IDN"
                }
            ]
        }
    },
    computed: {
        cityChoices() {
            for (let country in this.countries) {
                if(country == this.country) {
                    console.log(country)
                }
            }
            return ['a', 'b']
        }
    }
}
</script>