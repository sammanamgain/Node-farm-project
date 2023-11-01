module.exports = (obj, template) => {
    let output = template.replace(/{%product_title%}/g, obj.productName);
    output = output.replace(/{%product_image%}/g, obj.image);
    output = output.replace(/{%product_place%}/g, obj.from);
    output = output.replace(/{%NUTRIENTS%}/g, obj.nutrients);
    output = output.replace(/{%product_quantity%}/g, obj.quantity);
    output = output.replace(/{%product_price%}/g, obj.price);
    output = output.replace(/{%product_description%}/g, obj.description);
    output = output.replace(/{%ID%}/g, obj.id);
    if (!obj.organic) {
        output = output.replace(/{%product_organic%}/g, "not-organic");
    }
    return output;
}

