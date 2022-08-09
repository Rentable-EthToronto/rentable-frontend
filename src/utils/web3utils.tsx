export const formatDisplayAddress = (address: string): string => {
  return (
    address?.slice(0, 6).concat("...").concat(address.slice(-4)) ?? "No Address"
  );
};
