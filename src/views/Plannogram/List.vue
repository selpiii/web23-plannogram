<template>
    <div>
        <Menu/>
        <div class="container">
            <h1 class="m0">Plannogram</h1>
            <div class="row">
                <div class="col">
                    <p class="mt5 mb20 tc-green">Manage your plannogram</p>
                </div>
                <div class="col flex">
                    <router-link to="/Create-Plannogram">
                        <button class="bt-green">+ Add</button>
                    </router-link>
                </div>
            </div>
            <div class="row bg-blue mt10 p10">
                <div class="col">
                    <input
                        class="search-field"
                        type="text"
                        id="deskripsi"
                        placeholder="Tambah deskripsi..."
                    />
                </div>
                <div class="col flex">
                    <button class="bt-blue">Filter</button>
                </div>
            </div>
            <div class="mt50">
                <table>
                    <thead>
                        <tr>
                            <th>PLANNOGRAM NAME</th>
                            <th>BACKGROUND IMAGE</th>
                            <th>BROADCAST SCHEDULE</th>
                            <th>VALID FROM</th>
                            <th>VALID UTIL</th>
                            <th>PLANNOGRAM STATUS</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="item of list_plannogram" :key="item.id">
                            <td class="center">{{ item.plannogram_name }}</td>
                            <td class="center"><img :src = "item.background_image" width="100" alt="" ></td>
                            <td class="center">{{ item.broadcast_schedule }}</td>
                            <td class="center"><label class = "label-green">{{ item.valid_from }}</label></td>
                            <td class="center"><label class = "label-green">{{ item.valid_util }}</label></td>
                            <td class="center">
                                <div v-if="item.plannogram_status === 1">
                                    <label class="label-green">Active</label>
                                </div>
                                <div v-else>
                                    <label class="label-red">Inactive</label>
                                </div>  
                            </td>
                            <td class="center">
                                <div class="mt5">
                                    <router-link to="/update-Plannogram">
                                        <img src="../../assets/icons/edit.svg">
                                    </router-link>
                                </div>
                                <div class="mt5">
                                    <router-link to="/detail-Plannogram">
                                        <img src="../../assets/icons/detail.svg">
                                    </router-link>
                                </div>
                                <div class="mt5">
                                    <img src="../../assets/icons/delete.svg">
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</template>

<script>
import Menu from "../../components/menu.vue"

export default {
	name: 'list-plannogram',
	components: {
		Menu
	},
    data(){
        return {
            list_plannogram: [
                {
                    id: "1",
                    plannogram_name: "Flash Sale Minggu Ini",
                    background_image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmXHW-9smQe-khc4htFYAllat5ESGs9WFgB2nucR4n-XaqaXA0ztr5z7CHkFZmAGZc_h8&usqp=CAU",
                    broadcast_schedule: "Senin",
                    valid_from: "01-06-2021",
                    valid_util: "03-06-2021",
                    plannogram_status: 1
                },
                {
                    id: "2",
                    plannogram_name: "Product Terbaru",
                    background_image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTiwEfCZIxkvbrnBYe7d78jsSm9UYHf5-Y0ERZjXsxNIQ4MMj6V-6vWZCktJKBJg2vrf3g&usqp=CAU",
                    broadcast_schedule: "Rabu",
                    valid_from: "04-06-2021",
                    valid_util: "04-06-2021",
                    plannogram_status: 1
                },
                {
                    id: "3",
                    plannogram_name: "Sale Summer Special",
                    background_image: "https://image.freepik.com/free-vector/summer-sale-banner-template-up-50-off-special-offer_22359-169.jpg",
                    broadcast_schedule: "Jumat",
                    valid_from: "17-12-2021",
                    valid_util: "20-12-2021",
                    plannogram_status: 3
                }
            ]
        }
    }
}
</script>