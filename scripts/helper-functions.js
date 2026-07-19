function roundNumber(value, digits) {
  let roundedNumber = value.toLocaleString("de-DE", {
    maximumFractionDigits: digits,
  });
  return roundedNumber;
}

function formatPrice(value) {
    let formattedPrice = value.toLocaleString("de-DE", {
        style: "currency",
        currency: "EUR"
    });
    formattedPrice = formattedPrice.replace(/\s/, "");

    return formattedPrice;
}
