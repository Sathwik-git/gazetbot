const express = require("express");
const router = express.Router();

router.use(require("./categoriesRoute"));
router.use(require("./dealsRoute"));
router.use(require("./quicksearchRoute"));
router.use(require("./topproductRoute"));
router.use(require("./productsbycategoryRoutes"));
// ... other route imports ...

module.exports = router;
