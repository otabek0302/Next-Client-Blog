const asyncHandler = require('express-async-handler')
const { Router } = require('express')
const router = Router()

const Post = require('../model/Post')

router.post('/add', async (req, res) => {
  try {
    const { text, title, imgUrl } = req.body

    const post = await Post({
      title,
      text,
      imgUrl
    })

    await post.save()
    res.json(post)
  } catch (error) {
    console.log(error)
  }
})

// Get all Post
router.get(
  '/',
  asyncHandler(async (req, res) => {
    try {
      const posts = await Post.find()
      res.status(200).json(posts)
    } catch (error) {
      console.error(error)
      res.status(500).json({ message: 'Internal server error' })
    }
  })
)

// Get Single Post
router.get('/:id', asyncHandler(async (req,res, next) => {
  try {
    let post = await Post.findById(req.params.id)
    if (!post) {
      return ('Product is not found with this id', 404)
    }
    res.status(200).json({
      success: true,
      post
    })
  } catch (error) {
      console.log(error);
  }
  })
)
// Delete Post
router.delete('/:id', asyncHandler(async (req, res, next) => {
  try {
    const post = await Post.findByIdAndDelete(req.params.id);
    if (!post) {
      return res.status(404).json({
        success: false,
        message: 'Post not found'
      });
    }
    res.status(200).json({
      success: true,
      message: 'Post deleted successfully',
      post
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: 'Server error'
    });
  }
}));


module.exports = router
