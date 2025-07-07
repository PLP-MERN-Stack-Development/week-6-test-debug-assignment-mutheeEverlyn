// posts.test.js - Integration tests for posts API endpoints

const request = require('supertest');
const app = require('../../index'); 
const Post = require('../../models/Post');

describe('Posts API', () => {
  beforeEach(async () => {
    await Post.deleteMany({}); // Clear the database before each test
  });

  it('should create a new post', async () => {
    const newPost = {
      title: 'Test Post',
      content: 'This is a test post content.',
      author: 'John Doe',
    };
    const res = await request(app).post('/api/posts').send(newPost);
    expect(res.statusCode).toEqual(200);
    expect(res.body.title).toEqual(newPost.title);
    expect(res.body.content).toEqual(newPost.content);
  });

  it('should fetch all posts', async () => {
    await Post.create({ title: 'Post 1', content: 'Content 1' });
    await Post.create({ title: 'Post 2', content: 'Content 2' });
    const res = await request(app).get('/api/posts');
    expect(res.statusCode).toEqual(200);
    expect(res.body.length).toEqual(2);
    expect(res.body[0].title).toEqual('Post 1');
  });

  it('should fetch a single post by ID', async () => {
    const post = await Post.create({ title: 'Single Post', content: 'Single Content' });
    const res = await request(app).get(`/api/posts/${post._id}`);
    expect(res.statusCode).toEqual(200);
    expect(res.body.title).toEqual('Single Post');
  });

  it('should update a post by ID', async () => {
    const post = await Post.create({ title: 'Post to Update', content: 'Original Content' });
    const updatedContent = { title: 'Updated Post', content: 'Content has been updated' };
    const res = await request(app).put(`/api/posts/${post._id}`).send(updatedContent);
    expect(res.statusCode).toEqual(200);
    expect(res.body.title).toEqual('Updated Post');
    expect(res.body.content).toEqual('Content has been updated');
  });

  it('should delete a post by ID', async () => {
    const post = await Post.create({ title: 'Post to Delete', content: 'Delete Content' });
    const res = await request(app).delete(`/api/posts/${post._id}`);
    expect(res.statusCode).toEqual(200);
    expect(res.body.msg).toEqual('Post removed');

    const fetchDeleted = await request(app).get(`/api/posts/${post._id}`);
    expect(fetchDeleted.statusCode).toEqual(404);
  });
}); 