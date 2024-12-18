// @mui
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid2";
// types
import { IProductCheckoutState } from "src/types/product";
// _mock
import { _addressBooks } from "src/_mock";
// hooks
import { useBoolean } from "src/hooks/use-boolean";
// types
import { IAddressItem } from "src/types/address";
// components
import Iconify from "src/components/iconify";
//
import { AddressNewForm, AddressItem } from "../../address";
import CheckoutSummary from "./checkout-summary";

// ----------------------------------------------------------------------

type Props = {
  checkout: IProductCheckoutState;
  onBackStep: VoidFunction;
  onCreateBilling: (address: IAddressItem) => void;
};

export default function CheckoutBillingAddress({
  checkout,
  onBackStep,
  onCreateBilling,
}: Props) {
  const addressForm = useBoolean();

  return (
    <>
      <Grid container spacing={3}>
        <Grid size={{ xs: 12, md: 8 }}>
          {_addressBooks.slice(0, 4).map((address) => (
            <AddressItem
              key={address.id}
              address={address}
              action={
                <Stack flexDirection="row" flexWrap="wrap" flexShrink={0}>
                  {!address.primary && (
                    <Button size="small" color="error" sx={{ mr: 1 }}>
                      Delete
                    </Button>
                  )}
                  <Button
                    variant="outlined"
                    size="small"
                    onClick={() => onCreateBilling(address)}
                  >
                    Deliver to this Address
                  </Button>
                </Stack>
              }
              sx={{
                p: 3,
                mb: 3,
                borderRadius: 2,
                boxShadow: (theme) => theme.customShadows.card,
              }}
            />
          ))}

          <Stack direction="row" justifyContent="space-between">
            <Button
              size="small"
              color="inherit"
              onClick={onBackStep}
              startIcon={<Iconify icon="eva:arrow-ios-back-fill" />}
            >
              Back
            </Button>

            <Button
              size="small"
              color="primary"
              onClick={addressForm.onTrue}
              startIcon={<Iconify icon="mingcute:add-line" />}
            >
              New Address
            </Button>
          </Stack>
        </Grid>

        <Grid size={{ xs: 12, md: 4 }}>
          <CheckoutSummary
            total={checkout.total}
            subTotal={checkout.subTotal}
            discount={checkout.discount}
          />
        </Grid>
      </Grid>

      <AddressNewForm
        open={addressForm.value}
        onClose={addressForm.onFalse}
        onCreate={onCreateBilling}
      />
    </>
  );
}
