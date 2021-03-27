const router = require("express").Router();
const { Category, Product } = require("../../models");

// The `/api/categories` endpoint

router.get("/", async (req, res) => {
  try {
    const categoryData = await Category.findAll({
      include: [
        {
          model: Product,
        },
      ],
    });
    res.status(200).json(categoryData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/:id", async (req, res) => {
  try {
    const categoryData = await Category.findByPk(req.params.id, {
      include: [
        {
          model: Product,
        },
      ],
    });
    res.status(200).json(categoryData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post("/", async (req, res) => {
  try {
    const categoryData = await Category.create({
      category_name: req.body.category_name,
    });
    res.status(200).json(categoryData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.put("/:id", async (req, res) => {
  try {
    console.log(req.body.category_name);
    console.log(req.params.id);
    const categoryData = await Category.update(
      {
        category_name: req.body.category_name,
      },
      { where: { id: parseInt(req.params.id) } }
    );
    res.status(200).json(categoryData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const categoryData = await Category.destroy({
      where: {
        id: parseInt(req.params.id),
      },
    });
    if (!categoryData) {
      res
        .status(404)
        .json({ message: `Unknown category ID: ${req.params.id}` });
    }
    res.status(200).json(categoryData);
  } catch (err) {
    console.log("uh oh, error!");
    console.log(err);
    res.status(500).json(err);
  }
});

module.exports = router;
