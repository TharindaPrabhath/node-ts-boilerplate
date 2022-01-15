import express from "express";

// controllers
import { handleCertificateEmail } from "../controllers/webhook.controller";

const router = express.Router();

router.post("/certificate-email", handleCertificateEmail);

module.exports = router;
