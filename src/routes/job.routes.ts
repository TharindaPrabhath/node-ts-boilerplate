import express from "express";

// controllers
import {
  handleUpdateCertificateState,
  handleCreateReport,
  handleSendEmail,
} from "../controllers/job.controller";

const router = express.Router();

router.post("/update-certificate-state", handleUpdateCertificateState);

router.post("/create-report", handleCreateReport);

router.post("/send-email", handleSendEmail);

module.exports = router;
