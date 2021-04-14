const router = require("express").Router();
const { Tag, Product, ProductTag } = require("../../models");

// The `/api/tags` endpoint

router.get("/", (req, res) => {
  try {
    const tagData = Tag.findAll({
      include: [
        {
          model: Product,
        },
      ],
    });
    res.status(200).json(tagData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/:id", (req, res) => {
  try {
    const tagData = Tag.findByPk(req.params.id, {
      include: [
        {
          model: Product,
        },
      ],
    });
    res.status(200).json(tagData);
  } catch (err) {
    res.status(500).json(err);
  }
  // find a single tag by its `id`
  // be sure to include its associated Product data
});

router.post("/", (req, res) => {
  try {
    const tagData = Tag.create({
      tag_name: req.body.tag_name,
    });
    res.status(200).json(tagData);
  } catch (err) {
    res.status(500).json(err);
  }
  // create a new tag
});

router.put("/:id", (req, res) => {
  try {
    console.log(req.body.tag_name);
    console.log(req.params.id);
    const tagData = Tag.update(
      {
        tag_name: req.body.tag_name,
      },
      { where: { id: parseInt(req.params.id) } }
    );
    res.status(200).json(tagData);
  } catch (err) {
    res.status(500).json(err);
  }
  // update a tag's name by its `id` value
});

router.delete("/:id", (req, res) => {
  try {
    const tagData = Tag.destroy({
      where: {
        id: parseInt(req.params.id),
      },
    });
    if (!tagData) {
      res.status(404).json({ message: `Unknown tag ID: ${req.params.id}` });
    }
    res.status(200).json(tagData);
  } catch (err) {
    console.log("uh oh, error!");
    console.log(err);
    res.status(500).json(err);
  }
  // delete on tag by its `id` value
});

module.exports = router;
