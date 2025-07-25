"use client";

import { toast } from "sonner";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  TextField,
  MenuItem,
  InputLabel,
  FormControl,
  Select,
  SelectChangeEvent,
  Box,
} from "@mui/material";
import { useState } from "react";

interface Props {
  open: boolean;
  handleClose: () => void;
}

export default function OrderFormModal({ open, handleClose }: Props) {
  const cakeTypes = [
    "Chocolate Cake",
    "Vanilla Wedding Cake",
    "Red Velvet Cake",
    "Strawberry Cake",
    "Rainbow Cake",
    "Chocolate Truffle",
    "Custom Cake",
  ];

  const sizes = [
    "Small (6 inch)",
    "Medium (8 inch)",
    "Large (10 inch)",
    "Extra Large (12 inch)",
  ];

  const amberOutline = {
    "& .MuiOutlinedInput-root": {
      "&.Mui-focused fieldset": {
        borderColor: "#d97706", // amber-600
      },
    },
    "& .MuiInputLabel-root.Mui-focused": {
      color: "#d97706",
    },
  };

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    cakeType: "",
    size: "",
    message: "",
    deliveryDate: "",
    address: "",
  });

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Validate form
    if (
      !formData.name ||
      !formData.email ||
      !formData.phone ||
      !formData.cakeType ||
      !formData.size
    ) {
      toast.error("Please fill in all required fields");
      return;
    }

    
    setTimeout(() => {
      toast.success("Order Placed Successfully!");
      // Reset form
      setFormData({
        name: "",
        email: "",
        phone: "",
        cakeType: "",
        size: "",
        message: "",
        deliveryDate: "",
        address: "",
      });

      console.log('success:', formData);
    }, 1000);
  };

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      scroll="paper"
      maxWidth="sm"
      fullWidth
      BackdropProps={{ style: { backgroundColor: "rgba(0, 0, 0, 0.7)" } }}
      aria-labelledby="place-order-title"
    >
      <DialogTitle
        id="place-order-title"
        className=" text-amber-600 font-bold text-xl"
      >
        Place Your Order
      </DialogTitle>

      <DialogContent dividers>
        <Box
        id="order-form"
          onSubmit={handleSubmit}
          component="form"
          className="mx-auto w-full max-w-2xl grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {/* --- PERSONAL INFORMATION --- */}
          <Box className="col-span-full">
            <h3 className="text-lg font-semibold text-gray-800 border-b border-gray-200 pb-1 mb-2">
              Personal Information
            </h3>
          </Box>

          <TextField
            label="Full Name"
            value={formData.name}
            onChange={(e) => handleChange("name", e.target.value)}
            fullWidth
            required
            size="small"
            variant="outlined"
            sx={amberOutline}
          />
          <TextField
            label="Email"
            type="email"
            value={formData.email}
            onChange={(e) => handleChange("email", e.target.value)}
            fullWidth
            size="small"
            required
            variant="outlined"
            sx={amberOutline}
          />
          <TextField
            label="Phone Number"
            size="small"
            type="tel"
            value={formData.phone}
            onChange={(e) => handleChange("phone", e.target.value)}
            fullWidth
            required
            variant="outlined"
            sx={amberOutline}
          />

          {/* --- ORDER DETAILS --- */}
          <Box className="col-span-full pt-4">
            <h3 className="text-lg font-semibold text-gray-800 border-b border-gray-200 pb-1 mb-2">
              Order Details
            </h3>
          </Box>

          <FormControl size="small" fullWidth sx={amberOutline}>
            <InputLabel>Cake Type</InputLabel>
            <Select
              value={formData.cakeType}
              onChange={(e: SelectChangeEvent) =>
                handleChange("cakeType", e.target.value)
              }
            >
              {cakeTypes.map((type) => (
                <MenuItem key={type} value={type}>
                  {type}
                </MenuItem>
              ))}
            </Select>
          </FormControl>

          <FormControl size="small" fullWidth sx={amberOutline}>
            <InputLabel>Cake Size</InputLabel>
            <Select
              value={formData.size}
              onChange={(e: SelectChangeEvent) =>
                handleChange("size", e.target.value)
              }
            >
              {sizes.map((size) => (
                <MenuItem key={size} value={size}>
                  {size}
                </MenuItem>
              ))}
            </Select>
          </FormControl>

          <TextField
            label="Delivery Date"
            type="date"
            size="small"
            fullWidth
            required
            variant="outlined"
            value={formData.deliveryDate}
            onChange={(e) => handleChange("deliveryDate", e.target.value)}
            inputProps={{ min: new Date().toISOString().split("T")[0] }}
            sx={amberOutline}
          />

          <TextField
            label="Special Instructions"
            multiline
            rows={3}
            size="small"
            fullWidth
            variant="outlined"
            className="col-span-full"
            sx={amberOutline}
            value={formData.message}
            onChange={(e) => handleChange("message", e.target.value)}
          />

          {/* --- DELIVERY INFO --- */}
          <Box className="col-span-full pt-4">
            <h3 className="text-lg font-semibold text-gray-800 border-b border-gray-200 pb-1 mb-2">
              Delivery Information
            </h3>
          </Box>

          <TextField
            label="Enter your complete delivery address"
            multiline
            rows={2}
            size="small"
            fullWidth
            variant="outlined"
            className="col-span-full"
            sx={amberOutline}
            value={formData.address}
            onChange={(e) => handleChange("address", e.target.value)}
          />


        </Box>
     <DialogActions
  sx={{
    display: "flex",
    px: 2,
    py: 2,
  }}
>
  <Button onClick={handleClose} color="error" variant="outlined" className="flex-1">
    Cancel
  </Button>
  
  {/* Spacer to push Submit button to the right */}
  
  <Button
  className="flex-1"
    type="submit"
    form="order-form"
    sx={{
      backgroundColor: "#d97706",
      color: "#fff",
      "&:hover": { backgroundColor: "#b45309" },
    }}
  >
    Submit
  </Button>
</DialogActions>
      </DialogContent>
    </Dialog>
  );
}
