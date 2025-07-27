const express = require("express");
const { createProduct, updateProduct, deleteProduct, getAllProducts, getProductsByCategory, getProductById, createCategory, getAllCategories } = require("../controller/product.controller");
// const { isAdmin } = require("../middleware");
const{isAdmin, isloggedIn}= require("../middleware");
const router = express.Router();

// router.post("/create", isAdmin, createProduct);
// router.post("/update/:id", isAdmin, updateProducts);
// router.post("/delete/:id", isAdmin, deleteProducts);
router.post("/create", isloggedIn,isAdmin, createProduct);
router.post("/update/:id",isloggedIn, isAdmin, updateProduct);
router.post("/category/create",isloggedIn,isAdmin,createCategory)
router.get("/categories",getAllCategories);
router.post("/delete/:id",isloggedIn, isAdmin, deleteProduct);
router.post("/all", getAllProducts);
router.post("/category/:id", getProductsByCategory);
router.get("/:id",getProductById);


module.exports = router;
