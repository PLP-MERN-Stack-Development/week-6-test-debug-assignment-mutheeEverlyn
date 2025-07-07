import React from 'react';
import { render, screen, waitFor, act } from '@testing-library/react';
import '@testing-library/jest-dom';
import PostsList from '../../components/PostsList';

describe('PostsList Integration', () => {
  const MOCKED_API_URL = 'http://localhost:5001/api/posts';
  let originalFetch;

  beforeAll(() => {
    originalFetch = global.fetch;
  });

  beforeEach(() => {
    global.fetch = jest.fn(); // Reset fetch mock for each test
  });

  afterEach(() => {
    global.fetch = originalFetch;
  });

  it('should display posts after fetching successfully', async () => {
    global.fetch.mockResolvedValueOnce({
      ok: true,
      json: () => Promise.resolve([
        { _id: '1', title: 'Test Post 1', content: 'Content 1', author: 'Author 1' },
        { _id: '2', title: 'Test Post 2', content: 'Content 2', author: 'Author 2' },
      ]),
    });

    render(<PostsList />);

    // Wait for posts to appear, instead of checking for loading and then content separately
    await screen.findByText('Test Post 1');

    expect(global.fetch).toHaveBeenCalledWith(MOCKED_API_URL);
    expect(screen.getByText('Test Post 1')).toBeInTheDocument();
    expect(screen.getByText('Content 1')).toBeInTheDocument();
    expect(screen.getByText(/by: author 1/i)).toBeInTheDocument();
    expect(screen.getByText('Test Post 2')).toBeInTheDocument();
    expect(screen.getByText('Content 2')).toBeInTheDocument();
    expect(screen.getByText(/by: author 2/i)).toBeInTheDocument();
  });

  it('should display error message on fetch failure', async () => {
    global.fetch.mockResolvedValueOnce({
      ok: false,
      status: 500,
      json: () => Promise.resolve({ message: 'API is down' }),
    });

    render(<PostsList />);

    // Wait for error message to appear
    await screen.findByText(/error: http error! status: 500/i);

    expect(global.fetch).toHaveBeenCalledWith(MOCKED_API_URL);
    expect(screen.getByText(/error: http error! status: 500/i)).toBeInTheDocument();
  });

  it('should display no posts available message when no posts are returned', async () => {
    global.fetch.mockResolvedValueOnce({
      ok: true,
      json: () => Promise.resolve([]),
    });

    render(<PostsList />);

    // Wait for no posts message to appear
    await screen.findByText(/no posts available./i);

    expect(global.fetch).toHaveBeenCalledWith(MOCKED_API_URL);
    expect(screen.getByText(/no posts available./i)).toBeInTheDocument();
  });
}); 