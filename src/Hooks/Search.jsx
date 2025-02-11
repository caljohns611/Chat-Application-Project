import React, { useState } from 'react';

const Search = ({ posts, albums, todos }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredPosts = posts.filter((post) =>
    post.title.toLowerCase().includes(searchTerm.toLowerCase())
  );
  const filteredAlbums = albums.filter((album) =>
    album.title.toLowerCase().includes(searchTerm.toLowerCase())
  );
  const filteredTodos = todos.filter((todo) =>
    todo.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <input
        type="text"
        placeholder="Search"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <div>
        <h3>Posts</h3>
        {filteredPosts.map((post) => (
          <p key={post.id}>{post.title}</p>
        ))}
      </div>
      <div>
        <h3>Albums</h3>
        {filteredAlbums.map((album) => (
          <p key={album.id}>{album.title}</p>
        ))}
      </div>
      <div>
        <h3>Todos</h3>
        {filteredTodos.map((todo) => (
          <p key={todo.id}>{todo.title}</p>
        ))}
      </div>
    </div>
  );
};

export default Search;