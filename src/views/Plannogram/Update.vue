<template>
    <div>
        <div class="container">
            <div class="row">
                <div class="mr40 mt20">
                    <router-link to="/list-plannogram">
                        <img src="../../assets/icons/back.svg">
                    </router-link>
                </div>
                <div>
                    <h1 class="m0">Update Plannogram</h1>
                    <p class="mt5 mb20 tc-green">increase the visibility of promotional products in our store highlights</p>
                </div>
            </div>
            <hr class="uline-grey">
            <div class="mt50 row">
                <div class="w20">
                    <label class="form-label">Background Image</label>
                </div>
                <div class="w80">
                    <input
                        class="hidden"
                        type="file"
                        id="upload-file"/>
                    <img 
                    class="cursor-pointer" 
                    src="../../assets/images/tambahkanfoto.jpeg" 
                    alt=""
                    style="width: 100px; height: auto;"
                    @click="upload_file()"
                    >
                </div>
            </div>
            <div class="mt30 row">
                <div class="w20">
                    <label class="form-label">Plannogram Name</label>
                </div>
                <div class="w80 relative">
                    <input
                        class="form-text"
                        type="text"
                        minlength="5"
                        maxlength="20"
                        placeholder="Masukkan Plannogram Name"  
                    >
                    <span class = "addon-right">| 5 / 20</span>
                </div>
            </div>
            <div class="mt30 row">
                <div class="w20">
                    <label class="form-label">Broadcast Schedule</label>
                </div>
                <div class="w80 relative">
                    <select class="form-select">
                        <option disabled selected>Pilih Hari</option>
                        <option value="1">Senin</option>
                        <option value="2">Selasa</option>
                        <option value="3">Rabu</option>
                        <option value="4">Kamis</option>
                        <option value="5">Jum'at</option>
                        <option value="6">Sabtu</option>
                        <option value="7">Minggu</option>
                    </select>
                    <img
                        width="15"
                        class="addon-right"
                        src="../../assets/icons/pen.svg"
                    />
                </div>
            </div>
            <div class="mt30 row">
                <div class="w20">
                    <label class="form-label">Valid From</label>
                </div>
                <div class="w80">
                    <input
                        class="form-text"
                        type="text"
                        placeholder="Masukkan Tanggal"
                        onfocus="this.type='date'"
                        onblur="this.type='text'"
                    >
                </div>
            </div>
            <div class="mt30 row">
                <div class="w20">
                    <label class="form-label">Valid Until</label>
                </div>
                <div class="w80">
                    <input
                    class="form-text"
                        type="text"
                        placeholder="Masukkan Tanggal"
                        onfocus="this.type='date'"
                        onblur="this.type='text'"
                    >
                </div>
            </div>
            <div class="mt30 row">
                <div class="w20">
                    <label class="form-label">Roles</label>
                </div>
                <div class="w80 relative">
                    <select class="form-select">
                        <option disabled selected>Pilih Product</option>
                        <option value="1">Flash Sale Minggu Ini</option>
                        <option value="2">Product Terbaru</option>
                        <option value="3">Sale Summer Special</option>
                        <option value="4">Kamis</option>
                        <option value="5">Jum'at</option>
                        <option value="6">Sabtu</option>
                        <option value="7">Minggu</option>
                    </select>
                    <img
                        width="15"
                        class="addon-right"
                        src="../../assets/icons/pen.svg"
                        
                    />
                </div>
            </div>
            <div class="flex mt30">
                <router-link to="/list-plannogram">
                    <button class="bt-submit-green">Update User</button>
                </router-link>
            </div>
        </div>
    </div>
</template>

<script>
export default {
	name: 'detail-plannogram',
    methods: {
    upload_file() {
      const input_file = document.querySelector("#upload-file");
      input_file.click();
    },
    // handleFileChange(event) {
    //   const fileInput = event.target;
    //   if (fileInput.files && fileInput.files[0]) {
    //     const reader = new FileReader();
    //     reader.onload = (e) => {
    //       this.imageUrl = e.target.result; // Set the preview image URL
    //     };
    //     reader.readAsDataURL(fileInput.files[0]);
    //   }
    // },
    
    // handle_article_name(event) {
    //   if (event.target.value.length > 20) {
    //     event.preventDefault();
    //   }
    // },
  },
};
</script>