import React from 'react';
import { motion } from 'framer-motion';
import { Users, Heart, MessageCircle, Share2 } from 'lucide-react';
import StylePost from './StylePost';

export default function StyleFeed() {
  const posts = [
    {
      id: '1',
      user: {
        name: 'Emma S.',
        archetype: 'Fire',
        avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=100'
      },
      image: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&q=80&w=800',
      likes: 234,
      comments: 45,
      description: 'Mixing Fire and Water elements for a unique summer look!'
    }
    // More posts...
  ];

  return (
    <div className="space-y-6">
      {posts.map(post => (
        <StylePost key={post.id} post={post} />
      ))}
    </div>
  );
}