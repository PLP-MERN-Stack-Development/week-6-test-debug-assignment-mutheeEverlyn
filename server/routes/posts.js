const express = require('express');
const router = express.Router();
const Post = require('../models/Post');

// @route   GET api/posts
// @desc    Get all posts
// @access  Public
router.get('/', async (req, res) => {
  try {
    const posts = await Post.find();
    res.json(posts);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// @route   GET api/posts/:id
// @desc    Get post by ID
// @access  Public
router.get('/:id', async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    if (!post) {
      return res.status(404).json({ msg: 'Post not found' });
    }
    res.json(post);
  } catch (err) {
    console.error(err.message);
    if (err.kind === 'ObjectId') {
      return res.status(404).json({ msg: 'Post not found' });
    }
    res.status(500).send('Server Error');
  }
});

// @route   POST api/posts
// @desc    Create a post
// @access  Public
router.post('/', async (req, res) => {
  const { title, content, author } = req.body;
  try {
    const newPost = new Post({
      title,
      content,
      author,
    });
    const post = await newPost.save();
    res.json(post);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// @route   PUT api/posts/:id
// @desc    Update a post
// @access  Public
router.put('/:id', async (req, res) => {
  const { title, content, author } = req.body;
  try {
    let post = await Post.findById(req.params.id);
    if (!post) {
      return res.status(404).json({ msg: 'Post not found' });
    }

    post.title = title || post.title;
    post.content = content || post.content;
    post.author = author || post.author;

    await post.save();
    res.json(post);
  } catch (err) {
    console.error(err.message);
    if (err.kind === 'ObjectId') {
      return res.status(404).json({ msg: 'Post not found' });
    }
    res.status(500).send('Server Error');
  }
});

// @route   DELETE api/posts/:id
// @desc    Delete a post
// @access  Public
router.delete('/:id', async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    if (!post) {
      return res.status(404).json({ msg: 'Post not found' });
    }

    await Post.deleteOne({ _id: req.params.id });
    res.json({ msg: 'Post removed' });
  } catch (err) {
    console.error(err.message);
    if (err.kind === 'ObjectId') {
      return res.status(404).json({ msg: 'Post not found' });
    }
    res.status(500).send('Server Error');
  }
});

// @route   DELETE api/posts/clear
// @desc    Clear all posts (for testing purposes)
// @access  Public
router.delete('/clear', async (req, res) => {
  if (process.env.NODE_ENV === 'test') {
    try {
      await Post.deleteMany({});
      res.json({ msg: 'All posts cleared' });
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server Error');
    }
  } else {
    res.status(403).json({ msg: 'Forbidden: This endpoint is only available in test environment' });
  }
});

module.exports = router; 