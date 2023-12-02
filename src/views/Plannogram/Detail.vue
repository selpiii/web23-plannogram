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
                    <h1 class="m0">Detail Plannogram</h1>
                    <p class="mt5 mb20 tc-green">Your Plannogram details</p>
                </div>
            </div>

            <hr class="uline-grey">
            <div class = "mt20">
                <div class = "image-container">
                    <img style="width: 400px;
                    height: 400px;
                    margin-top: 20px;" 
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmXHW-9smQe-khc4htFYAllat5ESGs9WFgB2nucR4n-XaqaXA0ztr5z7CHkFZmAGZc_h8&usqp=CAU" 
                    alt="">
                </div>
                <div class=" text-container">
                    <div class="mt50">
                        <p class="text-container" style="font-size: 15px; color: grey;">Plannogram Name</p>
                        <h2 class="text-container" style="font-size: 35px; margin-top: 5px;">Flash Sale Minggu Ini</h2>
                    </div>
                    <div class="mt10">
                        <p class="detail-title-bold" style="font-size: 15px; margin-top: 25px;">Broadcast Schedule: <span style="font-size: 15px; color: lightgray;">Rabu</span></p>
                    </div>
                    <div class="section-container">
                        <div class="mt10">
                            <p class="detail-title-bold" style="font-size: 15px; margin-right: 100px;">Plannogram Status</p>
                            <hr class="uline-black plannogram-underline">
                            <div style="margin-top: 20px;">
                                <label class="label-green">Active</label>
                            </div>                     
                        </div>
                        <div class="mt10">
                            <p class="detail-title-bold" style="font-size: 15px; margin-right: 150px;">Valid From</p>
                            <hr class="uline-black valid-from-underline">
                            <div style="margin-top: 20px;">
                                <label class="label-green">01-06-2021</label>
                            </div>                       
                        </div>
                        <div class="mt10">
                            <p class="detail-title-bold" style="font-size: 15px;">Valid Until</p>
                            <hr class="uline-black valid-until-underline">
                            <div style="margin-top: 20px;">
                                <label class="label-green">03-06-2021</label>
                            </div>                       
                        </div>
                    </div>
                    <div class="mt10">
                        <div style="overflow: hidden;">
                            <div class="content">
                                <img 
                                width="15" 
                                src="../../assets/icons/orang.svg" style="float: left; margin-right: 5px; margin-top: 30px;" />
                                <div class="text">
                                    <p class="text-container" style="font-size: 15px; float: left; margin-top: 30px; color: lightgray;">Update by Admin 1</p>                                </div>
                            </div>
                        </div>
                                <img 
                                width="15" 
                                src="../../assets/icons/orang.svg" style="float: left; margin-right: 5px; margin-top: 10px;" />
                                <div class="text">
                                    <p class="text-container" style="font-size: 15px; margin-top: 15px; color: lightgray;">Update by Admin 2</p>
                                </div>
                    </div>
                    <div class="mt10">
                            <p class="detail-title-bold" style="font-size: 17px; margin-top: 30px; margin-right: 150px;">List Product</p>
                            <ul>
                            <li style="font-size: 15px; color: lightgray;">Samsung S22 Tra</li>
                            <li style="font-size: 15px; margin-top: 10px; color: lightgray;">Iphone 15 Pro</li>
                            </ul>                      
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
	name: 'detail-plannogram'
}
</script>