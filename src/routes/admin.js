const express = require("express");
const router = express.Router();
const adminController = express.Controllerrequire(
  "../controllers/admin/adminControllerController"
);

router.get(
  "/admin/produtosCadastrar",
  (adminController = express.Controller.index)
);

module.exports = router;
