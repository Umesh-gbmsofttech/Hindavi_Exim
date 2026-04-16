import React, { useState } from "react";
import {
  Grid,
  Box,
  Typography,
  TextField,
  Button,
  Paper,
  Stack,
  Container,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  IconButton,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import logo from "../../assets/Hindavi.png";

const ContactFormSection = () => {
  const [open, setOpen] = useState(false);
  const [form, setForm] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const validate = () => {
    const temp = {};
    let valid = true;

    if (!form.name.trim()) {
      temp.name = "Name is required";
      valid = false;
    }

    if (!form.email.trim()) {
      temp.email = "Email is required";
      valid = false;
    } else if (!/\S+@\S+\.\S+/.test(form.email)) {
      temp.email = "Invalid email format";
      valid = false;
    }

    if (!form.phone.trim()) {
      temp.phone = "Phone is required";
      valid = false;
    } else if (!/^\d{10}$/.test(form.phone)) {
      temp.phone = "Phone must be 10 digits";
      valid = false;
    }

    if (!form.subject.trim()) {
      temp.subject = "Subject is required";
      valid = false;
    }

    if (!form.message.trim()) {
      temp.message = "Message is required";
      valid = false;
    }

    setErrors(temp);
    return valid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validate()) {
      setOpen(true);
      setForm({
        name: "",
        company: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      });
      setErrors({});
    }
  };

  return (
    <Box sx={{ py: 12 }}>
      <Container maxWidth="lg">
        <Grid container spacing={{ xs: 4, md: 8 }} alignItems="stretch">
          <Grid size={{ xs: 12, md: 6 }} sx={{ display: "flex" }}>
            <Paper
              elevation={0}
              sx={{
                p: 4,
                borderRadius: 5,
                width: "100%",
                height: "100%",
                border: "1px solid rgba(93,51,29,0.08)",
                boxShadow: "0 18px 42px rgba(47,23,13,0.06)",
              }}
            >
              <Typography variant="h5" sx={{ fontWeight: "bold", mb: 4, color: "primary.main" }}>
                Contact Information
              </Typography>

              <Stack spacing={4}>
                <Box>
                  <Typography fontWeight="bold">Business Coordination</Typography>
                  <Typography variant="body2" color="text.secondary">
                    Hindavi Exim works with buyers and partners through responsive,
                    export-focused communication.
                  </Typography>
                </Box>

                <Box>
                  <Typography fontWeight="bold">Email Us</Typography>
                  <Typography variant="body2" color="text.secondary">
                    info@hindavi.in
                  </Typography>
                </Box>

                <Box>
                  <Typography fontWeight="bold">Website</Typography>
                  <Typography variant="body2" color="text.secondary">
                    https://hindavi.in/
                  </Typography>
                </Box>
              </Stack>
            </Paper>
          </Grid>

          <Grid size={{ xs: 12, md: 6 }} sx={{ display: "flex" }}>
            <Paper
              elevation={0}
              sx={{
                p: 4,
                borderRadius: 5,
                width: "100%",
                border: "1px solid rgba(93,51,29,0.08)",
                boxShadow: "0 18px 42px rgba(47,23,13,0.06)",
              }}
            >
              <Typography variant="h4" sx={{ fontWeight: "bold", mb: 3, color: "primary.main" }}>
                Send a Message
              </Typography>

              <Box component="form" onSubmit={handleSubmit}>
                <Stack spacing={2.5}>
                  <Stack direction={{ xs: "column", md: "row" }} spacing={2}>
                    <TextField
                      size="small"
                      fullWidth
                      label="Your Name"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      error={!!errors.name}
                      helperText={errors.name}
                    />

                    <TextField
                      size="small"
                      fullWidth
                      label="Company Name"
                      name="company"
                      value={form.company}
                      onChange={handleChange}
                    />
                  </Stack>

                  <Stack direction={{ xs: "column", md: "row" }} spacing={2}>
                    <TextField
                      size="small"
                      fullWidth
                      label="Email Address"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      error={!!errors.email}
                      helperText={errors.email}
                    />

                    <TextField
                      size="small"
                      fullWidth
                      label="Phone Number"
                      name="phone"
                      value={form.phone}
                      onChange={handleChange}
                      error={!!errors.phone}
                      helperText={errors.phone}
                    />
                  </Stack>

                  <TextField
                    size="small"
                    fullWidth
                    label="Subject"
                    name="subject"
                    value={form.subject}
                    onChange={handleChange}
                    error={!!errors.subject}
                    helperText={errors.subject}
                  />

                  <TextField
                    size="small"
                    fullWidth
                    label="Message"
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    multiline
                    rows={4}
                    error={!!errors.message}
                    helperText={errors.message}
                  />

                  <Button type="submit" variant="contained" color="secondary" sx={{ alignSelf: "flex-start" }}>
                    Submit Inquiry
                  </Button>
                </Stack>
              </Box>
            </Paper>
          </Grid>
        </Grid>
      </Container>

      <Dialog
        open={open}
        onClose={() => setOpen(false)}
        PaperProps={{
          sx: {
            borderRadius: 4,
            p: 4,
            textAlign: "center",
            minWidth: 360,
            background: "linear-gradient(135deg, #ffffff, #f7f1eb)",
          },
        }}
      >
        <Box sx={{ position: "absolute", right: 10, top: 10 }}>
          <IconButton onClick={() => setOpen(false)}>
            <CloseIcon />
          </IconButton>
        </Box>

        <DialogContent>
          <Box component="img" src={logo} alt="Hindavi Exim" sx={{ width: 110, mb: 2, mx: "auto" }} />
          <DialogTitle sx={{ fontWeight: "bold", fontSize: "1.6rem" }}>
            Thank You
          </DialogTitle>

          <Typography variant="body1" color="text.secondary" sx={{ mt: 1 }}>
            Your message has been submitted successfully. Our team will review it
            and get back to you shortly.
          </Typography>
        </DialogContent>

        <DialogActions sx={{ justifyContent: "center", mt: 2 }}>
          <Button variant="contained" color="secondary" onClick={() => setOpen(false)}>
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default ContactFormSection;
