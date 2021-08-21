/* Extra Memory Cost Add And Removing Function */

function extarMemoryCost(memoryPrice) {
    const extraMemoryCost = document.getElementById('extra-memory-price');
    let extraMemoryCostNumber = 0;
    if (memoryPrice == 180) {
        extraMemoryCostNumber = 180;
    } else if (memoryPrice == 0) {
        extraMemoryCostNumber = 0;
    }
    extraMemoryCost.innerText = extraMemoryCostNumber;
    extraProductsPrice();
    document.getElementById('discount-btn').disabled = false;
}

/* Extra Memory Cost Add And Removing Event Handler. */

document.getElementById('ex-memory-cost-added').addEventListener('click', function () {
    extarMemoryCost(180);
})
document.getElementById('ex-memory-cost-removed').addEventListener('click', function () {
    extarMemoryCost(0);
})


/* Extra Storage Cost Add And Removing Function */

function extarStorageCost(storagePrice) {
    const extraStorageCost = document.getElementById("extra-storage-price");
    let extraStorageCostNumber = 0;
    if (storagePrice == 180) {
        extraStorageCostNumber = 180;
    } else if (storagePrice == 100) {
        extraStorageCostNumber = 100;
    } else if (storagePrice == 0) {
        extraStorageCostNumber = 0;
    }
    extraStorageCost.innerText = extraStorageCostNumber;
    extraProductsPrice();
    document.getElementById('discount-btn').disabled = false;
}

/* Extra Storage Cost Add And Removing Event Handler. */

document.getElementById("extra-storage-cost-added-tow").addEventListener("click", function () {
    extarStorageCost(180);
});
document.getElementById("extra-storage-cost-added-one").addEventListener("click", function () {
    extarStorageCost(100);
});
document.getElementById("extra-storage-cost-none").addEventListener("click", function () {
    extarStorageCost(0);
});

/* Extra Delivery Cost Add And Removing Function */

function extardeiveryCost(deliveryPrice) {
    const extraDeliveryCost = document.getElementById('extra-delivery-price');
    let extraDeliveryCostNumber = 0;
    if (deliveryPrice == 20) {
        extraDeliveryCostNumber = 20;
    } else if (deliveryPrice == 0) {
        extraDeliveryCostNumber = 0;
    }
    extraDeliveryCost.innerText = extraDeliveryCostNumber;
    extraProductsPrice();
    document.getElementById('discount-btn').disabled = false;
}

/* Extra Memory Cost Add And Removing Event Handler. */

document.getElementById('extra-delivery-cost-added').addEventListener('click', function () {
    extardeiveryCost(20);
})
document.getElementById('extra-delivery-cost-none').addEventListener('click', function () {
    extardeiveryCost(0);
})

/* Total Cost Calculating Function */


function extraProductsPrice() {
    const totalInitialPrice = document.getElementById('total-cost');
    const basePrice = parseInt(document.getElementById('base-price').innerText);
    const memoryCost = parseInt(document.getElementById('extra-memory-price').innerText);
    const storageCost = parseInt(document.getElementById('extra-storage-price').innerText);
    const deliveryCost = parseInt(document.getElementById('extra-delivery-price').innerText);
    // total price update
    const totalPrice = basePrice + memoryCost + storageCost + deliveryCost;
    totalInitialPrice.innerText = totalPrice;
    // total discount price
    const discountTotalPrice = document.getElementById('discount-price');
    discountTotalPrice.innerText = totalPrice;
    return totalInitialPrice.innerText;
}



/* cupon button handler */
document.getElementById('discount-btn').addEventListener('click', function () {
    const cupon = document.getElementById('discount-code');
    let cuponCode = cupon.value;
    if (cuponCode == 'stevekaku') {
        const discountPrice = document.getElementById('discount-price');
        let discountPriceValue = parseInt(discountPrice.innerText);
        discountPriceValue = discountPriceValue * (4 / 5);
        discountPrice.innerText = discountPriceValue;
        cupon.value = '';
        document.getElementById('discount-btn').disabled = true;
    }
    cupon.value = '';
})
