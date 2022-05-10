const express = require("express");

const {
  uploadFileView,
  uploadFile,
} = require("../controllers/FileController");
const { dashboardView } = require("../controllers/dashboardController");
const { protectRoute } = require("../auth/protect");

const router = express.Router();

router.get("/uploadFile", uploadFileView);
router.post('/uploadFile', uploadFile);

module.exports = router;
