export const formatCurrency = (value) => {
  const scaledAmount = value;
  const formattedAmount = scaledAmount.toLocaleString('vi-VN', {
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  });
  return formattedAmount.replace(/\./g, '.');
};
